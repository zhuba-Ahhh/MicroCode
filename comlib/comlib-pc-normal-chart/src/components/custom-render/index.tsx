import React, { useMemo } from 'react';
import * as antd from 'antd';
import * as icons from '@ant-design/icons';
import ErrorBoundary from './ErrorBoundary';
import { createElement } from './transform';

const ErrorStatus = ({ children = null }: { children?: any }) => (
  <div style={{ color: 'red' }}>
    自定义渲染错误
    <br />
    {children}
  </div>
);

export const Component = ({ code, scope }: { code: string; scope: Record<string, any> }) => {
  const ReactNode = useMemo(() => {
    try {
      return createElement(code);
    } catch (error) {
      return error?.toString();
    }
  }, [code, scope]);
  return (
    <ErrorBoundary key={code} fallback={<ErrorStatus />}>
      {typeof ReactNode === 'function' ? (
        <ReactNode {...scope} inject={{ React, antd, icons }} />
      ) : (
        <ErrorStatus>{ReactNode}</ErrorStatus>
      )}
    </ErrorBoundary>
  );
};
