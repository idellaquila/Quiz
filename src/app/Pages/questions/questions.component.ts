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
  TextButton: string = 'Next';
  ngOnInit(): void {
    console.log(this.quizService.selectedCategory.answers);
  }
  nextQuestion() {
    if (this.index < this.quizService.selectedCategory.length - 1) {
      this.index += 1;
      console.log('this.quizService.selectedCategory.length');
      console.log(this.quizService.selectedCategory.length);
      console.log('this.index');
      console.log(this.index);
    }
    if (this.index == this.quizService.selectedCategory.length - 1) {
      this.TextButton = 'Show Results';
      console.log('finito');
    }
    if (this.index == this.quizService.selectedCategory.length) {
      this.router.navigate(['show-results']);
      console.log('vado verso la rotta!!');
    }
    console.log(this.index);
  }
}
