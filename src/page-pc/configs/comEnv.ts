import { call as callConnectorHttp } from '@mybricks/plugin-connector-http';
import { message } from 'antd';

import type { useDataJSON } from '../types';
import events from './comEvents';

export default (userDataJSON: useDataJSON) => ({
  //配置组件运行时的环境扩展【非必选】
  env: {
    //renderCom: render,
    i18n(title: string) {
      //多语言
      return title;
    },
    callConnector(
      connector: {
        id: string;
        type: string;
        title: string;
        script: string;
        inputSchema: any;
        outputSchema: any;
      },
      params: any
    ) {
      //调用连接器
      if (connector.type === 'http') {
        //服务接口类型
        return callConnectorHttp(connector, params, {
          // 发送请求前的钩子函数
          before(options) {
            return {
              ...options
            };
          }
        });
      } else {
        return Promise.reject('错误的连接器类型.');
      }
    }
  },
  events,
  // 环境变量
  get vars() {
    return {
      get getQuery() {
        return () => {
          return userDataJSON.debugQuery || {};
        };
      },
      get getProps() {
        return () => {
          return userDataJSON.debugProps || {};
        };
      },
      get getRouter() {
        const toast = (info: string) => {
          message.info(info);
        };
        return () => ({
          reload: () => {
            toast('reload');
          },
          redirect: ({ url }: { url: string }) => {
            toast(`redirect: ${url}`);
          },
          back: () => {
            toast('back');
          },
          forward: () => {
            toast('forward');
          },
          pushState: ({ state, title, url }: { state: any; title: string; url: string }) => {
            toast(`pushState: ${JSON.stringify({ state, title, url })}`);
          },
          openTab: ({ url, title }: { url: string; title: string }) => {
            toast(`open a new tab: ${JSON.stringify({ url, title })}`);
          }
        });
      }
    };
  }
});
