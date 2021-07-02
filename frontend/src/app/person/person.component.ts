import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Input() dataUser: any;
  constructor() {}

  ngOnInit(): void {}

  flip(event: any) {
    event.path[4].classList.toggle('myflip');
  }
}
