import React, { useEffect, useState } from 'react';
import { TinyArea } from '@ant-design/charts';
import { Data, MockData } from './constants';
import { Spin } from 'antd';
import EmptyWrap from '../components/emptyWrap';

export default function ({ data, env, inputs, style }: RuntimeParams<Data>) {
  const [dataSourceInRuntime, setRuntimeDataSource] = useState([]);
  const [config, setConfig] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (env.runtime) {
      setLoading(true);
      inputs.data((ds: any) => {
        if (Array.isArray(ds)) {
          setRuntimeDataSource(ds);
        } else {
          setRuntimeDataSource([]);
          console.error('迷你面积图输入数据必须是数字数组');
        }
      });
      inputs.style((ds: any) => {
        setConfig({ ...config, ...ds });
      });
      const ids = ['xAxis', 'yAxis', 'tooltip'];
      ids.forEach((id) => {
        inputs[id]((ds: Object) => {
          setConfig({ ...config, [id]: { ...ds } });
        });
      });
      setLoading(false);
    }
  }, []);

  return (
    <Spin spinning={loading}>
      {!env.runtime || dataSourceInRuntime.length !== 0 ? (
        <TinyArea
          {...config}
          style={{ width: style.width, height: style.height }}
          data={env.edit ? MockData : dataSourceInRuntime}
          key={env.edit ? JSON.stringify(data.config) : undefined}
        />
      ) : (
        <EmptyWrap
          style={{ width: style.width, height: style.height }}
          emptyText={data.emptyText}
          useEmpty={data.useEmpty}
          small
        />
      )}
    </Spin>
  );
}
