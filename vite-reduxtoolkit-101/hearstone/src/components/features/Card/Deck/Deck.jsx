import GameCard from "../GameCard/GameCard";
import "./Deck.css";
import { useSelector } from 'react-redux'

export default function Deck() {
  const cards = useSelector((state) => state.hand.cards);
  console.log("cardos",cards)

  return (
    <div className="deck relative flex">
      {cards && cards.map((card, i) => {
        console.log("card", card)
        return <GameCard card={card} position={{ x:310-cards.length*17, y: 22, size: 150, offset: card.length<5?-cards.length*15:-120}} key={card.cardId} />;
      })}
    </div>
  );
}
