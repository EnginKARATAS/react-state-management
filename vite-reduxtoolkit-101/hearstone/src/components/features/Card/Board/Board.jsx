import "./Board.css";
import { useSelector } from "react-redux";
import BoardCard from "./BoardCard";

export default function Board() {
  const boardCards = useSelector((state) => state.hand.boardCards);

  return (
    <div className="board-cards absolute flex">
      {boardCards &&
        boardCards.map((boardCard, i) => {
          return <BoardCard style={{x:10, y: 10, left: i * 100}} boardCard={boardCard} key={boardCard.cardId} />;
        })}
    </div>
  );
}
