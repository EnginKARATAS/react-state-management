import "./EndTurnButton.css";
import { useDispatch } from "react-redux";
import { closeYourTurn } from "../../counter/counterSlice";
import { useSelector } from "react-redux";
import { addHealth, syncCardBaseLenght, advanceScenarioMove } from "../../hand/handSlice"; 
export default function EndTurnButton() {
  const isClientTurn = useSelector((state) => state.counter.isClientTurn);
  const cardBaseCount = useSelector((state) => state.hand.cardBaseCount.player);
  const dispatch = useDispatch();


  const onEndTurnButtonClick = () => {
    dispatch(syncCardBaseLenght());
    if (isClientTurn) {
      if (cardBaseCount <= 0) {
        dispatch(addHealth({ value: -1, player: "player" }));
      }
      dispatch(advanceScenarioMove());
      dispatch(closeYourTurn());
    }
  };

  return (
    <button
      style={{
        backgroundImage: isClientTurn
          ? "url('/public/menu/turn/end-turn.png')"
          : "url('/public/menu/turn/enemy-turn.png')",
      }}
      className="end-turn-button m-3"
      onClick={onEndTurnButtonClick}
    ></button>
  );
}
