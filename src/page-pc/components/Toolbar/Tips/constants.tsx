import { info, link, locale, play, record, robot, search, store } from './Icons';

export interface Opt {
  name?: string;
  keys?: (string | JSX.Element)[];
}

export const infoList: Opt[] = [
  {
    name: '保存',
    keys: ['⌘', 'S', '/', 'Control', 'S', '/', 'Ctrl', 'S']
  },
  {
    name: '撤销',
    keys: ['⌘', 'Z', '/', 'Control', 'Z', '/', 'Ctrl', 'Z']
  },
  {
    name: '重做',
    keys: ['⌘', 'Shift', 'Z', '/', 'Ctrl', 'Shift', 'Z']
  },
  {
    name: '复制组件',
    keys: ['⌘', 'C', '/', 'Control', 'C', '/', 'Ctrl', 'C']
  },
  {
    name: '粘贴组件',
    keys: ['⌘', 'V', '/', 'Control', 'V', '/', 'Ctrl', 'V']
  },
  {
    name: '剪切组件',
    keys: ['⌘', 'X', '/', 'Control', 'X', '/', 'Ctrl', 'X']
  },
  {
    name: '删除组件',
    keys: ['Backspace']
  },
  {
    name: '选择组件',
    keys: ['Drag', 'Click']
  }
];

export const optList: Opt[] = [
  {
    name: '唤起AI客服',
    keys: [`页面右下角AI图标`, robot]
  },
  {
    name: '锁定或释放编辑权限',
    keys: ['点击顶部头像切换']
  },
  {
    name: '查看大纲',
    keys: ['页面左上角【#】']
  },
  {
    name: '新建场景、对话框等',
    keys: ['点击页面左上角【#】,再点击 +']
  },
  {
    name: '新建或编辑接口',
    keys: [`【服务接口】插件`, link]
  },
  {
    name: '快速搜索组件、流程卡片等',
    keys: [`左侧插件栏搜索图标`, search]
  },
  {
    name: '页面调试',
    keys: [`操作区右上角播放图标`, play]
  },
  {
    name: '组件物料查看',
    keys: [`操作区右上角物料库图标`, store]
  },
  {
    name: '添加组件',
    keys: [`点击组件，或者拖拽至画布`]
  },
  {
    name: '添加组件库',
    keys: [`点击操作区右上角物料库图标`, store, `再点击添加按钮`]
  },
  {
    name: '画布缩放',
    keys: [`点击操作区右上角, 缩放操作按钮`]
  },
  {
    name: '画布宽高调整',
    keys: [`聚焦操作区横向或纵向边缘, 长宽调节轴`]
  },
  {
    name: '交互卡片显示画布',
    keys: [`点击交互区左上角，卡片显示图标`, locale]
  },
  {
    name: '交互卡片缩放',
    keys: [`点击交互区右上角，缩放操作区`]
  },
  {
    name: '查看保存记录',
    keys: ['顶部时间信息或【保存/发布记录】插件']
  },
  {
    name: '查看发布记录',
    keys: [`【保存/发布记录】插件`, record]
  },
  {
    name: '页面JSON导出',
    keys: [`右上角页面信息操作图标`, info]
  }
];
