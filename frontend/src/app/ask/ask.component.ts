import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { questions } from '../../assets/question';
import { GameService } from "../services/game.service";

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css'],
})
export class AskComponent implements OnInit {
  public timeLeft!: number;
  public interval: any;
  public message!: boolean;
  public question!: string;
  
  @Input() usersData: any;

  @Output() newItemEvent = new EventEmitter<string>();
  
  constructor(private gameServ: GameService) {

  }

  ngOnInit(): void {
    this.timeLeft = 100;
    this.message = true;
    this.question = '';
    this.startTimer();
    this.setQuestion();
    
  }
  setQuestion(){
    let n = Math.floor(Math.random() * questions.length);
    this.question = questions[n].q;
    this.newItemEvent.emit(questions[n].ans.toString())  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        //change question
        // this.setQuestion();
        this.message = false;
      }
    }, 150);
    // this.ngOnInit();
    // console.log('CHANGE QUESTION',this.question);
  }

}
