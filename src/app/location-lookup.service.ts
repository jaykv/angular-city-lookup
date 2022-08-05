import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from './shared/location';
import { LocationLookupResponse, ZipCodeLookupResponse } from './shared/response';

@Injectable({
  providedIn: 'root'
})
export class LocationLookupService {
  private api_url = 'http://api.zippopotam.us';

  lookupByLocation(location: Location){
    return this.httpClient.get<LocationLookupResponse>(`${this.api_url}/${location.country}/${location.state}/${location.city}`);
  }

  lookupByZipCode(location: Location){
    return this.httpClient.get<ZipCodeLookupResponse>(`${this.api_url}/${location.country}/${location.zip_code}`);
  }

  constructor(private httpClient: HttpClient) { }
}
