import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  constructor(public quizService: QuizService) {}

  ngOnInit(): void {
    console.log(this.quizService.selectedCategory.answers);
  }
}
