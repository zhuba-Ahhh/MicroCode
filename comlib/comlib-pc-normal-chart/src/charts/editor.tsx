import {
  Data,
  chartTypes,
  editorNames,
  inputConfigMap,
  inputSchemaMap,
  defaultFormatterFn,
  defaultInputIds
} from './constants';
import editors from './editors';
import { setDataSchema } from './schema';

function initIO(input) {
  defaultInputIds.map((inputId) => {
    const inputPin = input.get(inputId);
    if (!inputPin) {
      input.add(inputId, inputSchemaMap[inputId].title, inputSchemaMap[inputId].schema);
    }
  });
}

function setChartInputs(chartType, input) {
  Object.keys(inputConfigMap).map((inputId) => {
    const inputPin = input.get(inputId);
    if (inputConfigMap[inputId].includes(chartType)) {
      if (!inputPin) {
        input.add(inputId, inputSchemaMap[inputId].title, inputSchemaMap[inputId].schema);
      }
    } else {
      if (inputPin) {
        input.remove(inputId);
      }
    }
  });
}

function chartTypeChange(data) {
  if (data.type === chartTypes.BIDIRECTIONAL_BAR || data.type === chartTypes.DUAL_AXES) {
    if (typeof data.config.yField === 'string') {
      data.config.yField = ['value1', 'value2'];
    }
  } else {
    if (typeof data.config.yField !== 'string') {
      data.config.yField = 'value';
    }
  }
}

