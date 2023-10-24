import { useDataJSON } from '../types';

export default (userDataJSON: useDataJSON, changeUserDataJSON: (value: any) => void) => {
  return {
    geoView: {
      //配置布局视图
      type: 'pc', //pc或mobile
      nav: { float: true }, //大纲及组件视图的展现方式
      scenes: {
        //多场景【非必选】
        adder: [
          {
            type: 'popup',
            title: '对话框',
            template: {
              namespace: 'mybricks.basic-comlib.popup',
              deletable: false,
              asRoot: true
            }
          },
          {
            type: 'popup',
            title: '抽屉',
            template: {
              namespace: 'mybricks.basic-comlib.drawer',
              deletable: false,
              asRoot: true
            }
          }
        ]
      }
    },
    toplView: {
      //如果不需要这个面板，可以注释
      title: '交互', //逻辑交互面板标题
      cards: {
        //逻辑卡片
        main: {
          title: '页面'
        }
      },
      fx: {} //支持fx
    },
    editView: {
      items(
        _: any,
        cate0: {
          title: string;
          items: (
            | {
                title: string;
                type: string;
                value: { get: () => string; set: (_: any, v: string) => void };
                description?: undefined;
              }
            | {
                title: string;
                type: string;
                description: string;
                value: { get(): any; set(_context: any, v: any): void };
              }
          )[];
        }
      ) {
        cate0.title = `项目`;
        cate0.items = [
          {
            title: '名称',
            type: 'Text',
            value: {
              get: () => {
                return userDataJSON.title || 'index';
              },
              set: (_: any, v: string) => {
                changeUserDataJSON({
                  title: v
                });
              }
            }
          },
          {
            title: '路由参数',
            type: 'map',
            description: '调试模式下，路由参数配置',
            value: {
              get() {
                return userDataJSON.debugQuery || {};
              },
              set(_context: any, v: any) {
                changeUserDataJSON({
                  debugQuery: v
                });
              }
            }
          },
          {
            title: '主应用参数',
            type: 'map',
            description: '调试模式下，主应用参数配置',
            value: {
              get() {
                return userDataJSON.debugProps || {};
              },
              set(_context: any, v: any) {
                changeUserDataJSON({
                  debugProps: v
                });
              }
            }
          },
          {
            title: '用户信息',
            type: 'map',
            description: '调试模式下，用户信息配置',
            value: {
              get() {
                return userDataJSON.debugUserInfo || {};
              },
              set(_context: any, v: any) {
                changeUserDataJSON({
                  debugUserInfo: v
                });
              }
            }
          }
        ];
      }
    }
  };
};
