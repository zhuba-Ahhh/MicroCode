import { Data, inputIdMap, chartTypes } from './constants'

const setDataSchema = (data: Data, input: any) => {
  const dataInputPin = input.get(inputIdMap.DATA)
  if (data.type === chartTypes.PIE) {
    dataInputPin?.setSchema({
      type: 'array',
      items: {
        type: 'object',
        properties: {
          [data.config.angleField]: {
            type: 'number',
          },
          [data.config.colorField]: {
            type: 'string',
          }
        },
      },
    })
  } else if (data.type === chartTypes.LIQUID) {
    dataInputPin?.setSchema({ type: 'number' })
  } else {
    if (Array.isArray(data.config.yField)) {
      dataInputPin?.setSchema({
        type: 'array',
        items: {
          type: 'object',
          properties: {
            [data.config.xField]: {
              type: 'number',
            },
            [data.config.yField[0]]: {
              type: 'string',
            },
            [data.config.yField[1]]: {
              type: 'string',
            }
          },
        },
      })
    } else {
      dataInputPin?.setSchema({
        type: 'array',
        items: {
          type: 'object',
          properties: {
            [data.config.xField]: {
              type: 'number',
            },
            [data.config.yField]: {
              type: 'string',
            },
            [data.config.seriesField]: {
              type: 'string',
            }
          },
        },
      })
    }
    
  }
}

export {
  setDataSchema
}