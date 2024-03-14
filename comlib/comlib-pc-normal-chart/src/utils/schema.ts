import { Data } from './const';

const schemaDefault = (data: Data) => {
  return {
    type: 'array',
    items:{
      type: 'object',
      properties: {
        [data.config.xField]: {
          title: 'x轴字段名',
          type: 'string'
        },
        [data.config.yField]: {
          title: 'y轴字段名',
          type: 'number'
        }
      }
    }
  }
}

const schemaDiff = (data: Data) => {
  return {
    title: '输入数据',
    type: 'array',
    items:{
    type: 'object',
      properties: {
        [data.config.xField]: {
          title: 'x轴字段名',
          type: 'string'
        },
        [data.config.yField]: {
          title: 'y轴字段名',
          type: 'number'
        },
        [data.config.seriesField]: {
          title: '分组字段名',
          type: 'string'
        }
      }
    }
  }
}

const schemaBidirectionalBar = (data: Data) => {
  return {
    title: '输入数据',
    type: 'array',
    items:{
    type: 'object',
      properties: {
        [data.config.xField]: {
          title: 'x轴字段名',
          type: 'string'
        },
        [data.config.yField[0]]: {
          title: 'y轴字段名(左)',
          type: 'number'
        },
        [data.config.yField[1]]: {
          title: 'y轴字段名(右)',
          type: 'number'
        }
      }
    }
  }
}

const schemaLeft = (data: Data) => {
  return {
    title: '左轴输入数据',
    type: 'array',
    items:{
    type: 'object',
      properties: {
        [data.config.xField]: {
          title: 'x轴字段名',
          type: 'string'
        },
        [data.config.yField[0]]: {
          title: 'y轴字段名',
          type: 'number'
        }
      }
    }
  }
}

const schemaRight = (data: Data) => {
  return {
    title: '右轴输入数据',
    type: 'array',
    items:{
    type: 'object',
      properties: {
        [data.config.xField]: {
          title: 'x轴字段名',
          type: 'string'
        },
        [data.config.yField[1]]: {
          title: 'y轴字段名',
          type: 'number'
        }
      }
    }
  }
}

const schemaPie = (data: Data) => {
  return {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        [data.config.angleField]: {
          title: '数据字段名',
          type: 'number'
        },
        [data.config.colorField]: {
          title: '分类字段名',
          type: 'string'
        }
      }
    }
  }
}

const schemaLiquid = () => {
  return {
    type: "object",
    properties: {
      percent: {
        type:"number"
      }
    }
  }
}

const setSchema = (data:Data, input:any) => {
  if(data.subType === 'default'){
    input.get('data').setSchema(schemaDefault(data));
  }else{
    input.get('data').setSchema(schemaDiff(data));
  }
}

export {
  setSchema,
  schemaDefault,
  schemaDiff,
  schemaBidirectionalBar,
  schemaLeft,
  schemaRight,
  schemaPie,
  schemaLiquid
}