import { ChartConfigProps } from '../utils/constants';

export interface Data {
  config: ChartConfigProps & {
    percent?: number;
    barWidthRatio?: number;
    color?: [string, string];
  };
}

export const MockData = 0.4;
