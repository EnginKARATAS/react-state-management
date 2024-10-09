const clientCardBase: Card[] = [
  {
    cardPack: "engin-pack",
    cardName: "Diktatör",
    image: "dictator",
    description:
      "Bu kart oynanırsa rakibin en düşük mana kullanan kartı yok olur.",
    cardId: Math.random(),
    cardType: "minion",
    cardCost: 1,
    cardImageName: "dictator",
    isPlayed: false,
    cardAttack: 4,
    cardHealth: 2,
    cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
    deg: 0,
  },
  {
    cardPack: "engin-pack",
    cardName: "Gitarist",
    image: "guitar",
    description:
      "Gitarist kartı oynandıktan sonra elinizdeki kartların hepsi 1 güç kazanır.",
    cardId: Math.random(),
    cardType: "minion",
    cardCost: 3,
    cardImageName: "guitar",
    isPlayed: false,
    cardAttack: 2,
    cardHealth: 2,
    cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
    deg: 0,
  },
  {
    cardPack: "engin-pack",
    cardName: "Ödenmiş Bedel",
    image: "soldier",
    description: "Bu kartı oynadıktan sonra iş bulma ihtimaliniz %50 artar.",
    cardId: Math.random(),
    cardType: "minion",
    cardCost: 2,
    cardImageName: "soldier",
    isPlayed: false,
    cardAttack: 1,
    cardHealth: 1,
    cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
    deg: 0,
  },
  {
    cardPack: "engin-pack",
    cardName: "Savaşçı",
    image: "worrior",
    description: "Savaşçı kartı oynandıktan sonra kullanıcının canı 1 artar.",
    cardId: Math.random(),
    cardType: "minion",
    cardCost: 2,
    cardImageName: "worrior",
    isPlayed: false,
    cardAttack: 2,
    cardHealth: 9,
    cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
    deg: 0,
  },
];

const enemyCardBase: Card[] = [
  {
    cardPack: "yavuz-pack",
    cardName: "Yavuz Reis",
    image: "cix",
    description: "Sahaya iner ve kullanıcıya 10 yıllık tecrübe kazandırır.",
    cardId: Math.random(),
    cardType: "minion",
    cardCost: 1,
    cardImageName: "cix",
    isPlayed: false,
    cardAttack: 3,
    cardHealth: 2,
    cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
    deg: 0,
  },
  {
    cardPack: "yavuz-pack",
    cardName: "Hacker Yavuz",
    image: "hacker",
    description: "Rakibe anında saldırarak 3 can azaltır.",
    cardId: Math.random(),
    cardType: "minion",
    cardCost: 1,
    cardImageName: "hacker",
    isPlayed: false,
    cardAttack: 3,
    cardHealth: 2,
    cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
    deg: 0,
  },
  {
    cardPack: "yavuz-pack",
    cardName: "Sleeper Coder",
    image: "sleeper",
    description: "Saldırması için 1 tur bekler. Her tur 2 can kazanır.",
    cardId: Math.random(),
    cardType: "minion",
    cardCost: 5,
    cardImageName: "sleeper",
    isPlayed: false,
    cardAttack: 3,
    cardHealth: 8,
    cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
    deg: 0,
  },
];

export const pullRandomCard = ({ isEnemy }: { isEnemy: boolean }) => {
  let randomIndex;
  let randomCard: any = null;
  if (isEnemy) {
    randomIndex = Math.floor(Math.random() * enemyCardBase.length);
    randomCard = enemyCardBase[randomIndex];
    enemyCardBase.splice(randomIndex, 1);
  } else {
    randomIndex = Math.floor(Math.random() * clientCardBase.length);
    console.log(randomIndex)
    randomCard = clientCardBase[randomIndex];
    clientCardBase.splice(randomIndex, 1);
    console.log(randomCard)
  }

  return randomCard ? randomCard : null;
};
