import "./EndTurnButton.css";
import { useDispatch } from "react-redux";
import { closeYourTurn } from "../../counter/counterSlice";
import { useSelector } from "react-redux";
import { addHealth } from "../../hand/handSlice"; 
export default function EndTurnButton() {
  const isClientTurn = useSelector((state) => state.counter.isClientTurn);
  const cardBaseCount = useSelector((state) => state.hand.cardBaseCount.player);
  const dispatch = useDispatch();


  const onEndTurnButtonClick = () => {
    if (isClientTurn) {
      if (cardBaseCount <= 0) {
        dispatch(addHealth({ value: -1, player: "player" }));
      }
      dispatch(closeYourTurn());
    }
  };

  return (
    <button
      style={{
        backgroundImage: isClientTurn
          ? "url('/public/turn/end-turn.png')"
          : "url('/public/turn/enemy-turn.png')",
      }}
      className="end-turn-button m-3"
      onClick={onEndTurnButtonClick}
    ></button>
  );
}
