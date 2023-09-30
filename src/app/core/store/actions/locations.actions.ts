import { createAction, props } from '@ngrx/store';
import { LocationResult } from '../../interfaces/location.interface';

export const loadLocations = createAction('[Locations] Load Locations',
 props<{id: string}>());

export const loadLocationsSuccess = createAction(
  '[Locations] Load Locations Success',
  props<{ locations: LocationResult }>()
);
export const loadLocationsError = createAction(
  '[Locations] Load Locations Error',
  props<{ payload: any }>()
);
