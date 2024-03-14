export default function ({ data }: any): boolean {
  if(!data.useEmpty){
    data.useEmpty = true;
  }
  if(!data.emptyText){
    data.emptyText = '暂无数据';
  }

  return true;
}