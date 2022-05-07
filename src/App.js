import { useState } from "react";
import "./App.css";

const cardImages = [
  { src: "/img/angular-1.png" },
  { src: "/img/csharp-1.png" },
  { src: "/img/css-1.png" },
  { src: "/img/html-1.png" },
  { src: "/img/react-1.png" },
  { src: "/img/tailwind-1.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards);
    setTurns(0)
  };

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Tech Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="front card" style={{width: '130px', height: '130px'}}/>
              <img className="back" src="/img/cover.png" alt="" style={{width: '130px', height: '130px'}} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
