/**
 * 数据源
 * @param percent 百分比
 * @param color 颜色数组
 * @param innerRadius 内环半径
 * @param radius 外环半径
 * @param statistic 内容
 */
export interface Data {
  percent: number;
  color: [string, string];
  innerRadius: number;
  radius: number;
  statistic: any;
  useEmpty: boolean;
  emptyText: string;
}

export const MockData: any = 0.6;