import {
  faClose,
  faInfo,
  faCheck,
  faWarning,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment } from 'react';

import './Notification.scss';

const icons = {
  info: <FontAwesomeIcon icon={faInfo} />,
  success: <FontAwesomeIcon icon={faCheck} />,
  warning: <FontAwesomeIcon icon={faWarning} />,
  error: <FontAwesomeIcon icon={faCircleXmark} />,
};

export type NotificationProps = {
  notification: {
    id: string;
    type: keyof typeof icons;
    message?: string;
    autoDismissTime?: number;
  };
  onDismiss: (id: string) => void;
};

export const Notification = ({
  notification: { id, type, message, autoDismissTime },
  onDismiss,
}: NotificationProps) => {
  if (autoDismissTime) {
    setTimeout(() => {
      onDismiss(id);
    }, autoDismissTime);
  }
  return (
    <div className={clsx('side-notifications-main', type)}>
      <Transition show={true} as={Fragment}>
        <div className="side-notifications-inner">
          <div className={clsx('side-notifications__icon-status', type)}>
            {icons[type]}
          </div>
          <div className="side-notifications__body">
            <p className="side-notifications-body__msg">{message}</p>
          </div>
          <div className="side-notifications__btn-close">
            <button
              className=""
              onClick={() => {
                onDismiss(id);
              }}
            >
              {!autoDismissTime ? <FontAwesomeIcon icon={faClose} /> : ''}
            </button>
          </div>
        </div>
      </Transition>
    </div>
  );
};
