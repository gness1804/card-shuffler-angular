import { Component, OnInit, Input } from '@angular/core';
import { Suit } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-minicard',
  templateUrl: './minicard.component.html',
  styleUrls: ['./minicard.component.css']
})
export class MinicardComponent implements OnInit {
  constructor(private cardService: CardService) {}
  @Input() rank: string = '';
  @Input() suit: Suit = Suit.C;

  suitStr = '';

  ngOnInit(): void {
    this.suitStr = this.cardService.getSuitStr(this.suit);
  }
}
