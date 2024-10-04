import ManaBox from "./features/ManaBox/ManaBox";
import EndTurnButton from "./features/EndTurnButton/EndTurnButton";
import FishOrnament from "./features/UI/FishOrnament";
export default function GameBoard() {
 
  return (
    <div className="board">
      <FishOrnament />
      <ManaBox />
      <EndTurnButton/>
    </div>
  );
}
