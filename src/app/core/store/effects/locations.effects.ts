import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as characterActions from '../actions';
import { LocationService } from '../../services/location/location.service';

// Es básicamente un servicio
@Injectable()
export class LocationsEffects {
  // simbolo de olar $ indica que es observable
  constructor(
    private actions$: Actions,
    private Locationservice: LocationService
  ) {}

  cargarLocations$ = createEffect(
    ():any => this.actions$.pipe(
        // Observable que quiero escuchar, le digo que evalue esta opcion!
        ofType( characterActions.cargarLocationsSuccess ),
        mergeMap(
            ( action ) => this.Locationservice.getLocations()
                .pipe(
                    map( characterData => characterActions.cargarLocationsSuccess({ locations: characterData }) ),
                    catchError( err => of(characterActions.cargarLocationsError({ payload: err })) )
                )
                // of lo transforma en un observable
        )
    )
);


}
