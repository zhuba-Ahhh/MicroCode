import { Legend } from '@antv/g2plot/lib/types/legend';
import { Label } from '@antv/g2plot/lib/types/label';
import { Tooltip } from '@antv/g2plot/lib/types/tooltip';
import { Statistic } from '@antv/g2plot/lib/types/statistic';
import { Meta } from '@antv/g2plot/lib/types/meta';
import { AreaGeometryOptions } from '@antv/g2plot/lib/adaptor/geometries/area';
import { GeometryOption } from '@antv/g2plot/lib/plots/dual-axes/types';

export interface Axis {
  position: 'start' | 'center' | 'end';
  title: string | Object;
  value: string | Object;
}

export interface Config {
  height: number
  xField: string
  yField: string | Array<string>
  legend: Legend
  seriesField: string
  label: Label
  tooltip: Tooltip
  angleField: string
  colorField: string
  innerRadius?: number
  area?: AreaGeometryOptions['area']
  statistic?: Statistic
  meta?: Meta
  theme: string
  geometryOptions?: GeometryOption[]
}

export interface Data {
  type: string
  config: Config
  tooltipFormatterFn: {
    visible: boolean
    content: string
  }
  lineStyleFn: {
    visible: boolean
    content: string
  }
}

const lineData = [
  { label: '1991', value: 3, type: '类型一' },
  { label: '1992', value: 4, type: '类型一' },
  { label: '1993', value: 3.5, type: '类型一' },
  { label: '1994', value: 5, type: '类型一' },
  { label: '1995', value: 4.9, type: '类型一' },
  { label: '1996', value: 6, type: '类型一' },
  { label: '1997', value: 7, type: '类型一' },
  { label: '1998', value: 9, type: '类型一' },
  { label: '1999', value: 13, type: '类型一' },
  { label: '1991', value: 4, type: '类型二' },
  { label: '1992', value: 5, type: '类型二' },
  { label: '1993', value: 4.5, type: '类型二' },
  { label: '1994', value: 6, type: '类型二' },
  { label: '1995', value: 5.9, type: '类型二' },
  { label: '1996', value: 7, type: '类型二' },
  { label: '1997', value: 8, type: '类型二' },
  { label: '1998', value: 10, type: '类型二' },
  { label: '1999', value: 14, type: '类型二' }
]

const dualAxesData = [
  {
    label: '2019-03',
    value1: 350,
    value2: 800,
  },
  {
    label: '2019-04',
    value1: 900,
    value2: 600,
  },
  {
    label: '2019-05',
    value1: 300,
    value2: 400,
  },
  {
    label: '2019-06',
    value1: 450,
    value2: 380,
  },
  {
    label: '2019-07',
    value1: 470,
    value2: 220,
  },
]

export const chartTypes = {
  LINE: 'Line',
  PIE: 'Pie',
  COLUMN: 'Column',
  BAR: 'Bar',
  AREA: 'Area',
  LIQUID: 'Liquid', // 水波图
  FUNNEL: 'Funnel', // 漏斗图
  RADAR: 'Radar',
  BIDIRECTIONAL_BAR: 'BidirectionalBar', // 对称条形图
  DUAL_AXES: 'DualAxes', // 双轴图
  ORGANIZATION: 'Organization', //组织架构图
  TINY_COLUMN: 'tinyColumn', //迷你柱形图
}

