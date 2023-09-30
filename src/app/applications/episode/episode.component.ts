import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EpResult } from 'src/app/core/interfaces/episode.interface';
import { loadEpisodes } from 'src/app/core/store/actions';
import { AppState } from 'src/app/core/store/app.reducer';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
})
export class EpisodeComponent implements OnInit {
  episodes: EpResult[] = [];
  loading: boolean = false;
  error: any = null;

  constructor(private store: Store<AppState>) { }
  ngOnInit():void {
    this.store.select('episodes').subscribe(({ EpisodesData, loading, error }) => {
      this.episodes = EpisodesData.results;
      console.log(this.episodes)
      this.loading = loading;
      this.error = error;
    });

    this.store.dispatch(loadEpisodes());

  }
}
