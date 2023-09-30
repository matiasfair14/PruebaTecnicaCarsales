import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChResult } from 'src/app/core/interfaces/character.interface';
import { EpResult } from 'src/app/core/interfaces/episode.interface';
import { loadCharactersByIds } from 'src/app/core/store/actions';
import { AppState } from 'src/app/core/store/app.reducer';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss']
})
export class EpisodeDetailsComponent implements OnInit {
  @Input() displayMaximizable: boolean = false;
  isLoading: boolean = false;
  episode: EpResult[] = [];
  charactersEpisode: string[] = [];
  stringResult: string= "";
  characters: ChResult[] = [];
  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select('charactersById').subscribe(({ charactersById, loading, loaded, error }) => {
      this.isLoading = loading;
      if( loaded )  this.characters = charactersById;

    });
  }
  public showMaximizable(episode: EpResult): void {
    this.displayMaximizable = true;
    this.episode.push( episode );



    episode.characters.forEach(url => {
      // Crear un objeto URL
      const urlObj = new URL(url);

      // Obtener el primer parámetro de la ruta y agregarlo al array
      const firsParam = urlObj.pathname.split('/')[3];
      this.charactersEpisode.push(firsParam);

      this.stringResult = this.charactersEpisode.join(',');



    });
    if(this.stringResult != null) {
      this.store.dispatch( loadCharactersByIds({ids: this.stringResult}))


    }


  }
}
