import "./EndTurnButton.css";
import { useDispatch } from 'react-redux'
import { closeYourTurn } from '../../counter/counterSlice'

export default function EndTurnButton() {
  const dispatch = useDispatch();
  const onEndTurnButtonClick = () => {
    dispatch(closeYourTurn());
  };
  return (
    <div
      className="end-turn-button m-3 bg-yellow-500 rounded-lg flex justify-center items-center"
    >
      <button onClick={onEndTurnButtonClick}>End Turn</button>
    </div>
  );
}
