import { createReducer, on } from '@ngrx/store';
import { CharacterResult } from '../../interfaces/character.interface';
import { cargarCharactersError, cargarCharactersSuccess } from '../actions';


export interface CharactersState {
  id: string;
  characterData: CharacterResult;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const charactersInitialState: CharactersState = {
  id: null!,
  characterData: {} as CharacterResult,
  loaded: false,
  loading: false,
  error: null,
};

const _charactersReducer = createReducer(
  charactersInitialState,
  on(cargarCharactersSuccess, (state, { characters }: any) => ({
    ...state,
    loading: false,
    loaded: true,
    user: {...characters},
  })),
  on(cargarCharactersError, (state, { payload }) => ({
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
