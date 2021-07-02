import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamingComponent } from './gaming/gaming.component';
import { AskComponent } from "./ask/ask.component";
import { LobbyComponent } from './lobby/lobby.component';
import { RoomComponent } from './room/room.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: '', component:LobbyComponent},
{path:'lobby',component:LobbyComponent},
{path: 'room/:id/:player',component:RoomComponent},
{path:'game/:id/:player',component:DashboardComponent},
{path: '**', redirectTo:'lobby',pathMatch:'full'},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
