import { createReducer, on } from '@ngrx/store';
import { loadEpisodes, loadEpisodesError, loadEpisodesSuccess } from '../actions';
import { EpisodeResult } from '../../interfaces/episode.interface';


export interface EpisodesState {
  episodesData: EpisodeResult;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const episodesInitialState: EpisodesState = {
  episodesData: {} as EpisodeResult,
  loaded: false,
  loading: false,
  error: null,
};

const _episodesReducer = createReducer(
  episodesInitialState,
  on(loadEpisodes, (state) => ({ ...state, loading: true })),
  on(loadEpisodesSuccess, (state, { episodes }: any) => ({
    ...state,
    loading: false,
    loaded: true,
    episodesData: {...episodes},
  })),
  on(loadEpisodesError, (state, { payload }) => ({
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
