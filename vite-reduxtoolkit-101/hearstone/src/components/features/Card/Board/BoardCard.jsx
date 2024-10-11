import "./BoardCard.css";
import { useDispatch } from "react-redux";
import { hoverSingleCard, closeSingleCard, clickBoardCard } from "../../hand/handSlice";
import { useSelector } from "react-redux";

export default function BoardCard({ position, boardCard }) {
  const dispatch = useDispatch();
     const onMouseOver = (card) => {
    setTimeout(() => {
      dispatch(hoverSingleCard(card));
    }, 200);
  };

  const onMouseLeave = (card) => {
    setTimeout(() => {
      dispatch(hoverSingleCard(card));
    }, 200);
  };

  const onClickBoardCard = (card) => {
    dispatch(closeSingleCard());
    dispatch(clickBoardCard(card));
  };

  return (
    <div
      onClick={() => onClickBoardCard(boardCard)}
      onMouseOver={() => onMouseOver(boardCard)}
      onMouseLeave={() => onMouseLeave(boardCard)}
      className="absolute board-card"
      style={{
        left: position.left,
        marginRight: position.offset,
        border: boardCard?.isSelected ? "2px solid red" : "none",
      }}
    >
      <img
        src="/public/cards/card-images/board_blank.png"
        className="board-frame"
      />
      
      <img
        className=" board-card-image absolute"
        src={`/public/cards/card-images/${boardCard?.cardPack}/${boardCard?.cardImageName}.png`}
      />
      <span className=" board-card-attack absolute text-white">
        {boardCard?.cardAttack}
      </span>
      <span className=" board-card-health absolute text-white">
        {boardCard?.cardHealth}
      </span>
    </div>
  );
}
