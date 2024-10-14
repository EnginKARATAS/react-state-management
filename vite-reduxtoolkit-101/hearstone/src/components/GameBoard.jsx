import EndTurnButton from "./features/UI/EndTurnButton/EndTurnButton";
import FishOrnament from "./features/UI/FishOrnament";
import YourTurn from "./features/UI/YourTurn/YourTurn";
import ClientProfile from "./features/UI/Profile/ClientProfile/ClientProfile";
import EnemyProfile from "./features/UI/Profile/EnemyProfile/EnemyProfile";
import { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen';

export default function GameBoard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCards = async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      setLoading(false);
    };

    loadCards();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="board ">
      <FishOrnament />
      <EnemyProfile player="enemy" />
      <YourTurn />
      <EndTurnButton />
      <ClientProfile player="player" />
    </div>
  );
}
