import Profile from "../Profile";
import Hand from "../../../Card/Hand/Hand";
import "./ClientProfile.css"
export default function ClientProfile() {
  return (
    <div className="absolute client-profile  ">
      <Profile
        className="enemy-profile"
        img={{ pack: "engin-pack", photo: "hero-engin" }}
        position={{ left: 4, bottom: 5 }}
      />
      <Hand className="hand" />
    </div>
  );
}
