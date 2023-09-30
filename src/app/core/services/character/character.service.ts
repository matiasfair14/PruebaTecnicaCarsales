import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { CharacterResult } from '../../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private _url: string = environment.apiUrl;

  constructor(private httpClient  : HttpClient) { }

  getCharacters(): Observable<CharacterResult>{
    return this.httpClient.get<CharacterResult>(`${ this._url }/character`);
  }
}
