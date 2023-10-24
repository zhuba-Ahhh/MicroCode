import { message } from 'antd';
import { call as callConnectorHttp } from '@mybricks/plugin-connector-http';
import events from './comEvents';
import { useDataJSON } from '../types';

export default (userDataJSON: useDataJSON) => {
  return {
    //配置组件运行时的环境扩展【非必选】
    env: {
      //renderCom: render,
      i18n(title: any) {
        //多语言
        return title;
      },
      callConnector(connector: any, params: any) {
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
            reload: () => toast('reload'),
            redirect: ({ url }: { url: string }) => toast(`redirect: ${url}`),
            back: () => toast('back'),
            forward: () => toast('forward'),
            pushState: ({ state, title, url }: { state: any; title: string; url: string }) =>
              toast(`pushState: ${JSON.stringify({ state, title, url })}`),
            openTab: ({ url, title }: { url: string; title: string }) =>
              toast(`open a new tab: ${JSON.stringify({ url, title })}`)
          });
        }
      };
    }
  };
};