export const MOCK_DATA = {
  Line: lineData,
  Area: lineData,
  Pie: [
    { type: '分类一', value: 27.4 },
    { type: '分类二', value: 24.6 },
    { type: '分类三', value: 18 },
    { type: '分类四', value: 15 },
    { type: '分类五', value: 10 },
    { type: '其他', value: 5 }
  ],
  Column: [
    { type: '类型1', label: 'Jan.', value: 18.9 },
    { type: '类型1', label: 'Feb.', value: 28.8 },
    { type: '类型1', label: 'Mar.', value: 39.3 },
    { type: '类型1', label: 'Apr.', value: 81.4 },
    { type: '类型1', label: 'May', value: 47 },
    { type: '类型1', label: 'Jun.', value: 20.3 },
    { type: '类型1', label: 'Jul.', value: 24 },
    { type: '类型1', label: 'Aug.', value: 35.6 }
  ],
  Bar: [
    { value: '家具家电', label: 38, type: '类型一' },
    { value: '粮油副食', label: 52, type: '类型一' },
    { value: '生鲜水果', label: 61, type: '类型一' },
    { value: '美容洗护', label: 145, type: '类型一' },
    { value: '母婴用品', label: 48, type: '类型一' },
    { value: '进口食品', label: 38, type: '类型一' },
    { value: '食品饮料', label: 38, type: '类型一' },
    { value: '家庭清洁', label: 38, type: '类型一' }
  ],
  Liquid: 0.25,
  Funnel: [
    { label: '简历筛选', value: 253, type: '类型一' },
    { label: '初试人数', value: 151, type: '类型一' },
    { label: '复试人数', value: 113, type: '类型一' },
    { label: '录取人数', value: 87, type: '类型一' },
    { label: '入职人数', value: 59, type: '类型一' }
  ],
  [chartTypes.RADAR]: [
    { label: 'G2', value: 10371, type: '类型一' },
    { label: 'G6', value: 7380, type: '类型一' },
    { label: 'F2', value: 7414, type: '类型一' },
    { label: 'L7', value: 2140, type: '类型一' },
    { label: 'X6', value: 660, type: '类型一' },
    { label: 'AVA', value: 885, type: '类型一' },
    { label: 'G2Plot', value: 1626, type: '类型一' }
  ],
  [chartTypes.BIDIRECTIONAL_BAR]: [
    { label: '乌拉圭', 'value1': 13.4, 'value2': 12.3 },
    { label: '巴拉圭', 'value1': 14.4, 'value2': 6.3 },
    { label: '南非', 'value1': 18.4, 'value2': 8.3 },
    { label: '巴基斯坦', 'value1': 34.4, 'value2': 13.8 },
    { label: '阿根廷', 'value1': 44.4, 'value2': 19.5 },
    { label: '巴西', 'value1': 24.4, 'value2': 18.8 },
    { label: '加拿大', 'value1': 54.4, 'value2': 24.7 },
    { label: '中国', 'value1': 104.4, 'value2': 5.3 },
    { label: '美国', 'value1': 165.2, 'value2': 72.9 }
  ],
  [chartTypes.DUAL_AXES]: [dualAxesData, dualAxesData]
};

export const defaultFormatterFn = `export default function (datum) {
  return { name: '', value: '' };
}`;

export const defaultLineStyleFn = `export default function ({ type }) {
  return {}
}`

export const defaultGeometryOptions = `[
  { geometry: '' },
  { geometry: '' }
]
`

export const editorNames = {
  DATA_MAPPING: 'dataMapping', // 数据映射
  CHART_STYLE: 'chartStyle' // 图形样式
}

export const inputIdMap = {
  DATA: 'data', // 数据源
  CONFIG: 'config', // 图表配置
  X_FIELD: 'xField', // x轴配置
  Y_FIELD: 'yField', // y轴配置
  COLOR_FIELD: 'colorField', // 维度字段名
  ANGLE_FIELD: 'angleField', // 数据字段名
  SERIES_FIELD: 'seriesField', // 分组字段名
  LEGEND: 'legend',
  LEGEND_SELECTED: 'legend.selected',
  LEGEND_POSITION: 'legend.position',
  SMOOTH: 'smooth', // 是否平滑
  LABEL: 'label', // 数据标签
  TOOLTIP: 'tooltip' // 悬浮提示
}

