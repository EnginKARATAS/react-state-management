import Profile from "../Profile";
import Hand from "../../../Card/Hand/Hand";
import ManaBox from "../../ManaBox/ManaBox";
import "./ClientProfile.css"
import SingleGameCard from "../../../Card/GameCard/SingleGameCard";
export default function ClientProfile({player}) {
  return (
    <div className="absolute client-profile">
      <Profile
        className="enemy-profile"
        img={{ pack: "engin-pack", photo: "hero-engin" }}
        position={{ left: 4, bottom: 220 }}
      />   
      <ManaBox position={{top: -149, left:246}} />
      <Hand position={{bottom: -15, left:-580}} player={player} className="hand"  />
      <SingleGameCard position={{bottom: 280, left:-330}}/>
    </div>
  );
}     