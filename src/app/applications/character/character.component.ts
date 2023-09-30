import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChResult } from 'src/app/core/interfaces/character.interface';
import { col } from 'src/app/core/interfaces/col.interface';
import { EpResult } from 'src/app/core/interfaces/episode.interface';
import { AppState } from 'src/app/core/store/app.reducer';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  characters: ChResult[] = [];
  isLoading: boolean = false;
  error: any = null;
  cols: col[] = [];

  constructor(private store: Store<AppState>){
    this.loadColsHeader();

  }
  ngOnInit(): void {
    this.store.select('characters').subscribe(({ characterData, loading, error }) => {
      this.characters = characterData.results;
      this.isLoading = loading;
      this.error = error;
    });

  }

  private loadColsHeader(): void {
    this.cols = [
      { header: 'Nombre', field: 'name' },
      { header: 'Estado', field: 'status' },
      { header: 'Genero', field: 'gender' },

    ];
  }
}

