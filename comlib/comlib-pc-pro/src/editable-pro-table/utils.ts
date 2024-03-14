import { ProColumns } from '@ant-design/pro-table';
import moment from 'moment';
import { runScript } from '../utils/runExpCodeScript';
import { uuid } from '../utils';
import { ColumnItem, Data, DataSourceType, TypeEnum } from './constants';

export const getThIdx = (focusArea) => {
  return focusArea?.dataset?.tableThIdx;
};
export function setCol(data: Data, focusArea, key, value) {
  const idx = getThIdx(focusArea);
  const item = data.columns[idx];
  item[key] = value;
  data.columns[idx] = { ...item };
}
export function getCol(data: Data, focusArea, key) {
  const idx = getThIdx(focusArea);
  const item = data.columns[idx];
  return item[key];
}
export function checkType(data: Data, focusArea, includes?: any[], excludes?: any[]) {
  const idx = getThIdx(focusArea);
  let isAllow = true;
  const item = data.columns[idx];
  if (includes && includes.length) {
    isAllow = isAllow && includes.includes(item?.valueType);
  }
  if (excludes && excludes.length) {
    isAllow = isAllow && !excludes.includes(item?.valueType);
  }
  return isAllow;
}

// 根据key删除数据
export const deleteItemByKey = (
  ds: DataSourceType[],
  _key: React.Key | undefined,
  rowKey: string = '_key'
): DataSourceType[] => {
  return ds
    .map((item) => {
      if (item && item[rowKey] !== _key) {
        if (item.children) {
          const newChildren = deleteItemByKey(item.children, _key);
          return {
            ...item,
            children: newChildren.length > 0 ? newChildren : undefined
          };
        }
        return item;
      }
      return null;
    })
    .filter(Boolean) as DataSourceType[];
};
// 根据key添加子项
export const addChildByKey = (
  ds: DataSourceType[],
  _key: React.Key | undefined,
  rowKey: string = '_key'
): DataSourceType[] => {
  return ds
    .map((item) => {
      if (item && item[rowKey] !== _key) {
        if (item.children) {
          const newChildren = addChildByKey(item.children, _key);
          return {
            ...item,
            children: newChildren
          };
        }
        return item;
      } else {
        if (!Array.isArray(item.children)) {
          item.children = [];
        }
        item.children.push({ _key: uuid(), [rowKey]: uuid(), _add: true });
        return item;
      }
    })
    .filter(Boolean) as DataSourceType[];
};
// 格式化数据
export const formatDataSource = (ds: DataSourceType[], columns: ColumnItem[]) => {
  const dateDataIndex = columns
    .filter((item) => item.valueType === TypeEnum.Date || item.valueType === TypeEnum.DateRange)
    .map((item) => ({
      key: item.dataIndex as string,
      format: item.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'
    }));
  if (Array.isArray(ds)) {
    ds.forEach((item) => {
      item._key = uuid();
      dateDataIndex.forEach(({ key, format }) => {
        if (item[key]) {
          item[key] = Array.isArray(item[key])
            ? item[key].map((str) => moment(str, format))
            : moment(item[key], format);
        }
      });
      if (item.children) {
        formatDataSource(item.children, columns);
      }
    });
  }
  return ds;
};
// 获取数据下的所有key
export const getAllDsKey = (ds: DataSourceType[], rowKey: string = '_key'): string[] => {
  const keys: Array<any> = [];
  if (Array.isArray(ds)) {
    ds.forEach((item) => {
      if (item && item[rowKey] !== undefined) {
        keys.push(item[rowKey]);
      }
      if (item.children) {
        keys.push(...getAllDsKey(item.children, rowKey));
      }
    });
  }
  return keys;
};
// 格式化提交输出的数据
export const formatSubmitDataSource = (ds: DataSourceType[]) => {
  if (!Array.isArray(ds)) {
    return ds;
  }
  return ds.map((item) => {
    const { _key, _add, children, ...res } = item;
    if (children) {
      return { ...res, children: formatSubmitDataSource(children) };
    }
    return { ...res };
  });
};

