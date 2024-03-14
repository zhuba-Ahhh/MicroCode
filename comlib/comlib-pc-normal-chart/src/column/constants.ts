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
      name: 'London',
      year: 'Jan.',
      value: 18.9,
    },
    {
      name: 'London',
      year: 'Feb.',
      value: 28.8,
    },
    {
      name: 'London',
      year: 'Mar.',
      value: 39.3,
    },
    {
      name: 'London',
      year: 'Apr.',
      value: 81.4,
    },
    {
      name: 'London',
      year: 'May',
      value: 47,
    },
    {
      name: 'London',
      year: 'Jun.',
      value: 20.3,
    },
    {
      name: 'London',
      year: 'Jul.',
      value: 24,
    },
    {
      name: 'London',
      year: 'Aug.',
      value: 35.6,
    },
    {
      name: 'Berlin',
      year: 'Jan.',
      value: 12.4,
    },
    {
      name: 'Berlin',
      year: 'Feb.',
      value: 23.2,
    },
    {
      name: 'Berlin',
      year: 'Mar.',
      value: 34.5,
    },
    {
      name: 'Berlin',
      year: 'Apr.',
      value: 99.7,
    },
    {
      name: 'Berlin',
      year: 'May',
      value: 52.6,
    },
    {
      name: 'Berlin',
      year: 'Jun.',
      value: 35.5,
    },
    {
      name: 'Berlin',
      year: 'Jul.',
      value: 37.4,
    },
    {
      name: 'Berlin',
      year: 'Aug.',
      value: 42.4,
    },
  ],
};
MockData.stack = MockData.default;
