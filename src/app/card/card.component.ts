import { Component, OnInit, Input } from '@angular/core';
import { Suit } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(private cardService: CardService) {}
  @Input() rank: string = '';
  @Input() suit: Suit = Suit.C;

  suitStr = '';

  ngOnInit(): void {
    this.suitStr = this.cardService.getSuitStr(this.suit);
  }
}
