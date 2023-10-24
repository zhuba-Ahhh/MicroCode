import { message } from 'antd';

const events = [
  //配置事件【非必选】
  {
    type: 'jump',
    title: '跳转到',
    exe({ options }) {
      const page = options.page;
      if (page) {
        window.location.href = page;
      }
    },
    options: [
      {
        id: 'page',
        title: '页面',
        editor: 'textarea'
      }
    ]
  },
  {
    type: 'pushState',
    title: '路由跳转',
    default: false,
    exe({ options }) {
      message.info(`路由跳转:${options.url}`);
    },
    options: [
      {
        id: 'url',
        title: '地址',
        editor: 'textarea'
      }
    ]
  },
  {
    type: 'openWindow',
    title: '打开新窗口',
    default: false,
    exe({ options }) {
      message.info(`打开新窗口:${options.url}`);
    },
    options: [
      {
        id: 'url',
        title: '地址',
        editor: 'textarea'
      }
    ]
  }
];

export default events;
