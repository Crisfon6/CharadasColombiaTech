import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { SocketService } from '../services/socket-service.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css'],
})
export class LobbyComponent implements OnInit {
  roomId: string;
  rooms: Observable<any[]>;
  form: FormGroup;
  data: any;
  constructor(
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private fb: FormBuilder,
    private socketService: SocketService,
    private router: Router
  ) {
    this.data = {};
    this.roomId = '';
    this.rooms = this.socketService.rooms;

    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }
  go(roomId: any, username: any) {
    this.socketService.addPlayer(roomId.id, username.value);
    this.router.navigateByUrl(`room/${roomId.id}/${username.value}`);
  }
  send() {
    this.socketService.createRoom(this.form.value.name);
  }
}
