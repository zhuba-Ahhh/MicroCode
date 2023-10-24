/* eslint-disable @typescript-eslint/no-unused-vars */
import toolsPlugin from '@mybricks/plugin-tools';

//加载连接器插件
import servicePlugin from '@mybricks/plugin-connector-http';
import comEnv from './comEnv';
import Views from './Views';
import Loaders from './Loaders';

import { useDataJSON } from '../types';

export default (
  designerRef: any,
  save: any,
  projectJson: string,
  userDataJSON: useDataJSON,
  changeUserDataJSON: (value: any) => void
) => {
  return (
    designerRef && {
      shortcuts: {
        'ctrl+s': [save]
      },
      plugins: [servicePlugin(), toolsPlugin()], //配置插件
      ...Loaders(projectJson),
      ...Views(userDataJSON, changeUserDataJSON),

      com: comEnv(userDataJSON)
    }
  );
};
