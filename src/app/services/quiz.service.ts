import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor() {}
  selectedCategory: any;

  points: number = 0;

  quizData: any = [
    {
      quizCategory: 'Geografia',
      quizQuestion: 'In quale paese si trova Roma?',
      answers: ['Francia', 'Spagna', 'Inghilterra', 'Italia'],
      correctAnswer: 'Italia',
    },
    {
      quizCategory: 'Geografia',
      quizQuestion: 'Qual é la capitale della Francia?',
      answers: ['Parigi', 'Roma', 'Berlino', 'Madrid'],
      correctAnswer: 'Parigi',
    },
    {
      quizCategory: 'Storia',
      quizQuestion: "In quale anno l'Italia è entrata nella NATO?",
      answers: ['1492', '1949', '1485', '1980'],
      correctAnswer: '1949',
    },
    {
      quizCategory: 'Storia',
      quizQuestion: 'In quale anno finisce il medioevo?',
      answers: ['1492', '2012', '1243', '1600'],
      correctAnswer: '1492',
    },
  ];
}
