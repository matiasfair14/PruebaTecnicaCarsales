import { createAction, props } from '@ngrx/store';
import { EpisodeResult } from '../../interfaces/episode.interface';

export const loadEpisodes = createAction('[Episodes] Load Episodes');

export const loadEpisodesSuccess = createAction(
  '[Episodes] Load Episodes Success',
  props<{ episodes: EpisodeResult }>()
);
export const loadEpisodesError = createAction(
  '[Episodes] Load Episodes Error',
  props<{ payload: any }>()
);
