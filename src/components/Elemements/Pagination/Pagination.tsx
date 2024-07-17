import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { Button } from '../Button';

import './Pagination.scss';

// export type PaginationBaseProps = {
//   total: number;
//   page: number;
//   limit: number;
// };

export type PaginationProps = {
  total: number;
  page: number;
  limit: number;
  onChange: (page: number) => void;
};

export const Pagination = (props: PaginationProps) => {
  const { total, limit, page, onChange } = props;

  const [listPageNumber, setListPageNumber] = useState<number[]>([]);

  useEffect(() => {
    const listPage = Math.ceil(total / limit);
    const pageList = [];
    for (let i = 1; i <= listPage; i++) {
      pageList.push(i);
    }
    setListPageNumber(pageList);
  }, [total, limit]);

  const isMaxPage = () => {
    const max = Math.max(...listPageNumber);
    return page === max || !total;
  };

  const isMinPage = () => {
    const min = Math.min(...listPageNumber);
    return page === min || !total;
  };

  return (
    <div className="pagination">
      <div className="pagination__btn-group">
        <Button
          disabled={isMinPage()}
          className={clsx('pagination-btn pagination-btn--prev', isMinPage() && 'disable')}
          onClick={() => onChange(page - 1)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </Button>

        {listPageNumber.length <= 6 &&
          listPageNumber.map((pageItem, index) => (
            <Button
              key={index}
              className={clsx('pagination-btn  pagination-btn--number', page === pageItem && 'active')}
              onClick={() => onChange(pageItem)}
            >
              {pageItem}
            </Button>
          ))}
        {listPageNumber.length > 6 &&
          listPageNumber.map((pageItem, index) => (
            <span key={index}>
              {index === 0 && (
                <>
                  <Button
                    className={clsx('pagination-btn  pagination-btn--number', page === pageItem && 'active')}
                    onClick={() => onChange(pageItem)}
                  >
                    {pageItem}
                  </Button>
                  {page >= 4 && (
                    <Button className={clsx('pagination-btn  pagination-btn--number no-curser')}>...</Button>
                  )}
                </>
              )}
              {page === pageItem + 1 && page - 1 !== 1 && (
                <Button
                  className={clsx('pagination-btn  pagination-btn--number', page === pageItem && 'active')}
                  onClick={() => onChange(pageItem)}
                >
                  {pageItem}
                </Button>
              )}
              {page === 1
                ? page === pageItem - 1 && (
                    <Button
                      className={clsx('pagination-btn  pagination-btn--number', page === pageItem && 'active')}
                      onClick={() => onChange(pageItem)}
                    >
                      {pageItem}
                    </Button>
                  )
                : page === pageItem &&
                  page !== 1 &&
                  page !== listPageNumber.length && (
                    <Button
                      className={clsx('pagination-btn  pagination-btn--number', page === pageItem && 'active')}
                      onClick={() => onChange(pageItem)}
                    >
                      {pageItem}
                    </Button>
                  )}
              {page === 1
                ? page === pageItem - 2 && (
                    <Button
                      className={clsx('pagination-btn  pagination-btn--number', page === pageItem && 'active')}
                      onClick={() => onChange(pageItem)}
                    >
                      {pageItem}
                    </Button>
                  )
                : page === pageItem - 1 &&
                  page !== listPageNumber.length - 1 && (
                    <Button
                      className={clsx('pagination-btn  pagination-btn--number', page === pageItem && 'active')}
                      onClick={() => onChange(pageItem)}
                    >
                      {pageItem}
                    </Button>
                  )}
              {page === 1 && page === pageItem - 3 && (
                <Button
                  className={clsx('pagination-btn  pagination-btn--number', page === pageItem && 'active')}
                  onClick={() => onChange(pageItem)}
                >
                  {pageItem}
                </Button>
              )}
              {page === 2 && page === pageItem - 2 && (
                <Button
                  className={clsx('pagination-btn  pagination-btn--number', page === pageItem && 'active')}
                  onClick={() => onChange(pageItem)}
                >
                  {pageItem}
                </Button>
              )}
              {page === listPageNumber.length - 1
                ? pageItem === listPageNumber.length - 3 && (
                    <Button
                      className={clsx('pagination-btn  pagination-btn--number', page === pageItem && 'active')}
                      onClick={() => onChange(pageItem)}
                    >
                      {pageItem}
                    </Button>
                  )
                : page === listPageNumber.length &&
                  pageItem === listPageNumber.length - 2 && (
                    <Button
                      className={clsx('pagination-btn  pagination-btn--number', page === pageItem && 'active')}
                      onClick={() => onChange(pageItem)}
                    >
                      {pageItem}
                    </Button>
                  )}
              {page === listPageNumber.length && pageItem === listPageNumber.length - 3 && (
                <Button
                  className={clsx('pagination-btn  pagination-btn--number', page === pageItem && 'active')}
                  onClick={() => onChange(pageItem)}
                >
                  {pageItem}
                </Button>
              )}
              {index === listPageNumber.length - 1 && (
                <>
                  {page <= listPageNumber.length - 3 && (
                    <Button className={clsx('pagination-btn  pagination-btn--number no-curser')}>...</Button>
                  )}
                  <Button
                    className={clsx('pagination-btn  pagination-btn--number', page === pageItem && 'active')}
                    onClick={() => onChange(pageItem)}
                  >
                    {pageItem}
                  </Button>
                </>
              )}
            </span>
          ))}

        <Button
          disabled={isMaxPage()}
          className={clsx('pagination-btn pagination-btn--next', isMaxPage() && 'disable')}
          onClick={() => onChange(page + 1)}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>
      </div>
    </div>
  );
};
