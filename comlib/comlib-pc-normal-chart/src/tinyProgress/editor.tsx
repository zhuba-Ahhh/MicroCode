import { Data } from './constants';

export default {
  '@init'({ style }: EditorResult<Data>) {
    style.height = 20;
    style.width = '100%';
  },
  '@resize': {
    options: ['height', 'width']
  },
  ':root': ({}: EditorResult<Data>, cate0: any) => {
    cate0.title = '常规';
    cate0.items = [
      {
        title: '区域配置',
        items: [
          {
            title: '有效区域颜色',
            type: 'ColorPicker',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.color[0];
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.config.color[0] = value;
              }
            }
          },
          {
            title: '无效区域颜色',
            type: 'ColorPicker',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.color[1];
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.config.color[1] = value;
              }
            }
          }
        ]
      }
    ];

    return { title: '迷你进度图' };
  }
};
