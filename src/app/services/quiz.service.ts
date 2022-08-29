import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }
  quizData: any = [
    [
    {
      quizCategory: 'geography',
      icon:'🌐',
      quizQuestions: [
        'In quale paese si trova Roma?',
        'Qual é la capitale della Francia?',
      ],
      answers: [
        ['Francia', 'Spagna', 'Inghilterra', 'Italia'],
        ['Parigi', 'Roma', 'Berlino', 'Madrid'],
      ],
      correctAnswer: [3, 0],
    }],
    [{
      quizCategory: 'story',
      icon:'🏛️',
      quizQuestions: [
        'In quale anno finisce il medioevo?',
        'In quale anno l\'Italia è entrata nella NATO?',
      ],
      answers: [
        ['1492', '2012', '1243', '1600'],
        ['1492', '1949', '1485', '1980'],
      ],
      correctAnswer: [0, 1],
    }],
  ];

  selectedCategory: any;
  

}
