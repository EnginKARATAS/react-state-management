import GameCard from "../GameCard/GameCard";

export default function Deck() {
  return (
    <div className="deck">
      <GameCard position={{ x: 500, y: 500 }}/>
    </div>
  );
}

