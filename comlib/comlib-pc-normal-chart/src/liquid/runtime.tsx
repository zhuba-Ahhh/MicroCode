import React, { useEffect, useState, useCallback } from 'react';
import { Liquid } from '@ant-design/charts';
import { Data, MockData } from './constants';
import copy from 'copy-to-clipboard';
import { Spin, message } from 'antd';
import EmptyWrap from '../components/emptyWrap';
import { callInputs } from '../utils';
import { chartTypes } from '../charts/constants';

export default function (props: RuntimeParams<Data>) {
  const { data, env, inputs, outputs, style } = props;

  const [dataSourceInRuntime, setRuntimeDataSource] = useState({});
  const [loading, setLoading] = useState(false);
  const [tip, setTip] = useState('');

  useEffect(() => {
    if (env.runtime) {
      setLoading(true);
      inputs.data((val: React.SetStateAction<any>) => {
        if (typeof val.percent === 'number') {
          setRuntimeDataSource(val);
        }
      });
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    callInputs(chartTypes.LIQUID, props, {
      setLoading,
      setTip
    })
  }, []);

  const onReady = useCallback((graph: any) => {
    graph.on('legend-item-name:click', ({ target }) => {
      if (data.copyLegendTextOnClick) {
        const legendTitle = target?.attrs?.text;
        try {
          copy(legendTitle);
          message.success('复制成功 !');
        } catch {
          message.error('复制失败! 请稍后重试');
        }
      }
    });
  }, []);

  return (
    <Spin spinning={loading} tip={tip}>
      {!env.runtime || Object.keys(dataSourceInRuntime).length !== 0 ? (
        <Liquid
          style={{ width: style.width, height: style.height }}
          onReady={onReady}
          {...(env.edit
            ? { ...MockData, ...data.config }
            : { ...data.config, ...dataSourceInRuntime })}
          key={env.edit ? JSON.stringify(data.config) : undefined}
        />
      ) : (
        <EmptyWrap
          style={{ width: style.width, height: style.height }}
          emptyText={data.emptyText}
          useEmpty={data.useEmpty}
        />
      )}
    </Spin>
  );
}
