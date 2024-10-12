export default class Scenario {
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

  private move: Move[] = [];

  getBorderColor() {
    return this.borderColorCode[this.move.length];
  }
  clickBoardCard(clickedCard: Card) {
    console.log("ilk defa tıklandığında ve renk kodu yoksa");
    if (!this.cacheSelectedCard && !clickedCard.borderColor) {
      console.log("kart rakip mi");
      if (clickedCard.cardOwner === "enemy") {
        this.cacheSelectedCard = null;
      } else {
        this.cacheSelectedCard = clickedCard;
        clickedCard.borderColor = this.getBorderColor();
      }
    }
    else {
      console.log("ilk defa tıklanmadı, renk kodu var");
      if (clickedCard.cardOwner !== "enemy") {
        this.cacheSelectedCard = null;
      } else {
        clickedCard.borderColor = this.getBorderColor();
        clickedCard.isSelected = true;
      }
    }
  }
}

interface Move {
  attacker: Card | null;
  defender: Card | null;
  borderColorCode: string;
}
