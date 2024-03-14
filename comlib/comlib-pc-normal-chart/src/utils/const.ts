import { Annotation } from '@antv/g2plot';

/**
 * @param label 标注的名称
 * @param yFieldIndex 图表为双轴图时，标注的y轴字段索引
 * @param positionField 文本/数据点动态设置坐标的字段
 * @param textColor 文本颜色
 * @param mainColor 标注的主体颜色, 如辅助线的线段颜色
 * @param useDash 辅助线标注是否使用虚线
 * @param autoRotate 文本是否自动旋转
 */
export declare type AnnotationItem = {
  label?: string;
  yFieldIndex?: 0 | 1;
  positionField?: string;
  textColor?: string;
  mainColor?: string;
  useDash?: boolean;
  autoRotate?: boolean;
} & Annotation;

export const InputIds = {
  DataSource: 'data',
}

export const DefaultDualGeometryOptions = [
  {
    geometry: 'line',
    color: '#5AD8A6',
  },
  {
    geometry: 'line',
    color: '#5B8FF9',
  },
];

export interface Data {
  [key: string]: any;
}
