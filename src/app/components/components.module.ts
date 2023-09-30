import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDetailsComponent } from './character-details/character-details.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { LoadingComponent } from './loading/loading.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    EpisodeDetailsComponent,
    LocationDetailsComponent,
    CharacterDetailsComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    EpisodeDetailsComponent,
    LocationDetailsComponent,
    CharacterDetailsComponent,
    LoadingComponent
  ]
})
export class ComponentsModule { }
