import GameCard from "../GameCard/GameCard";
import "./Deck.css";

export default function Deck() {
  return (
    <div
      className="deck absolute"
    >
      <GameCard position={{ x: 22, y: 22, size: 150 }} />
      <div className="deck-cover absolute overlay">
        <h1 className="bg-red-500 overlay">11111</h1>
        
      </div>
    </div>
  );
}
