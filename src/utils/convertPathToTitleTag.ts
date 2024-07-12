const TITLE_TAG = {
  notifications: 'お知らせ',
  'notifications-detail': 'お知らせ詳細',
  'notifications-new': '新規お知らせ作成',
};

export const convertPathToTitleTag = (path: string) => {
  const getPathname = path.slice(1).replace(/\//g, '-');
  let titleTag = getPathname;
  Object.keys(TITLE_TAG).find((key: string) => {
    if (getPathname.includes(key)) {
      titleTag = TITLE_TAG[key as Partial<keyof typeof TITLE_TAG>];
    }
  });
  return titleTag;
};
