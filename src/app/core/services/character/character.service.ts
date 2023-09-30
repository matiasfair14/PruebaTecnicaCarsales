import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { ChResult, CharacterResult } from '../../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private _url: string = environment.apiUrl;

  constructor(private httpClient  : HttpClient) { }

  getCharactersById(ids: string): Observable<ChResult[]>{
    return this.httpClient.get<ChResult[]>(`${ this._url }/character/`+ ids);
  }

  getCharacters(): Observable<CharacterResult>{
    return this.httpClient.get<CharacterResult>(`${ this._url }/character`);
  }
}
