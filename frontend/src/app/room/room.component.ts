import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SocketService } from '../services/socket-service.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  idRoom:string;
  room:any;
  roomSub!:Subscription;
  username:string;
  game:any;
  isLoading:boolean;
    constructor(private route:ActivatedRoute,
      private socketService:SocketService,private router:Router) { 
        this.isLoading=true;
      this.idRoom = route.snapshot.params.id;
      this.username = route.snapshot.params.player;
    }
  
    ngOnInit(): void {
      this.game = this.socketService.getRoom(this.idRoom);
    this.roomSub = this.socketService.currentRoom.subscribe(room=>{
      console.log('subscribe');
      console.log('ROOM',room);
      this.room =room;
      this.isLoading=false;
  
      this.room = room});
  console.log('ROOMSUB',this.roomSub);
  
  
  
    
    }
    ngOnDestroy() {
      this.roomSub.unsubscribe();
    }
    start(){
      this.router.navigateByUrl(`game/${this.idRoom}/${this.username}`);
    }  
    wrong(){
      this.socketService.wrong(this.idRoom,this.username);
    }

}
