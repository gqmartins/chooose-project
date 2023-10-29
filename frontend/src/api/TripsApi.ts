import axios, { AxiosResponse } from 'axios';
import { PaginationResponse, Trip } from '../models';
import { tripUrl, tripsUrl } from './urls';

export class TripsApi {
  private baseUrl: string;
  private readonly CountHeader = 'x-total-count';

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async getTrips(page: number, itemsPerPage: number): Promise<PaginationResponse<Trip[]>> {
    const url = this.baseUrl + tripsUrl(page, itemsPerPage);

    return this.fetch<Trip[]>(url).then(response => {
      const totalCount = response.headers[this.CountHeader];
      const data = response.data;
      const lastPage = totalCount < page * itemsPerPage;

      return { data, lastPage };
    });
  }

  public async getTrip(id: number): Promise<Trip> {
    const url = this.baseUrl + tripUrl(id);
    return this.fetch<Trip>(url).then(response => response.data);
  }

  private async fetch<T>(url: string): Promise<AxiosResponse<T, any>> {
    return await axios.get<T>(url);
  }
}