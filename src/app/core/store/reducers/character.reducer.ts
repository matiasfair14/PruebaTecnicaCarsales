import { createReducer, on } from '@ngrx/store';
import { loadCharactersByIds, loadCharactersByIdsError, loadCharactersByIdsSuccess } from '../actions';
import { ChResult } from '../../interfaces/character.interface';


export interface CharacterState {
  id: string;
  charactersById: ChResult[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const characterInitialState: CharacterState = {
  id: null!,
  charactersById: [] as ChResult[],
  loaded: false,
  loading: false,
  error: null,
};

const _characterReducer = createReducer(
  characterInitialState,

  on(loadCharactersByIds, (state, { ids }) => ({ ...state, loading: true, ids: ids })),
  on(loadCharactersByIdsSuccess, (state, { charactersById }: any) => ({
    ...state,
    loading: false,
    loaded: true,
    charactersById: [...charactersById],
  })),
  on(loadCharactersByIdsError, (state, { payload }) => ({
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

export function characterReducer(state: any, action: any) {
  console.log(state)
  return _characterReducer(state, action);
}
