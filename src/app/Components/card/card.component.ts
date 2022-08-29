import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input('text') text!: string;
  @Input('width') width!: string;
  @Input('height') height!: string;
  @Input('img') img!: string;
  @Input('background') background!: string;


  constructor() {}

  ngOnInit(): void {}
}
