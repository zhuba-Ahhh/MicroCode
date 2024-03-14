import React from 'react';
import { Empty } from 'antd';
import { CSSProperties } from 'react';
import css from './style.less';

interface Props {
  style?: CSSProperties;
  emptyText?: string;
  small?: boolean;
  useEmpty?: boolean;
}
export default (props: Props) => {
  const { emptyText, small, style, useEmpty } = props;
  return (
    <div className={css.emptyWrap} style={{ width: style.width, height: style.height }}>
      {useEmpty ? (
        <Empty
          description={emptyText}
          image={small ? Empty.PRESENTED_IMAGE_SIMPLE : Empty.PRESENTED_IMAGE_DEFAULT}
        />
      ) : null}
    </div>
  );
};
