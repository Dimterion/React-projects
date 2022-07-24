import { useState } from "react";
import TenzieElement from "../../components/TenzieElement/TenzieElement";
import { nanoid } from "nanoid";
import "./tenziesGame.css";

function TenziesGame() {
  const [tenzies, setTenzie] = useState(allNewTenzies());

  function allNewTenzies() {
    const tenziesArray = [];
    for (let i = 0; i < 10; i++) {
      tenziesArray.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid(),
      });
    }
    return tenziesArray;
  }

  const finalArray = tenzies.map((tenzie) => {
    return (
      <TenzieElement
        key={tenzie.id}
        value={tenzie.value}
        isHeld={tenzie.isHeld}
      />
    );
  });

  function roll() {
    setTenzie(allNewTenzies());
  }

  return (
    <section className="tenzies-section">
      <div className="tenziesElements-container">{finalArray}</div>
      <button onClick={roll} className="rollDice-btn">
        Roll
      </button>
    </section>
  );
}

export default TenziesGame;
