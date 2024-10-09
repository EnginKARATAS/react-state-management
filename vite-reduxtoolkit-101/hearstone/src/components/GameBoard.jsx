 import EndTurnButton from "./features/UI/EndTurnButton/EndTurnButton";
import FishOrnament from "./features/UI/FishOrnament";
import YourTurn from "./features/UI/YourTurn/YourTurn"
 import ClientProfile from "./features/UI/Profile/ClientProfile/ClientProfile";
import EnemyProfile from "./features/UI/Profile/EnemyProfile/EnemyProfile";
export default function GameBoard() {
  return (
    <div className="board ">
      <FishOrnament />
      <EnemyProfile player="enemy"/>
      <YourTurn />
      <EndTurnButton/>
      <ClientProfile player="player" />
    </div>
  );
}
