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
      quizCategory: 'Geografia',
      icon: '🌐',
    },
    {
      quizCategory: 'Storia',
      icon: '🏛️',
    },
  ];

  footerLinks = [
    { link: '', icon: 'fa-solid fa-house', text: 'Home'},
    { link: '', icon: 'fa-solid fa-table-cells-large'},
    { link: '', icon: 'fa-solid fa-comment-dots'},
    { link: '', icon: 'fa-solid fa-bell'},
    { link: '', icon: 'fa-solid fa-user'},
  ]

  ngOnInit(): void {

  
  }
  goToQuiz(i: any) {
    this.quizService.selectedCategory = this.quizService.quizData.filter(
      (quizCategory: any) => {
        if (quizCategory.quizCategory == i) {
          return quizCategory.quizCategory;
        }
      }
    );

    this.router.navigate(['questions']);

  }

  onLinkClick(e: any) {
    
  }
}
