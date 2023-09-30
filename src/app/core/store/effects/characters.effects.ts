import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as characterActions from '../actions';
import { CharacterService } from '../../services/character/character.service';

// Es básicamente un servicio
@Injectable()
export class CharactersEffects {
  // simbolo de olar $ indica que es observable
  constructor(
    private actions$: Actions,
    private characterService: CharacterService
  ) {}

  cargarCharacters$ = createEffect(
    ():any => this.actions$.pipe(
        // Observable que quiero escuchar, le digo que evalue esta opcion!
        ofType( characterActions.cargarCharactersSuccess ),
        mergeMap(
            ( action ) => this.characterService.getCharacters()
                .pipe(
                    map( characterData => characterActions.cargarCharactersSuccess({ characters: characterData }) ),
                    catchError( err => of(characterActions.cargarCharactersError({ payload: err })) )
                )
                // of lo transforma en un observable
        )
    )
);


}
