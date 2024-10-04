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
        return <GameCard card={card} position={{ x: 20, y: 22, size: 150, offset: i>0 ? 20 : 0 }} key={card.cardId} />;
      })}
    </div>
  );
}
