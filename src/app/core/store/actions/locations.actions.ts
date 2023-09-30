import { createAction, props } from '@ngrx/store';
import { LocationResult } from '../../interfaces/location.interface';

export const cargarLocationsSuccess = createAction(
  '[Locations] Cargar Locations Success',
  props<{ locations: LocationResult }>()
);
export const cargarLocationsError = createAction(
  '[Locations] Cargar Locations Error',
  props<{ payload: any }>()
);
