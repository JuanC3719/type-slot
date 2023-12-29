import React from "react";

interface ModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ setShowModal }) => {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Game Rules and Odds</h2>
        <p className="row-text">Here are the rules and odds of the game:</p>
        <p className="row-text">
          In this slot game, there are several different symbols with
          corresponding values. The symbols include a red apple "🍎" (valued at
          10), purple grapes "🍇" (valued at 20), a juicy orange "🍊" (valued at
          30), a tangy lemon "🍋" (valued at 40), a ripe watermelon "🍉" (valued
          at 50), sweet strawberries "🍓" (valued at 60), plump cherries "🍒"
          (valued at 70), a fuzzy peach "🍑" (valued at 80), and a tropical
          pineapple "🍍" (valued at 90). When you spin the reels, landing on
          certain combinations of these symbols will result in different
          payouts, depending on the odds of getting each combination.
        </p>
        <ul className="row-text">
          <li>
            Probability of getting three in a row of the same symbol: 0.037 or
            approximately 3.7%
          </li>
          <li>
            Probability of getting a diagonal win: 0.037 or approximately 3.7%
          </li>
          <li>
            Probability of getting a zig-zag win: 0.111 or approximately 11.1%
          </li>
          <li>Probability of losing: 0.815 or approximately 81.5%</li>
        </ul>
        <button onClick={handleCloseModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
