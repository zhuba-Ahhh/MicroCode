import { ColumnItem, INPUTS, OUTPUTS, TypeEnum } from './constants';

export function getColumnsDataSchema(columns: ColumnItem[]) {
  const dataSchema = {
    _key: {
      type: 'string',
      title: '_key',
    }
  };
  columns.forEach((item) => {
    if (item.valueType !== TypeEnum.Option) {
      dataSchema[`${item.dataIndex}`] = {
        type: item?.dataSchema?.type || 'string',
        title: item.title
      };
    }
  });
  return dataSchema;
}

// 设置输入数据schema
function setDataSourceSchema({ dataSchema, input }) {
  const ioPin = input.get(INPUTS.SetDataSource);
  if (ioPin) {
    ioPin.setSchema({
      title: '表格数据',
      type: 'array',
      items: {
        type: 'object',
        properties: dataSchema
      }
    });
  }
}
// 设置输出数据schema
function setDataSourceSubmitSchema({ dataSchema, output }) {
  const ioPin = output.get(OUTPUTS.Submit);
  if (ioPin) {
    ioPin.setSchema({
      title: '表格数据',
      type: 'array',
      items: {
        type: 'object',
        properties: dataSchema
      }
    });
  }
}
// 设置勾选输出数据schema
function setRowSelectionSchema({ dataSchema, output }) {
  const ioPin = output.get(OUTPUTS.GetRowSelect);
  if (ioPin) {
    ioPin.setSchema({
      title: '勾选数据',
      type: 'object',
      properties: {
        selectedRowKeys: {
          title: '勾选数据',
          type: 'array',
          items: {
            type: 'string'
          }
        },
        selectedRows: {
          title: '勾选行完整数据',
          type: 'array',
          items: {
            type: 'object',
            properties: dataSchema
          }
        }
      }
    });
  }
}

function getColumnsDataSchemaForConfig(columns: ColumnItem[]) {
  const dataSchema = {};
  columns.forEach((item) => {
    if (item.valueType === TypeEnum.Select) {
      dataSchema[`${item.dataIndex}`] = {
        type: 'object',
        properties: {
          options: {
            title: '下拉数据',
            type: 'array',
            items: {
              label: {
                title: '键名',
                type: 'string'
              },
              value: {
                title: '键值',
                type: 'any'
              }
            }
          }
        }
      };
    }
  });
  return dataSchema;
}
// 设置列配置scheme
function setColConfigSchema({ data, input }) {
  const ioPin = input.get(INPUTS.SetColConfig);
  if (ioPin) {
    ioPin.setSchema({
      title: '配置数据',
      type: 'object',
      properties: getColumnsDataSchemaForConfig(data.columns)
    });
  }
}

// 设置删除/新增schema
function setAddOrDelRowSchema({ dataSchema, input }) {
  const ioPin = input.get(INPUTS.AddRow);
  if (ioPin) {
    ioPin.setSchema({
      title: '行数据',
      type: 'object',
      properties: dataSchema
    });
  }

  const ioPin2 = input.get(INPUTS.DelRow);
  if (ioPin2) {
    ioPin2.setSchema({
      title: '行数据',
      type: 'object',
      properties: dataSchema
    });
  }

  const ioPin3 = input.get(INPUTS.MoveDown);
  if (ioPin3) {
    ioPin3.setSchema({
      title: '行数据',
      type: 'object',
      properties: dataSchema
    });
  }

  const ioPin4 = input.get(INPUTS.MoveUp);
  if (ioPin4) {
    ioPin4.setSchema({
      title: '行数据',
      type: 'object',
      properties: dataSchema
    });
  }
}

// 设置插槽行数据schema
function setSlotRowValueSchema({ dataSchema, slot, data}) {
  data.columns.forEach(column => {
    if (column?.valueType === 'slot' && column?.slotId) {
      slot?.get(column?.slotId)?.inputs?.get(INPUTS.SlotRowValue)?.setSchema({
        type: 'object',
        properties: dataSchema
      });
    }
    if (column?.valueType === 'slot' && column?.slotEditId) {
      slot?.get(column?.slotEditId)?.inputs?.get(INPUTS.SlotRowValue)?.setSchema({
        type: 'object',
        properties: dataSchema
      });
      slot
      ?.get(column?.slotEditId)
      ?.outputs?.get(OUTPUTS.EditTableData)
      ?.setSchema({
        type: 'object',
        properties: dataSchema
      });
    }
  });
}

