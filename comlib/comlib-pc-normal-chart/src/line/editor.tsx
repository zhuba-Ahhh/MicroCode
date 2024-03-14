import { initInput, reRender, schemaDiff, schemaDefault, Data, AnnotationItem } from '../utils';
import { set } from 'lodash-es';
import { DefaultCode, OutputIds, Comments } from './constants';

export default {
  '@init'({ style, input, data }) {
    style.height = 400;
    style.width = '100%';
    initInput(data).forEach(({ id, title, schema = { type: 'any' } }) => {
      if (!input.get(id)) {
        input.add(id, title, schema);
      }
    });
    data.componentCode = encodeURIComponent(DefaultCode);
  },
  '@resize': {
    options: ['height', 'width']
  },
  ':root': ({ data, input, output }: EditorResult<any>, cate0: any, cate1: any, cate2: any) => {
    initInput(data).forEach(({ id, title, schema = { type: 'any' } }) => {
      if (!input.get(id)) {
        input.add(id, title, schema);
      }
    });
    setSchema(data, input, output);

    cate0.title = '常规';
    cate0.items = [
      {
        title: '类型',
        type: 'Select',
        options: [
          { label: '基础折线图', value: 'default' },
          { label: '多折线图', value: 'more' },
          { label: '阶梯折线图', value: 'step' }
        ],
        value: {
          get({ data }: EditorResult<Data>) {
            return data.subType;
          },
          set({ data, input, output }: EditorResult<Data>, value: string) {
            data.subType = value;
            if (value === 'step') {
              data.config = {
                ...data.config,
                stepType: 'vh',
                seriesField: ''
              };
            } else if (value === 'more') {
              data.config = {
                ...data.config,
                stepType: '',
                seriesField: data.config.seriesField || 'category'
              };
            } else {
              data.config = {
                ...data.config,
                stepType: '',
                seriesField: ''
              };
            }
            setSchema(data, input, output);
          }
        }
      },
      {
        title: '平滑曲线',
        ifVisible({ data }) {
          return data.subType !== 'step';
        },
        type: 'switch',
        value: {
          get({ data }: EditorResult<Data>) {
            return data.config.smooth;
          },
          set({ data }: EditorResult<Data>, value: boolean) {
            return (data.config.smooth = value);
          }
        }
      },
      {
        title: '数据映射',
        items: [
          {
            title: 'x横轴字段名',
            type: 'Text',
            description: '横轴映射对应的数据字段名',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.xField || 'year';
              },
              set({ data, input, output }: EditorResult<Data>, value: string) {
                data.config.xField = value;
                setSchema(data, input, output);
              }
            }
          },
          {
            title: 'y纵轴字段名',
            type: 'Text',
            description: '纵轴映射对应的数据字段名',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.yField;
              },
              set({ data, input, output }: EditorResult<Data>, value: string) {
                data.config.yField = value;
                setSchema(data, input, output);
              }
            }
          },
          {
            title: '分组字段名',
            type: 'Text',
            description: '聚合维度对应的数据字段名',
            ifVisible({ data }) {
              return ['more', 'stack', 'group'].includes(data.subType);
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.seriesField || 'type';
              },
              set({ data, input, output }: EditorResult<Data>, value: string) {
                data.config.seriesField = value;
                setSchema(data, input, output);
              }
            }
          }
        ]
      },
      {
        title: '图例',
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
              set({ data }: EditorResult<Data>, value: boolean) {
                if (!value) {
                  data.config.legend = false;
                } else {
                  data.config.legend = { position: 'right' };
                }
              }
            }
          },
          {
            title: '单击图例复制名称',
            type: 'Switch',
            ifVisible({ data }: EditorResult<Data>) {
              return !!data.config.legend;
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data.copyLegendTextOnClick;
              },
              set({ data }: EditorResult<Data>, value: boolean) {
                data.copyLegendTextOnClick = value;
              }
            }
          },
          {
            title: '位置',
            type: 'Select',
            ifVisible({ data }: EditorResult<Data>) {
              return !!data.config.legend;
            },
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
          },
          {
            title: 'x轴方向偏移',
            type: 'text',
            ifVisible({ data }: EditorResult<Data>) {
              return !!data.config.legend;
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.legend.offsetX;
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.config.legend.offsetX = Number(value);
                data.config.legend = { ...data.config.legend };
              }
            }
          },
          {
            title: 'y轴方向偏移',
            type: 'text',
            ifVisible({ data }: EditorResult<Data>) {
              return !!data.config.legend;
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.legend.offsetY;
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.config.legend.offsetY = Number(value);
                data.config.legend = { ...data.config.legend };
              }
            }
          }
        ]
      },
      {
        title: '内间距',
        items: [
          {
            title: '自动内间距',
            type: 'switch',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.padding === 'auto';
              },
              set({ data }: EditorResult<Data>, value: boolean) {
                data.config = {
                  ...data.config,
                  padding: value ? 'auto' : [0, 0, 0, 0]
                };
              }
            }
          },
          {
            title: '内间距',
            type: 'inputNumber',
            description: '默认自动计算, 当边界存在遮挡时可手动设置内边距',
            options: [{ title: '上' }, { title: '右' }, { title: '下' }, { title: '左' }],
            ifVisible({ data }: EditorResult<Data>) {
              return data.config.padding !== 'auto';
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.padding;
              },
              set({ data }: EditorResult<Data>, value: number[]) {
                data.config = {
                  ...data.config,
                  padding: value
                };
              }
            }
          }
        ]
      },
      {
        title: '提示信息',
        items: [
          {
            title: '自定义提示信息内容',
            type: 'switch',
            value: {
              get({ data }: EditorResult<Data>) {
                return data?.customizeTooltip;
              },
              set({ data }: EditorResult<Data>, value: boolean) {
                data.customizeTooltip = value;
              }
            }
          },
          {
            title: '渲染代码',
            type: 'code',
            ifVisible({ data }: EditorResult<Data>) {
              return !!data.customizeTooltip;
            },
            options: {
              title: '编辑自定义渲染代码',
              language: 'typescript',
              width: 600,
              minimap: {
                enabled: false
              },
              eslint: {
                parserOptions: {
                  ecmaVersion: '2020',
                  sourceType: 'module'
                }
              },
              babel: false,
              autoSave: false,
              immediatelySet: true,
              comments: Comments,
              extraLib: data.extraLib
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data?.componentCode;
              },
              set({ data }: EditorResult<Data>, val: string) {
                data.componentCode = val;
              }
            }
          }
        ]
      },
      {
        title: '数据标签配置',
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
                  output.remove(OutputIds.LabelClick);
                } else {
                  data.config.label = {};
                  !output?.get(OutputIds.LabelClick) &&
                    output.add(OutputIds.LabelClick, '数据标签点击事件', {
                      type: 'any'
                    });

                  setSchema(data, input, output);
                }
              }
            }
          },
          {
            title: '数据标签点击事件',
            type: '_event',
            ifVisible({ data }: EditorResult<Data>) {
              return !!data.config.label;
            },
            options: {
              outputId: OutputIds.LabelClick
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
                if (data?.config?.label) {
                  return {
                    ...data?.config?.label?.style,
                    color: data?.config?.label?.style?.fill || 'black',
                    fontSize: `${data?.config?.label?.style?.fontSize || 12}px`,
                    lineHeight: `${data?.config?.label?.style?.lineHeight || 12}px`
                  };
                }
                return {
                  fill: 'black',
                  color: 'black',
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
          }
        ]
      },
      {
        title: '空状态',
        items: [
          {
            title: '默认空状态',
            description: '开启后，当数据为空时显示默认的空状态',
            type: 'Switch',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.useEmpty;
              },
              set({ data }: EditorResult<Data>, value: boolean) {
                data.useEmpty = value;
              }
            }
          },
          {
            title: '空状态文案',
            type: 'Text',
            options: {
              placeholder: '空状态文案'
            },
            ifVisible({ data }: EditorResult<Data>) {
              return data.useEmpty;
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data.emptyText;
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.emptyText = value;
              }
            }
          }
        ]
      },
      {
        title: '事件',
        items: [
          {
            title: '查看节点变化事件',
            type: 'switch',
            value: {
              get({ data }: EditorResult<Data>) {
                return data?.showTooltipChange || false;
              },
              set({ data }: EditorResult<Data>, value: boolean) {
                data.showTooltipChange = value;
                if (value) {
                  !output?.get(OutputIds.TooltipChange) &&
                    output.add(OutputIds.TooltipChange, '查看节点变化事件', {
                      type: 'any'
                    });
                  setSchema(data, input, output);
                } else {
                  output.remove(OutputIds.TooltipChange);
                }
              }
            }
          },
          {
            title: '查看节点变化事件',
            type: '_event',
            ifVisible({ data }: EditorResult<Data>) {
              return !!data?.showTooltipChange;
            },
            options: {
              outputId: OutputIds.TooltipChange
            }
          },
          {
            title: '查看节点点击事件',
            type: 'switch',
            value: {
              get({ data }: EditorResult<Data>) {
                return data?.showPlotClick || false;
              },
              set({ data }: EditorResult<Data>, value: boolean) {
                data.showPlotClick = value;
                if (value) {
                  !output?.get(OutputIds.PlotClick) &&
                    output.add(OutputIds.PlotClick, '查看节点点击事件', {
                      type: 'any'
                    });
                  setSchema(data, input, output);
                } else {
                  output.remove(OutputIds.PlotClick);
                }
              }
            }
          },
          {
            title: '查看节点点击事件',
            type: '_event',
            ifVisible({ data }: EditorResult<Data>) {
              return !!data?.showPlotClick;
            },
            options: {
              outputId: OutputIds.PlotClick
            }
          }
        ]
      }
    ];

    cate1.title = '图表配置';
    cate1.items = [
      {
        title: 'x横轴',
        items: [
          {
            title: '标题',
            type: 'Text',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.xAxis.title?.text;
              },
              set({ data }: EditorResult<Data>, value: string) {
                set(data.config.xAxis, ['title', 'text'], value);
                reRender(data);
              }
            }
          },
          {
            title: '标题位置',
            type: 'Select',
            options: [
              { label: '左侧', value: 'start' },
              { label: '中间', value: 'center' },
              { label: '右侧', value: 'end' }
            ],
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.xAxis.title?.position || 'center';
              },
              set({ data }: EditorResult<Data>, value: 'start' | 'center' | 'end') {
                set(data.config.xAxis, ['title', 'position'], value);
                reRender(data);
              }
            }
          }
        ]
      },
      {
        title: 'y纵轴',
        items: [
          {
            title: '标题',
            type: 'Text',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.yAxis.title?.text;
              },
              set({ data }: EditorResult<Data>, value: string) {
                set(data.config.yAxis, ['title', 'text'], value);
                reRender(data);
              }
            }
          },
          {
            title: '标题位置',
            type: 'Select',
            options: [
              { label: '上侧', value: 'end' },
              { label: '中间', value: 'center' },
              { label: '下侧', value: 'start' }
            ],
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.yAxis.title?.position || 'center';
              },
              set({ data }: EditorResult<Data>, value: 'start' | 'center' | 'end') {
                set(data.config.yAxis, ['title', 'position'], value);
                reRender(data);
              }
            }
          },
          {
            title: '网格线',
            type: 'inputNumber',
            description:
              '虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。设为[0,0]的效果为没有描边。',
            options: [{ title: '分段长度' }, { title: '分段间隔距离' }],
            value: {
              get({ data }: EditorResult<Data>) {
                data.config.yAxis = data.config.yAxis ?? {};
                data.config.yAxis.grid = data.config.yAxis.grid ?? {};
                data.config.yAxis.grid.line = data.config.yAxis.grid.line ?? {};
                data.config.yAxis.grid.line.style = data.config.yAxis.grid.line.style ?? {};
                return data.config.yAxis?.grid?.line?.style?.lineDash || [0, 0];
              },
              set({ data }: EditorResult<Data>, value: number[]) {
                set(data.config.yAxis.grid.line.style, ['lineDash'], value);
                reRender(data);
              }
            }
          }
        ]
      },
      {
        title: '标注',
        items: [
          {
            type: 'array',
            options: {
              getTitle: ({ label }) => {
                return label;
              },
              onRemove: (index: number) => {
                delAnnotation(index);
              },
              onAdd: () => {
                const defaultAnnotation: AnnotationItem = {
                  label: `标注${data.tempAnnotations.length}`,
                  type: 'text',
                  position: ['min', 'min'],
                  start: ['min', 'min'],
                  end: ['max', 'max'],
                  content: `标注${data.tempAnnotations.length}`,
                  // line: null,
                  yFieldIndex: 0,
                  positionField: '',
                  textColor: 'blue',
                  mainColor: 'blue',
                  useDash: true,
                  autoRotate: true
                };
                addAnnotation(defaultAnnotation);
                return defaultAnnotation;
              },
              items: [
                {
                  title: '标注名称',
                  type: 'text',
                  value: 'label'
                },
                {
                  title: '类型',
                  type: 'Select',
                  options: [
                    { label: '辅助文本', value: 'text' },
                    { label: '辅助线(可带文本)', value: 'line' },
                    { label: '辅助框', value: 'region' },
                    { label: '数据点', value: 'dataMarker' }
                  ],
                  value: 'type'
                },
                {
                  title: '区域颜色',
                  type: 'colorPicker',
                  ifVisible(datum, index) {
                    return ['region'].includes(datum.type);
                  },
                  value: 'mainColor'
                },
                {
                  title: '数据点颜色',
                  type: 'colorPicker',
                  ifVisible(datum, index) {
                    return ['dataMarker'].includes(datum.type);
                  },
                  value: 'mainColor'
                },
                {
                  title: '虚线',
                  type: 'switch',
                  ifVisible(datum, index) {
                    return ['line'].includes(datum.type);
                  },
                  value: 'useDash'
                },
                {
                  title: '线段颜色',
                  type: 'colorPicker',
                  ifVisible(datum, index) {
                    return ['line'].includes(datum.type);
                  },
                  value: 'mainColor'
                },
                {
                  title: '坐标',
                  type: 'text',
                  ifVisible(datum, index) {
                    return ['text', 'dataMarker'].includes(datum.type);
                  },
                  value: 'position'
                },
                {
                  title: '动态坐标字段',
                  type: 'text',
                  ifVisible(datum, index) {
                    return ['text', 'dataMarker'].includes(datum.type);
                  },
                  value: 'positionField'
                },
                {
                  title: '起始坐标',
                  type: 'text',
                  ifVisible(datum, index) {
                    return ['line', 'region'].includes(datum.type);
                  },
                  value: 'start'
                },
                {
                  title: '结束坐标',
                  type: 'text',
                  ifVisible(datum, index) {
                    return ['line', 'region'].includes(datum.type);
                  },
                  value: 'end'
                },
                {
                  title: '文本内容',
                  type: 'textarea',
                  ifVisible(datum, index) {
                    return ['text', 'line', 'dataMarker'].includes(datum.type);
                  },
                  value: 'content'
                },
                {
                  title: '文本与线段平行',
                  type: 'switch',
                  ifVisible(datum, index) {
                    return ['line'].includes(datum.type);
                  },
                  value: 'autoRotate'
                },
                {
                  title: '文本颜色',
                  type: 'colorPicker',
                  ifVisible(datum, index) {
                    return ['text', 'line', 'dataMarker'].includes(datum.type);
                  },
                  value: 'textColor'
                }
              ]
            },
            value: {
              get({ data }: EditorResult<Data>) {
                initParams(data);
                return data.tempAnnotations;
              },
              set({ data }: EditorResult<Data>, value: AnnotationItem[]) {
                data.tempAnnotations = value;

                let annotations;
                value.forEach((item: any) => {
                  const copyItem: any = { ...item };
                  const {
                    position,
                    start,
                    end,
                    content,
                    type,
                    positionField,
                    textColor,
                    mainColor,
                    useDash,
                    autoRotate
                  } = item;
                  if (position && !Array.isArray(position)) {
                    copyItem.position = position.split(',');
                  }
                  if (start && !Array.isArray(start)) {
                    copyItem.start = start.split(',');
                  }
                  if (end && !Array.isArray(end)) {
                    copyItem.end = end.split(',');
                  }
                  if (content && ['line', 'dataMarker'].includes(type)) {
                    copyItem.text = { content, autoRotate, style: { fill: textColor } };
                  }
                  if (content && ['text'].includes(type)) {
                    copyItem.style = { fill: textColor };
                  }
                  if (mainColor && ['dataMarker'].includes(type)) {
                    copyItem.point = { style: { stroke: mainColor } };
                  }
                  if (mainColor && ['region'].includes(type)) {
                    copyItem.style = { fill: mainColor };
                  }
                  if (mainColor && ['line'].includes(type)) {
                    copyItem.style = { stroke: mainColor, lineDash: useDash ? [4, 4] : [0, 0] };
                  }
                  delete copyItem._id;
                  delete copyItem.label;
                  delete copyItem.yFieldIndex;
                  delete copyItem.positionField;
                  delete copyItem.textColor;
                  delete copyItem.mainColor;
                  delete copyItem.useDash;
                  if (!annotations) annotations = [];
                  !positionField && annotations.push(copyItem);
                });

                data.config.annotations = annotations;
                reRender(data);
              }
            }
          }
        ]
      },
      {
        title: '缩略轴',
        items: [
          {
            title: '显示',
            type: 'switch',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.slider;
              },
              set({ data }: EditorResult<Data>, use: boolean) {
                data.config.slider = use ? { start: 0.1, end: 0.9 } : void 0;
                reRender(data);
              }
            }
          }
        ]
      }
    ];

    cate2.title = '样式';
    cate2.items = [
      {
        title: '折线',
        items: [
          {
            title: '自定义折线样式',
            type: 'switch',
            value: {
              get({ data }: EditorResult<Data>) {
                return data?.customLineStyle || false;
              },
              set({ data }: EditorResult<Data>, value: boolean) {
                const lineStyle = value ? { lineWidth: 2, stroke: '#2C68FF' } : void 0;
                set(data.config, ['lineStyle'], lineStyle);
                reRender(data);
                data.customLineStyle = value;
              }
            }
          },
          {
            title: '线宽',
            type: 'inputNumber',
            ifVisible({ data }) {
              return data.customLineStyle;
            },
            description: '折线宽度',
            options: [{ min: 0, max: 1000, width: 100 }],
            value: {
              get({ data }: EditorResult<Data>) {
                return [data.config?.lineStyle?.lineWidth || 0];
              },
              set({ data, input, output }: EditorResult<Data>, value: number[]) {
                set(data.config.lineStyle, ['lineWidth'], value[0]);
                reRender(data);
              }
            }
          },
          {
            title: '线颜色',
            type: 'Text',
            ifVisible({ data }) {
              return data.customLineStyle;
            },
            description: '支持RGB和十六进制以及渐变色, 示例: l(0) 0:#1EE7FF 0.5:#249AFF 1:#6F42FB',
            options: {
              placeholder: 'l(0) 0:#1EE7FF 0.5:#249AFF 1:#6F42FB'
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config?.lineStyle?.stroke || '';
              },
              set({ data, input, output }: EditorResult<Data>, value: string) {
                set(data.config.lineStyle, ['stroke'], value);
                reRender(data);
              }
            }
          }
        ]
      },
      {
        title: '数据点',
        items: [
          {
            title: '自定义数据点样式',
            type: 'switch',
            value: {
              get({ data }: EditorResult<Data>) {
                return data?.customPointStyle || false;
              },
              set({ data }: EditorResult<Data>, value: boolean) {
                const point = value
                  ? { size: 5, style: { stroke: '#2C68FF', fill: '#FFFFFF', lineWidth: 2 } }
                  : void 0;
                set(data.config, ['point'], point);
                reRender(data);
                data.customPointStyle = value;
              }
            }
          },
          {
            title: '大小',
            type: 'inputNumber',
            ifVisible({ data }) {
              return data.customPointStyle;
            },
            description: '数据点半径',
            options: [{ min: 0, max: 1000, width: 100 }],
            value: {
              get({ data }: EditorResult<Data>) {
                return [data.config?.point?.size || 0];
              },
              set({ data, input, output }: EditorResult<Data>, value: number[]) {
                set(data.config.point, ['size'], value[0]);
                reRender(data);
              }
            }
          },
          {
            title: '描边颜色',
            type: 'Text',
            ifVisible({ data }) {
              return data.customPointStyle;
            },
            description: '支持RGB和十六进制',
            options: {
              placeholder: '#2C68FF'
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config?.point?.style?.stroke || '';
              },
              set({ data, input, output }: EditorResult<Data>, value: string) {
                set(data.config.point.style, ['stroke'], value);
                reRender(data);
              }
            }
          },
          {
            title: '线宽',
            type: 'inputNumber',
            ifVisible({ data }) {
              return data.customPointStyle;
            },
            options: [{ min: 0, max: 1000, width: 100 }],
            value: {
              get({ data }: EditorResult<Data>) {
                return [data.config?.point?.style?.lineWidth || 0];
              },
              set({ data, input, output }: EditorResult<Data>, value: number[]) {
                set(data.config.point.style, ['lineWidth'], value);
                reRender(data);
              }
            }
          },
          {
            title: '填充颜色',
            type: 'Text',
            ifVisible({ data }) {
              return data.customPointStyle;
            },
            description: '支持RGB和十六进制',
            options: {
              placeholder: '#2C68FF'
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config?.point?.style?.fill || '';
              },
              set({ data, input, output }: EditorResult<Data>, value: string) {
                set(data.config.point.style, ['fill'], value);
                reRender(data);
              }
            }
          }
        ]
      },
      {
        title: '折线趋势',
        items: [
          {
            title: '自定义折线趋势样式',
            type: 'switch',
            value: {
              get({ data }: EditorResult<Data>) {
                return data?.customAreaStyle || false;
              },
              set({ data }: EditorResult<Data>, value: boolean) {
                const area = value ? { color: 'l(270) 0:#ffffff 1:#2C68FF' } : void 0;
                set(data.config, ['area'], area);
                reRender(data);
                data.customAreaStyle = value;
              }
            }
          },
          {
            title: '折线趋势填充色',
            type: 'Text',
            ifVisible({ data }) {
              return data?.customAreaStyle;
            },
            description: '支持RGB和十六进制以及渐变色, 示例: l(270) 0:#ffffff 1:#2C68FF',
            options: {
              placeholder: 'l(270) 0:#ffffff 1:#2C68FF'
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config?.area?.color || '';
              },
              set({ data, input, output }: EditorResult<Data>, value: string) {
                set(data.config.area, ['color'], value);
                reRender(data);
              }
            }
          }
        ]
      }
    ];
  }
};

let addAnnotation, delAnnotation;

const initParams = (data: Data) => {
  if (!data.tempAnnotations) data.tempAnnotations = [];
  addAnnotation = (option: AnnotationItem) => {
    data.tempAnnotations.push(option);
  };
  delAnnotation = (index: number) => {
    data.tempAnnotations.splice(index, 1);
  };
};

export const setSchema = (data: Data, input: any, output: any) => {
  const schema = data.subType === 'more' ? schemaDiff(data) : schemaDefault(data);

  const setTooltipShowSchema = (schema: Record<string, any>) => {
    if (output?.get(OutputIds.TooltipChange)) {
      output.get(OutputIds.TooltipChange).setSchema({
        type: 'array',
        items: {
          type: 'object',
          properties: {
            data: schema.items
          }
        }
      });
    }
  };

  input.get('data').setSchema(schema);
  if (output && output.get(OutputIds.LabelClick) && !!data.config.label) {
    output.get(OutputIds.LabelClick)?.setSchema(schema);
  }
  if (output && output.get(OutputIds.PlotClick) && data?.showPlotClick) {
    output.get(OutputIds.PlotClick)?.setSchema(schema);
  }

  setTooltipShowSchema(schema);
};
