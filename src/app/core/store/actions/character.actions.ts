import { createAction, props } from '@ngrx/store';
import { ChResult } from '../../interfaces/character.interface';

export const loadCharactersByIds = createAction('[CharactersById] Load CharactersById',
props<{ids: string}>());

export const loadCharactersByIdsSuccess = createAction(
  '[CharactersById] Load CharactersById Success',
  props<{ charactersById: ChResult[] }>()
);

export const loadCharactersByIdsError = createAction(
  '[CharactersById] Load CharactersById Error',
  props<{ payload: any }>()
);
