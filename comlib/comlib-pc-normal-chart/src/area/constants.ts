import { ChartConfigProps, ChartProps } from '../utils/constants';

export enum SubTypeEnum {
  Default = 'default',
  Stack = 'stack'
}
export interface Data extends ChartProps {
  config: ChartConfigProps & {
    seriesField?: string;
  };
  subType?: SubTypeEnum;
}

export const MockData = {
  default: [
    {
      year: '2006 Q3',
      value: 1,
    },
    {
      year: '2006 Q4',
      value: 1.08,
    },
    {
      year: '2007 Q1',
      value: 1.17,
    },
    {
      year: '2007 Q2',
      value: 1.26,
    },
    {
      year: '2007 Q3',
      value: 1.34,
    },
    {
      year: '2007 Q4',
      value: 1.41,
    },
    {
      year: '2008 Q1',
      value: 1.52,
    },
    {
      year: '2008 Q2',
      value: 1.67,
    },
    {
      year: '2008 Q3',
      value: 1.84,
    },
    {
      year: '2008 Q4',
      value: 2.07,
    },
    {
      year: '2009 Q1',
      value: 2.39,
    },
    {
      year: '2009 Q2',
      value: 2.71,
    },
    {
      year: '2009 Q3',
      value: 3.03,
    },
    {
      year: '2009 Q4',
      value: 3.33,
    },
    {
      year: '2010 Q1',
      value: 3.5,
    },
    {
      year: '2010 Q2',
      value: 3.37,
    },
    {
      year: '2010 Q3',
      value: 3.15,
    },
    {
      year: '2010 Q4',
      value: 3.01,
    },
    {
      year: '2011 Q1',
      value: 2.8,
    },
    {
      year: '2011 Q2',
      value: 2.8,
    },
    {
      year: '2011 Q3',
      value: 2.84,
    },
    {
      year: '2011 Q4',
      value: 2.75,
    },
    {
      year: '2012 Q1',
      value: 2.64,
    },
    {
      year: '2012 Q2',
      value: 2.55,
    },
    {
      year: '2012 Q3',
      value: 2.46,
    },
    {
      year: '2012 Q4',
      value: 2.45,
    },
    {
      year: '2013 Q1',
      value: 2.57,
    },
    {
      year: '2013 Q2',
      value: 2.68,
    },
    {
      year: '2013 Q3',
      value: 2.8,
    },
    {
      year: '2013 Q4',
      value: 2.89,
    },
    {
      year: '2014 Q1',
      value: 2.85,
    },
    {
      year: '2014 Q2',
      value: 2.73,
    },
    {
      year: '2014 Q3',
      value: 2.54,
    },
    {
      year: '2014 Q4',
      value: 2.32,
    },
    {
      year: '2015 Q1',
      value: 2.25,
    },
    {
      year: '2015 Q2',
      value: 2.33,
    },
    {
      year: '2015 Q3',
      value: 2.53,
    },
    {
      year: '2015 Q4',
      value: 2.74,
    },
    {
      year: '2016 Q1',
      value: 2.76,
    },
    {
      year: '2016 Q2',
      value: 2.61,
    },
    {
      year: '2016 Q3',
      value: 2.35,
    },
    {
      year: '2016 Q4',
      value: 2.11,
    },
    {
      year: '2017 Q1',
      value: 2.08,
    },
    {
      year: '2017 Q2',
      value: 2.2,
    },
    {
      year: '2017 Q3',
      value: 2.38,
    },
    {
      year: '2017 Q4',
      value: 2.59,
    },
    {
      year: '2018 Q1',
      value: 2.63,
    },
    {
      year: '2018 Q2',
      value: 2.67,
    },
    {
      year: '2018 Q3',
      value: 2.64,
    },
    {
      year: '2018 Q4',
      value: 2.5,
    },
    {
      year: '2019 Q1',
      value: 2.31,
    },
    {
      year: '2019 Q2',
      value: 2.04,
    },
    {
      year: '2019 Q3',
      value: 1.83,
    },
    {
      year: '2019 Q4',
      value: 1.71,
    },
    {
      year: '2020 Q1',
      value: 1.65,
    },
    {
      year: '2020 Q2',
      value: 1.59,
    },
    {
      year: '2020 Q3',
      value: 1.58,
    },
  ],
  stack: [
    {
      type: '北美',
      year: 1965,
      value: 1390.5,
    },
    {
      type: '北美',
      year: 1966,
      value: 1469.5,
    },
    {
      type: '北美',
      year: 1967,
      value: 1521.7,
    },
    {
      type: '北美',
      year: 1968,
      value: 1615.9,
    },
    {
      type: '北美',
      year: 1969,
      value: 1703.7,
    },
    {
      type: '北美',
      year: 1970,
      value: 1767.8,
    },
    {
      type: '北美',
      year: 1971,
      value: 1806.2,
    },
    {
      type: '北美',
      year: 1972,
      value: 1903.5,
    },
    {
      type: '北美',
      year: 1973,
      value: 1986.6,
    },
    {
      type: '北美',
      year: 1974,
      value: 1952,
    },
    {
      type: '北美',
      year: 1975,
      value: 1910.4,
    },
    {
      type: '北美',
      year: 1976,
      value: 2015.8,
    },
    {
      type: '北美',
      year: 1977,
      value: 2074.7,
    },
    {
      type: '北美',
      year: 1978,
      value: 2092.7,
    },
    {
      type: '北美',
      year: 1979,
      value: 2123.8,
    },
    {
      type: '北美',
      year: 1980,
      value: 2068.3,
    },
    {
      type: '北美',
      year: 1981,
      value: 2018,
    },
    {
      type: '北美',
      year: 1982,
      value: 1951.5,
    },
    {
      type: '北美',
      year: 1983,
      value: 1941.1,
    },
    {
      type: '北美',
      year: 1984,
      value: 2046.2,
    },
    {
      type: '北美',
      year: 1985,
      value: 2053.1,
    },
    {
      type: '北美',
      year: 1986,
      value: 2060.7,
    },
    {
      type: '北美',
      year: 1987,
      value: 2130.8,
    },
    {
      type: '北美',
      year: 1988,
      value: 2223.5,
    },
    {
      type: '北美',
      year: 1989,
      value: 2275.9,
    },
    {
      type: '北美',
      year: 1990,
      value: 2280.7,
    },
    {
      type: '北美',
      year: 1991,
      value: 2282,
    },
    {
      type: '北美',
      year: 1992,
      value: 2319.7,
    },
    {
      type: '北美',
      year: 1993,
      value: 2366.6,
    },
    {
      type: '北美',
      year: 1994,
      value: 2420.2,
    },
    {
      type: '北美',
      year: 1995,
      value: 2466.9,
    },
    {
      type: '北美',
      year: 1996,
      value: 2547.4,
    },
    {
      type: '北美',
      year: 1997,
      value: 2569,
    },
    {
      type: '北美',
      year: 1998,
      value: 2585.2,
    },
    {
      type: '北美',
      year: 1999,
      value: 2633.8,
    },
    {
      type: '北美',
      year: 2000,
      value: 2699.4,
    },
    {
      type: '北美',
      year: 2001,
      value: 2640.1,
    },
    {
      type: '北美',
      year: 2002,
      value: 2687.7,
    },
    {
      type: '北美',
      year: 2003,
      value: 2700.7,
    },
    {
      type: '北美',
      year: 2004,
      value: 2759.4,
    },
    {
      type: '北美',
      year: 2005,
      value: 2775.6,
    },
    {
      type: '北美',
      year: 2006,
      value: 2761.9,
    },
    {
      type: '北美',
      year: 2007,
      value: 2809.5,
    },
    {
      type: '北美',
      year: 2008,
      value: 2759.4,
    },
    {
      type: '北美',
      year: 2009,
      value: 2632.5,
    },
    {
      type: '北美',
      year: 2010,
      value: 2720.7,
    },
    {
      type: '北美',
      year: 2011,
      value: 2722.9,
    },
    {
      type: '北美',
      year: 2012,
      value: 2665.1,
    },
    {
      type: '北美',
      year: 2013,
      value: 2738.3,
    },
    {
      type: '北美',
      year: 2014,
      value: 2766.8,
    },
    {
      type: '北美',
      year: 2015,
      value: 2739.7,
    },
    {
      type: '北美',
      year: 2016,
      value: 2761.9,
    },
    {
      type: '北美',
      year: 2017,
      value: 2772.8,
    },
    {
      type: '中南美',
      year: 1965,
      value: 109.2,
    },
    {
      type: '中南美',
      year: 1966,
      value: 115.7,
    },
    {
      type: '中南美',
      year: 1967,
      value: 120.5,
    },
    {
      type: '中南美',
      year: 1968,
      value: 128,
    },
    {
      type: '中南美',
      year: 1969,
      value: 134.4,
    },
    {
      type: '中南美',
      year: 1970,
      value: 142.2,
    },
    {
      type: '中南美',
      year: 1971,
      value: 157.5,
    },
    {
      type: '中南美',
      year: 1972,
      value: 169.5,
    },
    {
      type: '中南美',
      year: 1973,
      value: 186.3,
    },
    {
      type: '中南美',
      year: 1974,
      value: 195.5,
    },
    {
      type: '中南美',
      year: 1975,
      value: 198,
    },
    {
      type: '中南美',
      year: 1976,
      value: 211.7,
    },
    {
      type: '中南美',
      year: 1977,
      value: 223.8,
    },
    {
      type: '中南美',
      year: 1978,
      value: 236.5,
    },
    {
      type: '中南美',
      year: 1979,
      value: 251.8,
    },
    {
      type: '中南美',
      year: 1980,
      value: 262.9,
    },
    {
      type: '中南美',
      year: 1981,
      value: 262.7,
    },
    {
      type: '中南美',
      year: 1982,
      value: 265.9,
    },
    {
      type: '中南美',
      year: 1983,
      value: 268.3,
    },
    {
      type: '中南美',
      year: 1984,
      value: 278.3,
    },
    {
      type: '中南美',
      year: 1985,
      value: 285.2,
    },
    {
      type: '中南美',
      year: 1986,
      value: 304.2,
    },
    {
      type: '中南美',
      year: 1987,
      value: 315.4,
    },
    {
      type: '中南美',
      year: 1988,
      value: 324.6,
    },
    {
      type: '中南美',
      year: 1989,
      value: 329.9,
    },
    {
      type: '中南美',
      year: 1990,
      value: 331.1,
    },
    {
      type: '中南美',
      year: 1991,
      value: 339.7,
    },
    {
      type: '中南美',
      year: 1992,
      value: 355.8,
    },
    {
      type: '中南美',
      year: 1993,
      value: 368.8,
    },
    {
      type: '中南美',
      year: 1994,
      value: 390.9,
    },
    {
      type: '中南美',
      year: 1995,
      value: 408.3,
    },
    {
      type: '中南美',
      year: 1996,
      value: 425.8,
    },
    {
      type: '中南美',
      year: 1997,
      value: 448.2,
    },
    {
      type: '中南美',
      year: 1998,
      value: 465.5,
    },
    {
      type: '中南美',
      year: 1999,
      value: 463.7,
    },
    {
      type: '中南美',
      year: 2000,
      value: 476.1,
    },
    {
      type: '中南美',
      year: 2001,
      value: 477.7,
    },
    {
      type: '中南美',
      year: 2002,
      value: 483.5,
    },
    {
      type: '中南美',
      year: 2003,
      value: 489.3,
    },
    {
      type: '中南美',
      year: 2004,
      value: 515.5,
    },
    {
      type: '中南美',
      year: 2005,
      value: 533.6,
    },
    {
      type: '中南美',
      year: 2006,
      value: 564,
    },
    {
      type: '中南美',
      year: 2007,
      value: 587,
    },
    {
      type: '中南美',
      year: 2008,
      value: 605.8,
    },
    {
      type: '中南美',
      year: 2009,
      value: 596.8,
    },
    {
      type: '中南美',
      year: 2010,
      value: 632.5,
    },
    {
      type: '中南美',
      year: 2011,
      value: 658.9,
    },
    {
      type: '中南美',
      year: 2012,
      value: 676.5,
    },
    {
      type: '中南美',
      year: 2013,
      value: 692,
    },
    {
      type: '中南美',
      year: 2014,
      value: 697.7,
    },
    {
      type: '中南美',
      year: 2015,
      value: 701.1,
    },
    {
      type: '中南美',
      year: 2016,
      value: 696.8,
    },
    {
      type: '中南美',
      year: 2017,
      value: 700.6,
    },
    {
      type: '欧洲',
      year: 1965,
      value: 1058.1,
    },
    {
      type: '欧洲',
      year: 1966,
      value: 1089.7,
    },
    {
      type: '欧洲',
      year: 1967,
      value: 1121.7,
    },
    {
      type: '欧洲',
      year: 1968,
      value: 1196.6,
    },
    {
      type: '欧洲',
      year: 1969,
      value: 1285.5,
    },
    {
      type: '欧洲',
      year: 1970,
      value: 1369,
    },
    {
      type: '欧洲',
      year: 1971,
      value: 1406.2,
    },
    {
      type: '欧洲',
      year: 1972,
      value: 1472.7,
    },
    {
      type: '欧洲',
      year: 1973,
      value: 1558,
    },
    {
      type: '欧洲',
      year: 1974,
      value: 1535.5,
    },
    {
      type: '欧洲',
      year: 1975,
      value: 1519.3,
    },
    {
      type: '欧洲',
      year: 1976,
      value: 1606.9,
    },
    {
      type: '欧洲',
      year: 1977,
      value: 1632.4,
    },
    {
      type: '欧洲',
      year: 1978,
      value: 1687.5,
    },
    {
      type: '欧洲',
      year: 1979,
      value: 1749.6,
    },
    {
      type: '欧洲',
      year: 1980,
      value: 1706.4,
    },
    {
      type: '欧洲',
      year: 1981,
      value: 1661.4,
    },
    {
      type: '欧洲',
      year: 1982,
      value: 1630.2,
    },
    {
      type: '欧洲',
      year: 1983,
      value: 1645.2,
    },
    {
      type: '欧洲',
      year: 1984,
      value: 1686.9,
    },
    {
      type: '欧洲',
      year: 1985,
      value: 1779.4,
    },
    {
      type: '欧洲',
      year: 1986,
      value: 1811.3,
    },
    {
      type: '欧洲',
      year: 1987,
      value: 1849.7,
    },
    {
      type: '欧洲',
      year: 1988,
      value: 1870,
    },
    {
      type: '欧洲',
      year: 1989,
      value: 1875,
    },
    {
      type: '欧洲',
      year: 1990,
      value: 1853.3,
    },
    {
      type: '欧洲',
      year: 1991,
      value: 1844.6,
    },
    {
      type: '欧洲',
      year: 1992,
      value: 1814.1,
    },
    {
      type: '欧洲',
      year: 1993,
      value: 1805.3,
    },
    {
      type: '欧洲',
      year: 1994,
      value: 1791.3,
    },
    {
      type: '欧洲',
      year: 1995,
      value: 1836.2,
    },
    {
      type: '欧洲',
      year: 1996,
      value: 1896.1,
    },
    {
      type: '欧洲',
      year: 1997,
      value: 1896.4,
    },
    {
      type: '欧洲',
      year: 1998,
      value: 1918.8,
    },
    {
      type: '欧洲',
      year: 1999,
      value: 1907.7,
    },
    {
      type: '欧洲',
      year: 2000,
      value: 1932.1,
    },
    {
      type: '欧洲',
      year: 2001,
      value: 1959.2,
    },
    {
      type: '欧洲',
      year: 2002,
      value: 1954.8,
    },
    {
      type: '欧洲',
      year: 2003,
      value: 1991.6,
    },
    {
      type: '欧洲',
      year: 2004,
      value: 2025.4,
    },
    {
      type: '欧洲',
      year: 2005,
      value: 2037.4,
    },
    {
      type: '欧洲',
      year: 2006,
      value: 2056.4,
    },
    {
      type: '欧洲',
      year: 2007,
      value: 2041.7,
    },
    {
      type: '欧洲',
      year: 2008,
      value: 2038.5,
    },
    {
      type: '欧洲',
      year: 2009,
      value: 1932.1,
    },
    {
      type: '欧洲',
      year: 2010,
      value: 2001.1,
    },
    {
      type: '欧洲',
      year: 2011,
      value: 1949.1,
    },
    {
      type: '欧洲',
      year: 2012,
      value: 1944.3,
    },
    {
      type: '欧洲',
      year: 2013,
      value: 1934,
    },
    {
      type: '欧洲',
      year: 2014,
      value: 1871.2,
    },
    {
      type: '欧洲',
      year: 2015,
      value: 1908.7,
    },
    {
      type: '欧洲',
      year: 2016,
      value: 1934.6,
    },
    {
      type: '欧洲',
      year: 2017,
      value: 1969.5,
    },
    {
      type: 'CIS 地区',
      year: 1965,
      value: 593.3,
    },
    {
      type: 'CIS 地区',
      year: 1966,
      value: 630.9,
    },
    {
      type: 'CIS 地区',
      year: 1967,
      value: 663.2,
    },
    {
      type: 'CIS 地区',
      year: 1968,
      value: 687.8,
    },
    {
      type: 'CIS 地区',
      year: 1969,
      value: 719,
    },
    {
      type: 'CIS 地区',
      year: 1970,
      value: 754.8,
    },
    {
      type: 'CIS 地区',
      year: 1971,
      value: 791.9,
    },
    {
      type: 'CIS 地区',
      year: 1972,
      value: 832.3,
    },
    {
      type: 'CIS 地区',
      year: 1973,
      value: 875.1,
    },
    {
      type: 'CIS 地区',
      year: 1974,
      value: 923.3,
    },
    {
      type: 'CIS 地区',
      year: 1975,
      value: 969,
    },
    {
      type: 'CIS 地区',
      year: 1976,
      value: 1006.5,
    },
    {
      type: 'CIS 地区',
      year: 1977,
      value: 1051.4,
    },
    {
      type: 'CIS 地区',
      year: 1978,
      value: 1094.2,
    },
    {
      type: 'CIS 地区',
      year: 1979,
      value: 1127.1,
    },
    {
      type: 'CIS 地区',
      year: 1980,
      value: 1150.1,
    },
    {
      type: 'CIS 地区',
      year: 1981,
      value: 1174.5,
    },
    {
      type: 'CIS 地区',
      year: 1982,
      value: 1204,
    },
    {
      type: 'CIS 地区',
      year: 1983,
      value: 1229,
    },
    {
      type: 'CIS 地区',
      year: 1984,
      value: 1274.6,
    },
    {
      type: 'CIS 地区',
      year: 1985,
      value: 1257,
    },
    {
      type: 'CIS 地区',
      year: 1986,
      value: 1282,
    },
    {
      type: 'CIS 地区',
      year: 1987,
      value: 1318,
    },
    {
      type: 'CIS 地区',
      year: 1988,
      value: 1341.5,
    },
    {
      type: 'CIS 地区',
      year: 1989,
      value: 1332.5,
    },
    {
      type: 'CIS 地区',
      year: 1990,
      value: 1350.3,
    },
    {
      type: 'CIS 地区',
      year: 1991,
      value: 1308.9,
    },
    {
      type: 'CIS 地区',
      year: 1992,
      value: 1233.1,
    },
    {
      type: 'CIS 地区',
      year: 1993,
      value: 1121,
    },
    {
      type: 'CIS 地区',
      year: 1994,
      value: 1012.2,
    },
    {
      type: 'CIS 地区',
      year: 1995,
      value: 951.2,
    },
    {
      type: 'CIS 地区',
      year: 1996,
      value: 920,
    },
    {
      type: 'CIS 地区',
      year: 1997,
      value: 878.4,
    },
    {
      type: 'CIS 地区',
      year: 1998,
      value: 871.7,
    },
    {
      type: 'CIS 地区',
      year: 1999,
      value: 881.3,
    },
    {
      type: 'CIS 地区',
      year: 2000,
      value: 888.5,
    },
    {
      type: 'CIS 地区',
      year: 2001,
      value: 905.5,
    },
    {
      type: 'CIS 地区',
      year: 2002,
      value: 904,
    },
    {
      type: 'CIS 地区',
      year: 2003,
      value: 924.3,
    },
    {
      type: 'CIS 地区',
      year: 2004,
      value: 938.7,
    },
    {
      type: 'CIS 地区',
      year: 2005,
      value: 942.3,
    },
    {
      type: 'CIS 地区',
      year: 2006,
      value: 978.6,
    },
    {
      type: 'CIS 地区',
      year: 2007,
      value: 989.8,
    },
    {
      type: 'CIS 地区',
      year: 2008,
      value: 998.1,
    },
    {
      type: 'CIS 地区',
      year: 2009,
      value: 926.8,
    },
    {
      type: 'CIS 地区',
      year: 2010,
      value: 967.8,
    },
    {
      type: 'CIS 地区',
      year: 2011,
      value: 1006,
    },
    {
      type: 'CIS 地区',
      year: 2012,
      value: 1014.1,
    },
    {
      type: 'CIS 地区',
      year: 2013,
      value: 989.2,
    },
    {
      type: 'CIS 地区',
      year: 2014,
      value: 987,
    },
    {
      type: 'CIS 地区',
      year: 2015,
      value: 960.7,
    },
    {
      type: 'CIS 地区',
      year: 2016,
      value: 972,
    },
    {
      type: 'CIS 地区',
      year: 2017,
      value: 978,
    },
    {
      type: '中东',
      year: 1965,
      value: 48.3,
    },
    {
      type: '中东',
      year: 1966,
      value: 50.4,
    },
    {
      type: '中东',
      year: 1967,
      value: 52.7,
    },
    {
      type: '中东',
      year: 1968,
      value: 55.6,
    },
    {
      type: '中东',
      year: 1969,
      value: 58.5,
    },
    {
      type: '中东',
      year: 1970,
      value: 61.5,
    },
    {
      type: '中东',
      year: 1971,
      value: 64.9,
    },
    {
      type: '中东',
      year: 1972,
      value: 70.6,
    },
    {
      type: '中东',
      year: 1973,
      value: 77.4,
    },
    {
      type: '中东',
      year: 1974,
      value: 82.3,
    },
    {
      type: '中东',
      year: 1975,
      value: 82.1,
    },
    {
      type: '中东',
      year: 1976,
      value: 93,
    },
    {
      type: '中东',
      year: 1977,
      value: 105.7,
    },
    {
      type: '中东',
      year: 1978,
      value: 111,
    },
    {
      type: '中东',
      year: 1979,
      value: 130.5,
    },
    {
      type: '中东',
      year: 1980,
      value: 126.5,
    },
    {
      type: '中东',
      year: 1981,
      value: 137.9,
    },
    {
      type: '中东',
      year: 1982,
      value: 152.8,
    },
    {
      type: '中东',
      year: 1983,
      value: 167.1,
    },
    {
      type: '中东',
      year: 1984,
      value: 188.9,
    },
    {
      type: '中东',
      year: 1985,
      value: 200.8,
    },
    {
      type: '中东',
      year: 1986,
      value: 209.8,
    },
    {
      type: '中东',
      year: 1987,
      value: 224.5,
    },
    {
      type: '中东',
      year: 1988,
      value: 238.5,
    },
    {
      type: '中东',
      year: 1989,
      value: 251.5,
    },
    {
      type: '中东',
      year: 1990,
      value: 260,
    },
    {
      type: '中东',
      year: 1991,
      value: 271.7,
    },
    {
      type: '中东',
      year: 1992,
      value: 296.4,
    },
    {
      type: '中东',
      year: 1993,
      value: 304.7,
    },
    {
      type: '中东',
      year: 1994,
      value: 340.3,
    },
    {
      type: '中东',
      year: 1995,
      value: 352.4,
    },
    {
      type: '中东',
      year: 1996,
      value: 363.9,
    },
    {
      type: '中东',
      year: 1997,
      value: 381.3,
    },
    {
      type: '中东',
      year: 1998,
      value: 387.7,
    },
    {
      type: '中东',
      year: 1999,
      value: 395,
    },
    {
      type: '中东',
      year: 2000,
      value: 414.9,
    },
    {
      type: '中东',
      year: 2001,
      value: 435.6,
    },
    {
      type: '中东',
      year: 2002,
      value: 459.4,
    },
    {
      type: '中东',
      year: 2003,
      value: 479.3,
    },
    {
      type: '中东',
      year: 2004,
      value: 517.1,
    },
    {
      type: '中东',
      year: 2005,
      value: 553.7,
    },
    {
      type: '中东',
      year: 2006,
      value: 582.6,
    },
    {
      type: '中东',
      year: 2007,
      value: 618.2,
    },
    {
      type: '中东',
      year: 2008,
      value: 657.1,
    },
    {
      type: '中东',
      year: 2009,
      value: 677.2,
    },
    {
      type: '中东',
      year: 2010,
      value: 714.3,
    },
    {
      type: '中东',
      year: 2011,
      value: 740.9,
    },
    {
      type: '中东',
      year: 2012,
      value: 771.1,
    },
    {
      type: '中东',
      year: 2013,
      value: 795.3,
    },
    {
      type: '中东',
      year: 2014,
      value: 823.1,
    },
    {
      type: '中东',
      year: 2015,
      value: 848.3,
    },
    {
      type: '中东',
      year: 2016,
      value: 869.7,
    },
    {
      type: '中东',
      year: 2017,
      value: 897.2,
    },
    {
      type: '非洲',
      year: 1965,
      value: 60.6,
    },
    {
      type: '非洲',
      year: 1966,
      value: 63.3,
    },
    {
      type: '非洲',
      year: 1967,
      value: 64,
    },
    {
      type: '非洲',
      year: 1968,
      value: 67.4,
    },
    {
      type: '非洲',
      year: 1969,
      value: 68.9,
    },
    {
      type: '非洲',
      year: 1970,
      value: 74.7,
    },
    {
      type: '非洲',
      year: 1971,
      value: 81.2,
    },
    {
      type: '非洲',
      year: 1972,
      value: 86.3,
    },
    {
      type: '非洲',
      year: 1973,
      value: 92.9,
    },
    {
      type: '非洲',
      year: 1974,
      value: 97.6,
    },
    {
      type: '非洲',
      year: 1975,
      value: 103.3,
    },
    {
      type: '非洲',
      year: 1976,
      value: 112.4,
    },
    {
      type: '非洲',
      year: 1977,
      value: 118.4,
    },
    {
      type: '非洲',
      year: 1978,
      value: 123.1,
    },
    {
      type: '非洲',
      year: 1979,
      value: 134.4,
    },
    {
      type: '非洲',
      year: 1980,
      value: 144.8,
    },
    {
      type: '非洲',
      year: 1981,
      value: 161.5,
    },
    {
      type: '非洲',
      year: 1982,
      value: 172.7,
    },
    {
      type: '非洲',
      year: 1983,
      value: 177.5,
    },
    {
      type: '非洲',
      year: 1984,
      value: 183.7,
    },
    {
      type: '非洲',
      year: 1985,
      value: 190.7,
    },
    {
      type: '非洲',
      year: 1986,
      value: 195.1,
    },
    {
      type: '非洲',
      year: 1987,
      value: 201.2,
    },
    {
      type: '非洲',
      year: 1988,
      value: 215.7,
    },
    {
      type: '非洲',
      year: 1989,
      value: 216.3,
    },
    {
      type: '非洲',
      year: 1990,
      value: 223.3,
    },
    {
      type: '非洲',
      year: 1991,
      value: 223,
    },
    {
      type: '非洲',
      year: 1992,
      value: 226.3,
    },
    {
      type: '非洲',
      year: 1993,
      value: 227.2,
    },
    {
      type: '非洲',
      year: 1994,
      value: 233.9,
    },
    {
      type: '非洲',
      year: 1995,
      value: 243.4,
    },
    {
      type: '非洲',
      year: 1996,
      value: 250.1,
    },
    {
      type: '非洲',
      year: 1997,
      value: 255.1,
    },
    {
      type: '非洲',
      year: 1998,
      value: 259.1,
    },
    {
      type: '非洲',
      year: 1999,
      value: 267.2,
    },
    {
      type: '非洲',
      year: 2000,
      value: 273.4,
    },
    {
      type: '非洲',
      year: 2001,
      value: 283.8,
    },
    {
      type: '非洲',
      year: 2002,
      value: 287.1,
    },
    {
      type: '非洲',
      year: 2003,
      value: 300.6,
    },
    {
      type: '非洲',
      year: 2004,
      value: 323.2,
    },
    {
      type: '非洲',
      year: 2005,
      value: 326.5,
    },
    {
      type: '非洲',
      year: 2006,
      value: 332.8,
    },
    {
      type: '非洲',
      year: 2007,
      value: 346.9,
    },
    {
      type: '非洲',
      year: 2008,
      value: 368.7,
    },
    {
      type: '非洲',
      year: 2009,
      value: 373.4,
    },
    {
      type: '非洲',
      year: 2010,
      value: 386.9,
    },
    {
      type: '非洲',
      year: 2011,
      value: 385.6,
    },
    {
      type: '非洲',
      year: 2012,
      value: 399.8,
    },
    {
      type: '非洲',
      year: 2013,
      value: 410.6,
    },
    {
      type: '非洲',
      year: 2014,
      value: 425.1,
    },
    {
      type: '非洲',
      year: 2015,
      value: 429.4,
    },
    {
      type: '非洲',
      year: 2016,
      value: 438,
    },
    {
      type: '非洲',
      year: 2017,
      value: 449.5,
    },
    {
      type: '亚太地区',
      year: 1965,
      value: 441.6,
    },
    {
      type: '亚太地区',
      year: 1966,
      value: 482.9,
    },
    {
      type: '亚太地区',
      year: 1967,
      value: 506.1,
    },
    {
      type: '亚太地区',
      year: 1968,
      value: 544.1,
    },
    {
      type: '亚太地区',
      year: 1969,
      value: 619.8,
    },
    {
      type: '亚太地区',
      year: 1970,
      value: 704.9,
    },
    {
      type: '亚太地区',
      year: 1971,
      value: 771.4,
    },
    {
      type: '亚太地区',
      year: 1972,
      value: 817.9,
    },
    {
      type: '亚太地区',
      year: 1973,
      value: 885.1,
    },
    {
      type: '亚太地区',
      year: 1974,
      value: 902.2,
    },
    {
      type: '亚太地区',
      year: 1975,
      value: 936.1,
    },
    {
      type: '亚太地区',
      year: 1976,
      value: 983.2,
    },
    {
      type: '亚太地区',
      year: 1977,
      value: 1037.3,
    },
    {
      type: '亚太地区',
      year: 1978,
      value: 1106.2,
    },
    {
      type: '亚太地区',
      year: 1979,
      value: 1157.6,
    },
    {
      type: '亚太地区',
      year: 1980,
      value: 1168,
    },
    {
      type: '亚太地区',
      year: 1981,
      value: 1175,
    },
    {
      type: '亚太地区',
      year: 1982,
      value: 1186.8,
    },
    {
      type: '亚太地区',
      year: 1983,
      value: 1240.7,
    },
    {
      type: '亚太地区',
      year: 1984,
      value: 1326.7,
    },
    {
      type: '亚太地区',
      year: 1985,
      value: 1395.9,
    },
    {
      type: '亚太地区',
      year: 1986,
      value: 1456.5,
    },
    {
      type: '亚太地区',
      year: 1987,
      value: 1538,
    },
    {
      type: '亚太地区',
      year: 1988,
      value: 1650.5,
    },
    {
      type: '亚太地区',
      year: 1989,
      value: 1740.4,
    },
    {
      type: '亚太地区',
      year: 1990,
      value: 1812.8,
    },
    {
      type: '亚太地区',
      year: 1991,
      value: 1896.9,
    },
    {
      type: '亚太地区',
      year: 1992,
      value: 1984.5,
    },
    {
      type: '亚太地区',
      year: 1993,
      value: 2088.9,
    },
    {
      type: '亚太地区',
      year: 1994,
      value: 2204.3,
    },
    {
      type: '亚太地区',
      year: 1995,
      value: 2306.8,
    },
    {
      type: '亚太地区',
      year: 1996,
      value: 2413.2,
    },
    {
      type: '亚太地区',
      year: 1997,
      value: 2487,
    },
    {
      type: '亚太地区',
      year: 1998,
      value: 2481,
    },
    {
      type: '亚太地区',
      year: 1999,
      value: 2577.9,
    },
    {
      type: '亚太地区',
      year: 2000,
      value: 2671.9,
    },
    {
      type: '亚太地区',
      year: 2001,
      value: 2759.7,
    },
    {
      type: '亚太地区',
      year: 2002,
      value: 2901.2,
    },
    {
      type: '亚太地区',
      year: 2003,
      value: 3145.5,
    },
    {
      type: '亚太地区',
      year: 2004,
      value: 3445.8,
    },
    {
      type: '亚太地区',
      year: 2005,
      value: 3724.3,
    },
    {
      type: '亚太地区',
      year: 2006,
      value: 3944,
    },
    {
      type: '亚太地区',
      year: 2007,
      value: 4195.2,
    },
    {
      type: '亚太地区',
      year: 2008,
      value: 4310.8,
    },
    {
      type: '亚太地区',
      year: 2009,
      value: 4411.1,
    },
    {
      type: '亚太地区',
      year: 2010,
      value: 4696.1,
    },
    {
      type: '亚太地区',
      year: 2011,
      value: 4951.1,
    },
    {
      type: '亚太地区',
      year: 2012,
      value: 5118.2,
    },
    {
      type: '亚太地区',
      year: 2013,
      value: 5269.9,
    },
    {
      type: '亚太地区',
      year: 2014,
      value: 5382.9,
    },
    {
      type: '亚太地区',
      year: 2015,
      value: 5472.4,
    },
    {
      type: '亚太地区',
      year: 2016,
      value: 5585.5,
    },
    {
      type: '亚太地区',
      year: 2017,
      value: 5743.6,
    },
  ],
};
