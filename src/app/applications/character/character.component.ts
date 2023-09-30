import { Component } from '@angular/core';
import { EpResult } from 'src/app/core/interfaces/episode.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  episodes: EpResult[] = [];
}

