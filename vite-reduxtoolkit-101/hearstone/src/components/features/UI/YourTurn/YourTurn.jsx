import "./YourTurn.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { openYourTurn } from "../../counter/counterSlice";
import { increment } from "../../counter/counterSlice";
import { drawCard } from "../../hand/handSlice.ts";

export default function YourTurn() {
  const isClientTurn = useSelector((state) => state.counter.isClientTurn);
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  useEffect(() => {
    if (openPopup) {
      const timer = setTimeout(() => {
        setOpenPopup(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [openPopup]);

  useEffect(() => {
    if (!isClientTurn) {
      const timer = setTimeout(() => {
        dispatch(increment());
        dispatch(drawCard());
        dispatch(openYourTurn());
        setOpenPopup(true);
      }, 1);

      return () => clearTimeout(timer);
    }
  }, [isClientTurn, dispatch]);
  return (
    <div>
      {openPopup && (
        <img className="your-turn" src="/public/your-turn.png" alt="" />
      )}
    </div>
  );
}
