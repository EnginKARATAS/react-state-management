import "./EndTurnButton.css";
import { useDispatch } from 'react-redux'
import { increment } from '../../counter/counterSlice'
import { drawCard } from '../../hand/handSlice'

export default function EndTurnButton({ onManaChange }) {
  const dispatch = useDispatch();
  const onEndTurnButtonClick = () => {
    dispatch(increment());
    dispatch(drawCard());
  };
  return (
    <div
      onClick={onManaChange}
      className="end-turn-button m-3 bg-yellow-500 rounded-lg flex justify-center items-center"
    >
      <button onClick={onEndTurnButtonClick}>End Turn</button>
    </div>
  );
}
