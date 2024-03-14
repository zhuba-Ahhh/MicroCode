import { ChartProps } from '../constants';
type Data = ChartProps;

export default () => {
  return [
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
};
