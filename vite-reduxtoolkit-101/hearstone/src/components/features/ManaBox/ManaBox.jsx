import "./ManaBox.css";

export default function ManaBox() {
  return (
    <div className="mana-container flex flex-row">
        <p className="text-sky-400">0/10</p>
        <img
          src="/public/mana-bg.png"
          width="50"
          alt="mana-crystal"
        />
    </div>
  );
}
