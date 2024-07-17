import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { Button } from '../Button';

import './PaginationSkin1.scss';

type PaginationSkin1Props = {
  total: number;
  page: number;
  limit: number;
  onChange: (page: number) => void;
};

export const PaginationSkin1 = (props: PaginationSkin1Props) => {
  const { total, limit, page, onChange } = props;

  const [listPageNumber, setListPageNumber] = useState<number[]>([]);

  const max = Math.max(...listPageNumber);
  const min = Math.min(...listPageNumber);

  useEffect(() => {
    const listPage = Math.ceil(total / limit);
    const pageList = [];
    for (let i = 1; i <= listPage; i++) {
      pageList.push(i);
    }
    setListPageNumber(pageList);
  }, [total, limit]);

  const isMaxPage = () => {
    return page === max || !total;
  };

  const isMinPage = () => {
    return page === min || !total;
  };

  return (
    <div className="pagination--skin1">
      <div className="pagination--skin1__btn-group">
        <Button
          disabled={isMinPage()}
          className={clsx('pagination-btn pagination-btn--start', isMinPage() && 'disable')}
          onClick={() => onChange(min)}
        >
          <div className="text">Start</div>
        </Button>
        <Button
          disabled={isMinPage()}
          className={clsx('pagination-btn pagination-btn--prev', isMinPage() && 'disable')}
          onClick={() => onChange(page - 1)}
        >
          <div className="text">Back to 10 items</div>
        </Button>
        <Button
          disabled={isMaxPage()}
          className={clsx('pagination-btn pagination-btn--next', isMaxPage() && 'disable')}
          onClick={() => onChange(page + 1)}
        >
          <div className="text">Move to 10 items</div>
        </Button>
        <Button
          disabled={isMaxPage()}
          className={clsx('pagination-btn pagination-btn--end', isMaxPage() && 'disable')}
          onClick={() => onChange(max)}
        >
          <div className="text">End</div>
        </Button>
      </div>
    </div>
  );
};
