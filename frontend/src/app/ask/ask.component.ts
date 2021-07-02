import { Component, Input, OnInit } from '@angular/core';
import { questions } from '../../assets/question';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css'],
})
export class AskComponent implements OnInit {
  public timeLeft: number;
  public interval: any;
  public message: boolean;
  public question: string;
  @Input() usersData: any;

  constructor() {
    this.timeLeft = 100;
    this.message = true;
    this.question = '';
  }

  ngOnInit(): void {
    this.startTimer();
    let n = Math.floor(Math.random() * questions.length);
    this.question = questions[n].q;
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.message = false;
      }
    }, 150);
  }
}
