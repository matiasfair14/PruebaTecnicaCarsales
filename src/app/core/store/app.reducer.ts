import { ActionReducerMap } from '@ngrx/store';
import {characterReducer, charactersReducer, episodesReducer, locationsReducer } from './reducers';
import * as reducers  from './reducers';

export interface AppState {
   characters: reducers.CharactersState;
   charactersById: reducers.CharacterState;
   episodes: reducers.EpisodesState;
   locations: reducers.LocationsState;
}

export const appReducers: ActionReducerMap<AppState> = {
  characters: charactersReducer,
  charactersById: characterReducer,
  episodes: episodesReducer,
  locations: locationsReducer

}
