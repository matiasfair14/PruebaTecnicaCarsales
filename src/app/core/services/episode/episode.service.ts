import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { EpisodeResult } from '../../interfaces/episode.interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  private _url: string = environment.apiUrl;

  constructor(private httpClient  : HttpClient) { }

  getEpisodes(): Observable<EpisodeResult>{
    return this.httpClient.get<EpisodeResult>(`${ this._url }/episode`);
  }
}
