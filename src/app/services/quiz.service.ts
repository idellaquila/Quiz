import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor() {}
  selectedCategory: any;
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
      quizCategory: 'History',
      quizQuestion: "In quale anno l'Italia è entrata nella NATO?",
      answers: ['1492', '1949', '1485', '1980'],
      correctAnswer: 1,
    },
    {
      quizCategory: 'History',
      quizQuestion: 'In quale anno finisce il medioevo?',
      answers: ['1492', '2012', '1243', '1600'],
      correctAnswer: 0,
    },
  ];
}
