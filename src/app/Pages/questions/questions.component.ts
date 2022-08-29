import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  constructor(public quizService: QuizService, public router: Router) {}

  index: number = 0;

  selectedAnswer!: string;

  changeButton: boolean = false;

  ngOnInit(): void {
    console.log(this.quizService.selectedCategory.answers);
  }

  nextQuestion() {
    if (
      this.selectedAnswer ==
      this.quizService.selectedCategory[this.index].correctAnswer
    ) {
      console.log('ugualeeee');
      this.quizService.points += 1;
    } else {
      console.log('NO');
    }

    if (this.index < this.quizService.selectedCategory.length - 1) {
      this.index += 1;
      console.log('this.quizService.selectedCategory.length');
      console.log(this.quizService.selectedCategory.length);
      console.log('this.index');
      console.log(this.index);
    }
    if (this.index == this.quizService.selectedCategory.length - 1) {
      this.changeButton = true;
      console.log('finito');
    }
  }

  goToResult() {
    if (
      this.selectedAnswer ==
      this.quizService.selectedCategory[this.index].correctAnswer
    ) {
      console.log('ugualeeee');
      this.quizService.points += 1;
    } else {
      console.log('NO');
    }

    this.router.navigate(['show-results']);
  }

  onSelectedAnswer(e: any, i: any) {
    console.log(e.target.innerText);
    this.selectedAnswer = e.target.innerText;
    // if (
    //   e.target.innerText === this.quizService.selectedCategory[i].correctAnswer
    // ) {
    //   console.log('ugualeeee');
    //   this.quizService.points += 1;

    // } else {
    //   console.log('NO');
    // }
  }
}
