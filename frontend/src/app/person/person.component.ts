import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameService } from "../services/game.service";
import { SocketService } from '../services/socket-service.service';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Input() room:any;
  @Input() dataUser: any;

  @Output() newItemEvent = new EventEmitter<string>();
 playerUsername:string;
 player:any;
 game:any;
 roomSub!:Subscription;
 idRoom:string;
 user:any;
 isLoading:boolean;
  constructor(private gameServ: GameService,private route:ActivatedRoute, private socketService:SocketService) {
    this.isLoading=true;
    this.playerUsername = route.snapshot.params.player;
    this.idRoom = route.snapshot.params.id;
  }

  socketWork(){
    this.game = this.socketService.getRoom(this.idRoom);
    this.roomSub = this.socketService.currentRoom.subscribe(room=>{
      this.room =room;
      this.user = room.players.find((el:any)=>
      el.player===this.playerUsername
      )
      
      this.room = room
      this.isLoading=false;
    });
  }
  ngOnInit(): void {
    this.socketWork();
  }

  flip(event: any) {
    event.path[4].classList.toggle('myflip');
  }

  seleccion(id: number){
    this.newItemEvent.emit(id.toString());
  }
}
