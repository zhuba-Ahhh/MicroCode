import React, { useState, useRef, useCallback } from "react";
import { message } from "antd";
import css from "./assets/App.less";
import config from "./App-config";
import htmlTpt from "./pub-tpt.html";

//在window上获取设计器实例
const Designer = (window as any).mybricks.SPADesigner;

const localDataKey = "--mybricks--";

export default function App() {
  const designerRef = useRef<{
    switchActivity: any;
    dump: () => any;
    toJSON: () => any;
  }>();

  const [useData, setUseData] = useState({
    title: 'index'
  });

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
      // window.open("./preview.html", "preview");
      win.location.href = "./preview.html";
    } else {
      win?.focus();
    }
  }, []);

  /**
   * 发布（导出）
   */
  const publish = useCallback(() => {
    const title = useData.title; //页面标题
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
  }, [useData]);

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
            config={config(setUseData, useData, save)}
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
