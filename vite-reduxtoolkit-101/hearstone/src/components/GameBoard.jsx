import ManaBox from "./features/UI/ManaBox/ManaBox";
import EndTurnButton from "./features/UI/EndTurnButton/EndTurnButton";
import FishOrnament from "./features/UI/FishOrnament";
import YourTurn from "./features/UI/YourTurn/YourTurn"
import Board from "./features/Card/Board/Board";
import Profile from "./features/UI/Profile/Profile";
import ClientProfile from "./features/UI/Profile/ClientProfile/ClientProfile";
import SingleGameCard from "./features/Card/GameCard/SingleGameCard";
export default function GameBoard() {
  return (
    <div className="board ">
      <FishOrnament />
      <Profile className="enemy-profile" img={{pack: "yavuz-pack", photo: "hero-yavuz"}} position={{top: 101, left: 635.8}}/>
      <YourTurn />
      <ManaBox />
      <Board/>
      <SingleGameCard/>
      <EndTurnButton/>
      <ClientProfile />
    </div>
  );
}
