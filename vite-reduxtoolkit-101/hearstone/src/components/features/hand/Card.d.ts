interface InitialState {
  hand: {
    playerCards: Card[];
    enemyCards: Card[];
  };
  board: {
    playerCards: Card[];
    enemyCards: Card[];
  };
  singleCard: Card | null;
  profile: {
    player: {
      health: number;
      armor: number;
    };
    enemy: {
      health: number;
      armor: number;
    };
  };
}

interface Card {
  cardName: string;
  image: string;
  description: string;
  cardId: number;
  cardType: string;
  cardCost: number;
  cardImageName: string;
  isPlayed: boolean;
  cardAttack: number;
  cardHealth: number;
  cardPack: string;
  cardPosition: {
    x: number;
    y: number;
    top: number;
    size: number;
    offset: number;
  };
  deg: number;
}

interface EnemyCard extends Card {}

interface PlayerCard extends Card {}
