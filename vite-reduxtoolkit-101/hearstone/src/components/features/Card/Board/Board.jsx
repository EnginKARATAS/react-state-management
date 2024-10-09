import "./Board.css";
import { useSelector } from "react-redux";
import BoardCard from "./BoardCard";

export default function Board({ player, position }) {
  const playerBoardCards = useSelector((state) => state.hand.board.playerCards);
  const enemyBoardCards = useSelector((state) => state.hand.board.enemyCards);

  return (
    <div>
      <div
        className="board-cards absolute flex player-board"
        style={{ top: -490, left: 100-playerBoardCards.length * 66 }}
      >
        {player === "player" &&
          playerBoardCards &&
          playerBoardCards.map((boardCard, i) => {
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
      <div
        className="board-cards absolute flex"
        style={{ top: position.top, left: position.left }}
      >
        {player === "enemy" &&
          playerBoardCards &&
          playerBoardCards.map((boardCard, i) => {
            {
              player === "enemy-board" &&
                enemyBoardCards &&
                enemyBoardCards.map((boardCard, i) => {
                  return (
                    <BoardCard
                      position={{
                        x: -enemyBoardCards.length * 49,
                        y: 100,
                        size: 150,
                        offset: 10,
                      }}
                      boardCard={boardCard}
                      key={boardCard.cardId}
                    />
                  );
                });
            }
          })}
      </div>
    </div>
  );
}
