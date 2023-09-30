import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeComponent } from './applications/episode/episode.component';
import { LocationComponent } from './applications/location/location.component';
import { CharacterComponent } from './applications/character/character.component';

const routes: Routes = [
  {
    path: '',
    component: EpisodeComponent,
  },
  {
    path: 'character',
    component: CharacterComponent,
  },
  {
    path: 'location',
    component: LocationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
