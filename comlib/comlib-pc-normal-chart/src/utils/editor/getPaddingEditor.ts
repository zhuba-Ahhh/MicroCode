import { ChartProps } from '../constants';
type Data = ChartProps;

enum UnitType {
  Auto = 'auto'
}

export default () => {
  return [
    {
      title: '内间距',
      items: [
        {
          title: '自定义内间距',
          description: '默认自动计算, 当边界存在遮挡时可手动设置内边距',
          type: 'Switch',
          value: {
            get({ data }: EditorResult<Data>) {
              return data.config.padding && data.config.padding !== UnitType.Auto;
            },
            set({ data }: EditorResult<Data>, value: boolean) {
              if (value) {
                data.config.padding = [0, 0, 0, 0];
              } else {
                data.config.padding = UnitType.Auto;
              }
            }
          }
        },
        {
          title: '内间距',
          type: 'InputNumber',
          description: '图形与边界的间距',
          options: [{ title: '上' }, { title: '右' }, { title: '下' }, { title: '左' }],
          ifVisible({ data }: EditorResult<Data>) {
            return data.config.padding && data.config.padding !== UnitType.Auto;
          },
          value: {
            get({ data }: EditorResult<Data>) {
              return data.config.padding;
            },
            set({ data }: EditorResult<Data>, value: number[]) {
              data.config.padding = value;
            }
          }
        }
      ]
    }
  ];
};