export const inputSchemaMap = {
  [inputIdMap.X_FIELD]: { title: 'x横轴字段名', schema: { type: 'string' } },
  [inputIdMap.Y_FIELD]: { title: 'y纵轴字段名', schema: { type: 'string' } },
  [inputIdMap.SERIES_FIELD]: { title: '分组字段名', schema: { type: 'string' } },
  [inputIdMap.COLOR_FIELD]: { title: '维度字段名', schema: { type: 'string' } },
  [inputIdMap.ANGLE_FIELD]: { title: '数据字段名', schema: { type: 'string' } },
  [inputIdMap.LEGEND_SELECTED]: {
    title: '图例高亮状态', schema: {
      type: 'object', properties: { value_key: { type: 'boolean' } }
    }
  },
  [inputIdMap.LEGEND_POSITION]: { title: '图例位置', schema: { type: 'string' } },
  [inputIdMap.SMOOTH]: { title: '平滑曲线', schema: { type: 'boolean' } },
  [inputIdMap.LABEL]: { title: '数据标签', schema: { type: 'boolean' } },
  [inputIdMap.LEGEND]: { title: '图例', schema: { type: 'boolean' } },
  [inputIdMap.TOOLTIP]: { title: '悬浮提示', schema: { type: 'boolean' } }
}

const legendInputCharts = [ // 支持图例的图表
  chartTypes.LINE,
  chartTypes.COLUMN,
  chartTypes.BAR,
  chartTypes.PIE,
  chartTypes.AREA,
  chartTypes.FUNNEL,
  chartTypes.RADAR,
  chartTypes.BIDIRECTIONAL_BAR,
  chartTypes.DUAL_AXES
]

export const inputConfigMap = {
  [inputIdMap.LEGEND]: legendInputCharts,
  [inputIdMap.LEGEND_SELECTED]: legendInputCharts,
  [inputIdMap.LEGEND_POSITION]: legendInputCharts,
  [inputIdMap.LABEL]: [
    chartTypes.LINE,
    chartTypes.COLUMN,
    chartTypes.BAR,
    chartTypes.PIE,
    chartTypes.AREA,
    chartTypes.FUNNEL,
    chartTypes.RADAR,
    chartTypes.BIDIRECTIONAL_BAR
  ],
  [inputIdMap.TOOLTIP]: [
    chartTypes.LINE,
    chartTypes.COLUMN,
    chartTypes.BAR,
    chartTypes.PIE,
    chartTypes.AREA,
    chartTypes.FUNNEL,
    chartTypes.RADAR,
    chartTypes.BIDIRECTIONAL_BAR,
    chartTypes.DUAL_AXES
  ],
  [inputIdMap.X_FIELD]: [
    chartTypes.LINE,
    chartTypes.COLUMN,
    chartTypes.BAR,
    chartTypes.AREA,
    chartTypes.FUNNEL,
    chartTypes.RADAR,
    chartTypes.BIDIRECTIONAL_BAR,
    chartTypes.DUAL_AXES
  ],
  [inputIdMap.Y_FIELD]: [
    chartTypes.LINE,
    chartTypes.COLUMN,
    chartTypes.BAR,
    chartTypes.AREA,
    chartTypes.FUNNEL,
    chartTypes.RADAR,
    chartTypes.BIDIRECTIONAL_BAR,
    chartTypes.DUAL_AXES
  ],
  [inputIdMap.SERIES_FIELD]: [
    chartTypes.LINE,
    chartTypes.COLUMN,
    chartTypes.BAR,
    chartTypes.AREA,
    chartTypes.FUNNEL,
    chartTypes.RADAR
  ],
  [inputIdMap.COLOR_FIELD]: [chartTypes.PIE],
  [inputIdMap.ANGLE_FIELD]: [chartTypes.PIE],
  [inputIdMap.SMOOTH]: [chartTypes.LINE, chartTypes.AREA, chartTypes.RADAR],
}

export const defaultInputIds = [
  inputIdMap.X_FIELD,
  inputIdMap.Y_FIELD,
  inputIdMap.SERIES_FIELD,
  inputIdMap.LEGEND,
  inputIdMap.LEGEND_SELECTED,
  inputIdMap.LEGEND_POSITION,
  inputIdMap.LABEL,
  inputIdMap.SMOOTH,
  inputIdMap.TOOLTIP
]

export const defaultConfigValue = {
  [inputIdMap.LEGEND]: { position: 'right' },
  [inputIdMap.LABEL]: {},
  [inputIdMap.TOOLTIP]: {}
}