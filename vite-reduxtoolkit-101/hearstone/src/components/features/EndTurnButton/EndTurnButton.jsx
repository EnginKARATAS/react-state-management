import "./EndTurnButton.css";

export default function EndTurnButton({ onManaChange }) {
  return (
    <div
      onClick={onManaChange}
      className="end-turn-button m-3 bg-yellow-500 rounded-lg flex justify-center items-center"
    >
      <button>End Turn</button>
    </div>
  );
}
