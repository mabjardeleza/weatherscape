import { useMemo } from 'react';
import useResizeObserver from 'use-resize-observer';

const debounce = (func, delay) => {
  let timeout;
  return function inDebounce() {
    const context = this;
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
};

export default (resize, delay) => {
  const onResize = useMemo(() => debounce(resize, delay), [resize, delay]);
  const { ref } = useResizeObserver({ onResize });
  return { ref };
};
