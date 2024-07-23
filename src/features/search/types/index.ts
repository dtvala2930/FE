export type UploadFile = {
  fileBase64: string;
  fileName: string;
  fileSize: number;
  id: string;
  type: string;
};

export interface SearchItem {
  fileName: string;
  fileId: string;
}

export interface SearchDetailResponse {
  fileId: string;
  result: string;
}
[];

export interface ResultItem {
  pageHTML: string;
  searchKeyword: string;
  linkCount: string;
  total: string;
  adwordsCount: string;
}
