import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as episodesActions from '../actions';
import { EpisodeService } from '../../services/episode/episode.service';

// Es básicamente un servicio
@Injectable()
export class EpisodesEffects {
  // simbolo de olar $ indica que es observable
  constructor(
    private actions$: Actions,
    private Episodeservice: EpisodeService
  ) {}

  cargarEpisodes$ = createEffect(
    ():any => this.actions$.pipe(
        // Observable que quiero escuchar, le digo que evalue esta opcion!
        ofType( episodesActions.cargarEpisodesSuccess ),
        mergeMap(
            ( action ) => this.Episodeservice.getEpisodes()
                .pipe(
                    map( episodesData => episodesActions.cargarEpisodesSuccess({ episodes: episodesData }) ),
                    catchError( err => of(episodesActions.cargarEpisodesError({ payload: err })) )
                )
                // of lo transforma en un observable
        )
    )
);


}
