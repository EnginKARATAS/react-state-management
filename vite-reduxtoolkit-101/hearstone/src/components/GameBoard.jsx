import ManaBox from "./features/ManaBox/ManaBox";
import EndTurnButton from "./features/EndTurnButton/EndTurnButton";
import { useState } from "react";
export default function GameBoard() {
  const [mana, setMana] = useState(0);
  const onManaChange = () => {
    if (mana < 10) setMana(mana + 1);
  };
  return (
    <div className="board">
      <ManaBox mana={mana} />
      <EndTurnButton onManaChange={onManaChange} />
    </div>
  );
}
