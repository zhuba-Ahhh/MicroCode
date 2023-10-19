import React from "react";
import css from "./Toolbar.less";
import SaveLoadingSvg from "../svg/saveLoading.svg";
import { Switch } from "antd";

interface ToolBarProps {
  save: () => void;
  autoSave: (what: boolean) => void;
  clear: () => void;
  preview: () => void;
  publish: () => void;
  dataChange: boolean;
  onSave: boolean;
}

const ToolBar: React.FC<ToolBarProps> = ({
  save,
  autoSave,
  clear,
  preview,
  publish,
  dataChange,
  onSave,
}) => {
  const toolbarClassName = `${css.toolbar}`;
  const ttClassName = `${css.tt}`;
  const primaryButtonClassName = `${css.primary} ${onSave ? css.anticon : ""}`;
  const saveIndicatorClassName = `${css.save}`;

  const onChange = (checked: boolean) => {
    autoSave(checked);
  };

  return (
    <div className={toolbarClassName}>
      <div className={ttClassName}>
        &lt;MicroCode&gt; <span>定制你的无代码设计解决方案</span>
      </div>
      <button
        className={primaryButtonClassName + " " + css.button}
        onClick={save}
      >
        {onSave && (
          <span
            role="img"
            aria-label="loading"
            className={`${css.anticon} ${css.anticonSpin}`}
            style={{ marginRight: "4px" }}
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
      />
    </div>
  );
};

export default ToolBar;
