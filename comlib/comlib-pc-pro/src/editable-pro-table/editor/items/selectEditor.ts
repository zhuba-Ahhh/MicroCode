import { Data, TypeEnum } from '../../constants';
import { checkType, getCol, setCol } from '../../utils';

export default {
  title: '下拉框配置',
  ifVisible({ data, focusArea }: EditorResult<Data>) {
    return checkType(data, focusArea, [TypeEnum.Select, TypeEnum.TreeSelect, TypeEnum.Cascader]);
  },
  items: [
    {
      title: '多选',
      type: 'Switch',
      options: {
        placeholder: '开启后支持多选'
      },
      value: {
        get({ data, focusArea }: EditorResult<Data>) {
          return getCol(data, focusArea, 'multiple');
        },
        set({ data, focusArea }, val: boolean) {
          setCol(data, focusArea, 'multiple', val);
        }
      }
    },
    {
      title: '搜索',
      type: 'Switch',
      options: {
        placeholder: '开启后支持搜索'
      },
      value: {
        get({ data, focusArea }: EditorResult<Data>) {
          return getCol(data, focusArea, 'showSearch');
        },
        set({ data, focusArea }, val: boolean) {
          setCol(data, focusArea, 'showSearch', val);
        }
      }
    },
    {
      title: '规则',
      type: 'Select',
      options: [
        {
          label: '根据内容搜索',
          value: 'label'
        },
        {
          label: '根据值搜索',
          value: 'value'
        }
      ],
      ifVisible({ data, focusArea }: EditorResult<Data>) {
        return getCol(data, focusArea, 'showSearch');
      },
      value: {
        get({ data, focusArea }: EditorResult<Data>) {
          return getCol(data, focusArea, 'optionFilterProp') || 'value';
        },
        set({ data, focusArea }, val: boolean) {
          setCol(data, focusArea, 'optionFilterProp', val);
        }
      }
    }
  ]
};
