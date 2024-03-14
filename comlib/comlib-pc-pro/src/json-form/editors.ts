import { Data } from './runtime'

export default {
  ':root': [
    {
      title: '布局类型',
      type: 'Select',
      options() {
        return [
          { label: '基本表单', value: 'Form' },
          { label: '查询表单', value: 'QueryFilter' }
        ]
      },
      value: {
        get({ data, id, name }: EditorResult<Data>) {
          return data.layoutType
        },
        set({ data, id, name }: EditorResult<Data>, value: Data["layoutType"]) {
          data.layoutType = value;
        }
      }
    },
    {
      title: '一行多列(grid模式)',
      type: 'Switch',
      ifVisible({ data }: EditorResult<Data>) {
        return !['QueryFilter', 'LightFilter'].includes(data.layoutType || 'Form');
      },
      value: {
        get({ data, }: EditorResult<Data>) {
          return data.grid;
        },
        set({ data, }: EditorResult<Data>, value: boolean) {
          data.grid = value;
        }
      }
    },
    {
      title: '显示操作按钮',
      type: 'Switch',
      value: {
        get({ data }: EditorResult<Data>) {
          return !!data.submitter
        },
        set({ data }: EditorResult<Data>, value: Data["submitter"]) {
          data.submitter = value;
        }
      }
    },
    {
      title: '数据提交',
      type: '_Event',
      options: {
        outputId: 'onFinish'
      }
    },
    {
      title: '重置输出',
      type: '_Event',
      options: {
        outputId: 'onReset'
      }
    },
    {
      title: '数据变化',
      type: '_Event',
      options: {
        outputId: 'onValuesChange'
      }
    },
  ]
}