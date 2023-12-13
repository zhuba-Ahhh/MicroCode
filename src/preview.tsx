//连接器运行时
import { mock } from '@mybricks/plugin-connector-http';
import React from 'react';
import { render } from 'react-dom';

import events from './page-pc/configs/comEvents';

//引擎发布导出的JSON数据，这里是从localStorage中获取
let json = localStorage.getItem('--preview--');

if (!json) {
  throw new Error('数据错误');
}

// eslint-disable-next-line no-useless-catch
try {
  json = JSON.parse(json);
} catch (ex) {
  throw ex;
}

//在window变量上获取渲染器实例
const { render: renderUI } = (window as any)._mybricks_render_web;

//----------------------------------------------------------------------------

render(<Page />, document.querySelector('#root'));

function Page() {
  return (
    <div>
      {renderUI(json, {
        //渲染Mybricks toJSON的结果
        env: {
          //配置组件运行的各类环境信息
          i18n(text: any) {
            //多语言
            return text;
          },
          callConnector: mock,
          getQuery() {
            return {};
          },
          events
        }
      })}
    </div>
  );
}
