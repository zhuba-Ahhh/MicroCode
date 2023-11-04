export default (projectJson: string) => ({
  comLibLoader() {
    //配置组件加载器
    return new Promise<string[]>((resolve) => {
      resolve([
        // PC通用组件库（提供了包括表单容器、表格、卡片等等常用的组件）
        `https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/7632_1.3.90/2023-11-03_17-13-02/edit.js`,
        // 基础组件库（提供了基础的组件，如：文本、形状、JS计算、类型转换等）
        `https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/7182_1.0.79/2023-11-03_11-41-19/edit.js`
        // 图表组件库
        // `https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/1047_1.0.10/2023-08-31_21-24-51/edit.js`,
        // 拓展组件库
        // `https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/7765_1.0.16/2023-09-14_20-30-23/edit.js`,
        // 门户组件库
        // `https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/6807_1.0.6/2023-09-22_15-51-23/edit.js`,
      ]);
      //resolve([testLib]) //也可以加载本地组件库
    });
  },
  pageContentLoader() {
    //配置加载页面内容
    return new Promise<string | null>((resolve) => {
      resolve(projectJson);
    });
  }
});
