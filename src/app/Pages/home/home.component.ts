import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, public quizService: QuizService) {}

  ngOnInit(): void {}
  goToQuiz(i: any) {
    this.quizService.selectedCategory = this.quizService.quizData[i];
    console.log(this.quizService.selectedCategory);
    this.router.navigate(['questions']);
  }
}
