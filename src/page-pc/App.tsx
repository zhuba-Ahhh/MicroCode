import React, { useRef, useCallback } from "react";
import { message } from "antd";
import toolsPlugin from "@mybricks/plugin-tools";
import css from "./assets/App.less";

//加载连接器插件
import servicePlugin, {
  call as callConnectorHttp,
} from "@mybricks/plugin-connector-http";
import htmlTpt from "./pub-tpt.html";

//在window上获取设计器实例
const Designer = (window as any).mybricks.SPADesigner;

const config = {
  plugins: [toolsPlugin(), servicePlugin()], //配置插件
  comLibLoader() {
    //配置组件加载器
    return new Promise<string[]>((resolve, reject) => {
      resolve([
        //PC通用组件库（提供了包括表单容器、表格、卡片等等常用的组件）
        `https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/7632_1.2.72/2023-08-28_16-50-20/edit.js`,
        //基础组件库（提供了基础的组件，如：文本、形状、JS计算、类型转换等）
        `https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/7182_1.0.55/2023-08-23_22-05-28/edit.js`,
      ]);
      //resolve([testLib])//也可以加载本地组件库
    });
  },
  pageContentLoader() {
    //配置加载页面内容
    return new Promise<string>((resolve, reject) => {
      let pageContent = window.localStorage.getItem(localDataKey);
      if (pageContent) {
        pageContent = JSON.parse(pageContent);
        resolve(pageContent as string);
      } else {
        resolve("");
        // return import("./demo-data.json").then((data) => {
        //   pageContent = JSON.parse(JSON.stringify(data));
        //   resolve(pageContent as string);
        // });
      }
    });
  },
  geoView: {
    //配置布局视图
    type: "pc", //pc或mobile
    nav: { float: false }, //大纲及组件视图的展现方式
    scenes: {
      //多场景【非必选】
      adder: [
        {
          type: "popup",
          title: "对话框",
          template: {
            namespace: "mybricks.basic-comlib.popup",
            deletable: false,
            asRoot: true,
          },
        },
        {
          type: "popup",
          title: "抽屉",
          template: {
            namespace: "mybricks.basic-comlib.drawer",
            deletable: false,
            asRoot: true,
          },
        },
      ],
    },
  },
  toplView: {
    //如果不需要这个面板，可以注释
    title: "交互", //逻辑交互面板标题
    cards: {
      //逻辑卡片
      main: {
        title: "页面",
      },
    },
    fx: {}, //支持fx
  },
  com: {
    //配置组件运行时的环境扩展【非必选】
    env: {
      //renderCom: render,
      i18n(title: any) {
        //多语言
        return title;
      },
      callConnector(connector, params) {
        //调用连接器
        if (connector.type === "http") {
          //服务接口类型
          return callConnectorHttp(connector, params, {
            // 发送请求前的钩子函数
            before(options) {
              return {
                ...options,
              };
            },
          });
        } else {
          return Promise.reject("错误的连接器类型.");
        }
      },
    },
    events: [
      //配置事件【非必选】
      {
        type: "jump",
        title: "跳转到",
        exe({ options }) {
          const page = options.page;
          if (page) {
            window.location.href = page;
          }
        },
        options: [
          {
            id: "page",
            title: "页面",
            editor: "textarea",
          },
        ],
      },
    ],
  },
};

const localDataKey = "--mybricks--";

export default function App() {
  const designerRef = useRef<{
    switchActivity: any;
    dump: () => any;
    toJSON: () => any;
  }>();

  /**
   * 处理引擎消息
   */
  const onMessage = useCallback((type: string | number, msg: any) => {
    message.destroy();
    message[type](msg);
  }, []);

  /**
   * 保存
   */
  const save = useCallback(() => {
    const json = designerRef.current?.dump();

    window.localStorage.setItem(localDataKey, JSON.stringify(json));
    message.info(`保存完成`);
  }, []);

  const clear = useCallback(() => {
    window.localStorage.removeItem(localDataKey);
    window.location.reload();
  }, []);

  /**
   * 预览
   */
  const preview = useCallback(() => {
    //从设计器中获取DSL（JSON）
    const json = designerRef.current?.toJSON();

    window.localStorage.setItem("--preview--", JSON.stringify(json));

    const win = window.open("", "preview");
    if (win?.location.href === "about:blank") {
      window.open("/preview.html", "preview");
    } else {
      win?.focus();
    }
  }, []);

  /**
   * 发布（导出）
   */
  const publish = useCallback(() => {
    const title = "index"; //页面标题
    const json = designerRef.current?.toJSON();
    let html = htmlTpt.replace(`--title--`, title); //替换
    html = html.replace(`"-projectJson-"`, JSON.stringify(json)); //替换

    //-----------------------------------------------

    const linkNode = document.createElement("a");
    linkNode.download = `${title}.html`;
    linkNode.style.display = "none";
    const blob = new Blob([html]);
    linkNode.href = URL.createObjectURL(blob);

    document.body.appendChild(linkNode);
    linkNode.click();

    document.body.removeChild(linkNode);
  }, []);

  return (
    <>
      <div className={css.show}>
        <div className={css.toolbar}>
          <div className={css.tt}>
            &lt;MicroCode&gt; <span>简化你的开发</span>
          </div>
          <button className={css.primary} onClick={save}>
            保存
          </button>
          <button onClick={clear}>清空</button>
          <button onClick={preview}>预览</button>
          <button onClick={publish}>发布</button>
        </div>
        <div className={css.designer}>
          <Designer
            config={config}
            ref={designerRef}
            onMessage={onMessage}
            onEdit={(...args) => {
              //当有编辑动作发生
              //console.log(args)
            }}
          />
        </div>
      </div>
    </>
  );
}