export default {
  '@init'({ style, input }) {
    style.height = 400;
    style.width = '100%';
    initIO(input);
  },
  '@resize': {
    options: ['height', 'width']
  },
  ':root': ({}: EditorResult<Data>, cate0, cate1) => {
    cate0.title = '常规';
    cate0.items = [
      {
        title: '类型',
        type: 'Select',
        description: '选择图表类型',
        options: [
          { label: '折线图', value: chartTypes.LINE },
          { label: '饼图', value: chartTypes.PIE },
          { label: '柱状图', value: chartTypes.COLUMN },
          { label: '条形图', value: chartTypes.BAR },
          { label: '面积图', value: chartTypes.AREA },
          { label: '水波图', value: chartTypes.LIQUID },
          { label: '漏斗图', value: chartTypes.FUNNEL },
          { label: '雷达图', value: chartTypes.RADAR },
          { label: '对称条形图', value: chartTypes.BIDIRECTIONAL_BAR },
          { label: '双轴图', value: chartTypes.DUAL_AXES }
        ],
        value: {
          get({ data }: EditorResult<Data>) {
            return data.type;
          },
          set({ data, input }: EditorResult<Data>, value: string) {
            data.type = value;
            chartTypeChange(data);
            setChartInputs(value, input);
            setDataSchema(data, input);
          }
        }
      },
      {
        title: '主题',
        type: 'Select',
        options: [
          { label: '默认', value: 'default' },
          { label: '暗色', value: 'dark' }
        ],
        value: {
          get({ data }: EditorResult<Data>) {
            return data.config.theme || 'default';
          },
          set({ data }: EditorResult<Data>, value: string) {
            data.config.theme = value;
            data.config = { ...data.config };
          }
        }
      },

      {
        title: '数据映射',
        ifVisible({ data }: EditorResult<Data>) {
          return data.type !== chartTypes.LIQUID;
        },
        items: [
          {
            title: 'x横轴字段名',
            type: 'Text',
            description: '纵轴映射对应的数据字段名',
            ifVisible({ data }: EditorResult<Data>) {
              return data.type !== chartTypes.PIE;
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.xField;
              },
              set({ data, input }: EditorResult<Data>, value: string) {
                data.config.xField = value;
                setDataSchema(data, input);
              }
            }
          },
          {
            title: 'y纵轴字段名',
            type: 'Text',
            description: '横轴映射对应的数据字段名',
            ifVisible({ data }: EditorResult<Data>) {
              return (
                data.type !== chartTypes.PIE &&
                data.type !== chartTypes.BIDIRECTIONAL_BAR &&
                data.type !== chartTypes.DUAL_AXES
              );
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.yField;
              },
              set({ data, input }: EditorResult<Data>, value: string) {
                data.config.yField = value;
                setDataSchema(data, input);
              }
            }
          },
          {
            title: 'y纵轴字段名',
            type: 'Text',
            description: '横轴映射对应的数据字段名',
            ifVisible({ data }: EditorResult<Data>) {
              return (
                data.type === chartTypes.BIDIRECTIONAL_BAR || data.type === chartTypes.DUAL_AXES
              );
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return Array.isArray(data.config.yField)
                  ? data.config.yField.join(',')
                  : data.config.yField;
              },
              set({ data, input }: EditorResult<Data>, value: string) {
                data.config.yField = value.split(',');
                setDataSchema(data, input);
              }
            }
          },
          {
            title: '分组字段名',
            type: 'text',
            description: '用于同时看一个维度中不同情况的指标需求',
            ifVisible({ data }: EditorResult<Data>) {
              return data.type !== chartTypes.PIE && data.type !== chartTypes.BIDIRECTIONAL_BAR;
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.seriesField;
              },
              set({ data, input }: EditorResult<Data>, value: string) {
                data.config.seriesField = value;
                setDataSchema(data, input);
              }
            }
          },
          ...editors[chartTypes.PIE][editorNames.DATA_MAPPING]
        ]
      },
      {
        title: '图例配置',
        ifVisible({ data }: EditorResult<Data>) {
          return data.type !== chartTypes.LIQUID;
        },
        items: [
          {
            title: '图例',
            type: 'Switch',
            value: {
              get({ data }: EditorResult<Data>) {
                if (typeof data.config.legend === 'boolean') {
                  return data.config.legend;
                } else {
                  return true;
                }
              },
              set({ data, input }: EditorResult<Data>, value: boolean) {
                if (!value) {
                  data.config.legend = false;
                } else {
                  data.config.legend = { position: 'right' };
                }
              }
            }
          },
          {
            title: '位置',
            type: 'Select',
            options: [
              { label: '左上', value: 'top-left' },
              { label: '顶部', value: 'top' },
              { label: '右上', value: 'top-right' },
              { label: '底部', value: 'bottom' },
              { label: '左下', value: 'bottom-left' },
              { label: '左侧', value: 'left' },
              { label: '右下', value: 'bottom-right' },
              { label: '右侧', value: 'right' }
            ],
            ifVisible({ data }: EditorResult<Data>) {
              return !!data.config.legend;
            },
            value: {
              get({ data }: EditorResult<Data>) {
                if (typeof data.config.legend === 'boolean') {
                  return data.config.legend;
                }

                return data.config.legend?.position;
              },
              set({ data }: EditorResult<Data>, value: any) {
                if (typeof data.config.legend !== 'boolean') {
                  data.config.legend.position = value;
                  data.config.legend = { ...data.config.legend };
                }
              }
            }
          }
        ]
      },
      {
        title: '数据标签配置',
        ifVisible({ data }: EditorResult<Data>) {
          return chartTypes.LIQUID !== data.type && data.type !== chartTypes.DUAL_AXES;
        },
        items: [
          {
            title: '数据标签',
            type: 'Switch',
            value: {
              get({ data }: EditorResult<Data>) {
                if (typeof data.config.label === 'boolean') {
                  return data.config.label;
                } else {
                  return true;
                }
              },
              set({ data }: EditorResult<Data>, value: boolean) {
                if (!value) {
                  data.config.label = false;
                } else {
                  data.config.label = {};
                }
              }
            }
          },
          {
            title: '标签样式',
            type: 'style',
            ifVisible({ data }: EditorResult<Data>) {
              return !!data.config.label;
            },
            options: {
              plugins: ['Font'],
              fontProps: {
                fontFamily: false,
                verticalAlign: false
              }
            },
            value: {
              get({ data }: EditorResult<Data>) {
                if (!!data.config.label) {
                  return {
                    ...data?.config?.label?.style,
                    fill: data?.config?.label?.style?.fill || 'white',
                    color: data?.config?.label?.style?.fill || 'white',
                    fontSize: `${data?.config?.label?.style?.fontSize || 12}px`,
                    lineHeight: `${data?.config?.label?.style?.lineHeight || 12}px`
                  };
                }
                return {
                  fill: 'white',
                  color: 'white',
                  fontSize: `12px`,
                  lineHeight: `12px`
                };
              },
              set({ data }: EditorResult<Data>, value) {
                if (data?.config?.label) {
                  data.config.label = {
                    style: {
                      ...value,
                      fill: value.color,
                      fontSize: Number(value.fontSize.slice(0, -2)),
                      lineHeight: Number(value.lineHeight.slice(0, -2))
                    }
                  };
                }
              }
            }
          },
          {
            title: '类型',
            type: 'Select',
            options: [
              { label: 'Inner', value: 'inner' },
              { label: 'Outer', value: 'outer' },
              { label: 'Spider', value: 'spider' }
            ],
            ifVisible({ data }: EditorResult<Data>) {
              return !!data.config.label && chartTypes.PIE === data.type;
            },
            value: {
              get({ data }: EditorResult<Data>) {
                if (typeof data.config.label !== 'boolean') {
                  return data.config.label.type || 'outer';
                }
              },
              set({ data }: EditorResult<Data>, value: string) {
                if (typeof data.config.label !== 'boolean') {
                  if (!data.config.label.type) {
                    data.config.label['type'] = value;
                  } else {
                    data.config.label.type = value;
                  }
                  data.config.label = { ...data.config.label };
                }
              }
            }
          }
        ]
      },
      {
        title: '悬浮提示配置',
        ifVisible({ data }: EditorResult<Data>) {
          return data.type !== chartTypes.LIQUID;
        },
        items: [
          {
            title: '悬浮提示',
            type: 'Switch',
            value: {
              get({ data }: EditorResult<Data>) {
                if (typeof data.config.tooltip === 'boolean') {
                  return data.config.tooltip;
                } else {
                  return true;
                }
              },
              set({ data }: EditorResult<Data>, value: boolean) {
                if (!value) {
                  data.config.tooltip = false;
                } else {
                  data.config.tooltip = {};
                }
              }
            }
          },
          {
            title: '格式化',
            type: 'Switch',
            ifVisible({ data }: EditorResult<Data>) {
              return !!data.config.tooltip;
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data.tooltipFormatterFn.visible;
              },
              set({ data }: EditorResult<Data>, value: boolean) {
                data.tooltipFormatterFn.visible = value;
              }
            }
          },
          {
            title: '格式化内容',
            type: 'Code',
            options: {
              theme: 'light',
              title: '格式化内容',
              language: 'javascript',
              comments: '',
              minimap: {
                enabled: false
              },
              displayType: 'button'
            },
            ifVisible({ data }: EditorResult<Data>) {
              return !!data.config.tooltip && data.tooltipFormatterFn.visible;
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data.tooltipFormatterFn.content || defaultFormatterFn;
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.tooltipFormatterFn.content = value;
              }
            }
          }
        ]
      }
    ];

    cate1.title = '图形样式';
    cate1.items = [
      ...editors[chartTypes.LINE][editorNames.CHART_STYLE],
      ...editors[chartTypes.PIE][editorNames.CHART_STYLE],
      ...editors[chartTypes.RADAR][editorNames.CHART_STYLE],
      ...editors[chartTypes.DUAL_AXES][editorNames.CHART_STYLE]
    ];
  }
};
