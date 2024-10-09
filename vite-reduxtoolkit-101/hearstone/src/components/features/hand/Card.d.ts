interface InitialState {
    hand: {
        playerCards: Card[];
        enemyCards: Card[];
    };
    singleCard: Card | null;
    boardCards: Card[];
  }

interface Card {
    cardId: string;
    cardPosition: {
      x: number;
      y: number;
      offset: number;
      top: number;
    };
    deg: number;
  cardSelected?: boolean;
}

interface EnemyCard extends Card {
}

interface PlayerCard extends Card {
}

