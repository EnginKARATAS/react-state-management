import ManaBox from "./features/UI/ManaBox/ManaBox";
import EndTurnButton from "./features/UI/EndTurnButton/EndTurnButton";
import FishOrnament from "./features/UI/FishOrnament";
import Hand from "./features/Card/Hand/Hand";
import YourTurn from "./features/UI/YourTurn/YourTurn"
import SingleGameCard from "./features/Card/GameCard/SingleGameCard";
export default function GameBoard() {
  return (
    <div className="board ">
      <FishOrnament />
      <YourTurn />
      <ManaBox />
      <Hand />
      <EndTurnButton/>
      <SingleGameCard/>
    </div>
  );
}
