import { ChartProps, LegendPositionEnum } from '../constants';
type Data = ChartProps;

export default () => {
  return {
    title: '图例',
    items: [
      {
        title: '图例',
        type: 'Switch',
        value: {
          get({ data }: EditorResult<Data>) {
            return !!data.config.legend;
          },
          set({ data }: EditorResult<Data>, value: boolean) {
            if (!value) {
              data.config.legend = false;
            } else {
              data.config.legend = { position: LegendPositionEnum.Top, offsetX: 0, offsetY: 0 };
            }
          }
        }
      },
      {
        title: '位置',
        type: 'Select',
        options: [
          { label: '顶部', value: LegendPositionEnum.Top },
          { label: '底部', value: LegendPositionEnum.Bottom },
          { label: '左上', value: LegendPositionEnum.TopLeft },
          { label: '左中', value: LegendPositionEnum.Left },
          { label: '左下', value: LegendPositionEnum.BottomLeft },
          { label: '右上', value: LegendPositionEnum.TopRight },
          { label: '右中', value: LegendPositionEnum.Right },
          { label: '右下', value: LegendPositionEnum.BottomRight }
        ],
        ifVisible({ data }: EditorResult<Data>) {
          return !!data.config.legend;
        },
        value: {
          get({ data }: EditorResult<Data>) {
            if (typeof data.config.legend === 'boolean') {
              return LegendPositionEnum.Top;
            }
            return data.config.legend?.position || LegendPositionEnum.Top;
          },
          set({ data }: EditorResult<Data>, value: LegendPositionEnum) {
            if (typeof data.config.legend !== 'boolean') {
              data.config.legend.position = value;
            }
          }
        }
      },
      {
        title: 'x轴方向偏移',
        type: 'text',
        options: {
          type: 'Number',
          placeholder: 'x轴方向偏移'
        },
        ifVisible({ data }: EditorResult<Data>) {
          return !!data.config.legend;
        },
        value: {
          get({ data }: EditorResult<Data>) {
            if (typeof data.config.legend !== 'boolean') {
              return data.config.legend.offsetX;
            }
            return 0;
          },
          set({ data }: EditorResult<Data>, value: string) {
            if (typeof data.config.legend !== 'boolean') {
              data.config.legend.offsetX = Number(value);
            }
          }
        }
      },
      {
        title: 'y轴方向偏移',
        type: 'text',
        options: {
          type: 'Number',
          placeholder: 'y轴方向偏移'
        },
        ifVisible({ data }: EditorResult<Data>) {
          return !!data.config.legend;
        },
        value: {
          get({ data }: EditorResult<Data>) {
            if (typeof data.config.legend !== 'boolean') {
              return data.config.legend.offsetY;
            }
            return 0;
          },
          set({ data }: EditorResult<Data>, value: string) {
            if (typeof data.config.legend !== 'boolean') {
              data.config.legend.offsetY = Number(value);
            }
          }
        }
      }
    ]
  };
};
