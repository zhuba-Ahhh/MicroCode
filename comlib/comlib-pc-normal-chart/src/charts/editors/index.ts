import lineEditor from './lineEditor'
import pieEditor from './pieEditor'
import radarEditor from './radarEditor'
import dualAxes from './dualAxes'
import { chartTypes, editorNames } from '../constants'

const CHART_STYLE = editorNames.CHART_STYLE
const DATA_MAPPING = editorNames.DATA_MAPPING

export default {
  [chartTypes.LINE]: {
    [CHART_STYLE]: lineEditor[CHART_STYLE],
  },
  [chartTypes.PIE]: {
    [DATA_MAPPING]: pieEditor[DATA_MAPPING],
    [CHART_STYLE]: pieEditor[CHART_STYLE]
  },
  [chartTypes.RADAR]: {
    [CHART_STYLE]: radarEditor[CHART_STYLE]
  },
  [chartTypes.DUAL_AXES]: {
    [CHART_STYLE]: dualAxes[CHART_STYLE]
  }
}