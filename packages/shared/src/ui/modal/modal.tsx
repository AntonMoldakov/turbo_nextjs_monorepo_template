'use client';

import type { FC, MouseEventHandler, PropsWithChildren } from 'react';
import React from 'react';
import { createPortal } from 'react-dom';

import SvgClose24 from '../icon/close24';
import classes from './styles/modal.module.scss';

type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  title: string;
  close: () => void;
  container?: Element | HTMLElement | DocumentFragment | null;
}>;

export const Modal: FC<ModalProps> = ({ isOpen, title, close, children, container }) => {
  const onClickHandler: MouseEventHandler<HTMLDivElement | SVGSVGElement> = () => {
    close();
  };

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div aria-hidden="true" className={classes.layout_modal} onClick={onClickHandler}>
      <div
        aria-hidden="true"
        className={classes.body_modal}
        onClick={(event) => {
          event.stopPropagation();
        }}>
        <header className={classes.title_modal}>
          <span>{title}</span>
          <SvgClose24 onClick={onClickHandler} />
        </header>
        {children}
      </div>
    </div>,
    container || document.body,
  );
};
