export default function({ data }) {
  // 1.0.0 -> 1.0.1
  if (!data.config.color) {
    data.config.color = '#5588FF';
  }
    if (!data.tempAnnotations) {
    data.tempAnnotations = [];
  }
  if (!data.config.padding) {
      data.config.padding = 'auto';
  }
  if(!data.useEmpty){
    data.useEmpty = true;
  }
  if(!data.emptyText){
    data.emptyText = '暂无数据';
  }
  return true;
}