import "./Board.css";
import { useSelector } from "react-redux";
import BoardCard from "./BoardCard";

export default function Board({ player, position }) {
  const playerBoardCards = useSelector((state) => state.hand.board.playerCards);
  const enemyBoardCards = useSelector((state) => state.hand.board.enemyCards);

  return (
    <div>
      {player === "player" && playerBoardCards && (
        <div
          className="board-cards absolute flex player-board"
          style={{ top: -490, left: 100 - playerBoardCards.length * 66 }}
        >
          {playerBoardCards.map((boardCard, i) => {
            return (
              <BoardCard
                position={{
                  left: i * 100,
                offset: 555,
              }}
              boardCard={boardCard}
                key={boardCard.cardId}
              />
            );
          })}
        </div>
      )}
      {player === "enemy" && enemyBoardCards && (
        <div
          className="board-cards absolute flex enemy-board"
          style={{ top: 300, left: 0 }}
        >
          {enemyBoardCards.map((enemyBoardCard, i) => {
            return (
              <BoardCard
                player="enemy"
                position={{
                  left: i * 100,
                  offset: 555,
                }}
                boardCard={enemyBoardCard}
                key={enemyBoardCard.cardId}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
