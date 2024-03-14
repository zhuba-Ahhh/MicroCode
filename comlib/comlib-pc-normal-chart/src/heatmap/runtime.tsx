import React, { useEffect, useState } from 'react';
import { MockData } from './constants';
import Heatmap from './heatmap';
import { Spin } from 'antd';

export default function ({ data, style, inputs, env }) {
  const [dataSource, setDataSource] = useState(env.edit ? MockData.slice(0, 20) : []);
  const [subDataSource, setSubDataSource] = useState(env.edit ? MockData.slice(20, 23) : []);
  const [loading, setLoading] = useState(false);
  const [tip, setTip] = useState('');
  useEffect(() => {
    inputs.setBgImg((url: string) => {
      data.config.annotations[0].src = url;
      data.config = { ...data.config };
    });
    inputs.data(({ dataSource, xAxis, yAxis }) => {
      if (!Array.isArray(dataSource)) return;
      if (xAxis) {
        Object.assign(data.config.xAxis, xAxis);
      }
      if (yAxis) {
        Object.assign(data.config.yAxis, yAxis);
      }
      if (xAxis || yAxis) {
        data.config = { ...data.config };
      }
      setDataSource(dataSource);
    });
    inputs.extraData0(({ dataSource, xAxis, yAxis }) => {
      if (!Array.isArray(dataSource)) return;
      if (xAxis) {
        Object.assign(data.subConfig[0].xAxis, xAxis);
      }
      if (yAxis) {
        Object.assign(data.subConfig[0].yAxis, yAxis);
      }
      setSubDataSource(dataSource);
    });
    inputs.setMainConfig((config: { label: any; useSubHeatMap: any }) => {
      data.config = {
        ...data.config,
        ...config,
        label: {
          ...data.config.label,
          ...config.label
        }
      };

      if (config.useSubHeatMap !== void 0) {
        data.useSubHeatMap = config.useSubHeatMap;
      }
    });
    inputs.setSubConfig((config: { label: any }) => {
      data.subConfig[0] = {
        ...data.subConfig[0],
        ...config,
        label: {
          ...data.subConfig[0].label,
          ...config.label
        }
      };
      data.subConfig = [...data.subConfig];
    });
    inputs.loading((ds: React.SetStateAction<string>) => {
      if (typeof ds === 'string') setTip(ds);
      setLoading(!!ds);
    });
  }, []);

  return (
    <Spin spinning={loading} tip={tip}>
      <Heatmap
        env={env}
        style={style}
        inputs={inputs}
        dataSource={dataSource}
        subDataSource={subDataSource}
        mainConfig={data.config}
        subConfig={data.subConfig}
        useSubHeatMap={data.useSubHeatMap}
      />
    </Spin>
  );
}
