import { ChartConfigProps, ChartProps } from '../utils/constants';

export interface Data extends ChartProps {
  config: ChartConfigProps & {
    // area?: boolean;
    seriesField?: string;
  };
}

export const MockData: any = [
    {
      year: 'G2',
      value: 10371,
    },
    {
      year: 'G6',
      value: 7380,
    },
    {
      year: 'F2',
      value: 7414,
    },
    {
      year: 'L7',
      value: 2140,
    },
    {
      year: 'X6',
      value: 660,
    },
    {
      year: 'AVA',
      value: 885,
    },
    {
      year: 'G2Plot',
      value: 1626,
    },
]
