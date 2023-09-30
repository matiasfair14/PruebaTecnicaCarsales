import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as characterActions from '../actions';
import { LocationService } from '../../services/location/location.service';

// Es básicamente un servicio
@Injectable()
export class LocationsEffects {
  constructor(
    private actions$: Actions,
    private Locationservice: LocationService
  ) {}

  loadLocations$ = createEffect(
    ():any => this.actions$.pipe(
        ofType( characterActions.loadLocations ),
        mergeMap(
            ( action ) => this.Locationservice.getLocations()
                .pipe(
                    map( locationsData => characterActions.loadLocationsSuccess({ locations: locationsData }) ),
                    catchError( err => of(characterActions.loadLocationsError({ payload: err })) )
                )
        )
    )
);


}
