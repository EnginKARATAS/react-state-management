import "./YourTurn.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function YourTurn() {
  const isClientTurn = useSelector((state) => state.counter.isClientTurn);
  const [openPopup, setOpenPopup] = useState(false);
  useEffect(() => {
    if (isClientTurn === true) {
      setOpenPopup(true);
      const timer = setTimeout(() => {
        console.log("openPopup", openPopup);
        setOpenPopup(false);
        
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isClientTurn]);


  return (
    <div>
      {openPopup && (
        <img className="your-turn" src="/public/your-turn.png" alt="" />
      )}
    </div>
  );
}
