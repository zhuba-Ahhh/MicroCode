import { Data, chartTypes, editorNames } from '../constants'

const CHART_STYLE = editorNames.CHART_STYLE

export default {
  [CHART_STYLE]: [
    {
      title: '面积填充',
      type: 'Switch',
      description: '配置雷达图上的面积填充',
      ifVisible({ data }: EditorResult<Data>) {
        return data.type === chartTypes.RADAR
      },
      value: {
        get({ data }: EditorResult<Data>) {
          return !!data.config.area
        },
        set({ data }: EditorResult<Data>, value: boolean) {
          if (!value) {
            data.config.area = void 0
          } else { 
            data.config.area = {}
          }
          data.config = { ...data.config }
        },
      }
    }
  ]
}