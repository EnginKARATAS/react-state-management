import './GameCard.css';

export default function GameCard({ position }) {
  return (
    <div className="game-card" style={{ left: position.x, top: position.y, width: position.size }}>
      <img
        src="/public/cards/blank.png"
        alt="game card"
        className="game-card-image"
      />
    </div>
  );
}
