import { ChartConfigProps, ChartProps } from '../utils/constants';

export interface Data extends ChartProps {
  config: ChartConfigProps & {
    isStack?: boolean;
    isGroup?: boolean;
    seriesField?: string;
    xField: [string, string];
    yField: [string, string];
  };
}

export const MockData: any =[
    {
      xField: '乌拉圭',
      yField0: 13.4,
      yField1: 12.3,
    },
    {
      xField: '巴拉圭',
      yField0: 14.4,
      yField1: 6.3,
    },
    {
      xField: '南非',
      yField0: 18.4,
      yField1: 8.3,
    },
    {
      xField: '巴基斯坦',
      yField0: 34.4,
      yField1: 13.8,
    },
    {
      xField: '阿根廷',
      yField0: 44.4,
      yField1: 19.5,
    },
    {
      xField: '巴西',
      yField0: 24.4,
      yField1: 18.8,
    },
    {
      xField: '加拿大',
      yField0: 54.4,
      yField1: 24.7,
    },
    {
      xField: '中国',
      yField0: 104.4,
      yField1: 5.3,
    },
    {
      xField: '美国',
      yField0: 165.2,
      yField1: 72.9,
    },
]
