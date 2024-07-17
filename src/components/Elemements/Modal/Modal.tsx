import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import * as React from 'react';

import './Modal.scss';

export type ModalProps = {
  label?: string | React.ReactElement;
  description?: string | React.ReactElement;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  isOpenModal?: boolean;
  onCloseModal?: () => void;
  closeBtnLocate?: 'TOP40';
  type?: 'file-upload';
};

export const Modal = (props: ModalProps) => {
  const {
    label,
    description,
    children,
    isOpenModal,
    onCloseModal,
    className,
    id,
    closeBtnLocate,
    type,
  } = props;
  return (
    <div
      id={id}
      className={clsx('modal__root', isOpenModal && 'open', className)}
    >
      <button
        type="button"
        className="modal__background"
        onClick={onCloseModal}
      ></button>
      <div className={clsx('box-modal', type && `box-modal--${type}`)}>
        <div className="box-modal__content">
          {onCloseModal && (
            <div
              className={clsx(
                'btn-close',
                closeBtnLocate && `btn-close--${closeBtnLocate}`,
              )}
            >
              <button type="button" onClick={onCloseModal}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          )}
          <div className="box-modal__content-label">{label}</div>
          <div className="box-modal__content-description">{description}</div>
          <div className="box-modal__content-children">{children}</div>
        </div>
      </div>
    </div>
  );
};
