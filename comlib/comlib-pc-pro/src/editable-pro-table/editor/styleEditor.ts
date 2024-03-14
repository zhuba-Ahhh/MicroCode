import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { Data } from '../constants';
import { unitConversion } from '../../utils';
import { emptyStyleEditor } from './empty';
import newStyleEditor from './newStyleEditor';

export default {
  title: '样式配置',
  items: [
    {
      title: '布局风格',
      type: 'Select',
      options: [
        { value: 'default', label: '默认' },
        { value: 'middle', label: '适中布局' },
        { value: 'small', label: '紧凑布局' }
      ],
      value: {
        get({ data }: EditorResult<Data>) {
          return data.size || 'middle';
        },
        set({ data }: EditorResult<Data>, value: SizeType) {
          data.size = value;
        }
      }
    },
    {
      title: '显示边框',
      type: 'Switch',
      value: {
        get({ data }: EditorResult<Data>) {
          return !!data.bordered;
        },
        set({ data }: EditorResult<Data>, value: boolean) {
          data.bordered = value;
        }
      }
    },
    {
      title: '固定表头',
      type: 'Switch',
      description: '设置表头固定，只滚动数据行。必须同时设置【每一列的宽度】',
      value: {
        get({ data }: EditorResult<Data>) {
          return data.fixedHeader;
        },
        set({ data }: EditorResult<Data>, value: boolean) {
          data.fixedHeader = value;
        }
      }
    },
    {
      title: '设置固定表头可滚动高度',
      type: 'Text',
      ifVisible({ data }: EditorResult<Data>) {
        return data.fixedHeader;
      },
      value: {
        get({ data }: EditorResult<Data>) {
          return data.scroll?.y;
        },
        set({ data }: EditorResult<Data>, value) {
          data.scroll.y = unitConversion(value);
        }
      }
    },
    {
      title: '固定可滚动区域高度',
      type: 'Switch',
      ifVisible({ data }: EditorResult<Data>) {
        return data.fixedHeader;
      },
      value: {
        get({ data }: EditorResult<Data>) {
          return data.fixedHeight;
        },
        set({ data, input }: EditorResult<Data>, val: boolean) {
          data.fixedHeight = val;
        }
      }
    },
    ...emptyStyleEditor,
    ...newStyleEditor
  ]
};
