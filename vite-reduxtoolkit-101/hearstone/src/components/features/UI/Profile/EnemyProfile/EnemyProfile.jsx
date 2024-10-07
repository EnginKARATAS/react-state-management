import Profile from "../Profile";
import "./EnemyProfile.css"
export default function EnemyProfile() {
  return <div className="enemy-profile absolute">
      <Profile className="enemy-profile" img={{pack: "yavuz-pack", photo: "hero-yavuz"}} position={{top: 101, left: 635.8}}/>

  </div>;
}
