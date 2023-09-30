import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CharacterComponent } from './character/character.component';
import { LocationComponent } from './location/location.component';
import { EpisodeComponent } from './episode/episode.component';



@NgModule({
  declarations: [
    CharacterComponent,
    LocationComponent,
    EpisodeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ApplicationsModule { }
