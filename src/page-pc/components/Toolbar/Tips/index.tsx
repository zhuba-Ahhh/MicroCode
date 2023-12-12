import React, { useState } from 'react';
import { Popover, Modal, Divider } from 'antd';
import css from './index.less';
import { keyIcon } from './Icons';
import { uuid } from '../../../../tools';
import { infoList, optList } from './constants';

interface TipsProps {
  opt?: Opt[];
  info?: Opt[];
}

interface Opt {
  name?: string;
  keys?: any[];
}

export const Tips = ({ opt = optList, info = infoList }: TipsProps) => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const infoListRender = (list: any[]) => {
    return (
      <div className={css.infoItem}>
        {list.map((item) => {
          return (
            <div className={css.itemList} key={uuid()}>
              <div className={css.itemListLeft}>{item.name}</div>
              <div className={css.itemListRight}>
                {item.keys.map(
                  (
                    key:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                      | Iterable<React.ReactNode>
                      | null
                      | undefined
                  ) => {
                    if (key !== '/') {
                      return (
                        <div className={css.liBtn} key={uuid()}>
                          {key}
                        </div>
                      );
                    } else {
                      return <div key={uuid()}>{key}</div>;
                    }
                  }
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const optListRender = (list: any[]) => {
    return (
      <div className={css.optItem}>
        {list.map(
          (item: {
            name:
              | string
              | number
              | boolean
              | React.ReactElement<any, string | React.JSXElementConstructor<any>>
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | null
              | undefined;
            keys: any[];
          }) => {
            return (
              <div className={css.itemList} key={uuid()}>
                <div className={css.itemListLeft}>{item.name}</div>
                <div className={css.itemListRight}>
                  {item.keys.map(
                    (
                      key:
                        | string
                        | number
                        | boolean
                        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | null
                        | undefined
                    ) => {
                      return (
                        <div className={css.liOpt} key={uuid()}>
                          {key}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
    );
  };

  return (
    <div>
      <div className={css.tipsPosition}>
        <div
          onClick={() => {
            setIsInfoModalOpen(true);
          }}
          className={css.item}
        >
          <Popover
            placement="bottom"
            overlayClassName={css.overlayFilePopover}
            content={() => {
              return <div className={css.fileInfo}>快捷键和常规操作</div>;
            }}
          >
            <div className={css.filePosition}>{keyIcon}</div>
          </Popover>
        </div>
      </div>

      {/* 快捷键 */}
      <Modal
        visible={isInfoModalOpen}
        title={'快捷键和常规操作'}
        footer={null}
        onCancel={() => setIsInfoModalOpen(false)}
        width={1060}
      >
        <div className={css.itemContent}>
          {infoListRender(info)}
          <Divider type="vertical" style={{ height: 'inherit' }} />
          {optListRender(opt)}
        </div>
      </Modal>
    </div>
  );
};
