import { Divider, Modal, Popover } from 'antd';
import React, { type FC, memo, useState } from 'react';

import { uuid } from '../../../../tools';
import { infoList, type Opt, optList } from './constants';
import { keyIcon } from './Icons';
import css from './index.less';

interface TipsProps {
  opt?: Opt[];
  info?: Opt[];
}

const Tips: FC<TipsProps> = ({ opt = optList, info = infoList }: TipsProps) => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const listItemRender = (list: Opt[], itemStyle: string) => {
    return (
      <div className={itemStyle === 'info' ? css.infoItem : css.optItem}>
        {list.length > 0 &&
          list.map((item) => (
            <div className={css.itemList} key={uuid()}>
              <div className={css.itemListLeft}>{item.name}</div>
              <div className={css.itemListRight}>
                {item.keys &&
                  item.keys.length > 0 &&
                  item.keys.map((key) => (
                    <div className={itemStyle === 'info' ? css.liBtn : css.liOpt} key={uuid()}>
                      {key}
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    );
  };

  return (
    <div>
      <div className={css.tipsPosition}>
        <Popover
          placement="bottom"
          overlayClassName={css.overlayFilePopover}
          content={<div className={css.fileInfo}>快捷键和常规操作</div>}
        >
          <div
            onClick={() => {
              setIsInfoModalOpen(true);
            }}
            className={css.item}
          >
            <div className={css.filePosition}>{keyIcon}</div>
          </div>
        </Popover>
      </div>
      <Modal
        visible={isInfoModalOpen}
        title="快捷键和常规操作"
        footer={null}
        onCancel={() => {
          setIsInfoModalOpen(false);
        }}
        width={1060}
      >
        <div className={css.itemContent}>
          {listItemRender(info, 'info')}
          <Divider type="vertical" style={{ height: 'inherit' }} />
          {listItemRender(opt, 'opt')}
        </div>
      </Modal>
    </div>
  );
};

export default memo(Tips);
