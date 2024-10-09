import "./YourTurn.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function YourTurn() {
  const isClientTurn = useSelector((state) => state.counter.isClientTurn);
  const [openPopup, setOpenPopup] = useState(false);
  useEffect(() => {
    if (openPopup) {
      const timer = setTimeout(() => {
        setOpenPopup(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [openPopup]);


  return (
    <div>
      {isClientTurn && (
        <img className="your-turn" src="/public/your-turn.png" alt="" />
      )}
    </div>
  );
}
