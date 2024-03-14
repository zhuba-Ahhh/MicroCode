import { ProColumns } from '@ant-design/pro-table';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

export const INPUTS = {
  SetDataSource: 'value',
  Submit: 'submit',
  SetColConfig: 'colsCfg',
  SetOpConfig: 'operationConfig',

  AddRow: 'addRow',
  DelRow: 'delRow',
  MoveDown: 'moveDown',
  MoveUp: 'moveUp',

  GetRowSelect: 'rowSelect',
  SetRowSelect: 'setRowSelect',

  SlotRowValue: 'slotRowValue',
  SlotColValue: 'slotColValue',
  RowIndex: 'rowIndex',

  DynamicColumns: 'dynamicColumns'
};

export const OUTPUTS = {
  Submit: 'submit',
  GetRowSelect: 'rowSelect',

  SaveCallback: 'saveCallback',
  DelCallback: 'delCallback',

  ChangeEvent: 'changeEvent',

  EditTableData: 'editTableData'
};

export enum TypeEnum {
  Text = 'text',
  Number = 'digit',
  Select = 'select',
  Switch = 'switch',
  Date = 'date',
  DateRange = 'dateRange',
  Option = 'option',
  Slot = 'slot',
  TreeSelect = 'treeSelect',
  Checkbox = 'checkbox',
  Cascader = 'cascader'
}

export const TypeEnumMap = {
  [TypeEnum.Text]: '输入框',
  [TypeEnum.Number]: '数字输入框',
  [TypeEnum.Select]: '下拉框',
  [TypeEnum.TreeSelect]: '树选择',
  [TypeEnum.Switch]: '开关',
  [TypeEnum.Date]: '日期',
  [TypeEnum.Slot]: '自定义插槽',
  [TypeEnum.DateRange]: '日期范围选择',
  [TypeEnum.Checkbox]: '多选框',
  [TypeEnum.Cascader]: '级联选择'
};

export const ColumnsSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      title: {
        type: 'string'
      },
      dataIndex: {
        type: 'string'
      },
      valueType: {
        type: 'enum',
        items: [
          {
            type: 'string',
            value: 'text',
          },
          {
            type: 'string',
            value: 'digit',
          },
          {
            type: 'string',
            value: 'select',
          },
          {
            type: 'string',
            value: 'treeSelect',
          },
          {
            type: 'string',
            value: 'cascader',
          },
          {
            type: 'string',
            value: 'switch',
          },
          {
            type: 'string',
            value: 'checkbox',
          },
          {
            type: 'string',
            value: 'date',
          },
          {
            type: 'string',
            value: 'dateRange',
          },
        ],
      },
      width: {
        type: 'number'
      },
      align: {
        type: 'enum',
        items: [
          {
            type: 'string',
            value: 'left',
          },
          {
            type: 'string',
            value: 'center',
          },
          {
            type: 'string',
            value: 'right',
          },
        ],
      },
      required: {
        type: 'string'
      },
      readonly: {
        type: 'boolean'
      },
      disableScript: {
        type: 'string'
      },
      ellipsis: {
        type: 'boolean'
      },
      useTooltip: {
        type: 'boolean'
      },
      tooltip: {
        type: 'string'
      },
      // valueEnum: {
      //   type: 'array',
      //   items: {
      //     type: 'object',
      //     properties: {
      //       label: {
      //         type: 'string'
      //       },
      //       value: {
      //         type: 'string'
      //       },
      //     }
      //   },
      // },
      // fieldProps: {
      //   type: 'object',
      // },
    }
  }
};

export type ColumnItem = ProColumns<any> & {
  readonly?: boolean;
  disableScript?: string;
  showAddChildBtn?: boolean;
  required?: boolean;
  openText?: string;
  closeText?: string;
  defaultChecked?: boolean;
  useTooltip?: boolean;
  showTime?: boolean;
  slotId?: string;
  slotEditId?: string;

  multiple?: boolean;
  showSearch?: boolean;

  _key?: string;

  dataSchema?: any;
  // 省略展示
  ellipsis?: any;

  optionFilterProp?: string; // 搜索规则 默认 value
};
export interface Data {
  headerTitle: string;
  columns: ColumnItem[];
  size?: SizeType;
  hasLoading: boolean;
  creatorButtonText: string;

  hideAllOperation?: boolean;
  hideAddBtn?: boolean;
  hideModifyBtn?: boolean;
  hideDeleteBtn?: boolean;
  hideAllAddChildBtn?: boolean;
  addChildBtnLabel?: string;
  addChildBtnScript?: string;

  hideSaveBtn?: boolean;
  hideDeleteBtnInEdit?: boolean;
  hideCancelBtn?: boolean;
  hideNewBtn?: boolean;

  useAutoSave?: boolean;
  /**@description 实时保存防抖时间 1.0.24 */
  debounceAutoSaveTime?: number;
  useOperationDynamic?: boolean;
  readonlyWhenHasChildren?: boolean;

  useRowSelection?: boolean;
  useDelDataSource?: boolean;
  useMoveDataSource?: boolean;

  useSetSelectedRowKeys?: boolean;
  selectionRowKey?: string;

  submitIOs?: any[];

  useSaveCallback?: boolean;
  useDelCallback?: boolean;

  useChangeEvent?: boolean;

  clickChangeToedit?: boolean;


  fixedHeader: boolean; // 固定表头
  scroll: Scroll; // 滚动
  fixedHeight?: boolean | undefined;

  editType: "single" | "multiple", // 可编辑表格的类型，单行编辑或者多行编辑

  saveText: string; // 保存按钮文案
  deleteText: string; // 删除按钮文案
  cancelText: string; // 取消按钮文案
  editText: string; // 编辑按钮文案

  // 空数据配置
  isEmpty: boolean;
  image: string;
  description: string;

  bordered: boolean; // 边框

  // 是否支持动态表头
  dynamicColumns: boolean
}

interface Scroll {
  y: number | string | undefined;
}

export type DataSourceType = {
  _key: React.Key;
  _add?: boolean;
  [key: string]: any;
};

export const defaultData: DataSourceType[] = [
  {
    _key: 624748504,
    title: '活动名称一',
    desc: '这个活动真好玩',
    state: 'open',
    createdAt: '2020-05-26T09:42:56Z',
    update_at: '2020-05-26T09:42:56Z'
  }
];

export const getDefaultColumns: () => ProColumns<any>[] = () => [
  {
    title: '活动名称',
    dataIndex: 'title',
    valueType: 'text',
    align: 'left',
    width: 200,
    fixed: undefined,
    key: 'title',
    fieldProps: {}
  },
  {
    title: '描述',
    dataIndex: 'desc',
    valueType: 'text',
    align: 'left',
    width: 200,
    fixed: undefined,
    key: 'desc',
    fieldProps: {}
  },
  {
    title: '活动时间',
    dataIndex: 'createdAt',
    valueType: 'date',
    align: 'left',
    width: 200,
    fixed: undefined,
    key: 'createdAt',
    fieldProps: {}
  },
  {
    title: '操作',
    valueType: 'option',
    align: 'left',
    fixed: undefined,
    width: 200,
    fieldProps: {}
  }
];

export const getColumnItem = (data: Data, focusArea, datasetKey = 'tableThIdx'): ColumnItem => {
  const key = focusArea.dataset[datasetKey];
  return data.columns[key] || {};
};
