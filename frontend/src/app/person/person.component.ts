import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameService } from "../services/game.service";


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Input() dataUser: any;

  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private gameServ: GameService) {}

  ngOnInit(): void {}

  flip(event: any) {
    event.path[4].classList.toggle('myflip');
  }

  seleccion(id: number){
    this.newItemEvent.emit(id.toString());
  }
}
