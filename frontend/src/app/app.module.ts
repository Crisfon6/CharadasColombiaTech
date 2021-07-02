import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonComponent } from './person/person.component';
import { AskComponent } from './ask/ask.component';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GamingComponent } from './gaming/gaming.component';
import { LobbyComponent } from './lobby/lobby.component';
import { RoomComponent } from './room/room.component';

const config : SocketIoConfig = {url: environment.baseUrl,options: {}};


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PersonComponent,
    AskComponent,
    GamingComponent,
    LobbyComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
