import "./SingleGameCard.css";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { hoverSingleCard } from '../../hand/handSlice';

export default function SingleGameCard({ position, card }) {
  const dispatch = useDispatch();
  const singleCard = useSelector((state) => state.hand.singleCard)

  useEffect(() => {
    console.log("card hovered, single gamecard component", singleCard)
  }, [singleCard])



  return (
    <div
      className="single-game-card absolute"
      style={{
        left: position?.x,
        top: position?.y,
        width: position?.size,
        marginLeft: position?.offset,
      }}
    >
      <img
        src="/public/cards/blank.png"
        alt="game card"
        className="game-card-image"
      />
      
      <span className="absolute card-cost">{singleCard?.cardCost}</span>
      <img className="absolute card-image" src={`/public/cards/card-images/cat.png`} alt="card artwork" />
      <svg className="absolute card-name-svg" width="100" height="20">
        <path id="wavyPath" d="M-3,17 Q25,15 50,10 Q75,5 100,13" fill="none" strokeWidth="1" />
        <text>
          <textPath href="#wavyPath" startOffset="50%" textAnchor="middle">
            {singleCard?.cardName}
          </textPath>
        </text>
      </svg>
      <span className="absolute card-description">{singleCard?.cardDescription}</span>
      <span className="absolute card-attack">{singleCard?.cardAttack}</span>
      <span className="absolute card-health">{singleCard?.cardHealth}</span>
    </div>
  );
}

 
