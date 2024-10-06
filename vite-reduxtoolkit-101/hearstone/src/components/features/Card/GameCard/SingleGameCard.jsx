import PropTypes from 'prop-types';
import "./GameCard.css";
import { useDispatch } from 'react-redux';
import { showCard } from '../../hand/handSlice';

export default function GameCard({ position, card }) {
  const dispatch = useDispatch();

  return (
    <div
      className="game-card relative"
      onClick={() => {
        console.log("clicked", card.cardId)
        dispatch(showCard(card))
      }}
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

GameCard.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    offset: PropTypes.number.isRequired,
  }).isRequired,
  card: PropTypes.shape({
    cardCost: PropTypes.number.isRequired,
    cardImageName: PropTypes.string.isRequired,
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttack: PropTypes.number.isRequired,
    cardHealth: PropTypes.number.isRequired,
  }).isRequired,
};