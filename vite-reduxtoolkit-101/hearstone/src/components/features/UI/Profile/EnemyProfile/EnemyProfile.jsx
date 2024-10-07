import Profile from "../Profile";
import "./EnemyProfile.css";
import ManaBox from "../../ManaBox/ManaBox";
import Hand from "../../../Card/Hand/Hand";
export default function EnemyProfile() {
  return (
    <div className="absolute enemy-profile">
      <Profile
        img={{ pack: "yavuz-pack", photo: "hero-yavuz" }}
        position={{ top: 153, left: 6 }}
      />
      <ManaBox  position={{ top: 108, left: 218 }} player="enemy" />
      <Hand  player="enemy" position={{top: 12, left: -193}}></Hand>
    </div>
  );
}
