import React, { useMemo, useRef, useState, useCallback, useEffect, useLayoutEffect } from 'react';

import css from './App.less';
import { message, Modal } from 'antd';
import { useDataJSON } from './types';
import { useDebounce } from '../hooks';
import config from './configs';
import ToolBar from './components/Toolbar';
import htmlTpt from './assets/pub-tpt.html';
import { localDataKey, localUseDataKey } from './common';

const { confirm } = Modal;

export default function App() {
  const designerRef = useRef<{
    switchActivity: any;
    dump: () => any;
    toJSON: () => any;
  }>();

  const userInfoContent = window.localStorage.getItem(localUseDataKey);
  const userInfo: useDataJSON = userInfoContent
    ? JSON.parse(userInfoContent)
    : {
        title: 'index',
        autoSave: true
      };

  const [projectJson, setProjectJson] = useState<string>('');
  const [userDataJSON, setUserDataJSON] = useState<useDataJSON>(userInfo);
  const [onSave, setOnSave] = useState<boolean>(false);
  const [onAutoSave, setOnAutoSave] = useState<boolean>(false);
  const [dataChange, setDataChange] = useState<boolean>(false);
  const [SPADesigner, setSPADesigner] = useState<any>(null);

  useLayoutEffect(() => {
    const pageContent = window.localStorage.getItem(localDataKey);
    if (pageContent) {
      setProjectJson(JSON.parse(pageContent || '{}'));
    } else {
      import('./assets/data.json').then((data) => {
        setProjectJson(JSON.parse(JSON.stringify(data)) || '{}');
      });
    }
  }, []);

  // 重载页面 未保存数据提示
  useEffect(() => {
    const beforeunload = (e: any) => {
      if (dataChange) {
        e.preventDefault();
      }
    };

    window.addEventListener('beforeunload', beforeunload);

    return () => {
      window.removeEventListener('beforeunload', beforeunload);
    };
  }, [dataChange]);

  //在window上获取设计器实例
  useMemo(() => {
    (window as any).mybricks.SPADesigner && setSPADesigner((window as any).mybricks.SPADesigner);
  }, []);

  /**
   * 处理引擎消息
   */
  const onMessage = useCallback((type: string | number, msg: any) => {
    message.destroy();
    message[type](msg);
  }, []);

  /**
   * 保存引擎搭建相关数据
   */
  const saveJSON = useCallback(() => {
    const json = designerRef.current?.dump();
    window.localStorage.setItem(localDataKey, JSON.stringify(json));
  }, [userDataJSON]);

  /**
   * 保存用户相关数据
   */
  useEffect(() => {
    window.localStorage.setItem(localUseDataKey, JSON.stringify(userDataJSON));
  }, [userDataJSON]);

  const changeUserDataJSON = useCallback((value: any) => {
    setUserDataJSON({
      ...userDataJSON,
      ...value
    });
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
      title: '确定要清空数据嘛?',
      // content: "",
      onOk() {
        // window.localStorage.removeItem(localDataKey);
        window.localStorage.setItem(localDataKey, JSON.stringify({}));
        window.location.reload();
      },
      okText: '确认',
      cancelText: '取消',
      onCancel() {}
    });
  }, []);

  /**
   * 预览
   */
  const preview = useCallback(() => {
    //从设计器中获取DSL（JSON）
    const json = designerRef.current?.toJSON();

    window.localStorage.setItem('--preview--', JSON.stringify(json));

    const win = window.open('', 'preview');
    if (win?.location.href === 'about:blank') {
      // window.open("./preview.html", "preview");
      win.location.href = './preview.html';
    } else {
      win?.focus();
    }
  }, []);

  /**
   * 发布（导出）
   */
  const publish = useCallback(() => {
    const title = userDataJSON.title; //页面标题
    const json = designerRef.current?.toJSON();
    let html = htmlTpt.replace(`--title--`, title); //替换
    html = html.replace(`'-projectJson-'`, JSON.stringify(json)); //替换

    //-----------------------------------------------

    const linkNode = document.createElement('a');
    linkNode.download = `${title}.html`;
    linkNode.style.display = 'none';
    const blob = new Blob([html]);
    linkNode.href = URL.createObjectURL(blob);

    document.body.appendChild(linkNode);
    linkNode.click();

    document.body.removeChild(linkNode);
  }, []);

  return (
    <div className={css.show}>
      <ToolBar
        save={save}
        clear={clear}
        onSave={onSave}
        preview={preview}
        publish={publish}
        autoSave={autoSave}
        dataChange={dataChange}
        userDataJSON={userDataJSON}
        setUserDataJSON={setUserDataJSON}
      />
      <div className={css.designer}>
        {projectJson && SPADesigner && (
          <SPADesigner
            ref={designerRef}
            onMessage={onMessage}
            onEdit={() => {
              setDataChange(true);
            }}
            config={config(designerRef, save, projectJson, userDataJSON, changeUserDataJSON)}
          />
        )}
      </div>
    </div>
  );
}
