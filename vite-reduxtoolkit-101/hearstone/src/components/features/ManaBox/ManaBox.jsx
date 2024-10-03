import "./ManaBox.css";

export default function ManaBox() {
  return (
    <div className="mana-container">
      <div className="mana-counter">
         <p className="text-white">0/10</p>
        </div>
        <div className="mana-crystals">
         <img src="../../../assets/mana-bg.png" alt="mana-crystal" />
        </div>
      
    </div>
  );
}
