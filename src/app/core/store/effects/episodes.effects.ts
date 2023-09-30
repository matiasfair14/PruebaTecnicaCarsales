import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as episodesActions from '../actions';
import { EpisodeService } from '../../services/episode/episode.service';

@Injectable()
export class EpisodesEffects {
  constructor(
    private actions$: Actions,
    private Episodeservice: EpisodeService
  ) {}

  loadEpisodes$ = createEffect(
    ():any => this.actions$.pipe(
        ofType( episodesActions.loadEpisodes ),
        mergeMap(
            ( action ) => this.Episodeservice.getEpisodes()
                .pipe(
                    map( episodesData => episodesActions.loadEpisodesSuccess({ episodes: episodesData }) ),
                    catchError( err => of(episodesActions.loadEpisodesError({ payload: err })) )
                )
        )
    )
);


}
