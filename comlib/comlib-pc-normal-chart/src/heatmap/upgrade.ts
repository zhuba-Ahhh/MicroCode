
export default function ({ input,data }: any): boolean {
  // 1.0.10->1.0.11
  if (!input.get('loading')) {
    const params = {
      type: 'boolean'
    };
    input.add('loading', '设置加载态', params);
  }

  //1.0.11->1.0.12
  //七、热力图
  input.get('data').setSchema({
    type: 'object',
    properties: {
      dataSource: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            [data.config.xField]: {
              title: 'x轴字段名',
              type: 'number'
            },
            [data.config.yField]: {
              title: 'y轴字段名',
              type: 'number'
            },
            [data.config.type]: {
              title: "颜色字段名",
              type: 'number'
            }
          }
        }
      },
      xAxis: {
        type: 'object',
        properties: {
          min: {
            type: 'number'
          },
          max: {
            type: 'number'
          }
        }
      },
      yAxis: {
        type: 'object',
        properties: {
          min: {
            type: 'number'
          },
          max: {
            type: 'number'
          }
        }
      }
    }
  });

  return true;
}
