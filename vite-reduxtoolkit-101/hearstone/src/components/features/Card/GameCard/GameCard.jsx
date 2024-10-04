import "./GameCard.css";

export default function GameCard({ position, card }) {
  return (
    <div
      className="game-card relative"
      style={{
        left: position.x,
        top: position.y,
        width: position.size,
        marginLeft: position.offset,
      }}
    >
      <img
        src="/public/cards/blank.png"
        alt="game card"
        className="game-card-image"
      />
      <span className="absolute card-cost">{card.cardCost}</span>
      <img  className="absolute card-image" src={"/public/cards/card-images/"+ card.cardImageName +".png"} alt="game card" />
      <span className="absolute card-name">{card.cardName}</span>
      <span className="absolute card-description">{card.cardDescription}</span>
      <span className="absolute card-attack">{card.cardAttack}</span>
      <span className="absolute card-health">{card.cardHealth}</span>
    </div>
  );
}
