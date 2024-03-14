import { Data } from './runtime'

export default function ({ data, input, output }: UpgradeParams<Data>): boolean {
  /**
   * v1.0.0 -> v1.0.1 控制操作按钮的显示隐藏
   */
  if (data?.submitter === undefined) {
    data.submitter = true;
  }

  /**
    * @description v1.0.2 增加 data.grid 配置项、onValuesChange 输出项
    */
  if (!output.get('onValuesChange')) {
    output.add('onValuesChange', '数据变化', {
      type: 'object',
      properties: {
        changedValues: {
          type: 'object'
        },
        allValues: {
          type: 'object'
        }
      }
    });
  }
  //=========== v1.0.2 end ===============

  return true;
}
