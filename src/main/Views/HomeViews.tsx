import React, { type FC } from 'react';

const HomeViews: FC = () => {
  return (
    <div className="container">
      <h1>
        欢迎使用
        <img src="./assets/icon.svg" alt="MicroCode Logo" /> &lt;MicroCode&gt;
        <span>定制你的无代码设计解决方案</span>
      </h1>
      <ul>
        <li>
          <a href="./page-pc.html">
            <div style={{ width: 32, height: 32 }}>
              <img
                draggable="false"
                src="https://assets.mybricks.world/icon/pcpage.svg"
                width="100%"
                height="100%"
              />
            </div>
            <label>PC页面</label>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HomeViews;
