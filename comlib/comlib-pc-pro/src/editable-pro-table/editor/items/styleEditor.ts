import { Data, TypeEnum, getColumnItem } from '../../constants';
import { checkType, getCol, getThIdx, setCol } from '../../utils';

export default {
  title: '样式配置',
  items: [
    {
      title: '宽度(px)',
      type: 'Text',
      description: '列宽（像素）,若填写自动或不填写则组件默认分配宽度',
      value: {
        get({ data, focusArea }: EditorResult<Data>) {
          const idx = getThIdx(focusArea);
          const item = data.columns[idx];
          item['width'] = item.width ? item.width : undefined;
          return item && (item.width || '自动');
        },
        set({ data, focusArea }: EditorResult<Data>, value: string) {
          let width: string | number | undefined = value;
          if (typeof value === 'number') {
            width = value;
          } else {
            width = value && value.match(/^[1-9]\d*$/gi) ? ~~value : void 0;
          }
          setCol(data, focusArea, 'width', width);
        }
      }
    },
    {
      title: '对齐方式',
      type: 'Select',
      options: [
        { label: '左对齐', value: 'left' },
        { label: '居中对齐', value: 'center' },
        { label: '右对齐', value: 'right' }
      ],
      value: {
        get({ data, focusArea }: EditorResult<Data>) {
          return getCol(data, focusArea, 'align') || 'left';
        },
        set({ data, focusArea }: EditorResult<Data>, value: string) {
          setCol(data, focusArea, 'align', value);
        }
      }
    },
    {
      title: '内容省略展示',
      type: 'Switch',
      description: '内容超出宽度后文本是否自动省略、不换行、以省略号结尾',
      ifVisible({ data, focusArea }: EditorResult<Data>) {
        return !checkType(data, focusArea, [TypeEnum.Option, TypeEnum.Slot, TypeEnum.Checkbox, TypeEnum.Switch]);
      },
      value: {
        get({ data, focusArea }: EditorResult<Data>) {
          if (!focusArea) return;
          const item = getColumnItem(data, focusArea);
          return item.ellipsis;
        },
        set({ data, focusArea }: EditorResult<Data>, value: boolean) {
          if (!focusArea) return;
          setCol(data, focusArea, 'ellipsis', value);
        }
      }
    },
    {
      title: '右固定列',
      type: 'Switch',
      ifVisible({ data, focusArea }: EditorResult<Data>) {
        return checkType(data, focusArea, [TypeEnum.Option, TypeEnum.Slot]);
      },
      value: {
        get({ data, focusArea }: EditorResult<Data>) {
          return getCol(data, focusArea, 'fixed') === 'right';
        },
        set({ data, focusArea }: EditorResult<Data>, value: string) {
          setCol(data, focusArea, 'fixed', value ? 'right' : '');
        }
      }
    }
  ]
};
