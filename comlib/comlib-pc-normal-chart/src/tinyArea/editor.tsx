import { Data } from '../utils/const';

export default {
  '@init'({ style }) {
    style.height = 200;
    style.width = 300;
  },
  '@resize': {
    options: ['height', 'width']
  },
  ':root'({}, cate0: any) {
    cate0.title = '迷你面积图';
    cate0.items = [
      {
        title: '平滑',
        type: 'switch',
        value: {
          get({ data }: EditorResult<Data>) {
            return data.smooth;
          },
          set({ data }: EditorResult<Data>, value: boolean) {
            data.smooth = value;
          }
        }
      },
      {
        title: '区域配置',
        items: [
          {
            title: '填充颜色',
            type: 'colorPicker',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.areaStyle.fill;
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.areaStyle = {
                  ...data.areaStyle,
                  fill: value
                };
              }
            }
          }
        ]
      },
      {
        title: '折线配置',
        items: [
          {
            title: '填充颜色',
            type: 'colorPicker',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.line.color;
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.line = {
                  ...data.line,
                  color: value
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
  }
};
