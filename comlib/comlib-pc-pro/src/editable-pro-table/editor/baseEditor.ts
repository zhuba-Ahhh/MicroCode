import type { ProColumns } from '@ant-design/pro-table';
import { uuid } from '../../utils';
import { ColumnsSchema, Data, INPUTS } from '../constants';
import { setDataSchema, getColumnsDataSchema } from '../schema';
import { emptyEditor } from './empty';

export default {
  title: '基础配置',
  items: [
    {
      title: '新增按钮文案',
      type: 'text',
      value: {
        get({ data }: EditorResult<Data>) {
          return data.creatorButtonText;
        },
        set({ data }: EditorResult<Data>, val: string) {
          data.creatorButtonText = val;
        }
      }
    },
    {
      title: '动态设置表头',
      type: 'Switch',
      description: '开启后，可以动态生成表格的各列，包括字段、标题、类型、宽度、数据源等。操作列除外。',
      value: {
        get({ data }: EditorResult<Data>) {
          return data.dynamicColumns;
        },
        set({ data, input }: EditorResult<Data>, val: boolean) {
          data.dynamicColumns = val;
          if (val) {
            input.add({
              id: INPUTS.DynamicColumns,
              title: '设置表头',
              schema: ColumnsSchema,
              desc: '设置表格各列，包括字段、标题、类型、宽度、数据源等'
            });
          } else {
            input.remove(INPUTS.DynamicColumns);
          }
        }
      }
    },
    {
      title: '添加列',
      type: 'button',
      value: {
        set({ data, output, input, slot }: EditorResult<Data>) {
          const item: ProColumns = {
            title: '新增',
            dataIndex: `${uuid()}`,
            valueType: 'text',
            width: 140,
            align: 'left',
            key: uuid(),
            fieldProps: {}
          };
          data.columns.splice(data.columns.length - 1, 0, item);
          setDataSchema({ data, output, input, slot });
        }
      }
    },
    ...emptyEditor
  ]
};
