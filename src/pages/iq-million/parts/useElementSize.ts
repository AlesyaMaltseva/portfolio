// useElementSize.ts
import { RefObject, useLayoutEffect, useRef, useState } from 'react';
import useResizeObserver from '@react-hook/resize-observer';

interface Size {
  width: number;
  height: number;
}

export default function useElementSize<T extends HTMLElement = HTMLDivElement>(): [RefObject<T | null>, Size] {
  const target = useRef<T | null>(null);
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  return [target, size]
}