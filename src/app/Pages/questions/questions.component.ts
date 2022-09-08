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

  selected: boolean = false;

  ngOnInit(): void {

  }

  nextQuestion() {
    this.selected = false;

    if (
      this.selectedAnswer ==
      this.quizService.selectedCategory[this.index].correctAnswer
    ) {

      this.quizService.points += 1;
    }

    if (this.index < this.quizService.selectedCategory.length - 1) {
      this.index += 1;
    }
    if (this.index == this.quizService.selectedCategory.length - 1) {
      this.changeButton = true;

    }
  }

  goToResult() {
    if (
      this.selectedAnswer ==
      this.quizService.selectedCategory[this.index].correctAnswer
    ) {
      this.quizService.points += 1;
      this.selected = false;
    } 
    this.router.navigate(['show-results']);
  }

  onSelectedAnswer(e: any, j: any) {
    this.selected = true;
    this.selectedAnswer = e.target.innerText;
  }
}
