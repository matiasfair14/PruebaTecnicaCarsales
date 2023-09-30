import { createReducer, on } from '@ngrx/store';
import { cargarLocationsError, cargarLocationsSuccess } from '../actions';
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
  on(cargarLocationsSuccess, (state, { Locations }: any) => ({
    ...state,
    loading: false,
    loaded: true,
    user: {...Locations},
  })),
  on(cargarLocationsError, (state, { payload }) => ({
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
