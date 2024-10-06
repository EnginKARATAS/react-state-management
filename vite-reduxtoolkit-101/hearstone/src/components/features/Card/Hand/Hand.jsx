import GameCard from "../GameCard/GameCard";
import "./Hand.css";
import { useSelector } from 'react-redux'

export default function Hand() {
  const cards = useSelector((state) => state.hand.cards);

  return (
    <div className="absolute hand relative flex">
      {cards && cards.map((card, i) => {
        return <GameCard card={card} position={{ x:310-cards.length*17, y: 0, size: 150, offset: card.length<5?-cards.length*15:-120}} key={card.cardId} />;
      })}
    </div>
  );
}
