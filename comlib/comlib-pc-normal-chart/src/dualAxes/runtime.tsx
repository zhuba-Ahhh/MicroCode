import React, { useMemo, useEffect, useState, useCallback } from 'react';
import { DualAxes } from '@ant-design/charts';
import { Data, MockData, InputId } from './constants';
import copy from 'copy-to-clipboard';
import { Spin, message } from 'antd';
import EmptyWrap from '../components/emptyWrap';
import { callInputs } from '../utils';
import { chartTypes } from '../charts/constants';

export default function (props: RuntimeParams<Data>) {
  const { data, env, inputs, outputs, style } = props;

  const [leftDataSourceInRuntime, setRuntimeLeftDataSource] = useState([]);
  const [rightDataSourceInRuntime, setRuntimeRightDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tip, setTip] = useState('');

  useEffect(() => {
    if (env.runtime) {
      setLoading(true);
      inputs.data0((val: any) => {
        if (Array.isArray(val)) {
          setRuntimeLeftDataSource(val);
        }
      });
      inputs.data1((val: any) => {
        if (Array.isArray(val)) {
          setRuntimeRightDataSource(val);
        }
      });
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    callInputs(chartTypes.DUAL_AXES, props, {
      setLoading,
      setTip
    });
    data.config.geometryOptions.forEach((item) => {
      if (item.seriesField) {
        item.color = undefined;
      }
    });
    inputs[InputId.GeometryOptions] &&
      inputs[InputId.GeometryOptions]((val: Array<any>) => {
        if (!Array.isArray(val)) {
          return;
        }

        data.config.geometryOptions = data.config.geometryOptions.map((option, index) => {
          return {
            ...option,
            ...(val[index] || {})
          };
        });
      });
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

  const dataSourceInRuntime = useMemo(() => {
    return [leftDataSourceInRuntime, rightDataSourceInRuntime];
  }, [leftDataSourceInRuntime, rightDataSourceInRuntime]);

  return (
    <Spin spinning={loading} tip={tip}>
      {!env.runtime ||
      leftDataSourceInRuntime.length !== 0 ||
      rightDataSourceInRuntime.length !== 0 ? (
        <DualAxes
          style={{ width: style.width, height: style.height }}
          {...data.config}
          onReady={onReady}
          data={env.edit ? MockData : dataSourceInRuntime}
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
