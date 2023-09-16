import React, { useState, useRef, useCallback } from "react";
import { message } from "antd";
import ToolBar from "./components/Toolbar";
import css from "./App.less";
import config from "./AppConfig";
import htmlTpt from "./assets/pub-tpt.html";

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
    title: "index",
  });

  const [dataChange, setDataChange] = useState<boolean>(false);
  const [onSave, setOnSave] = useState<boolean>(false);

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
    setOnSave(true);
    const json = designerRef.current?.dump();

    window.localStorage.setItem(localDataKey, JSON.stringify(json));
    setTimeout(() => {
      setOnSave(false);
      setDataChange(false);
      message.info(`保存完成`);
    }, 500)
  }, []);

  /**
   * 清空
   */
  const clear = useCallback(() => {
    // window.localStorage.removeItem(localDataKey);
    window.localStorage.setItem(localDataKey, JSON.stringify({}));
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
    <div className={css.show}>
      <ToolBar
        save={save}
        clear={clear}
        preview={preview}
        publish={publish}
        dataChange={dataChange}
        onSave={onSave}
      />
      <div className={css.designer}>
        <Designer
          config={config(setUseData, useData, save)}
          ref={designerRef}
          onMessage={onMessage}
          onEdit={(...args) => {
            setDataChange(true);
          }}
        />
      </div>
    </div>
  );
}
