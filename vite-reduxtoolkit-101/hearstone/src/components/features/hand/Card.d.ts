 

interface InitialState {
  hand: {
    player: Card[];
    enemy: Card[];
  };
  board: {
    player: Card[];
    enemy: Card[];
  };
  cardBaseCount: {
    enemy: number;
    player: number;
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
  selectedCardCache: Card | null;
  borderColor: string;
  cacheSelectedCard: any;
  move: Card[];
}

interface Card {
  cardId: number;
  borderColor: string | null;
  cardOwner: "player" | "enemy" | "";
  cardName: string;
  image: string;
  cardDescription: string;
  cardType: string;
  cardCost: number;
  cardImageName: string;
  isPlayed: boolean;
  isSelected: boolean;
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
