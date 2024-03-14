import { Data, chartTypes, editorNames } from '../constants'
import { setConfig } from '../util'
import { setDataSchema } from '../schema'

const DATA_MAPPING = editorNames.DATA_MAPPING
const CHART_STYLE = editorNames.CHART_STYLE

export default {
  [DATA_MAPPING]: [
    {
      title: '维度字段名',
      type: 'Text',
      ifVisible({ data }: EditorResult<Data>) {
        return data.type === chartTypes.PIE
      },
      value: {
        get({ data }: EditorResult<Data>) {
          return data.config['colorField']
        },
        set({ data, input }: EditorResult<Data>, value: string) {
          data.config['colorField'] = value
          setDataSchema(data, input)
        },
      },
    },
    {
      title: '数据字段名',
      type: 'Text',
      ifVisible({ data }: EditorResult<Data>) {
        return data.type === chartTypes.PIE
      },
      value: {
        get({ data }: EditorResult<Data>) {
          return data.config['angleField']
        },
        set({ data, input }: EditorResult<Data>, value: string) {
          data.config['angleField'] = value
          setDataSchema(data, input)
        },
      },
    }
  ],
  [CHART_STYLE]: [
    {
      title: '内半径',
      type: 'InputNumber',
      description: '饼图的内半径，原点为画布中心。配置值域为 (0,1]',
      options: [{ min: 0, max: 1, width: 60 }],
      ifVisible({ data }: EditorResult<Data>) {
        return data.type === chartTypes.PIE
      },
      value: {
        get({ data }: EditorResult<Data>) {
          return data.config.innerRadius ? [data.config.innerRadius] : [1]
        },
        set({ data }: EditorResult<Data>, value: number) {
          setConfig(data, 'innerRadius', value[0])
        },
      },
    }
  ]
}