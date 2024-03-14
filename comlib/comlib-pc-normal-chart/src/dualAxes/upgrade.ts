import { InputId } from './constants';

export default function ({ data, input }: any): boolean {
  if (!data.tempAnnotations) {
    data.tempAnnotations = [];
  }
  if (!data.config.padding) {
    data.config.padding = 'auto';
  }
  if (!data.useEmpty) {
    data.useEmpty = true;
  }
  if (!data.emptyText) {
    data.emptyText = '暂无数据';
  }

  if (!input.get(InputId.GeometryOptions)) {
    input.add({
      id: InputId.GeometryOptions,
      title: '轴配置',
      schema: {
        title: '配置',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            color: {
              title: '颜色',
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      }
    });
  }

  return true;
}
