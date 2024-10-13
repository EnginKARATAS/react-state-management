const clientCardBase: Card[] = [
  {
        cardOwner: "player",
        borderColor: null,
        isSelected: false,
    cardId: Math.random(),
    cardPack: "engin-pack",
    cardName: "Diktatör",
    image: "dictator",
    cardDescription:
      "Bu kart oynanırsa rakibin en düşük mana kullanan kartı yok olur.",
    cardType: "minion",
    cardCost: 1,
    cardImageName: "dictator",
    cardAttack: 4,
    cardHealth: 2,
    cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
    deg: 0,
    move: 0
  },
  {
    cardOwner: "player",
    borderColor: null,
    isSelected: false,
    cardId: Math.random(),
    cardPack: "engin-pack",
    cardName: "Gitarist",
    image: "guitar",
    cardDescription:
      "Gitarist kartı oynandıktan sonra elinizdeki kartların hepsi 1 güç kazanır.",
    cardType: "minion",
    cardCost: 3,
    cardImageName: "guitar",
    cardAttack: 2,
    cardHealth: 2,
    cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
    deg: 0,
    move: 0
  },
  {
    cardOwner: "player",
    borderColor: null,
    isSelected: false,
    cardId: Math.random(),
    cardPack: "engin-pack",
    cardName: "Ödenmiş Bedel",
    image: "soldier",
    cardDescription:
      "Bu kartı oynadıktan sonra iş bulma ihtimaliniz %50 artar.",
    cardType: "minion",
    cardCost: 2,
    cardImageName: "soldier",
    cardAttack: 1,
    cardHealth: 1,
    cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
    deg: 0,
    move: 0
  },
  {
    cardOwner: "player",
    borderColor: null,
    isSelected: false,
    cardId: Math.random(),
    cardPack: "engin-pack",
    cardName: "Savaşçı",
    image: "worrior",
    cardDescription:
      "Savaşçı kartı oynandıktan sonra kullanıcının canı 1 artar.",
    cardType: "minion",
    cardCost: 2,
    cardImageName: "worrior",
    cardAttack: 2,
    cardHealth: 9,
    cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
    deg: 0,
    move: 0
  },
];

const enemyCardBase: Card[] = [
  {
    cardOwner: "enemy",
    borderColor: null,
    isSelected: false,
    cardId: Math.random(),
    cardPack: "yavuz-pack",
    cardName: "Yavuz Reis",
    image: "cix",
    cardDescription: "Sahaya iner ve kullanıcıya 10 yıllık tecrübe kazandırır.",
    cardType: "minion",
    cardCost: 1,
    cardImageName: "cix",
    cardAttack: 3,
    cardHealth: 2,
    cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
    deg: 0,
    move: 0
  },
  {
    cardOwner: "enemy",
    borderColor: null,
    isSelected: false,
    cardId: Math.random(),
    cardPack: "yavuz-pack",
    cardName: "Hacker Yavuz",
    image: "hacker",
    cardDescription: "Rakibe anında saldırarak 3 can azaltır.",
    cardType: "minion",
    cardCost: 1,
    cardImageName: "hacker",
    cardAttack: 3,
    cardHealth: 2,
    cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
    deg: 0,
    move: 0
  },
  {
    cardOwner: "enemy",
    borderColor: null,
    isSelected: false,
    cardId: Math.random(),
    cardPack: "yavuz-pack",
    cardName: "Sleeper Coder",
    image: "sleeper",
    cardDescription: "Saldırması için 1 tur bekler. Her tur 2 can kazanır.",
    cardType: "minion",
    cardCost: 5,
    cardImageName: "sleeper",
    cardAttack: 3,
    cardHealth: 8,
    cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
    deg: 0,
    move: 0
  },
];

export const getCardBaseLenght = ({ player }: { player: "player" | "enemy" }): number => {
  return player === "player" ? clientCardBase.length : enemyCardBase.length;
};

export const pullRandomCard = ({ isEnemy }: { isEnemy: boolean }) => {
  let randomIndex;
  let randomCard: any = null;
  if (isEnemy) {
    randomIndex = Math.floor(Math.random() * enemyCardBase.length);
    randomCard = enemyCardBase[randomIndex];
    enemyCardBase.splice(randomIndex, 1);
  } else {
    randomIndex = Math.floor(Math.random() * clientCardBase.length);
    randomCard = clientCardBase[randomIndex];
    clientCardBase.splice(randomIndex, 1);
  }

  return randomCard ? randomCard : null;
};
