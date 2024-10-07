import "./GameCard.css";
import { useDispatch } from "react-redux";
import { hoverSingleCard, addCardToBoard } from "../../hand/handSlice";
import { useState } from "react";
import { decrement, isCardPlayable } from "../../counter/counterSlice";
export default function GameCard({ position, card, player }) {
  const dispatch = useDispatch();

  const [zIndex, setZIndex] = useState(0);

  const onMouseOver = (card) => {
    setTimeout(() => {
      dispatch(hoverSingleCard(card));
      setZIndex(2);
    }, 200);
  };

  const onMouseLeave = (card) => {
    setTimeout(() => {
      dispatch(hoverSingleCard(null));
      setZIndex(0);
    }, 200);
  };

  const onClick = async () => {
    const res = await dispatch(isCardPlayable(card));
    console.log("🚀 ~ onClick ~ successStatus:", res);

    if (res) {
      dispatch(addCardToBoard(card));
      dispatch(decrement(card));
    }
  };

  return (
    <div>
      {player === "player" ? (
        <div
          className="game-card relative"
          onMouseOver={() => onMouseOver(card)}
          onMouseLeave={() => onMouseLeave(card)}
          onClick={() => onClick(card)}
          style={{
            left: position.x,
            top: position.y - 30 * zIndex,
            width: position.size,
            marginLeft: position.offset,
            zIndex: zIndex,
          }}
        >
          <img
            src="/public/cards/card-images/blank.png"
            alt="game card"
            className="game-card-frame"
          />

          <span className="absolute card-cost">{card.cardCost}</span>
          <img
            className="absolute card-image"
            src={`/public/cards/card-images/${card.cardImageName}.png`}
          />
          <svg className="absolute card-name-svg" width="100" height="20">
            <path
              id="wavyPath"
              d="M-3,17 Q25,15 50,10 Q75,5 100,13"
              fill="none"
              strokeWidth="1"
            />
            <text>
              <textPath href="#wavyPath" startOffset="50%" textAnchor="middle">
                {card.cardName}
              </textPath>
            </text>
          </svg>
          <span className="absolute card-description">
            {card.cardDescription}
          </span>
          <span className="absolute card-attack">{card.cardAttack}</span>
          <span className="absolute card-health">{card.cardHealth}</span>
        </div>
      ) : (
        <div className="backside-game-card relative"
        style={{
          left: position.x,
          top: position.y - 30 * zIndex,
          width: position.size,
          marginLeft: position.offset,
          zIndex: zIndex,
        }}
        >
          <img className="backside-image" src={`/public/cards/card-images/card-back.png`} />
        </div>
      )}
    </div>
  );
}
