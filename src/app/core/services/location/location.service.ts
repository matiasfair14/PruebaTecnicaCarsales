import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { LocationResult } from '../../interfaces/location.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private _url: string = environment.apiUrl;

  constructor(private httpClient  : HttpClient) { }

  getLocations(): Observable<LocationResult>{
    return this.httpClient.get<LocationResult>(`${ this._url }/location`);
  }

}
