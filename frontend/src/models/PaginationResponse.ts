export interface PaginationResponse<T> {
  data: T;
  nextPage: number | undefined;
}