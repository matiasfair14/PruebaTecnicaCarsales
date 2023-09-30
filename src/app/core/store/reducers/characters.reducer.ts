import { createReducer, on } from '@ngrx/store';
import { CharacterResult } from '../../interfaces/character.interface';
import { loadCharacters, loadCharactersError, loadCharactersSuccess } from '../actions';


export interface CharactersState {
  characterData: CharacterResult;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const charactersInitialState: CharactersState = {
  characterData: {} as CharacterResult,
  loaded: false,
  loading: false,
  error: null,
};

const _charactersReducer = createReducer(
  charactersInitialState,
  on(loadCharacters, (state) => ({ ...state, loading: true })),
  on(loadCharactersSuccess, (state, { characters }: any) => ({
    ...state,
    loading: false,
    loaded: true,
    characterData: {...characters},
  })),
  on(loadCharactersError, (state, { payload }) => ({
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

export function charactersReducer(state: any, action: any) {
  return _charactersReducer(state, action);
}
