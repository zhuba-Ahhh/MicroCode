import { Data } from '../../constants';
import { getCol, setCol } from '../../utils';

const TitleTipEditor = {
  title: '提示配置',
  items: [
    {
      title: '显示提示',
      type: 'Switch',
      value: {
        get({ data, focusArea }: EditorResult<Data>) {
          return getCol(data, focusArea, 'useTooltip');
        },
        set({ data, focusArea }: EditorResult<Data>, value: boolean) {
          setCol(data, focusArea, 'useTooltip', value);
        }
      }
    },
    {
      title: '提示文案',
      type: 'Textarea',
      options: {
        placeholder: '请输入 提示文案'
      },
      ifVisible({ data, focusArea }: EditorResult<Data>) {
        return getCol(data, focusArea, 'useTooltip');
      },
      value: {
        get({ data, focusArea }: EditorResult<Data>) {
          return getCol(data, focusArea, 'tooltip');
        },
        set({ data, focusArea }: EditorResult<Data>, value: string) {
          setCol(data, focusArea, 'tooltip', value);
        }
      }
    }
  ]
};

export default TitleTipEditor;
