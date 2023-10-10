import React from "react";
import css from "./Toolbar.less";
import SaveLoadingSvg from "../svg/saveLoading.svg";

interface ToolBarProps {
  save: () => void;
  clear: () => void;
  preview: () => void;
  publish: () => void;
  dataChange: boolean;
  onSave: boolean;
}

const ToolBar: React.FC<ToolBarProps> = ({ save, clear, preview, publish, dataChange, onSave }) => {
  const toolbarClassName = `${css.toolbar}`;
  const ttClassName = `${css.tt}`;
  const primaryButtonClassName = `${css.primary} ${onSave ? css.anticon + " " + css.anticonSpin : ""}`;
  const saveIndicatorClassName = `${css.save}`;

  return (
    <div className={toolbarClassName}>
      <div className={ttClassName}>
        &lt;MicroCode&gt; <span>定制你的无代码设计解决方案</span>
      </div>
      <button className={primaryButtonClassName} onClick={save}>
        {onSave && (
          <span
            role="img"
            aria-label="loading"
            className={css.anticon}
            style={{ marginRight: "4px" }}
          >
            <SaveLoadingSvg />
          </span>
        )}
        保存{dataChange && <div className={saveIndicatorClassName}>＊</div>}
      </button>
      <button onClick={clear}>清空</button>
      <button onClick={preview}>预览</button>
      <button onClick={publish}>发布</button>
    </div>
  );
};

export default ToolBar;
