import { last, split } from 'lodash';
import { useEffect, useState } from 'react';

import { useGetSearchDetail } from '../../api/getSearchDetail';
import { ResultItem } from '../../types';

import { Link, Pagination } from '@/components/Elemements';
import { ContentLayout, FormLayout } from '@/components/Layout';
import { Panel } from '@/components/Panel';
import { PAGE_SIZE, ROUTES } from '@/utils/constants';

export const SearchDetail = () => {
  const [resultData, setResultData] = useState<ResultItem[]>();
  const [pagination, setPagination] = useState({
    limit: PAGE_SIZE,
    page: 1,
    total: 0,
  });

  const fileId = last(split(window.location.href, '/')) || '';

  const { data } = useGetSearchDetail({
    queryParameters: { fileId },
    pagination: { limit: pagination.limit, page: pagination.page },
  });

  useEffect(() => {
    if (data && data.data) {
      const results = data.data.map((item) => {
        return JSON.parse(item.result);
      });

      setResultData(results);
    }
  }, [data]);

  useEffect(() => {
    if (data?.metaData) {
      setPagination((prevState) => ({
        ...prevState,
        ...data.metaData,
      }));
    }
  }, [data?.metaData]);

  const handlePageChange = (page: number) => {
    setPagination({ ...pagination, page });
  };

  return (
    <ContentLayout title="Search">
      <Panel title="Search Detail">
        <FormLayout>
          {resultData?.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  marginBottom: '20px',
                  border: '1px solid black',
                  borderRadius: '10px',
                  padding: '20px',
                }}
              >
                <div className="form__box">
                  Keyword: <span>{item?.searchKeyword}</span>
                </div>
                <div className="form__box">
                  Total adwords: <span>{item?.adwordsCount}</span>
                </div>
                <div className="form__box">
                  Total links: <span> {item?.linkCount}</span>
                </div>
                <div className="form__box">
                  Total search result: <span>{item?.total}</span>
                </div>

                <div className="form__box">pageHTML:</div>
                <div
                  style={{
                    maxHeight: '200px',
                    overflow: 'auto',
                    padding: '10px',
                    border: '1px solid black',
                    borderRadius: '10px',
                  }}
                >
                  {item?.pageHTML}
                </div>
              </div>
            );
          })}
          {data?.metaData &&
            Math.ceil(data?.metaData?.total / data?.metaData?.limit) > 1 && (
              <Pagination
                page={pagination.page}
                limit={pagination.limit}
                total={pagination.total}
                onChange={handlePageChange}
              />
            )}
          <Link themeType="cancel" to={`/${ROUTES.SEARCH.INDEX}`}>
            Back
          </Link>
        </FormLayout>
      </Panel>
    </ContentLayout>
  );
};
