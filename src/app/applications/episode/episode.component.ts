import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { EpisodeDetailsComponent } from 'src/app/components/episode-details/episode-details.component';
import { col } from 'src/app/core/interfaces/col.interface';
import { EpResult } from 'src/app/core/interfaces/episode.interface';
import { AppState } from 'src/app/core/store/app.reducer';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
})
export class EpisodeComponent implements OnInit {

  @ViewChild(EpisodeDetailsComponent)
  episodeDetailsComponent: EpisodeDetailsComponent =
    {} as EpisodeDetailsComponent;

  episodes: EpResult[] = [];
  loading: boolean = false;
  error: any = null;
  cols: col[] = [];

  constructor(private store: Store<AppState>) {
    this.loadColsHeader();
  }
  ngOnInit():void {
    this.store.select('episodes').subscribe(({ episodesData, loading, error }) => {
      this.episodes = episodesData.results;
      this.loading = loading;
      this.error = error;
    });


  }

  showDetails(episode: EpResult){
    this.episodeDetailsComponent.showMaximizable(episode);
  }

  private loadColsHeader(): void {
    this.cols = [
      { header: 'Número Episodio', field: 'id' },
      { header: 'Episodio', field: 'episode' },
      { header: 'Nombre', field: 'name' },
      { header: 'Acción', field: 'action' },

    ];
  }

}
