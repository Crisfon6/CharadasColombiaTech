import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamingComponent } from './gaming/gaming.component';
import { HomeComponent } from './home/home.component';
import { RoomPlayComponent } from './room-play/room-play.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
{path:'room',component:RoomComponent},
{path:'gaming/:roomId/:player',component:GamingComponent},
{path: 'game/:id/:player',component:RoomPlayComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
