import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as characterActions from '../actions';
import { CharacterService } from '../../services/character/character.service';

// Es básicamente un servicio
@Injectable()
export class CharacterEffects {
  // simbolo de olar $ indica que es observable
  constructor(
    private actions$: Actions,
    private characterService: CharacterService
  ) {}

  loadCharactersByIds$ = createEffect(
    ():any => this.actions$.pipe(
        ofType( characterActions.loadCharactersByIds ),
        mergeMap(
            ( action ) => this.characterService.getCharactersById(action.ids)
                .pipe(
                    map( charactersById => characterActions.loadCharactersByIdsSuccess({ charactersById: charactersById }) ),
                    catchError( err => of(characterActions.loadCharactersByIdsError({ payload: err })) )
                )
        )
    )
  );

}




