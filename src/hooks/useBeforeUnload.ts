import { useEffect } from 'react';

/**
 * 
 * @param dep 监听依赖
 * @description 重载页面 未保存数据提示
 */
const useBeforeUnload = (dep: boolean) => {
  useEffect(() => {
    const beforeunload = (e: any) => {
      if (dep) {
        e.preventDefault();
      }
    };

    window.addEventListener('beforeunload', beforeunload);

    return () => {
      window.removeEventListener('beforeunload', beforeunload);
    };
  }, [dep]);
};

export default useBeforeUnload;
