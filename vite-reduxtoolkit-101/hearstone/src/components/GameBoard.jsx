import ManaBox from "./features/UI/ManaBox/ManaBox";
import EndTurnButton from "./features/UI/EndTurnButton/EndTurnButton";
import FishOrnament from "./features/UI/FishOrnament";
import YourTurn from "./features/UI/YourTurn/YourTurn"
import Board from "./features/Card/Board/Board";
import ClientProfile from "./features/UI/Profile/ClientProfile/ClientProfile";
import SingleGameCard from "./features/Card/GameCard/SingleGameCard";
import EnemyProfile from "./features/UI/Profile/EnemyProfile/EnemyProfile";
export default function GameBoard() {
  return (
    <div className="board ">
      <FishOrnament />
      <EnemyProfile />
      <YourTurn />
      <ManaBox />
      <Board/>
      <SingleGameCard/>
      <EndTurnButton/>
      <ClientProfile />
    </div>
  );
}
