import { useEffect, useState } from "react";
import { GameBoard } from "./components/GameBoard";
import { GameOver } from "./components/GameOver";
import game from "./game/game";

export const MemoryGame = () => {
  const [gameOver, setGameOver] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(game.createCardsFromTechs());
  }, []);

  function restart() {
    setGameOver(false);
    game.clearCards();
    setCards(game.createCardsFromTechs());
  }

  function handleFlip(card) {
    game.flipCard(
      card.id,
      () => {
        // GameOverCallback
        setGameOver(true);
      },
      () => {
        // noMatchCallback
        setCards([...game.cards]);
      }
    );
    setCards([...game.cards]);
  }

  return (
    <div>
      <GameBoard handleFlip={handleFlip} cards={cards} />
      <GameOver handleRestart={restart} show={gameOver} />
    </div>
  );
};
