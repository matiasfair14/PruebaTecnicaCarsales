import { createAction, props } from '@ngrx/store';
import { CharacterResult } from '../../interfaces/character.interface';

export const cargarCharactersSuccess = createAction(
  '[Characters] Cargar Characters Success',
  props<{ characters: CharacterResult }>()
);
export const cargarCharactersError = createAction(
  '[Characters] Cargar Characters Error',
  props<{ payload: any }>()
);
