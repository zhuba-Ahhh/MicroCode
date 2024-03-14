import React, { useRef, useLayoutEffect, useCallback, useState } from 'react';
import { DatePicker, Dropdown, Form, Input, Menu, Select } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import { FieldDBType, SQLOperator, SQLWhereJoiner } from './constant';
import { getFieldConditionAry } from './util';
import { uuid } from '../utils';

import styles from './styles.less';

export interface Condition {
  id: string;
  /** 字段 ID */
  fieldId?: string;
  /** 字段名 */
  fieldName: string;
  /** 操作符 */
  operator?: string;
  /** 条件语句值 */
  value?: string;
  conditions?: Condition[];
  whereJoiner?: SQLWhereJoiner;
}

interface Field {
  name: string;
  id: string;
  type: string;
}

const BaseCondition = {
  id: uuid(),
  fieldId: String(Date.now()),
  fieldName: '条件组',
  whereJoiner: SQLWhereJoiner.AND,
  conditions: []
};
const getEmptyCondition = () => {
  return {
    id: uuid(),
    fieldName: '',
    fieldId: '',
    operator: SQLOperator.EQUAL,
    value: ''
  };
};
export default function (props: RuntimeParams<Record<string, unknown>>) {
  const { env, inputs } = props;
  const [form] = Form.useForm();
  const [logicConditions, setLogicConditions] = useState<Condition>(BaseCondition);
  const [fieldList, setFieldList] = useState<Field[]>([]);
  const logicConditionsRef = useRef<Condition>({ ...BaseCondition });

  useLayoutEffect(() => {
    inputs['submit']((val, outputRels) => {
      form.validateFields().then((v) => {
        outputRels['onFinishForRels'](logicConditionsRef.current);
      });
    });

    inputs['setLogicConditions']((val) => {
      setLogicConditions(val);
      logicConditionsRef.current = val;
    });

    inputs['setFields']((val) => {
      setFieldList(val);
    });
  }, []);

  const onTriggerChange = useCallback(() => {
    setLogicConditions({ ...logicConditionsRef.current });
  }, []);

  const onEmptyAdd = useCallback(() => {
    if (env.edit) {
      return;
    }
    if (logicConditionsRef.current) {
      logicConditionsRef.current.conditions = [{ ...getEmptyCondition() }];
    } else {
      logicConditionsRef.current = {
        ...BaseCondition,
        conditions: [{ ...getEmptyCondition() }]
      };
    }

    onTriggerChange();
  }, []);

  const removeCondition = useCallback((params) => {
    const { index, parentConditionChain } = params;
    const parentCondition = parentConditionChain[parentConditionChain.length - 1];
    if (parentCondition) {
      parentCondition.conditions = parentCondition.conditions?.filter((_, idx) => idx !== index);

      if (!parentCondition.conditions.length) {
        const secondParent = parentConditionChain[parentConditionChain.length - 2];

        if (secondParent) {
          secondParent.conditions = secondParent.conditions?.filter(
            (con) => con.fieldId !== parentCondition.fieldId
          );
        }
      }
    }

    onTriggerChange();
  }, []);

  const addCondition = useCallback((params) => {
    const { parentConditionChain, group } = params;
    const parentCondition = parentConditionChain[parentConditionChain.length - 1];

    if (parentCondition) {
      parentCondition.conditions.push(
        group
          ? {
              ...BaseCondition,
              fieldId: String(Date.now()),
              conditions: [{ ...getEmptyCondition() }]
            }
          : { ...getEmptyCondition() }
      );
    }

    onTriggerChange();
  }, []);

  const getFormItem = useCallback(
    (operator, condition) => {
      if (operator?.notNeedValue) {
        return <span style={{ width: '130px', height: '24px' }} />;
      } else if ([SQLOperator.IN, SQLOperator.NOT_IN].includes(operator?.value)) {
        return (
          <Select
            value={condition.value}
            placeholder="请输入内容"
            mode="tags"
            onChange={(value) => {
              condition.value = value;

              onTriggerChange();
            }}
          />
        );
      } else {
        let node = (
          <Input
            placeholder="请输入内容"
            className={styles.valueInput}
            value={condition.value}
            onChange={(e) => {
              condition.value = e.target.value;
              onTriggerChange();
            }}
          />
        );
        const field = fieldList.find((f) => f.id === condition.fieldId);

        if (field?.type === FieldDBType.DATE) {
          node = (
            <DatePicker
              showTime
              value={moment(condition.value)}
              placeholder="请选择时间"
              onChange={(value) => {
                condition.value = value?.valueOf?.() || value;

                onTriggerChange();
              }}
            />
          );
        }

        return node;
      }
    },
    [fieldList]
  );

  const renderConditions = useCallback(
    (conditions: Condition[], parentConditionChain: Condition[], parentNames: string[]) => {
      return (
        conditions
          .map((condition, index) => {
            const originField = fieldList.find((f) => f.id === condition.fieldId);
            const operators = getFieldConditionAry(originField?.type || FieldDBType.STRING);
            const curOperator = operators.find((op) => op.value === condition.operator);

            return condition.conditions ? (
              <div key={condition.fieldId} className={styles.conditionGroup}>
                {renderConditions(
                  condition.conditions,
                  [...parentConditionChain, condition],
                  parentNames.length
                    ? [...parentNames, String(index), 'conditions']
                    : ['conditions']
                )}

                <div
                  className={styles.dividerLine}
                  style={{ marginLeft: 30 * parentConditionChain.length + 'px' }}
                >
                  <div
                    className={styles.whereJoiner}
                    onClick={() => {
                      condition.whereJoiner =
                        condition.whereJoiner === SQLWhereJoiner.AND
                          ? SQLWhereJoiner.OR
                          : SQLWhereJoiner.AND;
                      onTriggerChange();
                    }}
                  >
                    {condition.whereJoiner === SQLWhereJoiner.AND ? '且' : '或'}
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className={styles.condition}
                style={{ marginLeft: 30 * parentConditionChain.length + 'px' }}
              >
                <Form.Item
                  className={styles.fieldFormItem}
                  initialValue={condition.fieldId}
                  name={[...parentNames, index, 'fieldId']}
                >
                  <Select
                    value={condition.fieldId}
                    onChange={(value) => {
                      const curField = fieldList.find((f) => f.id === value);

                      if (curField) {
                        condition.fieldId = value;
                        condition.fieldName = curField.name;
                      }
                      onTriggerChange();
                    }}
                  >
                    <Select.Option key="" value="">
                      请选择字段
                    </Select.Option>
                    {fieldList.map((field) => {
                      return (
                        <Select.Option key={field.id} value={field.id}>
                          {field.name}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Form.Item
                  className={styles.operatorFormItem}
                  initialValue={condition.operator}
                  name={[...parentNames, index, 'operator']}
                >
                  <Select
                    value={condition.operator}
                    className={styles.operatorSelect}
                    onChange={(value) => {
                      condition.operator = value;
                      const curOperator = operators.find((op) => op.value === value);

                      if (curOperator?.notNeedValue) {
                        condition.value = '';
                      }

                      onTriggerChange();
                    }}
                  >
                    {operators.map((operator, idx) => {
                      return (
                        <Select.Option key={idx} value={operator.value}>
                          {operator.label}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Form.Item
                  className={styles.valueFormItem}
                  initialValue={
                    originField?.type === FieldDBType.DATE
                      ? moment(condition.value)
                      : condition.value
                  }
                >
                  {getFormItem(curOperator, condition)}
                </Form.Item>
                <Form.Item className={styles.operatorBox}>
                  {index ? (
                    <span className={`${styles.icon} ${styles.hidden}`}>
                      <PlusOutlined />
                    </span>
                  ) : (
                    <Dropdown
                      placement="bottomRight"
                      overlay={
                        <Menu>
                          <Menu.Item
                            key="condition"
                            onClick={() => addCondition({ parentConditionChain })}
                          >
                            条件
                          </Menu.Item>
                          <Menu.Item
                            key="group"
                            onClick={() => addCondition({ group: true, parentConditionChain })}
                          >
                            条件组
                          </Menu.Item>
                        </Menu>
                      }
                    >
                      <span className={styles.icon}>
                        <PlusOutlined />
                      </span>
                    </Dropdown>
                  )}
                  <span
                    className={styles.icon}
                    onClick={() => removeCondition({ index, parentConditionChain })}
                  >
                    <DeleteOutlined />
                  </span>
                </Form.Item>
              </div>
            );
          })
          .filter(Boolean) || []
      );
    },
    [fieldList]
  );

  return (
    <>
      {logicConditions?.conditions?.length ? (
        <Form form={form}>
          {renderConditions(logicConditionsRef.current ? [logicConditionsRef.current] : [], [], [])}
        </Form>
      ) : (
        <div className={styles.empty} onClick={onEmptyAdd}>
          暂无条件，点击
          <span className={styles.emptyAddIcon}>
            <PlusOutlined />
          </span>
          新增条件
        </div>
      )}
    </>
  );
}
