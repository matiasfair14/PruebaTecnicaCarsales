import { ActionReducerMap } from '@ngrx/store';
import {charactersReducer, episodesReducer, locationsReducer } from './reducers';
import * as reducers  from './reducers';

export interface AppState {
   characters: reducers.CharactersState;
   episodes: reducers.EpisodesState;
   locations: reducers.LocationsState;
}

export const appReducers: ActionReducerMap<AppState> = {
  characters: charactersReducer,
  episodes: episodesReducer,
  locations: locationsReducer

}
