export default function ({ data, input }) {
  // 1.0.8 -> 1.0.9
  if (data.type === 'line') {
    input.get('data').setSchema({
      type: 'array',
      items:{
      type: 'object',
        properties: {
          [data.config.xField]: {
            title: 'x横轴字段名',
            type: 'string'
          },
          [data.config.yField]: {
            title: 'y纵轴字段名',
            type: 'number'
          },
          [data.config.seriesField]: {
            title: '分组字段名',
            type: 'string'
          }
        }
      }
    })
  }

  return true;
}