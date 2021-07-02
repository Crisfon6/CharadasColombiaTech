import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { SocketService } from '../services/socket-service.service';

@Component({
  selector: 'app-room-play',
  templateUrl: './room-play.component.html',
  styleUrls: ['./room-play.component.css']
})
export class RoomPlayComponent implements OnInit {
id:string;
room:any;
roomSub!:Subscription;
username:string;
game:any;
isLoading:boolean;
  constructor(private route:ActivatedRoute,
    private socketService:SocketService,private router:Router) { 
      this.isLoading=true;
    this.id = route.snapshot.params.id;
    this.username = route.snapshot.params.player;
  }

  ngOnInit(): void {
    this.game = this.socketService.getRoom(this.id);
  this.roomSub = this.socketService.currentRoom.subscribe(room=>{
    console.log('subscribe');
    console.log('ROOM',room);
    this.room =room;
    this.isLoading=false;

    this.room = room});
console.log('ROOMSUB',this.roomSub);



  
  }
  start(){
    this.router.navigateByUrl('game');
  }  
  wrong(){
    this.socketService.wrong(this.id,this.username);
  }

}
