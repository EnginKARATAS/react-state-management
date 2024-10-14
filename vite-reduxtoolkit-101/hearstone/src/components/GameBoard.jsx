import EndTurnButton from "./features/UI/EndTurnButton/EndTurnButton";
import FishOrnament from "./features/UI/FishOrnament";
import YourTurn from "./features/UI/YourTurn/YourTurn";
import ClientProfile from "./features/UI/Profile/ClientProfile/ClientProfile";
import EnemyProfile from "./features/UI/Profile/EnemyProfile/EnemyProfile";
import { useEffect, useState } from "react";
import LoadingScreen from "./features/UI/GameManagement/LoadingScreen";
import { useSelector } from "react-redux";
import EndGameScreen from "./features/UI/GameManagement/EndGameScreen";
import ContactScreen from "./features/UI/GameManagement/ContactScreen";
export default function GameBoard() {
  const [loading, setLoading] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [contactScreen, setContactScreen] = useState(false);
  const clientHealth = useSelector((state) => state.hand.profile.player.health);
  const enemyHealth = useSelector((state) => state.hand.profile.enemy.health);
  useEffect(() => {
    const loadCards = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2222));
      setLoading(false);
    };

    loadCards();
  }, []);

  useEffect(() => {
    console.log("health", clientHealth, enemyHealth);
    if (clientHealth <= 0 || enemyHealth <= 0) {
      setGameOver(true);
      setTimeout(() => {
        setContactScreen(true);
      }, 4000);
    }
  }, [clientHealth, enemyHealth]);

  if (loading) {
    return <LoadingScreen />;
  }
  if (gameOver) {
    return <EndGameScreen />;
  }
  if (contactScreen) {
    return <ContactScreen />;
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
