import { Data } from '../constants';
import { getFilterSelectorWithId } from '../utils';

const createEditor = ({ title, catelog, target }) => {
  return {
    title,
    catelog,
    ifVisible({ data }: EditorResult<Data>) {
      return !!data.columns.length;
    },
    options: [
      { type: 'font', config: { disableTextAlign: true } },
      'border',
      { type: 'background', config: { disableBackgroundImage: true } }
    ],
    target
  };
};

export default [
  {
    title: '表格样式',
    items: [
      createEditor({
        title: '表头',
        catelog: '默认',
        target: ({ id }) => `table thead tr th${getFilterSelectorWithId(id)}`
      }),
      createEditor({
        title: '表格内容',
        catelog: '默认',
        target: ({ id }) => `table tbody tr td${getFilterSelectorWithId(id)}`
      }),
      createEditor({
        title: '行Hover',
        catelog: 'Hover',
        target: ({ id }) =>
          `table tbody>tr>td.ant-table-cell-row-hover[data-table-column-id]${getFilterSelectorWithId(id)}`
      })
    ]
  }
];
