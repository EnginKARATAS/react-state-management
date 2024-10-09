import "./EndTurnButton.css";
import { useDispatch } from 'react-redux'
import { closeYourTurn } from '../../counter/counterSlice'
import { useSelector } from 'react-redux'
import { openYourTurn } from "../../counter/counterSlice";
import { increment } from "../../counter/counterSlice";
import { drawCard } from "../../hand/handSlice.ts";
import { useEffect } from 'react'
export default function EndTurnButton() {
  const isClientTurn = useSelector((state) => state.counter.isClientTurn);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isClientTurn === false) {
      const timer = setTimeout(() => {
        dispatch(increment());
        dispatch(drawCard({isEnemy: true}));
        dispatch(drawCard({isEnemy: false}));
        dispatch(openYourTurn());
        
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isClientTurn, dispatch]);

  const onEndTurnButtonClick = () => {
    if (isClientTurn) {
      dispatch(closeYourTurn());
    }
  };

  return (
       <button style={{backgroundImage: isClientTurn ? "url('/public/turn/end-turn.png')" : "url('/public/turn/enemy-turn.png')"}} className="end-turn-button m-3" onClick={onEndTurnButtonClick}></button> 
  )
}
