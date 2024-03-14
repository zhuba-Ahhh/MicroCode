import { Data } from "./constants"

function runJs(fnStr: string) {
  return eval(`(${decodeURIComponent(fnStr).replace(/export.*default.*function.*\(/g, 'function _RT_(')})`)
}

function setConfig(data: Data, key: string, value: any) {
  if (!data.config[key]) {
    data.config[key] = value
    data.config = { ...data.config }
  } else {
    data.config[key] = value
  }
}

export {
  runJs,
  setConfig
}