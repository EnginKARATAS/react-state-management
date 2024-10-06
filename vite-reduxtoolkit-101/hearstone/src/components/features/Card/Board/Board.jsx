import "./Board.css";
import { useSelector } from "react-redux";
import BoardCard from "./BoardCard";

export default function Board() {
  const boardCards = useSelector((state) => state.hand.boardCards);

  return (
    <div className="board-cards absolute flex">
      {boardCards &&
        boardCards.map((boardCard, i) => {
          return <BoardCard position={{ x:-boardCards.length*49  , y: 0, size: 150, offset: 10}} boardCard={boardCard} key={boardCard.cardId} />;
        })}
    </div>
  );
}
