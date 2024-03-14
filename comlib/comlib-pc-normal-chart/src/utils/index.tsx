import { initInput } from './constants';

export * from './const';
export * from './constants';
export * from './schema';

export const download = (base64: string, imageName: string) => {
  let a: HTMLAnchorElement | null = document.createElement('a');
  a.href = base64;
  a.download = imageName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  a = null;
};

export function downloadImg(chart, { imageName = '图片', base64 = false }) {
  const canvas = chart.getCanvas();
  const renderer = chart.renderer;
  const canvasDom = canvas.get('el');
  let dataURL = '';
  if (renderer === 'svg') {
    const clone = canvasDom.cloneNode(true);
    const svgDocType = document.implementation.createDocumentType(
      'svg',
      '-//W3C//DTD SVG 1.1//EN',
      'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'
    );
    const svgDoc = document.implementation.createDocument(
      'http://www.w3.org/2000/svg',
      'svg',
      svgDocType
    );
    svgDoc.replaceChild(clone, svgDoc.documentElement);
    const svgData = new XMLSerializer().serializeToString(svgDoc);
    dataURL = 'data:image/svg+xml;charset=utf8,' + encodeURIComponent(svgData);
    if (base64) return dataURL;
    download(dataURL, imageName);
    const img = new Image(); // 创建图片容器承载过渡
    img.src = dataURL;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const context = canvas.getContext('2d');
      context.drawImage(img, 0, 0);
      // TODO 图片信息缺失
      const ImgBase64 = canvas.toDataURL('image/png');
      download(ImgBase64, imageName);
    };
  } else if (renderer === 'canvas') {
    dataURL = canvasDom.toDataURL('image/png');
    if (base64) return dataURL;
    download(dataURL, imageName);
  }
  return dataURL;
}

function dataURLtoBlob(dataurl) {
  let arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

// 将blob转换为file
function blobToFile(theBlob, fileName) {
  theBlob.lastModifiedDate = new Date();
  theBlob.name = fileName;
  return theBlob;
}
export function dataURLToFile(dataURL: string, fileName: string) {
  const blob = dataURLtoBlob(dataURL);
  return blobToFile(blob, fileName);
}

const typeMap = {
  'OBJECT': '[object Object]',
  'ARRAY': '[object Array]',
  'STRING': '[object String]',
  'NUMBER': '[object Number]',
  'FORMDATA': '[object FormData]',
  'NULL': '[object Null]',
  'UNDEFINED': '[object Undefined]',
  'BOOLEAN': '[object Boolean]',
  'FUNCTION': '[object Function]'
}

function typeCheck(variable, type) {
  if (Array.isArray(type)) {
    let bool = false
    for (let i = 0; i < type.length; i++) {
      if (typeCheck(variable, type[i])) {
        bool = true
        break
      }
    }
    return bool
  } else {
    const checkType = /^\[.*\]$/.test(type) ? type : typeMap[type.toUpperCase()]
    return Object.prototype.toString.call(variable) === checkType
  }
}

export function callInputs(type: string, { data, env, inputs }: RuntimeParams<{ config: any }>, cbs?) {
  if (env.runtime) {
    initInput(type).forEach(({ id }) => {
      inputs[id]((ds: any) => {
        if (id === 'loading') {
          if (typeof ds === 'string') cbs?.setTip?.(ds);
          cbs?.setLoading?.(!!ds);
        } else if (typeCheck(ds, 'OBJECT')) {
          if (id === 'style') {
            data.config = { ...data.config, ...ds };
          } else {
            if (id === 'axis') id = 'xAxis';
            if (id === 'yaxis') id = 'yAxis';
            const oldConfig = data.config[id] || {};
            data.config = {
              ...data.config,
              [id]: {
                ...oldConfig,
                ...ds
              }
            };
          }
        }
      });
    });
  }
}