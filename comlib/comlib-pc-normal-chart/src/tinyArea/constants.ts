import { ChartConfigProps, ChartProps } from '../utils/constants';

export interface Data extends ChartProps {
  config: ChartConfigProps & {
    smooth?: boolean;
    line?: {
      color?: string;
      [key: string]: any;
    };
    areaStyle?: {
      fill: string;
      [key: string]: any;
    };
  };
}

export const MockData: any =  [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192,
  ]
