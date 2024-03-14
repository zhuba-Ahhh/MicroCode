import { Data, TypeEnum } from '../../constants';
import { checkType, getCol, setCol } from '../../utils';

export default {
  title: '开关配置',
  ifVisible({ data, focusArea }: EditorResult<Data>) {
    return checkType(data, focusArea, [TypeEnum.Switch]);
  },
  items: [
    {
      title: '打开文案',
      type: 'text',
      options: {
        placeholder: '按钮打开时，只读态下文案'
      },
      value: {
        get({ data, focusArea }: EditorResult<Data>) {
          let openText = getCol(data, focusArea, 'openText');
          return openText === undefined ?  '打开' : openText;
        },
        set({ data, focusArea }, val: string) {
          setCol(data, focusArea, 'openText', val);
        }
      }
    },
    {
      title: '关闭文案',
      type: 'text',
      options: {
        placeholder: '按钮关闭时，只读态下文案'
      },
      value: {
        get({ data, focusArea }: EditorResult<Data>) {
          let closeText = getCol(data, focusArea, 'closeText');
          return closeText === undefined ? '关闭' : closeText;
        },
        set({ data, focusArea }, val: string) {
          setCol(data, focusArea, 'closeText', val);
        }
      }
    },
    {
      title: '默认值',
      type: 'switch',
      description: '配置开关编辑态的默认值',
      value: {
        get({ data, focusArea }: EditorResult<Data>) {
          return getCol(data, focusArea, 'defaultChecked');
        },
        set({ data, focusArea }, val: boolean) {
          setCol(data, focusArea, 'defaultChecked', val);
        }
      }
    },
  ]
};
