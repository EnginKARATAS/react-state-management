import "./EndTurnButton.css";
import { useDispatch } from 'react-redux'
import { closeYourTurn } from '../../counter/counterSlice'
import { useSelector } from 'react-redux'
export default function EndTurnButton() {
  const dispatch = useDispatch();
  const isClientTurn = useSelector((state) => state.counter.isClientTurn);
  const onEndTurnButtonClick = () => {
    if (isClientTurn) {
      dispatch(closeYourTurn());
    }
  };

  return (
       <button style={{backgroundImage: isClientTurn ? "url('/public/turn/end-turn.png')" : "url('/public/turn/enemy-turn.png')"}} className="end-turn-button m-3" onClick={onEndTurnButtonClick}></button> 
  )
}
