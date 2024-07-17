import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { Button } from '../Elemements';

import './Panel.scss';

export type PanelMockupProps = {
  title?: string;
  children?: React.ReactNode;
  isDropdown?: boolean;
  sideLeft?: React.ReactNode;
  sideRight?: React.ReactNode;
  id?: string;
  fontWeightType?: 'custom-bolder';
};

export const Panel = ({
  children,
  title = '',
  isDropdown = false,
  sideLeft,
  sideRight,
  id,
  fontWeightType,
}: PanelMockupProps) => {
  const [openPanel, setOpenPanel] = useState(false);
  const togglePanel = () => {
    isDropdown && setOpenPanel(!openPanel);
  };

  return (
    <div className="panel__mockup">
      <div className={clsx('panel', openPanel && 'panel-close')} id={id}>
        <div className="panel__header">
          <div className={clsx('panel__header__info')} role="presentation">
            <div
              className={clsx(
                'header-info__title',
                fontWeightType && `header-info__title--${fontWeightType}`,
              )}
            >
              {title}
            </div>
            {sideLeft}
          </div>
          <div
            className={clsx(
              'panel__header__action',
              !isDropdown && 'no-drop-down',
            )}
          >
            {sideRight}
            {isDropdown && (
              <Button
                onClick={togglePanel}
                className={clsx('ele header-action__btn btn-close')}
                type="button"
              >
                <FontAwesomeIcon
                  icon={openPanel ? faChevronDown : faChevronUp}
                  color="#68937D"
                />
              </Button>
            )}
          </div>
        </div>
        <div className={clsx('panel__body')}>
          <div className="panel__body-main">{children}</div>
        </div>
      </div>
    </div>
  );
};
