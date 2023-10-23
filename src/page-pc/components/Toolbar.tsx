import React, { memo, useEffect, useCallback } from 'react';
import css from './Toolbar.less';
import SaveLoadingSvg from '../svg/saveLoading.svg';
import { Switch } from 'antd';
import { useDataJSON } from '../types';

export interface ToolBarProps {
  onSave: boolean;
  dataChange: boolean;
  save: () => void;
  clear: () => void;
  preview: () => void;
  publish: () => void;
  autoSave: (what: boolean) => void;
  userDataJSON: useDataJSON;
  setUserDataJSON: React.Dispatch<React.SetStateAction<useDataJSON>>;
}

const ToolBar: React.FC<ToolBarProps> = ({
  save,
  clear,
  onSave,
  preview,
  publish,
  autoSave,
  dataChange,
  userDataJSON,
  setUserDataJSON
}) => {
  const toolbarClassName = `${css.toolbar}`;
  const ttClassName = `${css.tt}`;
  const primaryButtonClassName = `${css.primary} ${onSave ? css.anticon : ''}`;
  const saveIndicatorClassName = `${css.save}`;

  useEffect(() => {
    autoSave(!!userDataJSON?.autoSave || false);
  }, []);

  const onChange = useCallback((checked: boolean) => {
    autoSave(checked);
    setUserDataJSON((pre) => ({
      ...pre,
      autoSave: checked
    }));
  }, []);

  return (
    <div className={toolbarClassName}>
      <div className={ttClassName}>
        &lt;MicroCode&gt; <span>定制你的无代码设计解决方案</span>
      </div>
      <button className={primaryButtonClassName + ' ' + css.button} onClick={save}>
        {onSave && (
          <span
            role="img"
            aria-label="loading"
            className={`${css.anticon} ${css.anticonSpin}`}
            style={{ marginRight: '4px' }}
          >
            <SaveLoadingSvg />
          </span>
        )}
        保存{dataChange && <div className={saveIndicatorClassName}>＊</div>}
      </button>
      <button className={css.button} onClick={clear}>
        清空
      </button>
      <button className={css.button} onClick={preview}>
        预览
      </button>
      <button className={css.button} onClick={publish}>
        发布
      </button>
      <Switch
        className={css.antSwitchChecked}
        checkedChildren="自动保存"
        unCheckedChildren="自动保存"
        onChange={onChange}
        defaultChecked={!!userDataJSON?.autoSave || false}
      />
    </div>
  );
};

export default memo(ToolBar);
