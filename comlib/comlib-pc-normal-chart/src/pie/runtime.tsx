import React, { useEffect, useState, useCallback } from 'react';
import { Pie } from '@ant-design/charts';
import { Data, MockData, OutputIds } from './constants';
import copy from 'copy-to-clipboard';
import { Spin, message } from 'antd';
import EmptyWrap from '../components/emptyWrap';
import { callInputs, changeMockDataField } from '../utils';
import { chartTypes } from '../charts/constants';

export default function (props: RuntimeParams<Data>) {
  const { data, env, inputs, outputs, style } = props;

  const [dataSourceInRuntime, setRuntimeDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tip, setTip] = useState('');

  useEffect(() => {
    if (env.runtime) {
      setLoading(true);
      inputs.data((val: React.SetStateAction<any[]>) => {
        if (Array.isArray(val)) {
          setRuntimeDataSource(val);
        }
      });
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    callInputs(chartTypes.PIE, props, {
      setLoading,
      setTip
    });
  }, []);

  const onReady = useCallback((graph: any) => {
    graph.on('element:click', (ele) => {
      if (data.useElementClick) {
        outputs[OutputIds.Element_Click](ele.data.data);
      }
    });
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
      {!env.runtime || dataSourceInRuntime.length !== 0 ? (
        <Pie
          style={{ width: style.width, height: style.height }}
          onReady={onReady}
          {...data.config}
          data={
            env.edit
              ? changeMockDataField(
                  MockData[data.subType],
                  { xField: data.config.colorField, yField: data.config.angleField },
                  { x: 'type' }
                )
              : dataSourceInRuntime
          }
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
