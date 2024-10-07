import Profile from "../Profile";
import "./EnemyProfile.css";
import ManaBox from "../../ManaBox/ManaBox";
import Hand from "../../../Card/Hand/Hand";
export default function EnemyProfile() {
  return (
    <div className="enemy-profile absolute">
      <Hand player="enemy"></Hand>
      <Profile
        className="enemy-profile absolute"
        img={{ pack: "yavuz-pack", photo: "hero-yavuz" }}
        position={{ top: -58, left: 5 }}
      />
      <ManaBox className="absolute" position={{ top: 108, left: 218 }} player="enemy" />
    </div>
  );
}
