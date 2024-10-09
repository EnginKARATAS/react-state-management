const clientCardBase = [
    {
      cardName: "Yavuz Reis",
      image: "cat",
      description: "Bu kart oynandığı anda kullanıcısına anında 10 yıllık tecrübe kazandırır.",
    },
    {
      cardName: "Diktatör",
      image: "dictator",
      description: "Bu kart oynanırsa rakibin en düşük mana kullanan kartı yok olur.",
    },
    {
      cardName: "Gitarist",
      image: "guitar",
      description: "Gitarist kartı oynandıktan sonra elinizdeki kartların hepsi 1 güç kazanır.",
    },
    {
      cardName: "Ödenmiş Bedel",
      image: "soldier",
      description: "Bu kartı oynadıktan sonra iş bulma ihtimaliniz %50 artar.",
    },
    {
      cardName: "Savaşçı",
      image: "worrior",
      description: "Savaşçı kartı oynandıktan sonra kullanıcının canı 1 artar.",
    },
  ];

  const cardTypes = ["minion", "spell", "weapon"];

export const createRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * clientCardBase.length);
    const randomCard = {
      cardId: Math.random(),
      cardType: cardTypes[Math.floor(Math.random() * cardTypes.length)],
      cardCost: Math.floor(Math.random() * 10),
      cardName: clientCardBase[randomIndex].cardName,
      cardImageName: clientCardBase[randomIndex].image,
      cardDescription: clientCardBase[randomIndex].description,
  
      cardBelongsTo: "player",
      isPlayed: false,
  
      cardAttack: Math.floor(Math.random() * 10),
      cardHealth: Math.floor(Math.random() * 10),
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
    };
    return randomCard;
  };

