import { createReducer, on } from '@ngrx/store';
import { loadLocations, loadLocationsError, loadLocationsSuccess } from '../actions';
import { EpisodeResult } from '../../interfaces/episode.interface';


export interface LocationsState {
  id: string;
  LocationsData: EpisodeResult;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const LocationsInitialState: LocationsState = {
  id: null!,
  LocationsData: {} as EpisodeResult,
  loaded: false,
  loading: false,
  error: null,
};

const _locationsReducer = createReducer(
  LocationsInitialState,
  on(loadLocations, (state) => ({ ...state, loading: true })),
  on(loadLocationsSuccess, (state, { Locations }: any) => ({
    ...state,
    loading: false,
    loaded: true,
    result: {...Locations},
  })),
  on(loadLocationsError, (state, { payload }) => ({
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

export function locationsReducer(state: any, action: any) {
  return _locationsReducer(state, action);
}
