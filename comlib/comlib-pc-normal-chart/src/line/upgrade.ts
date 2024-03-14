import { setSchema } from './editor';
import { OutputIds, DefaultCode } from './constants';

export default function ({ data, output, input }: any): boolean {
  if (!data.tempAnnotations) {
    data.tempAnnotations = [];
  }
  if (!data.config.padding) {
    data.config.padding = 'auto';
  }
  if (!data.useEmpty) {
    data.useEmpty = true;
  }
  if (!data.emptyText) {
    data.emptyText = '暂无数据';
  }

  if (data?.config?.label === undefined) {
    data.config.label = false;
  }

  if (!output?.get(OutputIds.TooltipChange)) {
    output.add(OutputIds.TooltipChange, '查看节点变化事件', {
      type: 'any'
    });
  }

  if (!!data.config.label && !output?.get(OutputIds.LabelClick)) {
    output.add(OutputIds.LabelClick, '数据标签点击事件', {
      type: 'any'
    });
  }

  setSchema(data, input, output);

  if (data?.componentCode === undefined) {
    data.componentCode = encodeURIComponent(DefaultCode);
  }

  return true;
}
