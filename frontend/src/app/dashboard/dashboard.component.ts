import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { elementAt } from 'rxjs/operators';
import { profiles } from '../../assets/profiles';
import { SocketService } from '../services/socket-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public dataUser = profiles;
  public answer: string;
  public win: boolean;
  public lose: boolean;
  public message: string;
  idRoom: string;
  room: any;
  roomSub!: Subscription;
  username: string;
  game: any;
  isLoading: boolean;
  constructor(
    private route: ActivatedRoute,
    private socketService: SocketService,
    private router: Router
  ) {
    this.isLoading = true;
    this.idRoom = route.snapshot.params.id;
    this.username = route.snapshot.params.player;
    this.answer = '';
    this.win = false;
    this.lose = false;
    this.message = '';
  }

  ngOnInit(): void {
    this.socketWork();
  }

  wrong() {
    this.socketService.wrong(this.idRoom, this.username);
  }

  socketWork() {
    this.game = this.socketService.getRoom(this.idRoom);
    this.roomSub = this.socketService.currentRoom.subscribe((room) => {
      this.room = room;
      this.isLoading = false;

      this.room = room;

      this.youWon(this.room.players);
    });
  }
  res(event: any) {
    if (this.answer === event) {
      this.win = true;
      this.message = 'Ganaste';
      this.closeAlert();
    } else {
      this.lose = true;
      this.message = 'Perdiste';
      this.wrong();
      this.closeAlert();
    }
  }

  e(event: any) {
    this.answer = event;
  }
  youWon(player: any) {
    const playerFilt = player.filter((element: any) => element.active == true);

    if (playerFilt.length == 1) {
      if (playerFilt[0].player == this.username) {
        alert('Ganaste!');
      }
    }
  }

  closeAlert() {
    setTimeout(() => {
      this.win = false;
      this.lose = false;
    }, 3000);
  }
}
