import axios from 'axios';
import { Trip } from '../models';
import { tripUrl, tripsUrl } from './urls';

export class TripsApi {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public getTrips(): Promise<Trip[]> {
    const url = this.baseUrl + tripsUrl();
    return this.fetch(url);
  }

  public getTrip(id: number): Promise<Trip> {
    const url = this.baseUrl + tripUrl(id);
    return this.fetch(url);
  }

  private async fetch<T>(url: string): Promise<T> {
    const response = await axios.get<T>(url);
    return response.data;
  }
}