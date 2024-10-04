import "./EndTurnButton.css";
import { useDispatch } from 'react-redux'
import { increment } from '../../counter/counterSlice'

export default function EndTurnButton({ onManaChange }) {
  const dispatch = useDispatch();
  const onEndTurnButtonClick = () => {
    dispatch(increment());
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
