import { DISPLAY_LABEL } from "./constants";

export function formatLabelContent(displayFields: any, data: any): string {
  return displayFields
    .filter(({ key, min, max }) => {
      if (data[DISPLAY_LABEL] === false) return false;
      const hasMin = min !== void 0 && min.trim() !== '';
      const hasMax = max !== void 0 && max.trim() !== '';
      if (!hasMin && !hasMax) return true;
      if (!hasMax) return data[key] >= min;
      if (!hasMin) return data[key] <= max;
      return data[key] >= min && data[key] <= max;
    })
    .map(({ key }) => data[key])
    .join(',');
}

export const setConfig = (config, { chart, geometry }) => {
  const {
    xField = '',
    yField = '',
    colorField = '',
    size,
    xAxis,
    yAxis,
    label,
    colors = [],
    annotations = []
  } = config;
  if (xField && yField) {
    geometry.position([xField, yField]);
  }
  if (colorField) {
    geometry.color(colorField, colors);
    chart &&chart.scale({
      [colorField]: { nice: true, min: 0 },
    });
  }
  geometry.label('', {
    content: (data) => formatLabelContent(label.displayFields, data),
    style: label.style,
  });
  if (size) {
    geometry.size(+size);
  }
  if (xAxis && chart) {
    chart.scale({
      [xField]: {
        nice: true,
        min: xAxis.min === void 0 ? 0 : xAxis.min,
        max: xAxis.max === void 0 ? void 0 : xAxis.max,
      },
    });
  }
  if (yAxis && chart) {
    chart.scale({
      [yField]: {
        nice: true,
        min: yAxis.min === void 0 ? 0 : yAxis.min,
        max: yAxis.max === void 0 ? void 0 : yAxis.max,
      },
    });
  }
  if (annotations.length) {
    chart.annotation().image({ ...annotations[0] });
  }
};

export const markLabel = (list, pick) => {
  return list.map((item, index) => {
    if (!pick || pick(item, index, list.length, list)) {
      return item
    }
    return {
      ...item,
      [DISPLAY_LABEL]: false
    };
  })
}