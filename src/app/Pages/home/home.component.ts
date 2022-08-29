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

  displayedCategories = [
    {
      quizCategory: 'Geography',
      icon: '🌐',
    },
    {
      quizCategory: 'History',
      icon: '🏛️',
    },
  ];

  ngOnInit(): void {
    console.log(this.quizService.quizData);
    this.quizService.quizData.filter;
  }
  goToQuiz(i: any) {
    this.quizService.selectedCategory = this.quizService.quizData.filter(
      (category: any) => {
        return category.quizCategory == i;
      }
    );

    this.router.navigate(['questions']);
    console.log(this.quizService.selectedCategory);
  }
}
