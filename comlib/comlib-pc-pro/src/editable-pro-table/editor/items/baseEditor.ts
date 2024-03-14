import { uuid } from '../../../utils';
import { Data, TypeEnum, TypeEnumMap, INPUTS, OUTPUTS, getColumnItem } from '../../constants';
import { setDataSchema } from '../../schema';
import { checkType, getCol, setCol } from '../../utils';

export default {
  title: '基础配置',
  items: [
    {
      title: '列名',
      type: 'text',
      value: {
        get({ data, focusArea }: EditorResult<Data>) {
          return getCol(data, focusArea, 'title');
        },
        set(
          { data, output, input, focusArea, slot }: EditorResult<Data>,
          val: string
        ) {
          setCol(data, focusArea, 'title', val);
          setDataSchema({ data, output, input, slot });
        }
      }
    },
    {
      title: '字段',
      type: 'text',
      ifVisible({ data, focusArea }: EditorResult<Data>) {
        return checkType(data, focusArea, [], [TypeEnum.Option]);
      },
      value: {
        get({ data, focusArea }: EditorResult<Data>) {
          return getCol(data, focusArea, 'dataIndex');
        },
        set(
          { data, output, input, focusArea, slot }: EditorResult<Data>,
          val: string
        ) {
          setCol(data, focusArea, 'dataIndex', val);
          setDataSchema({ data, output, input, slot });
        }
      }
    },
    {
      title: '类型',
      type: 'select',
      options: [
        { label: TypeEnumMap[TypeEnum.Text], value: TypeEnum.Text },
        { label: TypeEnumMap[TypeEnum.Number], value: TypeEnum.Number },
        { label: TypeEnumMap[TypeEnum.Select], value: TypeEnum.Select },
        { label: TypeEnumMap[TypeEnum.TreeSelect], value: TypeEnum.TreeSelect },
        { label: TypeEnumMap[TypeEnum.Cascader], value: TypeEnum.Cascader },
        { label: TypeEnumMap[TypeEnum.Switch], value: TypeEnum.Switch },
        { label: TypeEnumMap[TypeEnum.Checkbox], value: TypeEnum.Checkbox },
        { label: TypeEnumMap[TypeEnum.Date], value: TypeEnum.Date },
        { label: TypeEnumMap[TypeEnum.DateRange], value: TypeEnum.DateRange },
        { label: TypeEnumMap[TypeEnum.Slot], value: TypeEnum.Slot }
      ],
      ifVisible({ data, focusArea }: EditorResult<Data>) {
        return checkType(data, focusArea, [], [TypeEnum.Option]);
      },
      value: {
        get({ data, focusArea }: EditorResult<Data>) {
          return getCol(data, focusArea, 'valueType') || TypeEnum.Text;
        },
        set({ data, output, input, focusArea, slot }, val: string) {
          const slotId = getCol(data, focusArea, 'slotId') || uuid();
          const slotEditId = getCol(data, focusArea, 'slotEditId') || uuid();
          if (val === TypeEnum.Slot) {
            setCol(data, focusArea, 'slotId', slotId);
            setCol(data, focusArea, 'slotEditId', slotEditId);
            slot.add({ 
              id: slotId,
              title: `${getCol(data, focusArea, 'title')}列`,
              type: 'scope',
              inputs: [
                { id: INPUTS.SlotRowValue, title: '当前行数据', schema: { type: 'object' } },
                { id: INPUTS.SlotColValue, title: '当前列数据', schema: { type: 'any' } },
                { id: INPUTS.RowIndex, title: '当前行序号', schema: { type: 'number' } },
              ]
            });
            slot.add({ 
              id: slotEditId,
              title: `${getCol(data, focusArea, 'title')}列编辑态`,
              type: 'scope',
              inputs: [
                { id: INPUTS.SlotRowValue, title: '当前行数据', schema: { type: 'object' } },
                { id: INPUTS.SlotColValue, title: '当前列数据', schema: { type: 'any' } },
                { id: INPUTS.RowIndex, title: '当前行序号', schema: { type: 'number' } },
              ],
              outputs: [
                {
                  id: OUTPUTS.EditTableData, title: '更新行数据', schema: { type: 'object' }
                }
              ]
            });
          }
          if (val !== TypeEnum.Slot && slotId && slot.get(slotId)) {
            slot.remove(slotId);
            slot.remove(slotEditId);
          }
          setCol(data, focusArea, 'valueType', val);
          setDataSchema({ data, output, input, slot });
        }
      }
    },
    {
      title: '列数据类型',
      type: '_schema',
      ifVisible({ data, focusArea }: EditorResult<Data>) {
        return checkType(data, focusArea, [], [TypeEnum.Option]);
      },
      value: {
        get({ data, focusArea }: EditorResult<Data>) {
          const item = getColumnItem(data, focusArea);
          return item?.dataSchema || { type: 'string' };
        },
        set({ data, output, input, focusArea, slot }: EditorResult<Data>, value: object) {
          if (!focusArea) return;
          setCol( data, focusArea , 'dataSchema', value);
          setDataSchema({ data, output, input, slot });
        }
      }
    },
  ]
};
