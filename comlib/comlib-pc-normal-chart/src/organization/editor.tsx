import { initInput, Data } from '../utils';

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
  ':root': ({ data, input, output }: EditorResult<any>, cate: any) => {
    initInput(data).forEach(({ id, title, schema = { type: 'any' } }) => {
      if (!input.get(id)) {
        input.add(id, title, schema);
      }
    });
    output.add('nodeClick', '节点点击', { type: 'any' });
    (cate.title = '常规'),
      (cate.items = [
        {
          title: '事件',
          items: [
            {
              title: '点击节点',
              type: '_event',
              options: {
                outputId: 'nodeClick'
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
      ]);
  }
};
