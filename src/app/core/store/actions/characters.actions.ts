import { createAction, props } from '@ngrx/store';
import { CharacterResult } from '../../interfaces/character.interface';


export const loadCharacters = createAction('[Characters] Load Characters');

export const loadCharactersSuccess = createAction(
  '[Characters] Load Characters Success',
  props<{ characters: CharacterResult }>()
);

export const loadCharactersError = createAction(
  '[Characters] Load Characters Error',
  props<{ payload: any }>()
);
