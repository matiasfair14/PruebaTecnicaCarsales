import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CharacterComponent } from './character/character.component';
import { EpisodeComponent } from './episode/episode.component';
import { LocationComponent } from './location/location.component';
import { ComponentsModule } from '../components/components.module';




@NgModule({
  declarations: [
    CharacterComponent,
    EpisodeComponent,
    LocationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule
  ],
  exports: [
    CharacterComponent,
    EpisodeComponent,
    LocationComponent,
  ]
})
export class ApplicationsModule { }
