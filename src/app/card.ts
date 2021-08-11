export enum Suit {
  S = 'Spades',
  C = 'Clubs',
  D = 'Diamonds',
  H = 'Hearts',
}

export interface Card {
  id: string;
  suit: Suit;
  rank: string;
}
