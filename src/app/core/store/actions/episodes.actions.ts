import { createAction, props } from '@ngrx/store';
import { EpisodeResult } from '../../interfaces/episode.interface';

export const cargarEpisodesSuccess = createAction(
  '[Episodes] Cargar Episodes Success',
  props<{ episodes: EpisodeResult }>()
);
export const cargarEpisodesError = createAction(
  '[Episodes] Cargar Episodes Error',
  props<{ payload: any }>()
);
