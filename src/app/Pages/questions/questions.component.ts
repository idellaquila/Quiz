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
    console.log(this.quizService.selectedCategory.answers);
  }

  nextQuestion() {
    this.selected = false;

    if (
      this.selectedAnswer ==
      this.quizService.selectedCategory[this.index].correctAnswer
    ) {
      console.log('ugualeeee');
      this.quizService.points += 1;
    } else {
      console.log('NO');
    }

    if (this.index < this.quizService.selectedCategory.length - 1) {
      this.index += 1;
      console.log('this.quizService.selectedCategory.length');
      console.log(this.quizService.selectedCategory.length);
      console.log('this.index');
      console.log(this.index);
    }
    if (this.index == this.quizService.selectedCategory.length - 1) {
      this.changeButton = true;
      console.log('finito');
    }
  }

  goToResult() {
    if (
      this.selectedAnswer ==
      this.quizService.selectedCategory[this.index].correctAnswer
    ) {
      console.log('ugualeeee');
      this.quizService.points += 1;
      this.selected = false;
    } else {
      console.log('NO');
    }

    this.router.navigate(['show-results']);
  }

  onSelectedAnswer(e: any, j: any) {
    e.target.parentNode.childNodes[j].classList.remove('selected');
    e.target.classList.add('selected');

    this.selected = true;

    // if (e.target.classList.contains('selected')) {
    //   console.log('true');
    //   e.target.classList.remove('selected');
    // } else {
    //   e.target.classList.add('selected');
    // }

    console.log(j);
    // console.log(
    //   e.target.parentNode.childNodes.map((child: any) =>
    //     child.classList.remove('selected')
    //   )
    // );

    this.selectedAnswer = e.target.innerText;
  }
}
