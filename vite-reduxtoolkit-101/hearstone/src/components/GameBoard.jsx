import ManaBox from "./features/UI/ManaBox/ManaBox";
import EndTurnButton from "./features/UI/EndTurnButton/EndTurnButton";
import FishOrnament from "./features/UI/FishOrnament";
import Deck from "./features/Card/Deck/Deck";
export default function GameBoard() {
  return (
    <div className="board ">
      <FishOrnament />
      <ManaBox />
      <Deck />
      <EndTurnButton/>
    </div>
  );
}
