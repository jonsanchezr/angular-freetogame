import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ListGamesComponent } from "./components/list-games/list-games.component";
import { DetailGameComponent } from './components/detail-game/detail-game.component';

const routes: Routes = [
  {
    path:'',
    component: ListGamesComponent
  },
  {
    path:':id',
    component: DetailGameComponent
  },
  {
    path:'**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
