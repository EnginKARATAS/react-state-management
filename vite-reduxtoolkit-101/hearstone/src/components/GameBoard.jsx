import ManaBox from "./features/UI/ManaBox/ManaBox";
import EndTurnButton from "./features/UI/EndTurnButton/EndTurnButton";
import FishOrnament from "./features/UI/FishOrnament";
import Hand from "./features/Card/Hand/Hand";
import YourTurn from "./features/UI/YourTurn/YourTurn"
import SingleGameCard from "./features/Card/GameCard/SingleGameCard";
import Board from "./features/Card/Board/Board";
import Profile from "./features/UI/Profile/Profile";
export default function GameBoard() {
  return (
    <div className="board ">
      <FishOrnament />
      <Profile className="enemy-profile" img={{pack: "yavuz-pack", photo: "hero-yavuz"}} position={{top: 101, left: 635.8}}/>
      <YourTurn />
      <ManaBox />
      <Board/>
      <Hand />
      <EndTurnButton/>
      <Profile className="enemy-profile" img={{pack: "engin-pack", photo: "hero-engin"}} position={{ left: 635, bottom: 175}}/>
      <SingleGameCard/>
    </div>
  );
}
