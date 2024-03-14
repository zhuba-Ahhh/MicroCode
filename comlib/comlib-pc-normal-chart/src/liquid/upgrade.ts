export default function ({ data }: any): boolean {
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