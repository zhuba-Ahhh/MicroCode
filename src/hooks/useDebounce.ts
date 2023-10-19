import { useRef, useCallback, useEffect } from "react";

const useDebounce = (
  callback: () => void,
  delay = 1000,
  dep = []
) => {
  const { current } = useRef({
    callback,
    timer: null as NodeJS.Timeout | null,
  });
  useEffect(
    function () {
      current.callback = callback;
    },
    [callback]
  );

  return useCallback(function f(...args: Parameters<typeof callback>) {
    if (current.timer) {
      clearTimeout(current.timer);
    }
    current.timer = setTimeout(() => {
      current.callback(...args);
    }, delay);
  }, dep);
};

export default useDebounce;
