import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { SocketService } from '../services/socket-service.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
roomId:string;
rooms:Observable<any[]>;
form:FormGroup;
  constructor(private route:ActivatedRoute,private cookieService:CookieService,private fb:FormBuilder,private socketService:SocketService,private router:Router) { 
    this.roomId ='';
    this.rooms =this.socketService.rooms;
console.log('rooms',this.rooms);


    this.form = this.fb.group({
      name:['',Validators.required]
    })
  }

  ngOnInit(): void {
  //  this.roomId = this.route.snapshot.params.id;
  //  this.socketService.rooms.subscribe(rooms=>{
  //    console.log('ROOMS',rooms);
  //   //  this.rooms =rooms;
  //  })
  // this.cookieService.set('room',this.room);
   
  }
  go(roomId:any,username:any){
    console.log('USERNAME',username.value);
    console.log('ROOMID',roomId.id);
    this.socketService.addPlayer(roomId.id,username.value)
    this.router.navigateByUrl(`game/${roomId.id}/${username.value}`);
    
  }
  send(){
    this.socketService.createRoom(this.form.value.name);
    console.log('rooms',this.rooms);
  }

}
