//加载连接器插件
import aiPlugin from '@mybricks/plugin-ai-copilot';
import servicePlugin from '@mybricks/plugin-connector-http';
import toolsPlugin from '@mybricks/plugin-tools';

import type { useDataJSON } from '../types';
import comEnv from './comEnv';
import Loaders from './Loaders';
import Views from './Views';

export default (
  designerRef: any,
  save: any,
  projectJson: string,
  userDataJSON: useDataJSON,
  changeUserDataJSON: (value: any) => void
) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return (
    designerRef && {
      shortcuts: {
        'ctrl+s': [save]
      },
      plugins: [servicePlugin(), toolsPlugin(), aiPlugin()], //配置插件
      ...Loaders(projectJson),
      ...Views(userDataJSON, changeUserDataJSON),

      com: comEnv(userDataJSON)
    }
  );
};
