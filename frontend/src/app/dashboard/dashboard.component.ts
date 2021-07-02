import { Component, OnInit } from '@angular/core';
import { profiles } from '../../assets/profiles';

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

  constructor() {
    this.answer = '';
    this.win = false;
    this.lose = false;
    this.message = '';
  }

  ngOnInit(): void {
    console.log('profiles', profiles);
  }

  res(event: any) {
    console.log(event);
    if (this.answer === event) {
      this.win = true;
      this.message = 'Ganaste';
      console.log(this.message);
      this.closeAlert();
    } else {
      this.lose = true;
      this.message = 'Perdiste';
      console.log(this.message);
      this.closeAlert();
    }
  }

  e(event: any) {
    console.log(event);
    this.answer = event;
  }

  closeAlert() {
    setTimeout(() => {
      this.win = false;
      this.lose = false;
    }, 3000);
  }
}
