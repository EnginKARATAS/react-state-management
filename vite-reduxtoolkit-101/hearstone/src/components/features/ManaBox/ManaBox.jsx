import "./ManaBox.css";
import { useSelector } from 'react-redux'

export default function ManaBox() {
  const mana = useSelector((state) => state.counter.value)
  return (
    <div className="mana-container flex flex-row gap-5">
      <div className="mana-counter flex justify-center items-center">
        <p className="text-sky-400 px-2">{mana}/10</p>
      </div>
      <div className="mana-cyrstals flex flex-row gap-1 justify-center items-center">
        {
        mana > 0 &&
          Array.from({ length: mana }).map((v, i) => (
            <img
              src="/public/mana-bg.png"
              alt="mana-crystal"
              className="mana-cyrstal"
              key={i}
            />
          ))
        }
      </div>
    </div>
  );
}
