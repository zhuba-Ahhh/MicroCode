import toolsPlugin from '@mybricks/plugin-tools';

//加载连接器插件
import servicePlugin, { call as callConnectorHttp } from '@mybricks/plugin-connector-http';

import { localDataKey } from '../common';

export default (designerRef?: any, save?: any) => {
  return (
    designerRef && {
      shortcuts: {
        'ctrl+s': [save]
      },
      plugins: [servicePlugin(), toolsPlugin()], //配置插件
      comLibLoader() {
        //配置组件加载器
        return new Promise<string[]>((resolve) => {
          resolve([
            // PC通用组件库（提供了包括表单容器、表格、卡片等等常用的组件）
            `https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/7632_1.3.69/2023-10-20_16-22-29/edit.js`,
            // 基础组件库（提供了基础的组件，如：文本、形状、JS计算、类型转换等）
            `https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/7182_1.0.75/2023-10-12_10-48-27/edit.js`
            // 图表组件库
            // `https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/1047_1.0.10/2023-08-31_21-24-51/edit.js`,
            // 拓展组件库
            // `https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/7765_1.0.16/2023-09-14_20-30-23/edit.js`,
            // 门户组件库
            // `https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/6807_1.0.6/2023-09-22_15-51-23/edit.js`,
          ]);
          //resolve([testLib])//也可以加载本地组件库
        });
      },
      pageContentLoader() {
        //配置加载页面内容
        return new Promise<string | null>((resolve) => {
          let pageContent = window.localStorage.getItem(localDataKey);
          if (pageContent) {
            pageContent = JSON.parse(pageContent);
            resolve(pageContent as string);
          } else {
            return import('../assets/data.json').then((data) => {
              pageContent = JSON.parse(JSON.stringify(data));
              resolve(pageContent as string);
            });
          }
        });
      },
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
        items(_, cate0) {
          cate0.title = `项目`;
          // cate0.items = [
          //   {
          //     title: "名称",
          //     type: "Text",
          //     value: {
          //       get: () => {
          //         return useData.title;
          //       },
          //       set: (_, v: string) => {
          //         setUseData({
          // 	...useData,
          // 	title: v
          // });
          //       },
          //     },
          //   },
          // ];
        }
      },

      com: {
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
        events: [
          //配置事件【非必选】
          {
            type: 'jump',
            title: '跳转到',
            exe({ options }) {
              const page = options.page;
              if (page) {
                window.location.href = page;
              }
            },
            options: [
              {
                id: 'page',
                title: '页面',
                editor: 'textarea'
              }
            ]
          }
        ]
      }
    }
  );
};
