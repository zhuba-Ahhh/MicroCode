import { initInput, Data, schemaLiquid, reRender } from '../utils';

export default {
  '@init'({ style, input, data }) {
    style.height = 400;
    style.width = '100%';
    initInput(data).forEach(({ id, title, schema = { type: 'any' } }) => {
      if (!input.get(id)) {
        input.add(id, title, schema);
      }
    });
  },
  '@resize': {
    options: ['height', 'width']
  },
  ':root': ({ data, input }: EditorResult<any>, cate0: any, cate1: any) => {
    initInput(data).forEach(({ id, title, schema = { type: 'any' } }) => {
      if (!input.get(id)) {
        input.add(id, title, schema);
      }
    });
    setSchema(data, input);

    cate0.title = '常规';
    cate0.items = [
      {
        title: '数据映射',
        items: [
          {
            title: '百分比',
            type: 'Text',
            description: '指标比例数据 [0-1]',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.percent;
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.config.percent = Number(value);
              }
            }
          },
          {
            title: '半径',
            type: 'Text',
            description: '外环的半径 [0-1]，相对于画布宽高的最小值来计算的。',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.radius || 1;
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.config.radius = value;
              }
            }
          }
        ]
      },
      {
        title: '图例',
        items: [
          {
            title: '图例',
            type: 'Switch',
            value: {
              get({ data }: EditorResult<Data>) {
                if (typeof data.config.legend === 'boolean') {
                  return data.config.legend;
                } else {
                  return true;
                }
              },
              set({ data }: EditorResult<Data>, value: boolean) {
                if (!value) {
                  data.config.legend = false;
                } else {
                  data.config.legend = { position: 'right' };
                }
              }
            }
          },
          {
            title: '单击图例复制名称',
            type: 'Switch',
            ifVisible({ data }: EditorResult<Data>) {
              return !!data.config.legend;
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data.copyLegendTextOnClick;
              },
              set({ data }: EditorResult<Data>, value: boolean) {
                data.copyLegendTextOnClick = value;
              }
            }
          },
          {
            title: '位置',
            type: 'Select',
            ifVisible({ data }: EditorResult<Data>) {
              return !!data.config.legend;
            },
            options: [
              { label: '左上', value: 'top-left' },
              { label: '顶部', value: 'top' },
              { label: '右上', value: 'top-right' },
              { label: '底部', value: 'bottom' },
              { label: '左下', value: 'bottom-left' },
              { label: '左侧', value: 'left' },
              { label: '右下', value: 'bottom-right' },
              { label: '右侧', value: 'right' }
            ],
            value: {
              get({ data }: EditorResult<Data>) {
                if (typeof data.config.legend === 'boolean') {
                  return data.config.legend;
                }

                return data.config.legend?.position;
              },
              set({ data }: EditorResult<Data>, value: any) {
                if (typeof data.config.legend !== 'boolean') {
                  data.config.legend.position = value;
                  data.config.legend = { ...data.config.legend };
                }
              }
            }
          },
          {
            title: 'x轴方向偏移',
            type: 'text',
            ifVisible({ data }: EditorResult<Data>) {
              return !!data.config.legend;
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.legend.offsetX;
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.config.legend.offsetX = Number(value);
                data.config.legend = { ...data.config.legend };
              }
            }
          },
          {
            title: 'y轴方向偏移',
            type: 'text',
            ifVisible({ data }: EditorResult<Data>) {
              return !!data.config.legend;
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.legend.offsetY;
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.config.legend.offsetY = Number(value);
                data.config.legend = { ...data.config.legend };
              }
            }
          }
        ]
      },
      {
        title: '内间距',
        items: [
          {
            title: '自动内间距',
            type: 'switch',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.padding === 'auto';
              },
              set({ data }: EditorResult<Data>, value: boolean) {
                data.config = {
                  ...data.config,
                  padding: value ? 'auto' : [0, 0, 0, 0]
                };
              }
            }
          },
          {
            title: '内间距',
            type: 'inputNumber',
            description: '默认自动计算, 当边界存在遮挡时可手动设置内边距',
            options: [{ title: '上' }, { title: '右' }, { title: '下' }, { title: '左' }],
            ifVisible({ data }: EditorResult<Data>) {
              return data.config.padding !== 'auto';
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.padding;
              },
              set({ data }: EditorResult<Data>, value: number[]) {
                data.config = {
                  ...data.config,
                  padding: value
                };
              }
            }
          }
        ]
      },
      {
        title: '空状态',
        items: [
          {
            title: '默认空状态',
            description: '开启后，当数据为空时显示默认的空状态',
            type: 'Switch',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.useEmpty;
              },
              set({ data }: EditorResult<Data>, value: boolean) {
                data.useEmpty = value;
              }
            }
          },
          {
            title: '空状态文案',
            type: 'Text',
            options: {
              placeholder: '空状态文案'
            },
            ifVisible({ data }: EditorResult<Data>) {
              return data.useEmpty;
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data.emptyText;
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.emptyText = value;
              }
            }
          }
        ]
      }
    ];
    cate1.title = '图表配置';
    cate1.items = [
      {
        title: '边框颜色',
        type: 'colorpicker',
        value: {
          get({ data }) {
            return data.config.liquidStyle.stroke;
          },
          set({ data }, value: string) {
            data.config.liquidStyle.stroke = value;
            reRender(data);
          }
        }
      },
      {
        title: '水波颜色',
        type: 'colorpicker',
        value: {
          get({ data }) {
            return data.config.liquidStyle.fill;
          },
          set({ data }, value: string) {
            data.config.liquidStyle.fill = value;
            reRender(data);
          }
        }
      }
    ];
  }
};

const setSchema = (data: Data, input: any) => {
  input.get('data').setSchema(schemaLiquid());
};
