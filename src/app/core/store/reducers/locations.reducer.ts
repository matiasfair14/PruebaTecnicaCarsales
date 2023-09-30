import { createReducer, on } from '@ngrx/store';
import { loadLocations, loadLocationsError, loadLocationsSuccess } from '../actions';
import { LocationResult } from '../../interfaces/location.interface';


export interface LocationsState {
  locationsData: LocationResult;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const LocationsInitialState: LocationsState = {
  locationsData: {} as LocationResult,
  loaded: false,
  loading: false,
  error: null,
};

const _locationsReducer = createReducer(
  LocationsInitialState,
  on(loadLocations, (state) => ({ ...state, loading: true })),
  on(loadLocationsSuccess, (state, { locations }: any) => ({
    ...state,
    loading: false,
    loaded: true,
    locationsData: {...locations},
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
