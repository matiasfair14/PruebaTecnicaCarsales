import { createReducer, on } from '@ngrx/store';
import { cargarEpisodesError, cargarEpisodesSuccess } from '../actions';
import { EpisodeResult } from '../../interfaces/episode.interface';


export interface EpisodesState {
  id: string;
  EpisodesData: EpisodeResult;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const episodesInitialState: EpisodesState = {
  id: null!,
  EpisodesData: {} as EpisodeResult,
  loaded: false,
  loading: false,
  error: null,
};

const _episodesReducer = createReducer(
  episodesInitialState,
  on(cargarEpisodesSuccess, (state, { episodes }: any) => ({
    ...state,
    loading: false,
    loaded: true,
    user: {...episodes},
  })),
  on(cargarEpisodesError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  }))
);

export function episodesReducer(state: any, action: any) {
  return _episodesReducer(state, action);
}