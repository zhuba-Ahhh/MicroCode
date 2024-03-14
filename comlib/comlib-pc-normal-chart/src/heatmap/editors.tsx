import React from 'react';
import { Data } from '../utils/const';

export default {
  '@init'({ style }) {
    style.height = 400;
    style.width = 500;
  },
  '@resize': {
    options: ['height', 'width']
  },
  ':root'({ data }, cate0, cate1, cate2) {
    cate0.title = '通用设置';
    cate0.items = [
      {
        title: '字段映射',
        items: [
          {
            title: 'x横轴字段名',
            type: 'Text',
            description: '横轴映射对应的数据字段名',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.xField || 'x';
              },
              set({ data, input }: EditorResult<Data>, value: string) {
                data.config.xField = value;
                let newSchema = {
                  type: 'object',
                  properties: {
                    dataSource: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          [data.config.xField]: {
                            title: 'x轴字段名',
                            type: 'number'
                          },
                          [data.config.yField]: {
                            title: 'y轴字段名',
                            type: 'number'
                          },
                          [data.config.colorField]: {
                            title: '颜色字段名',
                            type: 'number'
                          }
                        }
                      }
                    },
                    xAxis: {
                      type: 'object',
                      properties: {
                        min: {
                          type: 'number'
                        },
                        max: {
                          type: 'number'
                        }
                      }
                    },
                    yAxis: {
                      type: 'object',
                      properties: {
                        min: {
                          type: 'number'
                        },
                        max: {
                          type: 'number'
                        }
                      }
                    }
                  }
                };
                input.get('data').setSchema(newSchema);
              }
            }
          },
          {
            title: 'y纵轴字段名',
            type: 'Text',
            description: '纵轴映射对应的数据字段名',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.yField || 'y';
              },
              set({ data, input }: EditorResult<Data>, value: string) {
                data.config.yField = value;
                let newSchema = {
                  type: 'object',
                  properties: {
                    dataSource: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          [data.config.xField]: {
                            title: 'x轴字段名',
                            type: 'number'
                          },
                          [data.config.yField]: {
                            title: 'y轴字段名',
                            type: 'number'
                          },
                          [data.config.colorField]: {
                            title: '颜色字段名',
                            type: 'number'
                          }
                        }
                      }
                    },
                    xAxis: {
                      type: 'object',
                      properties: {
                        min: {
                          type: 'number'
                        },
                        max: {
                          type: 'number'
                        }
                      }
                    },
                    yAxis: {
                      type: 'object',
                      properties: {
                        min: {
                          type: 'number'
                        },
                        max: {
                          type: 'number'
                        }
                      }
                    }
                  }
                };
                input.get('data').setSchema(newSchema);
              }
            }
          },
          {
            title: '颜色字段名',
            type: 'text',
            description: '颜色映射对应的数据字段名',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.colorField;
              },
              set({ data, input }: EditorResult<Data>, value: string) {
                data.config.colorField = value;
                let newSchema = {
                  type: 'object',
                  properties: {
                    dataSource: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          [data.config.xField]: {
                            title: 'x轴字段名',
                            type: 'number'
                          },
                          [data.config.yField]: {
                            title: 'y轴字段名',
                            type: 'number'
                          },
                          [data.config.colorField]: {
                            title: '颜色字段名',
                            type: 'number'
                          }
                        }
                      }
                    },
                    xAxis: {
                      type: 'object',
                      properties: {
                        min: {
                          type: 'number'
                        },
                        max: {
                          type: 'number'
                        }
                      }
                    },
                    yAxis: {
                      type: 'object',
                      properties: {
                        min: {
                          type: 'number'
                        },
                        max: {
                          type: 'number'
                        }
                      }
                    }
                  }
                };
                input.get('data').setSchema(newSchema);
              }
            }
          },
          {
            title: '颜色字段别名',
            type: 'text',
            description: '颜色映射字段对应的别名',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.zAxis.alias;
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.config.zAxis.alias = value;
              }
            }
          }
        ]
      },
      {
        title: '动图配置',
        items: [
          {
            title: '时间间隔',
            type: 'text',
            description: '单位为毫秒，数据源为二维数组时生效',
            value: {
              get({ data }) {
                return data.config.interval;
              },
              set({ data }, value: string) {
                data.config.interval = +value;
              }
            }
          }
        ]
      }
    ];

    cate1.title = '主图';
    cate1.items = [
      {
        title: '颜色序列',
        items: [
          {
            type: 'array',
            options: {
              getTitle: ({ color }) => {
                return (
                  <>
                    <span>{color}</span>
                    <span
                      style={{
                        display: 'inline-block',
                        marginLeft: 10,
                        width: 10,
                        height: 10,
                        background: color
                      }}
                    ></span>
                  </>
                );
              },
              onRemove: (index: number) => {
                data.config.colors.splice(index, 1);
              },
              onAdd: () => {
                const defaultOption = { color: '#cccccc' };
                data.config.colors.push(defaultOption);
                return defaultOption;
              },
              items: [
                {
                  title: '颜色序列',
                  type: 'colorPicker',
                  value: 'color'
                }
              ]
            },
            value: {
              get({ data }: EditorResult<any>) {
                return data.config.colors.map((c) => ({ color: c }));
              },
              set({ data }: EditorResult<any>, options: any[]) {
                data.config = {
                  ...data.config,
                  colors: options.map(({ color }) => color)
                };
              }
            }
          }
        ]
      },
      {
        title: '图形配置',
        items: [
          {
            title: '背景图',
            type: 'imageSelector',
            value: {
              get({ data }) {
                return data.config.annotations[0].src;
              },
              set({ data }, url: string) {
                data.config.annotations[0].src = url;
                data.config = { ...data.config };
              }
            }
          },
          {
            title: '颜色半径',
            type: 'text',
            value: {
              get: ({ data }) => {
                return data.config.size;
              },
              set: ({ data }, size: string) => {
                data.config = { ...data.config, size };
              }
            }
          }
        ]
      },
      {
        title: '标签配置',
        items: [
          {
            type: 'array',
            options: {
              getTitle: ({ label, value }) => {
                return label ? `${value} (${label})` : value;
              },
              onRemove: (index: number) => {
                data.config.label.displayFields.splice(index, 1);
              },
              onAdd: () => {
                const defaultOption = { label: '字段名', key: 'field' };
                data.config.label.displayFields.push(defaultOption);
                return defaultOption;
              },
              items: [
                {
                  title: '字段',
                  type: 'textarea',
                  value: 'key'
                },
                {
                  title: '别名',
                  type: 'textarea',
                  value: 'label'
                },
                {
                  title: '显示区间-最小值',
                  options: {
                    placeholder: ''
                  },
                  type: 'textarea',
                  value: 'min'
                },
                {
                  title: '显示区间-最大值',
                  options: {
                    placeholder: ''
                  },
                  type: 'textarea',
                  value: 'max'
                }
              ]
            },
            value: {
              get({ data }: EditorResult<any>) {
                return data.config.label.displayFields;
              },
              set({ data }: EditorResult<any>, options: any[]) {
                data.config = {
                  ...data.config,
                  label: {
                    ...data.config.label,
                    displayFields: options
                  }
                };
              }
            }
          },
          {
            title: '字号大小',
            type: 'text',
            value: {
              get({ data }) {
                return data.config.label.style.fontSize;
              },
              set({ data }, value: string) {
                data.config.label.style.fontSize = +value;
                data.config = { ...data.config };
              }
            }
          },
          {
            title: '颜色',
            type: 'colorPicker',
            value: {
              get({ data }) {
                return data.config.label.style.fill || '#333333';
              },
              set({ data }, value: string) {
                data.config.label.style.fill = value;
                data.config = { ...data.config };
              }
            }
          }
        ]
      }
    ];

    cate2.title = '辅图';
    cate2.items = [
      {
        title: '使用',
        type: 'switch',
        value: {
          get: ({ data }) => {
            return data.useSubHeatMap;
          },
          set: ({ data, input }, use: Boolean) => {
            data.useSubHeatMap = use;
            // if (use) {
            //   input.add('extraData0', '辅图数据', {
            //     type: 'array',
            //     items: {
            //       type: 'object',
            //       properties: {},
            //     },
            //   });
            // } else {
            //   input.remove('extraData0');
            // }
          }
        }
      },
      {
        title: '颜色序列',
        ifVisible({ data }) {
          return data.useSubHeatMap;
        },
        items: [
          {
            type: 'array',
            options: {
              getTitle: ({ color }) => {
                return (
                  <>
                    <span>{color}</span>
                    <span
                      style={{
                        display: 'inline-block',
                        marginLeft: 10,
                        width: 10,
                        height: 10,
                        background: color
                      }}
                    ></span>
                  </>
                );
              },
              onRemove: (index: number) => {
                data.subConfig[0].colors.splice(index, 1);
              },
              onAdd: () => {
                const defaultOption = { color: '#cccccc' };
                data.subConfig[0].colors.push(defaultOption);
                return defaultOption;
              },
              items: [
                {
                  title: '颜色序列',
                  type: 'colorPicker',
                  value: 'color'
                }
              ]
            },
            value: {
              get({ data }: EditorResult<any>) {
                return data.subConfig[0].colors.map((c) => ({ color: c }));
              },
              set({ data }: EditorResult<any>, options: any[]) {
                data.subConfig[0].colors = options.map(({ color }) => color);
                data.subConfig = [...data.subConfig];
              }
            }
          }
        ]
      },
      {
        title: '图形配置',
        ifVisible({ data }) {
          return data.useSubHeatMap;
        },
        items: [
          {
            title: '颜色半径',
            type: 'text',
            value: {
              get: ({ data }) => {
                return data.subConfig[0].size;
              },
              set: ({ data }, size: string) => {
                data.subConfig[0].size = size;
                data.subConfig = [...data.subConfig];
              }
            }
          }
        ]
      },
      {
        title: '标签配置',
        ifVisible({ data }) {
          return data.useSubHeatMap;
        },
        items: [
          {
            type: 'array',
            options: {
              getTitle: ({ label, value }) => {
                return label ? `${value} (${label})` : value;
              },
              onRemove: (index: number) => {
                data.config.label.displayFields.splice(index, 1);
              },
              onAdd: () => {
                const defaultOption = { label: '字段名', key: 'field' };
                data.subConfig[0].label.displayFields.push(defaultOption);
                return defaultOption;
              },
              items: [
                {
                  title: '字段',
                  type: 'textarea',
                  value: 'key'
                },
                {
                  title: '别名',
                  type: 'textarea',
                  value: 'label'
                },
                {
                  title: '显示区间-最小值',
                  options: {
                    placeholder: ''
                  },
                  type: 'textarea',
                  value: 'min'
                },
                {
                  title: '显示区间-最大值',
                  options: {
                    placeholder: ''
                  },
                  type: 'textarea',
                  value: 'max'
                }
              ]
            },
            value: {
              get({ data }: EditorResult<any>) {
                return data.subConfig[0].label.displayFields;
              },
              set({ data }: EditorResult<any>, options: any[]) {
                data.subConfig[0] = {
                  ...data.subConfig[0],
                  label: {
                    ...data.subConfig[0].label,
                    displayFields: options
                  }
                };
                data.subConfig = [...data.subConfig];
              }
            }
          },
          {
            title: '字号大小',
            type: 'text',
            value: {
              get({ data }) {
                return data.subConfig[0].label.style.fontSize;
              },
              set({ data }, value: string) {
                data.subConfig[0].label.style.fontSize = +value;
                data.subConfig = [...data.subConfig];
              }
            }
          },
          {
            title: '颜色',
            type: 'colorPicker',
            value: {
              get({ data }) {
                return data.subConfig[0].label.style.fill || '#333333';
              },
              set({ data }, value: string) {
                data.subConfig[0].label.style.fill = value;
                data.subConfig = [...data.subConfig];
              }
            }
          }
        ]
      }
    ];
  }
};
