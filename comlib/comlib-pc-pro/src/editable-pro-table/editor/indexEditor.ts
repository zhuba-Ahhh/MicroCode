import { Data, TypeEnum } from '../constants';
import { checkType, getThIdx } from '../utils';

export default {
  title: '列位置',
  ifVisible({ data, focusArea }: EditorResult<Data>) {
    return checkType(data, focusArea, [], [TypeEnum.Option]);
  },
  items: [
    {
      title: '前移',
      type: 'button',
      ifVisible({ focusArea }: EditorResult<Data>) {
        return focusArea?.index > 0;
      },
      value: {
        set({ data, focusArea }: EditorResult<Data>) {
          const idx = getThIdx(focusArea)
          const item = data.columns[idx];
          data.columns.splice(idx, 1);
          data.columns.splice(idx - 1, 0, item);
        }
      }
    },
    {
      title: '后移',
      type: 'button',
      ifVisible({ data, focusArea }: EditorResult<Data>) {
        const idx = getThIdx(focusArea)
        return idx < data.columns.length - 2;
      },
      value: {
        set({ data, focusArea }: EditorResult<Data>) {
          const idx = getThIdx(focusArea)
          const item = data.columns[idx];
          data.columns.splice(idx, 1);
          data.columns.splice(idx + 1, 0, item);
        }
      }
    },
    {
      title: '删除列',
      type: 'button',
      value: {
        set({ data, focusArea }: EditorResult<Data>) {
          const idx = getThIdx(focusArea)
          data.columns.splice(idx, 1);
        }
      }
    }
  ]
};
