import ManaBox from "./features/ManaBox/ManaBox";
import EndTurnButton from "./features/EndTurnButton/EndTurnButton";
  
export default function GameBoard() {
  return (
    <div className="board">
      <ManaBox />
      <EndTurnButton />
    </div>
  );
}
