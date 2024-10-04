import GameCard from "../GameCard/GameCard";
import "./Deck.css";

export default function Deck() {
  return (
    <div className="deck relative flex "> 
      <GameCard position={{ x: 20, y: 22, size: 150 }} />
      <GameCard position={{ x: 30, y: 22, size: 150 }} />
      <GameCard position={{ x: 40, y: 22, size: 150 }} /> 
      <GameCard position={{ x: 50, y: 22, size: 150 }} /> 
      <GameCard position={{ x: 60, y: 22, size: 150 }} /> 
    </div>
  );
}