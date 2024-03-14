import { ChartProps, AxisPositionEnum } from '../constants';
type Data = ChartProps;

export default () => {
  return [
    {
      title: 'x横轴',
      items: [
        {
          title: '标题',
          type: 'Text',
          options: {
            placeholder: 'x横轴标题'
          },
          value: {
            get({ data }: EditorResult<Data>) {
              return data.config.xAxis.title?.text;
            },
            set({ data }: EditorResult<Data>, value: string) {
              data.config.xAxis.title.text = value;
            }
          }
        },
        {
          title: '标题位置',
          type: 'Select',
          options: [
            { label: '左侧', value: AxisPositionEnum.Start },
            { label: '中间', value: AxisPositionEnum.Center },
            { label: '右侧', value: AxisPositionEnum.End }
          ],
          ifVisible({ data }: EditorResult<Data>) {
            return !!data.config.xAxis.title?.text;
          },
          value: {
            get({ data }: EditorResult<Data>) {
              return data.config.xAxis.title?.position || AxisPositionEnum.Center;
            },
            set({ data }: EditorResult<Data>, value: AxisPositionEnum) {
              data.config.xAxis.title.position = value;
            }
          }
        }
      ]
    },
    {
      title: 'y纵轴',
      items: [
        {
          title: '标题',
          type: 'Text',
          options: {
            placeholder: 'y纵轴标题'
          },
          value: {
            get({ data }: EditorResult<Data>) {
              return data.config.yAxis.title?.text;
            },
            set({ data }: EditorResult<Data>, value: string) {
              data.config.yAxis.title.text = value;
            }
          }
        },
        {
          title: '标题位置',
          type: 'Select',
          options: [
            { label: '左侧', value: AxisPositionEnum.Start },
            { label: '中间', value: AxisPositionEnum.Center },
            { label: '右侧', value: AxisPositionEnum.End }
          ],
          ifVisible({ data }: EditorResult<Data>) {
            return !!data.config.yAxis.title?.text;
          },
          value: {
            get({ data }: EditorResult<Data>) {
              return data.config.yAxis.title?.position || AxisPositionEnum.Center;
            },
            set({ data }: EditorResult<Data>, value: AxisPositionEnum) {
              data.config.yAxis.title.position = value;
            }
          }
        }
      ]
    }
  ];
};
