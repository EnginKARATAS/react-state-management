import Profile from "../Profile";
import Hand from "../../../Card/Hand/Hand";
import ManaBox from "../../ManaBox/ManaBox";
import "./ClientProfile.css"
import SingleGameCard from "../../../Card/GameCard/SingleGameCard";
export default function ClientProfile({player}) {
  return (
    <div className="absolute client-profile  ">
      <Profile
        className="enemy-profile"
        img={{ pack: "engin-pack", photo: "hero-engin" }}
        position={{ left: 4, bottom: 5 }}
      />   
      <ManaBox position={{top: 176, left:246}} />
      <Hand player={player} className="hand" />
      <SingleGameCard/>
    </div>
  );
}
