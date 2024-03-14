import { Data } from './constants';
import operationEditor from './editor/operationEditor';
import itemsEditor from './editor/items';
import baseEditor from './editor/baseEditor';
import styleEditor from './editor/styleEditor';
import { setDataSchema } from './schema';

export default {
  '@init': ({ data, input, output, slot }: EditorResult<Data>) => {
    setDataSchema({ data, input, output, slot });
  },
  ':root': {
    items: ({}: EditorResult<Data>, cate1, cate2) => {
      cate1.title = '常规';
      cate1.items = [baseEditor];

      cate2.title = '高级';
      cate2.items = [...operationEditor];

      return { title: '可编辑表格' };
    },

    style: [...styleEditor.items]
  },
  ...itemsEditor
};
