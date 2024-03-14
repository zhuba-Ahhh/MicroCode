import { Data, TypeEnum } from '../../constants';
import { checkType, getFilterSelectorWithId } from '../../utils';

const createButtonEditor = ({ title, catelog, ifVisible, target, domTarget = '' }) => {
  return {
    title,
    catelog,
    ifVisible,
    options: [
      { type: 'font', config: { disableTextAlign: true } },
      'border',
      { type: 'background', config: { disableBackgroundImage: true } }
    ],
    target,
    domTarget
  };
};

export default [
  {
    items: [
      {
        title: '表头',
        catelog: '默认',
        options: [
          { type: 'font', config: { disableTextAlign: true } },
          'border',
          { type: 'background', config: { disableBackgroundImage: true } }
        ],
        target: ({ focusArea, id }: EditorResult<Data>) => {
          const { tableThIdx } = focusArea.dataset;
          const selector = `table thead tr th[data-table-th-idx="${tableThIdx}"]${getFilterSelectorWithId(
            id
          )}`;
          return selector;
        }
      },
      {
        title: '表格内容',
        catelog: '默认',
        options: [
          { type: 'font', config: { disableTextAlign: true } },
          'border',
          { type: 'background', config: { disableBackgroundImage: true } }
        ],
        target: ({ focusArea, id }: EditorResult<Data>) => {
          const { tableThIdx } = focusArea.dataset;
          const selector = `table tbody tr td[data-table-column-id="${tableThIdx}"]${getFilterSelectorWithId(
            id
          )}`;
          return selector;
        }
      },
      createButtonEditor({
        title: '编辑按钮',
        catelog: '默认',
        ifVisible({ data, focusArea }: EditorResult<Data>) {
          return checkType(data, focusArea, [TypeEnum.Option]) && !data.hideModifyBtn;
        },
        target: `.ant-space-item > .editable`
      }),
      createButtonEditor({
        title: '删除按钮-只读态',
        catelog: '默认',
        ifVisible({ data, focusArea }: EditorResult<Data>) {
          return checkType(data, focusArea, [TypeEnum.Option]) && !data.hideDeleteBtn;
        },
        target: `.ant-space-item > .delete`
      }),
      createButtonEditor({
        title: '新增按钮',
        catelog: '默认',
        ifVisible({ data, focusArea }: EditorResult<Data>) {
          return checkType(data, focusArea, [TypeEnum.Option]) && !data.hideNewBtn;
        },
        target: `.ant-space-item > .add`
      }),
      createButtonEditor({
        title: '添加子按钮',
        catelog: '默认',
        ifVisible({ data, focusArea }: EditorResult<Data>) {
          return checkType(data, focusArea, [TypeEnum.Option]) && !data.hideAllAddChildBtn;
        },
        target: `.ant-space-item > .addChild`
      }),
      createButtonEditor({
        title: '删除按钮-编辑态',
        catelog: '默认',
        ifVisible({ data, focusArea }: EditorResult<Data>) {
          return checkType(data, focusArea, [TypeEnum.Option]) && !data.hideDeleteBtnInEdit;
        },
        target: `.ant-space-item > span.delete a`
      }),
      createButtonEditor({
        title: '保存按钮',
        catelog: '默认',
        ifVisible({ data, focusArea }: EditorResult<Data>) {
          return checkType(data, focusArea, [TypeEnum.Option]) && !data.hideDeleteBtnInEdit;
        },
        target: `.ant-space-item > span.save a`
      }),
      createButtonEditor({
        title: '取消按钮',
        catelog: '默认',
        ifVisible({ data, focusArea }: EditorResult<Data>) {
          return checkType(data, focusArea, [TypeEnum.Option]) && !data.hideCancelBtn;
        },
        target: `.ant-space-item > span.cancel a`
      }),
      createButtonEditor({
        title: '编辑按钮',
        catelog: 'Hover',
        ifVisible({ data, focusArea }: EditorResult<Data>) {
          return checkType(data, focusArea, [TypeEnum.Option]) && !data.hideModifyBtn;
        },
        target: `.ant-space-item > .editable:hover`,
        domTarget: '.ant-space-item > .editable'
      }),
      createButtonEditor({
        title: '删除按钮-只读态',
        catelog: 'Hover',
        ifVisible({ data, focusArea }: EditorResult<Data>) {
          return checkType(data, focusArea, [TypeEnum.Option]) && !data.hideDeleteBtn;
        },
        target: `.ant-space-item > .delete:hover`,
        domTarget: '.ant-space-item > .delete'
      }),
      createButtonEditor({
        title: '新增按钮',
        catelog: 'Hover',
        ifVisible({ data, focusArea }: EditorResult<Data>) {
          return checkType(data, focusArea, [TypeEnum.Option]) && !data.hideNewBtn;
        },
        target: `.ant-space-item > .add:hover`,
        domTarget: '.ant-space-item > .add'
      }),
      createButtonEditor({
        title: '添加子按钮',
        catelog: 'Hover',
        ifVisible({ data, focusArea }: EditorResult<Data>) {
          return checkType(data, focusArea, [TypeEnum.Option]) && !data.hideAllAddChildBtn;
        },
        target: `.ant-space-item > .addChild:hover`,
        domTarget: '.ant-space-item > .addChild'
      }),
      createButtonEditor({
        title: '删除按钮-编辑态',
        catelog: 'Hover',
        ifVisible({ data, focusArea }: EditorResult<Data>) {
          return checkType(data, focusArea, [TypeEnum.Option]) && !data.hideDeleteBtnInEdit;
        },
        target: `.ant-space-item > span.delete a:hover`,
        domTarget: '.ant-space-item > span.delete a'
      }),
      createButtonEditor({
        title: '保存按钮',
        catelog: 'Hover',
        ifVisible({ data, focusArea }: EditorResult<Data>) {
          return checkType(data, focusArea, [TypeEnum.Option]) && !data.hideDeleteBtnInEdit;
        },
        target: `.ant-space-item > span.save a:hover`,
        domTarget: '.ant-space-item > span.save a'
      }),
      createButtonEditor({
        title: '取消按钮',
        catelog: 'Hover',
        ifVisible({ data, focusArea }: EditorResult<Data>) {
          return checkType(data, focusArea, [TypeEnum.Option]) && !data.hideCancelBtn;
        },
        target: `.ant-space-item > span.cancel a:hover`,
        domTarget: '.ant-space-item > span.cancel a'
      }),
    ]
  }
];
