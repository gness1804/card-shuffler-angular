import { Injectable } from '@angular/core';
import { v4 } from 'uuid';
import { generateRandomInt } from 'src/utils/generateRandonInt';
import { Card, Suit } from './card';
import { CardClass } from './cardclass';
// import spades from '../assets/spades.svg';
// import clubs from '../assets/clubs.svg';
// import diamonds from '../assets/diamonds.svg';
// import heart from '../assets/heart.svg';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor() {}

  generateCards(): Card[] {
    const res = [];
    const suits = [Suit.S, Suit.C, Suit.D, Suit.H];
    const ranks = [
      'A',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K',
    ];

    for (const suit of suits) {
      for (const rank of ranks) {
        const newCard = new CardClass(v4(), suit, rank);
        res.push(newCard);
      }
    }
    return this.shuffle(res);
  }

  shuffle(cards: Card[]): Card[] {
    const len = cards.length;

    for (let i = 0; i < len; i++) {
      const j = generateRandomInt(len);

      const temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }

    return cards;
  }

  getSuitStr(suit: Suit): string {
    switch (suit) {
      case Suit.S:
        return '../assets/spades.svg'
      case Suit.C:
        return '../assets/clubs.svg';
      case Suit.D:
        return '../assets/diamonds.svg'
      case Suit.H:
        return '../assets/heart.svg';
      default:
        throw new Error('Invalid suit entered.');
    }
  }
}