// 设置插槽列数据schema
function setSlotColValueSchema({ slot, data}) {
  data.columns.forEach(column => {
    if (column?.valueType === 'slot' && column?.slotId) {
      slot?.get(column?.slotId)?.inputs?.get(INPUTS.SlotColValue)?.setSchema({
        title: column.dataIndex,
        type: column?.dataSchema?.type || 'string'
      });
    }
    if (column?.valueType === 'slot' && column?.slotEditId) {
      slot?.get(column?.slotEditId)?.inputs?.get(INPUTS.SlotColValue)?.setSchema({
        title: column.dataIndex,
        type: column?.dataSchema?.type || 'string'
      });
    }
  });
}

// 设置插槽行序号数据schema
function setSlotRowIndexSchema({ slot, data}) {
  data.columns.forEach(column => {
    if (column?.valueType === 'slot' && column?.slotId) {
      slot?.get(column?.slotId)?.inputs?.get(INPUTS.RowIndex)?.setSchema({
        title: column.dataIndex,
        type: 'number'
      });
    }
    if (column?.valueType === 'slot' && column?.slotEditId) {
      slot?.get(column?.slotEditId)?.inputs?.get(INPUTS.RowIndex)?.setSchema({
        title: column.dataIndex,
        type: 'number'
      });
    }
  });
}

// 操作scheme
export function getOptionSchema() {
  const properties = {};
  const options = [
    { key: 'useAutoSave', title: '自动保存' },
    { key: 'hideAllOperation', title: '隐藏所有操作' },
    { key: 'hideAddBtn', title: '隐藏新增按钮' },
    { key: 'hideDeleteBtn', title: '只读态-隐藏删除按钮' },
    { key: 'hideNewBtn', title: '只读态-隐藏新增按钮' },
    { key: 'hideDeleteBtnInEdit', title: '编辑态-隐藏删除啊扭' },
    { key: 'hideSaveBtn', title: '编辑态-隐藏保存按扭' },
    { key: 'hideCancelBtn', title: '编辑态-隐藏取消按扭' },
    { key: 'clickChangeToedit', title: '点击切换编辑态'},
  ];
  options.forEach(({ key, title }) => {
    properties[key] = { title, type: 'boolean' };
  });
  return {
    title: '操作配置',
    type: 'object',
    properties
  };
}

export function setDataSchema({ data, output, input, slot = {} }) {
  const dataSchema = getColumnsDataSchema(data.columns);
  setDataSourceSchema({ dataSchema, input });
  setDataSourceSubmitSchema({ dataSchema, output });
  setRowSelectionSchema({ dataSchema, output });
  setColConfigSchema({ data, input });
  setAddOrDelRowSchema({ dataSchema, input });
  setSlotRowValueSchema({ dataSchema, slot, data });
  setSlotColValueSchema({ slot, data });
  setSlotRowIndexSchema({ slot, data });
}

export const Schemas = {
  Void: {
    type: 'any'
  },
  SetRowSelect: {
    type: 'array',
    items: {
      type: 'string'
    }
  },
  SetOpConfig: getOptionSchema(),
  AddRow: (data) => ({
    title: '行数据',
    type: 'object',
    properties: getColumnsDataSchema(data.columns)
  }),
  DelRow: (data) => ({
    title: '行数据',
    type: 'object',
    properties: getColumnsDataSchema(data.columns)
  }),
  MoveRow: (data) => ({
    title: '行数据',
    type: 'object',
    properties: getColumnsDataSchema(data.columns)
  }),
  GetRowSelect: (data) => ({
    title: '勾选数据',
    type: 'object',
    properties: {
      selectedRowKeys: {
        title: '勾选数据',
        type: 'array',
        items: {
          type: 'string'
        }
      },
      selectedRows: {
        title: '勾选行完整数据',
        type: 'array',
        items: {
          type: 'object',
          properties: getColumnsDataSchema(data.columns)
        }
      }
    }
  }),
  ChangeEvent: (data) => ({
    title: '表格数据',
    type: 'array',
    items: {
      type: 'object',
      properties: getColumnsDataSchema(data.columns)
    }
  })
};
