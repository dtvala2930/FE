import { forIn } from 'lodash';

export const formSearchSubmitRequestParamOnlyData = (
  requestParam: any,
): string => {
  let conditions = '';
  forIn(requestParam, function (value, key) {
    const conditionSymbol = conditions === '' ? '?' : '&';
    if (value || value === 0) {
      conditions += `${conditionSymbol}${key}=${value}`;
    }
  });
  return conditions;
};
