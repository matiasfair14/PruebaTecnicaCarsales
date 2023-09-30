import { Component } from '@angular/core';
import { EpResult } from 'src/app/core/interfaces/episode.interface';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  episodes: EpResult[] = [];
}



