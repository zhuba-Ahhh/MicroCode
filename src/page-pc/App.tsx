import React, {
  useRef,
  useMemo,
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import { useDebounce } from "../hooks";
import { message, Modal, Button } from "antd";
import ToolBar from "./components/Toolbar";
import css from "./App.less";
import config from "./configs/AppConfig";
import htmlTpt from "./assets/pub-tpt.html";
import { localDataKey } from "./common";

const { confirm } = Modal;

//在window上获取设计器实例
const Designer = (window as any).mybricks.SPADesigner;

export default function App() {
  const designerRef = useRef<{
    switchActivity: any;
    dump: () => any;
    toJSON: () => any;
  }>();

  const [useData, setUseData] = useState({
    title: "index",
    autoSave: true,
  });

  const [onSave, setOnSave] = useState<boolean>(false);
  const [onAutoSave, setOnAutoSave] = useState<boolean>(false);
  const [dataChange, setDataChange] = useState<boolean>(false);

  /**
   * 处理引擎消息
   */
  const onMessage = useCallback((type: string | number, msg: any) => {
    message.destroy();
    message[type](msg);
  }, []);

  const saveJSON = useCallback(() => {
    const json = designerRef.current?.dump();
    window.localStorage.setItem(localDataKey, JSON.stringify(json));
  }, []);

  /**
   * 保存
   */
  const save = useCallback(() => {
    setOnSave(true);
    saveJSON();
    setTimeout(() => {
      setOnSave(false);
      setDataChange(false);
      message.success(`保存完成`);
    }, 1000);
  }, []);

  /**
   * 自动保存
   */
  const autoSave = useCallback((what: boolean) => {
    setOnAutoSave(what);
  }, []);

  const autoSaveCallback = useDebounce(() => {
    saveJSON();
    setDataChange(false);
  }, 1000);

  useEffect(() => {
    if (onAutoSave && dataChange) {
      autoSaveCallback();
    }
  }, [dataChange, onAutoSave]);

  /**
   * 清空
   */
  const clear = useCallback(() => {
    confirm({
      title: "确定要清空本地数据嘛?",
      // content: "",
      onOk() {
        // window.localStorage.removeItem(localDataKey);
        window.localStorage.setItem(localDataKey, JSON.stringify({}));
        window.location.reload();
      },
      okText: "确认",
      cancelText: "取消",
      onCancel() {},
    });
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
        autoSave={autoSave}
        clear={clear}
        preview={preview}
        publish={publish}
        dataChange={dataChange}
        onSave={onSave}
      />
      <div className={css.designer}>
        <Designer
          config={config(designerRef, save)}
          ref={designerRef}
          onMessage={onMessage}
          onEdit={(...args: any[]) => {
            setDataChange(true);
          }}
        />
      </div>
    </div>
  );
}
