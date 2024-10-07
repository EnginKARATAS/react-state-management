import GameCard from "../GameCard/GameCard";
import "./Hand.css";
import { useSelector } from "react-redux";

export default function Hand({ player, position }) {
  const cards = useSelector((state) => state.hand.cards);

  return (
    <div
      className="hand flex absolute"
      style={{
        clipPath:
          player === "player"
            ? "polygon(0 -34%, 194% -14%, 121% 74%, 1% 73%)"
            : "polygon(0px 18%, 120% 18%, 132% 152%, 16% 98%)",
        left: position?.left,
        bottom: player === "player" ? position?.bottom : "",
        top: player === "enemy" ? position?.top : "",
      }}
    >
      {cards &&
        cards.map((card, i) => {
          return (
            <GameCard
              player={player}
              card={card}
              deg={card.deg}
              position={{
                x: 100,
                y: player === "player" ? 0 : -97,
                size: 150,
                offset: -card.cardPosition.offset,
              }}
              key={card.cardId}
            />
          );
        })}
    </div>
  );
}
