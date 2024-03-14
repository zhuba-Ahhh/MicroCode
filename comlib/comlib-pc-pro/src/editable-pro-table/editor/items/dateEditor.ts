import { Data, TypeEnum } from '../../constants';
import { checkType, getCol, setCol } from '../../utils';

export default {
  title: '日期配置',
  ifVisible({ data, focusArea }: EditorResult<Data>) {
    return checkType(data, focusArea, [TypeEnum.Date, TypeEnum.DateRange]);
  },
  items: [
    {
      title: '选择时间',
      type: 'Switch',
      options: {
        placeholder: '开启后支持选择时间'
      },
      value: {
        get({ data, focusArea }: EditorResult<Data>) {
          return getCol(data, focusArea, 'showTime');
        },
        set({ data, focusArea }, val: boolean) {
          setCol(data, focusArea, 'showTime', val);
        }
      }
    }
  ]
};
