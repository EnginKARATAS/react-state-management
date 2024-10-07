import GameCard from "../GameCard/GameCard";
import "./Hand.css";
import { useSelector } from 'react-redux'

export default function Hand({player}) {
  const cards = useSelector((state) => state.hand.cards);

  return (
    <div className="hand flex relative"
    style={{
      clipPath: player === "player" ? "polygon(0 -34%, 194% -14%, 121% 74%, 1% 73%)": "polygon(0px 18%, 120% 18%, 132% 152%, 16% 98%)"
    }}
    >
      {cards && cards.map((card, i) => {
        return <GameCard player={player} card={card} position={{ x:310-cards.length*17, y: player==="player"?0:-80, size: 150, offset: card.length<5?-cards.length*15:-120}} key={card.cardId} />;
      })}
    </div>
  );
}