const getColumnConfig = (colsCfg: { [x: string]: any; }, item: ProColumns<any, any>): ProColumns<any> => {
  const colCfg = (colsCfg ? colsCfg[item.key as React.Key] : {}) || {};
  (item.fieldProps as any) = { ...item.fieldProps, ...colCfg};
  if (item.valueType === TypeEnum.TreeSelect && colCfg.options) {
    (item.fieldProps as any).treeData = colCfg.options;
  }
  return item;
};
// 格式化Column
export const formatColumn = (data: Data, env: Env, colsCfg: any): ColumnItem[] => {
  return data.columns
    .map((colItem, idx) => {
      const {
        valueEnum,
        required,
        showAddChildBtn,
        closeText,
        openText,
        defaultChecked,
        readonly,
        tooltip,
        useTooltip,
        ...item
      } = colItem;
      if (env.runtime) {
        // Todo hack 方法
        item.key = item.dataIndex as React.Key;
      }
      // 开启 可展开行只读
      if (data.readonlyWhenHasChildren) {
        item.editable = (_: any, record: DataSourceType) =>
          Array.isArray(record?.children) ? false : true;
      }
      // TODO 通过数据内容表示 只读/编辑/删除 状态
      // item.editable = (_: any, record: DataSourceType) =>
      //   record?._readonly === true ? false : true;
      if (readonly) {
        //新增项 不支持只读
        item.editable = (_: any, record: DataSourceType) => (record?._add ? true : false);
      }
      item.fieldProps = {
        ...item.fieldProps
      };
      item.formItemProps = {
        ...item.formItemProps
      };
      if (required) {
        item.formItemProps.rules = [
          {
            required: true,
            message: '此项是必填项'
          }
        ];
      }
      if (useTooltip && tooltip) {
        (item as any).tooltip = tooltip;
      }

      switch (item.valueType) {
        case TypeEnum.Date:
          (item.fieldProps as any).showTime = item.showTime;
          break;
        case TypeEnum.Option:
          if (data.hideAllOperation) {
            return null;
          }
          // Todo hack 方法
          if (env.edit) {
            item.key = [!data.hideModifyBtn && 'editable', !data.hideDeleteBtn && 'delete', !data.hideNewBtn && 'add']
              .filter((item) => item)
              .join();
          }
          break;
        case TypeEnum.Checkbox:
        case TypeEnum.Select:
          if (valueEnum) {
            (item.fieldProps as any).options = valueEnum;
          }
          break;
        case TypeEnum.Switch:
          if (item.formItemProps.initialValue === undefined) {
            item.formItemProps.initialValue = defaultChecked || false;
          }
          if ((item.fieldProps as any).defaultChecked !== undefined) {
            (item.fieldProps as any).defaultChecked = defaultChecked;
          }
          (item.fieldProps as any).checkedChildren = openText === undefined ? '打开' : openText;
          (item.fieldProps as any).unCheckedChildren = closeText === undefined ? '关闭' : closeText;
          break;
        default:
          break;
      }
      item.onHeaderCell = (): any => {
        return {
          'data-table-th-idx': idx
        };
      };
      item.onCell = (): any => {
        return {
          'data-table-column-id': idx
        };
      };
      return getColumnConfig(colsCfg, item);
    })
    .filter((item) => !!item);
};
// 根据data生成提示项
export const getSuggestions = (data: Data) => {
  const res: Array<{ label: any; insertText: string; detail: string }> = [];
  data.columns.forEach((col) => {
    if (col.valueType !== TypeEnum.Option && !res.find((item) => col.dataIndex === item.label)) {
      res.push({
        label: col.dataIndex,
        insertText: `{${col.dataIndex}}` + ' === ',
        detail: `当前行${col.dataIndex}值`
      });
    }
  });
  return res;
};
export const run = (script: string) => {
  return runScript(script, {});
};

export const getFilterSelectorWithId = (id: string) => `:not(#${id} *[data-isslot="1"] *)`;
