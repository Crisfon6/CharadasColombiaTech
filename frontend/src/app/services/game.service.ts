import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private rta: number;

  constructor() {
    this.rta = 0;
  }

  setrta(n: number){
    this.rta = n;
  }

  getrta(){
    return this.rta;
  }
}
