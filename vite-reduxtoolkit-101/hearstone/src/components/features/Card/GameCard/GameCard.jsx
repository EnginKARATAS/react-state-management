import "./GameCard.css";
import { useDispatch } from 'react-redux';
import { hoverSingleCard } from '../../hand/handSlice';

export default function GameCard({ position, card }) {
  const dispatch = useDispatch();

  const onMouseOver = (card) => {
    console.log("carefull", card)
    dispatch(hoverSingleCard(card))
  }

  return (
    <div
      className="game-card relative"
      onMouseOver={()=>onMouseOver(card)}
      style={{
        left: position.x,
        top: position.y,
        width: position.size,
        marginLeft: position.offset,
      }}
    >
      <img
        src="/public/cards/blank.png"
        alt="game card"
        className="game-card-image"
      />
      
      <span className="absolute card-cost">{card.cardCost}</span>
      <img className="absolute card-image" src={`/public/cards/card-images/${card.cardImageName}.png`} alt="card artwork" />
      <svg className="absolute card-name-svg" width="100" height="20">
        <path id="wavyPath" d="M-3,17 Q25,15 50,10 Q75,5 100,13" fill="none" strokeWidth="1" />
        <text>
          <textPath href="#wavyPath" startOffset="50%" textAnchor="middle">
            {card.cardName}
          </textPath>
        </text>
      </svg>
      <span className="absolute card-description">{card.cardDescription}</span>
      <span className="absolute card-attack">{card.cardAttack}</span>
      <span className="absolute card-health">{card.cardHealth}</span>
    </div>
  );
}
 