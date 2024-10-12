class Scenario {
  private borderColorCode: string[] = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "white",
    "black",
    "gray",
  ];
  private cacheCurrentColor: string = "red";
  private cacheSelectedCard: Card | null = null;

  private move: Move[];

  decideBorderColor(clickedCard: Card) {
    this.cacheCurrentColor = this.borderColorCode[this.move.length];
  }
  clickBoardCard(clickedCard: Card) {
    this.decideBorderColor(clickedCard);
    if (this.cacheSelectedCard && !this.cacheCurrentColor) {
      if (clickedCard.cardOwner === "enemy") {
        this.cacheSelectedCard = null;
      }
    }
  }
}

interface Move {
  attacker: Card | null;
  defender: Card | null;
  borderColorCode: string;
}
