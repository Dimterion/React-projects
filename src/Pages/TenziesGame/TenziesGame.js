import { useState, useEffect } from "react";
import TenzieElement from "../../components/TenzieElement/TenzieElement";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import "./tenziesGame.css";

function TenziesGame() {
  const [start, setStart] = useState(false);
  const [tenzies, setTenzies] = useState(allNewTenzies());
  const [gameState, setGameState] = useState(false);
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const allHeld = tenzies.every((tenzie) => tenzie.isHeld);
    const firstValue = tenzies[0].value;
    const allSameValue = tenzies.every((tenzie) => tenzie.value === firstValue);

    if (allHeld && allSameValue) {
      setGameState(true);
      clearInterval(intervalId);
    }

    if (timer > 600) {
      setGameState(false);
      setCount(0);
      setStart(false);
      clearInterval(intervalId);
      setTimer(0);
    }
  }, [tenzies, intervalId, timer]);

  function startGame() {
    setStart(true);
    const id = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    setIntervalId(id);
  }

  function generateNewTenzie() {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewTenzies() {
    const tenziesArray = [];
    for (let i = 0; i < 10; i++) {
      tenziesArray.push(generateNewTenzie());
    }
    return tenziesArray;
  }

  const finalArray = tenzies.map((tenzie) => {
    return (
      <TenzieElement
        key={tenzie.id}
        value={start ? tenzie.value : ""}
        isHeld={tenzie.isHeld}
        holdTenzie={start ? () => holdTenzie(tenzie.id) : () => null}
      />
    );
  });

  function holdTenzie(id) {
    setTenzies((prevTenzie) =>
      prevTenzie.map((tenzie) => {
        return tenzie.id === id
          ? { ...tenzie, isHeld: !tenzie.isHeld }
          : tenzie;
      })
    );
  }

  function roll() {
    if (!gameState) {
      setTenzies((prevTenzie) =>
        prevTenzie.map((tenzie) => {
          return tenzie.isHeld ? tenzie : generateNewTenzie();
        })
      );
      setCount((prevCount) => {
        return (prevCount = prevCount + 1);
      });
    } else {
      setGameState(false);
      setTenzies(allNewTenzies());
      setCount(0);
      setStart(false);
      clearInterval(intervalId);
      setTimer(0);
    }
  }

  return (
    <section className="tenzies-section">
      <h1 className="game-title">Tenzies</h1>
      <div className="game-instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
        <br></br>
        <br></br>
        <div>
          <b>Number of rolls:</b> {count}
          <br></br>
          <br></br>
          <b>Timer:</b> {timer}
        </div>
      </div>
      <div className="tenziesElements-container">{finalArray}</div>
      {start ? (
        <button onClick={roll} className="rollDice-btn">
          {gameState ? "New Game" : "Roll"}
        </button>
      ) : (
        <button onClick={startGame} className="rollDice-btn">
          Start
        </button>
      )}
      {gameState && <Confetti />}
    </section>
  );
}

export default TenziesGame;
