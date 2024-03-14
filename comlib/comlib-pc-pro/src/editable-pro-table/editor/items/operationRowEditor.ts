import { Data, OUTPUTS, TypeEnum } from '../../constants';
import { getColumnsDataSchema } from '../../schema';
import { checkType, getSuggestions, run } from '../../utils';

export default (data: Data) => ({
  title: '操作列配置',
  ifVisible({ data, focusArea }: EditorResult<Data>) {
    return checkType(data, focusArea, [TypeEnum.Option]);
  },
  items: [
    {
      title: '隐藏操作列',
      description: '隐藏操作列，会自动隐藏所有操作',
      type: 'switch',
      value: {
        get({ data }: EditorResult<Data>) {
          return data.hideAllOperation;
        },
        set({ data }: EditorResult<Data>, val: boolean) {
          data.hideAllOperation = !!val;
        }
      }
    },
    {
      title: '只读态操作',
      ifVisible({ data }: EditorResult<Data>) {
        return !data.hideAllOperation;
      },
      items: [
        {
          title: '隐藏编辑按钮',
          type: 'switch',
          value: {
            get({ data }: EditorResult<Data>) {
              return data.hideModifyBtn;
            },
            set({ data }: EditorResult<Data>, val: boolean) {
              data.hideModifyBtn = !!val;
            }
          }
        },
        {
          title: '编辑按钮文案',
          type: 'text',
          ifVisible({ data }: EditorResult<Data>) {
            return !data.hideModifyBtn;
          },
          value: {
            get({ data }: EditorResult<Data>) {
              return data?.editText;
            },
            set({ data }: EditorResult<Data>, val: string) {
              data.editText = val;
            }
          }
        },
        {
          title: '隐藏删除按钮',
          type: 'switch',
          value: {
            get({ data }: EditorResult<Data>) {
              return data.hideDeleteBtn;
            },
            set({ data }: EditorResult<Data>, val: boolean) {
              data.hideDeleteBtn = !!val;
            }
          }
        },
        {
          title: '隐藏添加按钮',
          type: 'switch',
          description: `开启后，会隐藏所有表格行操作列的新增按钮`,
          value: {
            get({ data }: EditorResult<Data>) {
              return data.hideNewBtn;
            },
            set({ data }: EditorResult<Data>, val: boolean) {
              data.hideNewBtn = !!val;
            }
          }
        },
        {
          title: '隐藏添加子项按钮',
          description: `开启后，会隐藏所有表格行的添加子项按钮`,
          type: 'switch',
          value: {
            get({ data }: EditorResult<Data>) {
              if (data.hideAllAddChildBtn === undefined) {
                data.hideAllAddChildBtn = true;
              }
              return data.hideAllAddChildBtn;
            },
            set({ data }: EditorResult<Data>, val: boolean) {
              data.hideAllAddChildBtn = !!val;
            }
          }
        },
        {
          title: '添加子项按钮文案',
          description: ``,
          type: 'text',
          ifVisible({ data }: EditorResult<Data>) {
            return !data.hideAllAddChildBtn;
          },
          value: {
            get({ data }: EditorResult<Data>) {
              if (!data.addChildBtnLabel) {
                data.addChildBtnLabel = '添加子项';
              }
              return data.addChildBtnLabel;
            },
            set({ data }: EditorResult<Data>, val: string) {
              data.addChildBtnLabel = val;
            }
          }
        },
        {
          title: '添加子项按钮显示',
          description: `通过表格行字段值，动态控制添加子项按钮的显隐，不设置则默认显示。表达式支持（{}, =, <, >, ||, &&）, 例：{title} === '1'`,
          type: 'EXPRESSION',
          ifVisible({ data }: EditorResult<Data>) {
            return !data.hideAllAddChildBtn;
          },
          options: {
            autoSize: true,
            placeholder: `例：{title} === '1'`,
            suggestions: getSuggestions(data),
            runCode: run,
          },
          value: {
            get({ data }: EditorResult<Data>) {
              return data?.addChildBtnScript;
            },
            set({ data }: EditorResult<Data>, value: string) {
              data.addChildBtnScript = value;
            }
          }
        },
      ]
    },
    {
      title: '编辑态操作',
      ifVisible({ data }: EditorResult<Data>) {
        return !data.hideAllOperation;
      },
      items: [
        {
          title: '隐藏保存按钮',
          type: 'switch',
          value: {
            get({ data }: EditorResult<Data>) {
              return data.hideSaveBtn;
            },
            set({ data }: EditorResult<Data>, val: boolean) {
              data.hideSaveBtn = !!val;
            }
          }
        },
        {
          title: '保存按钮文案',
          type: 'text',
          ifVisible({ data }: EditorResult<Data>) {
            return !data.hideSaveBtn;
          },
          value: {
            get({ data }: EditorResult<Data>) {
              return data?.saveText;
            },
            set({ data }: EditorResult<Data>, val: string) {
              data.saveText = val;
            }
          }
        },
        {
          title: '隐藏删除按钮',
          type: 'switch',
          value: {
            get({ data }: EditorResult<Data>) {
              return data.hideDeleteBtnInEdit;
            },
            set({ data }: EditorResult<Data>, val: boolean) {
              data.hideDeleteBtnInEdit = !!val;
            }
          }
        },
        {
          title: '删除按钮文案',
          type: 'text',
          ifVisible({ data }: EditorResult<Data>) {
            return !data.hideDeleteBtnInEdit;
          },
          value: {
            get({ data }: EditorResult<Data>) {
              return data?.deleteText;
            },
            set({ data }: EditorResult<Data>, val: string) {
              data.deleteText = val;
            }
          }
        },
        {
          title: '隐藏取消按钮',
          type: 'switch',
          value: {
            get({ data }: EditorResult<Data>) {
              return data.hideCancelBtn;
            },
            set({ data }: EditorResult<Data>, val: boolean) {
              data.hideCancelBtn = !!val;
            }
          }
        },
        {
          title: '取消按钮文案',
          type: 'text',
          ifVisible({ data }: EditorResult<Data>) {
            return !data.hideCancelBtn;
          },
          value: {
            get({ data }: EditorResult<Data>) {
              return data?.cancelText;
            },
            set({ data }: EditorResult<Data>, val: string) {
              data.cancelText = val;
            }
          }
        },
      ]
    },
    {
      title: '回调事件',
      items: [
        {
          title: '保存回调',
          type: 'switch',
          value: {
            get({ data }: EditorResult<Data>) {
              return data.useSaveCallback;
            },
            set({ data, output }: EditorResult<Data>, val: boolean) {
              data.useSaveCallback = !!val;
              const hasEvent = output.get(OUTPUTS.SaveCallback);
              const schema = {
                type: 'object',
                properties: {
                  index: {
                    type: 'number',
                    title: '行索引'
                  },
                  ...getColumnsDataSchema(data.columns)
                }
              };
              if (val && !hasEvent) {
                output.add(OUTPUTS.SaveCallback, '保存回调', schema);
              }
              if (!val && hasEvent) {
                output.remove(OUTPUTS.SaveCallback);
              }
            }
          }
        },
        {
          title: '保存回调事件',
          type: '_Event',
          ifVisible({ data }: EditorResult<Data>) {
            return !!data.useSaveCallback;
          },
          options: {
            outputId: OUTPUTS.SaveCallback
          }
        },
        {
          title: '删除回调',
          type: 'switch',
          value: {
            get({ data }: EditorResult<Data>) {
              return data.useDelCallback;
            },
            set({ data, output }: EditorResult<Data>, val: boolean) {
              data.useDelCallback = !!val;
              const hasEvent = output.get(OUTPUTS.DelCallback);
              if (val && !hasEvent) {
                const schema = {
                  type: 'object',
                  properties: {
                    index: {
                      type: 'number',
                      title: '行索引'
                    },
                    ...getColumnsDataSchema(data.columns)
                  }
                };
                output.add(OUTPUTS.DelCallback, '删除回调', schema);
              }
              if (!val && hasEvent) {
                output.remove(OUTPUTS.DelCallback);
              }
            }
          }
        },
        {
          title: '删除回调事件',
          type: '_Event',
          ifVisible({ data }: EditorResult<Data>) {
            return !!data.useDelCallback;
          },
          options: {
            outputId: OUTPUTS.DelCallback
          }
        }
      ]
    }
  ]
})
