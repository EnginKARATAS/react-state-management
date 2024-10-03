import "./FishOrnament.css";

export default function FishOrnament() {
  return (
    <div className="static">
      <img src="/public/fish.png" alt="fish" width="200px" className="left-fish absolute bottom-0" />
      <img src="/public/fish.png" alt="fish" width="200px" className="right-fish absolute" />
    </div>
  );
}
