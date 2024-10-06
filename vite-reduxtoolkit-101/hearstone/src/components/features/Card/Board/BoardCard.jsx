import "./BoardCard.css";
export default function BoardCard({ position, boardCard }) {
    return (
      <div
        className="  relative"
        style={{
          left: position?.x,
          top: position?.y,
        }}
      >
        <img
          src="/public/cards/blank.png"
          className=" "
        />
        
        <span className="absolute board-card-cost">{boardCard?.cardCost}</span>
        <img className="absolute board-card-image" src={`/public/cards/card-images/${boardCard?.cardImageName}.png`} />
        <svg className="absolute board-card-name-svg" width="100" height="20">
          <path id="wavyPath" d="M-3,17 Q25,15 50,10 Q75,5 100,13" fill="none" strokeWidth="1" />
          <text>
            <textPath href="#wavyPath" startOffset="50%" textAnchor="middle">
              {boardCard?.cardName}
            </textPath>
          </text>
        </svg>
        <span className="absolute board-card-description">{boardCard?.cardDescription}</span>
        <span className="absolute board-card-attack">{boardCard?.cardAttack}</span>
        <span className="absolute board-card-health">{boardCard?.cardHealth}</span>
      </div>
    );
  }
   
