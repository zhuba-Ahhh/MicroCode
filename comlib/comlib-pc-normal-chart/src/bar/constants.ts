import { ChartConfigProps, ChartProps } from '../utils/constants';

export enum SubTypeEnum {
  Default = 'default',
  Stack = 'stack',
  Group = 'group'
}
export interface Data extends ChartProps {
  config: ChartConfigProps & {
    isStack?: boolean;
    isGroup?: boolean;
    seriesField?: string;
  };
  subType?: SubTypeEnum;
}

export const MockData: any = {
  default: [
    {
      year: '1951 年',
      value: 38,
    },
    {
      year: '1952 年',
      value: 52,
    },
    {
      year: '1956 年',
      value: 61,
    },
    {
      year: '1957 年',
      value: 145,
    },
    {
      year: '1958 年',
      value: 48,
    },
  ],
  stack: [
    {
      year: '1991',
      value: 3,
      type: 'Lon',
    },
    {
      year: '1992',
      value: 4,
      type: 'Lon',
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Lon',
    },
    {
      year: '1994',
      value: 5,
      type: 'Lon',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Lon',
    },
    {
      year: '1996',
      value: 6,
      type: 'Lon',
    },
    {
      year: '1997',
      value: 7,
      type: 'Lon',
    },
    {
      year: '1998',
      value: 9,
      type: 'Lon',
    },
    {
      year: '1999',
      value: 13,
      type: 'Lon',
    },
    {
      year: '1991',
      value: 3,
      type: 'Bor',
    },
    {
      year: '1992',
      value: 4,
      type: 'Bor',
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Bor',
    },
    {
      year: '1994',
      value: 5,
      type: 'Bor',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Bor',
    },
    {
      year: '1996',
      value: 6,
      type: 'Bor',
    },
    {
      year: '1997',
      value: 7,
      type: 'Bor',
    },
    {
      year: '1998',
      value: 9,
      type: 'Bor',
    },
    {
      year: '1999',
      value: 13,
      type: 'Bor',
    },
  ],
  group: [
    {
      value: 'Mon.',
      type: 'series1',
      year: 2800,
    },
    {
      value: 'Mon.',
      type: 'series2',
      year: 2260,
    },
    {
      value: 'Tues.',
      type: 'series1',
      year: 1800,
    },
    {
      value: 'Tues.',
      type: 'series2',
      year: 1300,
    },
    {
      value: 'Wed.',
      type: 'series1',
      year: 950,
    },
    {
      value: 'Wed.',
      type: 'series2',
      year: 900,
    },
    {
      value: 'Thur.',
      type: 'series1',
      year: 500,
    },
    {
      value: 'Thur.',
      type: 'series2',
      year: 390,
    },
    {
      value: 'Fri.',
      type: 'series1',
      year: 170,
    },
    {
      value: 'Fri.',
      type: 'series2',
      year: 100,
    },
  ],
};
