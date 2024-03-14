import { ChartConfigProps, ChartProps } from '../utils/constants';

export enum SubTypeEnum {
  Default = 'default',
  Circel = 'circel'
}
export interface Data extends ChartProps {
  config: ChartConfigProps & {
    angleField: string;
    colorField: string;
    radius?: number;
    innerRadius?: number;
  };
  subType?: SubTypeEnum;
}

export const OutputIds = {
  Element_Click: 'elementClick'
};

export const MockData: any = {
  default: [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ]
};
MockData.circel = MockData.default;
