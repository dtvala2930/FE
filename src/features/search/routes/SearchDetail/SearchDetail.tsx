import { last, split } from 'lodash';
import { useEffect, useState } from 'react';

import { useGetSearchDetail } from '../../api/getSearchDetail';
import { ResultItem, SearchDetailItem } from '../../types';

import { Link } from '@/components/Elemements';
import { ContentLayout, FormLayout } from '@/components/Layout';
import { Panel } from '@/components/Panel';
import { ROUTES } from '@/utils/constants';

export const SearchDetail = () => {
  const [resultData, setResultData] = useState<ResultItem[]>();

  const fileId = last(split(window.location.href, '/')) || '';

  const { data } = useGetSearchDetail({ queryParameters: { fileId } });

  useEffect(() => {
    if (data && data.data) {
      const parseResult = JSON.parse(data.data.result);
      setResultData(parseResult);
    }
  }, [data]);

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
          <Link themeType="cancel" to={`/${ROUTES.SEARCH.INDEX}`}>
            Back
          </Link>
        </FormLayout>
      </Panel>
    </ContentLayout>
  );
};
