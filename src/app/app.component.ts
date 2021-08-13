import { Component, OnInit } from '@angular/core';
import { Card } from './card';
import { CardService } from './card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cards: Card[] = [];

  constructor(private cardService: CardService){}

  shuffleCards(): void {
    console.log('hit shuffleCards');
    this.cards = this.cardService.generateCards();
  }

  ngOnInit(): void {
    this.cards = this.cardService.generateCards();
  }
}
