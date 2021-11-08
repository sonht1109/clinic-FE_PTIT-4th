export type ISelect = {
  label: string;
  value: string;
}

export const pageSize: number = 10;

export interface Pagination {
  pageNumber: number;
  pageSize: number;
}
export interface ICoreAdmin {
  id: string;
  name: string;
  type: string;
};

export interface ICoreUser {
  id: string;
  name: string;
  type: string;
}

export interface ICoreEventCreator {
  id: string;
  name: string;
};
