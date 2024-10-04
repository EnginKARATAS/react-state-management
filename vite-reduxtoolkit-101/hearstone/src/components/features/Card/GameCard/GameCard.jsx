import "./GameCard.css";

export default function GameCard({ position }) {
  return (
    <div className="game-card">
      <img
        src="/public/cards/blank.png"
        alt="game card"
        className="game-card-image absolute"
        style={{ left: position.x, top: position.y }}
      />
    </div>
  );
}
