import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonComponent } from './person/person.component';
import { AskComponent } from './ask/ask.component';
import { RoomComponent } from './room/room.component';
import { HomeComponent } from './home/home.component';
import { CookieService } from 'ngx-cookie-service';
import { DrawComponent } from './draw/draw.component';
import { environment } from 'src/environments/environment';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomPlayComponent } from './room-play/room-play.component';
import { GamingComponent } from './gaming/gaming.component';

const config : SocketIoConfig = {url: environment.baseUrl,options: {}};


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PersonComponent,
    AskComponent,
    RoomComponent,
    HomeComponent,
    DrawComponent,
    RoomPlayComponent,
    GamingComponent
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
