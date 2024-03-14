import { Data, chartTypes, editorNames, defaultLineStyleFn } from '../constants'

const CHART_STYLE = editorNames.CHART_STYLE

export default {
  [CHART_STYLE]: [
    {
      title: '平滑曲线',
      type: 'Switch',
      ifVisible({ data }) {
        return data.type === chartTypes.LINE || data.type === chartTypes.RADAR
      },
      value: {
        get({ data }: EditorResult<Data>) {
          return data.config['smooth']
        },
        set({ data }: EditorResult<Data>, value: boolean) {
          data.config['smooth'] = value
        },
      },
    },
    {
      title: '折线样式',
      ifVisible({ data }) {
        return data.type === chartTypes.LINE
      },
      items: [
        {
          title: '自定义样式',
          type: 'Switch',
          value: {
            get({ data }: EditorResult<Data>) {
              return data.lineStyleFn.visible
            },
            set({ data }: EditorResult<Data>, value: boolean) {
              data.lineStyleFn.visible = value
            },
          },
        },
        {
          title: '自定义样式内容',
          type: 'Code',
          options: {
            theme: 'light',
            title: '自定义样式内容',
            language: 'javascript',
            comments: '',
            minimap: {
              enabled: false,
            },
            displayType: 'button'
          },
          ifVisible({ data }: EditorResult<Data>) {
            return  data.lineStyleFn.visible
          },
          value: {
            get({ data }: EditorResult<Data>) {
              return data.lineStyleFn.content || defaultLineStyleFn
            },
            set({ data }: EditorResult<Data>, value: string) {
              data.lineStyleFn.content = value
            },
          },
        }
      ]
    }
  ]
}