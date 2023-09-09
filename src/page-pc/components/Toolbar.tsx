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

const ToolBar: React.FC<ToolBarProps> = (props) => {
  const { save, clear, preview, publish, dataChange, onSave } = props;
  return (
    <div className={css.toolbar}>
      <div className={css.tt}>
        &lt;MicroCode&gt; <span>定制你的无代码设计解决方案</span>
      </div>
      <button className={css.primary} onClick={save}>
        {onSave && (
          <span
            role="img"
            aria-label="loading"
            className={`${css.anticon} ${css.anticonLoading} ${css.anticonSpin}`}
            style={{ marginRight: "4px" }}
          >
            <SaveLoadingSvg />
          </span>
        )}
        保存{dataChange && <div className={css.save}>＊</div>}
      </button>
      <button onClick={clear}>清空</button>
      <button onClick={preview}>预览</button>
      <button onClick={publish}>发布</button>
    </div>
  );
};

export default ToolBar;
