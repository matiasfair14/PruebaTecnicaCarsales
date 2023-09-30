import { Component } from '@angular/core';
import { EpResult } from 'src/app/core/interfaces/episode.interface';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
})
export class EpisodeComponent {
  episodes: EpResult[] = [];
}
