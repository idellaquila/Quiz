import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  quizData: any = [
    {
      quizCategory: 'Geography',
      quizQuestion: 'In quale paese si trova Roma?',
      answers: ['Francia', 'Spagna', 'Inghilterra', 'Italia'],
      correctAnswer: 3,
    },
    {
      quizCategory: 'Geography',
      quizQuestion: 'Qual é la capitale della Francia?',
      answers: ['Parigi', 'Roma', 'Berlino', 'Madrid'],
      correctAnswer: 0,
    },
    {
      quizCategory: 'Geography',
      quizQuestion: 'In quale continente si trova il Congo?',
      answers: ['Europa', 'Asia', 'Oceania', 'Africa'],
      correctAnswer: 3,
    },
    {
      quizCategory: 'Storia',
      quizQuestion: 'In quale anno finisce il medioevo?',
      answers: ['1492', '2012', '1243', '1600'],
      correctAnswer: 0,
    },
    {
      quizCategory: 'Storia',
      quizQuestion: 'Chi é stato il primo presidente degli Stati Uniti?',
      answers: [
        'George Washington',
        'Abramo Lincon',
        'Bill Clinton',
        'Barack Obama',
      ],
      correctAnswer: 0,
    },
    {
      quizCategory: 'Storia',
      quizQuestion: 'In che anno l`Italia ha aderito alla NATO?',
      answers: ['1954', '1922', '1949', '1970'],
      correctAnswer: 2,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
