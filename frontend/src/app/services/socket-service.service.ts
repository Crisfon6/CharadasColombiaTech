import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  currentRoom =this.socket.fromEvent<any>('room');
  rooms = this.socket.fromEvent<any[]>('rooms');

  constructor(
    private socket:Socket
  ) {
    
   }
   wrong(idRoom: string,player:string){
    this.socket.emit('badResponse',{idRoom,player})

   }
   addPlayer(idRoom:string,player:string){
     this.socket.emit('addPlayer',{idRoom,player})
   }
  createRoom(name:String){
    this.socket.emit('createRoom',name);
  }

   getRoom(id: string) {
    this.socket.emit('getRoom', id); 
  }
 
  private docId() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
