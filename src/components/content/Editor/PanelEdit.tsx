/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

//const modalRoot = document.querySelector("#panel-edit--root") as HTMLElement;

type ModalProps = {
  children: ReactNode;
};

export default function ModalPortal({ children }: ModalProps) {
  // create div element only once using ref
  if (typeof window === 'undefined') {
    return null;
  }
  const modalRoot = document.createElement('div');
  const modalRootRef = React.useRef(modalRoot);
  document.body.appendChild(modalRootRef.current);

  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) elRef.current = document.createElement('div');

  useEffect(() => {
    const el = elRef.current!; // non-null assertion because it will never be null
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, []);

  return createPortal(children, elRef.current);
}
