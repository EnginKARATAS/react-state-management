import "./ManaBox.css";

export default function ManaBox() {
  return (
    <div className="mana-container flex flex-row gap-5">
      <div className="mana-counter flex justify-center items-center">
        <p className="text-sky-400 px-2">0/10</p>
      </div>
      <div className="mana-cyrstals flex flex-row gap-1 justify-center items-center">
        <img src="/public/mana-bg.png" alt="mana-crystal" className="mana-cyrstal" />
        <img src="/public/mana-bg.png" alt="mana-crystal" className="mana-cyrstal" />
        <img src="/public/mana-bg.png" alt="mana-crystal" className="mana-cyrstal" />
        <img src="/public/mana-bg.png" alt="mana-crystal" className="mana-cyrstal" />
        <img src="/public/mana-bg.png" alt="mana-crystal" className="mana-cyrstal" />
        <img src="/public/mana-bg.png" alt="mana-crystal" className="mana-cyrstal" />
        <img src="/public/mana-bg.png" alt="mana-crystal" className="mana-cyrstal" />
        <img src="/public/mana-bg.png" alt="mana-crystal" className="mana-cyrstal" />
        <img src="/public/mana-bg.png" alt="mana-crystal" className="mana-cyrstal" />
        <img src="/public/mana-bg.png" alt="mana-crystal" className="mana-cyrstal" />
      </div>
    </div>
  );
}
