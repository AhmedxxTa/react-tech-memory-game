import React from "react";
import "./SingleCard.css";
import coverImg from '../img/cover.png';

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="front card" />
        <img
          className="back"
          src={coverImg}
          onClick={handleClick}
          alt="back card"
        />
      </div>
    </div>
  );
};

export default SingleCard;
