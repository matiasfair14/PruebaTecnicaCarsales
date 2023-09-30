import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { col } from 'src/app/core/interfaces/col.interface';
import { LocResult } from 'src/app/core/interfaces/location.interface';
import { AppState } from 'src/app/core/store/app.reducer';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  locations: LocResult[] = [];
  loading: boolean = false;
  error: any = null;
  cols: col[] = [];

  constructor(private store: Store<AppState>){
    this.loadColsHeader();

   }

  ngOnInit(): void {
    this.store.select('locations').subscribe(({ locationsData, loading, error }) => {
      this.locations = locationsData.results;
      this.loading = loading;
      this.error = error;
    });

  }

  private loadColsHeader(): void {
    this.cols = [
      { header: 'Nombre', field: 'name' },
      { header: 'Tipo', field: 'type' },
      { header: 'Dimensión', field: 'dimension' },
    ];
  }
}

