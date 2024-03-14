import { ChartConfigProps, ChartProps } from '../utils/constants';

export interface Data extends ChartProps {
  config: ChartConfigProps & {
    seriesField?: string;
  };
}


export const MockData: any = {
    id: 'root',
    value: {
      name: '股东会',
    },
    children: [
      {
        id: 'joel',
        value: {
          name: 'Joel Alan',
        },
        children: [
          {
            id: 'c1',
            value: {
              name: 'c1',
            },
            children: [
              {
                id: 'c1-1',
                value: {
                  name: 'c1-1',
                },
              },
              {
                id: 'c1-2',
                value: {
                  name: 'c1-2',
                },
              },
            ],
          },
          {
            id: 'c2',
            value: {
              name: 'c2',
            },
          },
          {
            id: 'c3',
            value: {
              name: 'c3',
            },
            children: [
              {
                id: 'c3-1',
                value: {
                  name: 'c3-1',
                },
              },
              {
                id: 'c3-2',
                value: {
                  name: 'c3-2',
                },
              },
              {
                id: 'c3-3',
                value: {
                  name: 'c3-3',
                },
              },
            ],
          },
        ],
      },
    ],
}
