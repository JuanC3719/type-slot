import { useState } from "react";
import { Reels, Balance, SpinButton, Result, Modal } from "../components";
import "../pages/pagesCss/Slots.css";

interface SymbolValues {
  "🍎": number;
  "🍇": number;
  "🍊": number;
  "🍋": number;
  "🍉": number;
  "🍓": number;
  "🍒": number;
  "🍑": number;
  "🍍": number;
}

const Slots: React.FC = () => {
  const symbolValues: SymbolValues = {
    "🍎": 10,
    "🍇": 20,
    "🍊": 30,
    "🍋": 40,
    "🍉": 50,
    "🍓": 60,
    "🍒": 70,
    "🍑": 80,
    "🍍": 90,
  };

  const [symbols, setSymbols] = useState<Array<keyof SymbolValues>>([
    "🍎",
    "🍇",
    "🍊",
    "🍋",
    "🍉",
    "🍓",
    "🍒",
    "🍑",
    "🍍",
  ]);

  const [balance, setBalance] = useState<number>(100);
  const [spinning, setSpinning] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [lastWin, setLastWin] = useState<boolean | null>(null);
  const [lastWinnings, setLastWinnings] = useState<number | null>(null);

  const handleModalClick = () => {
    setShowModal(true);
  };

  const handleSpinClick = () => {
    setSpinning(true);

    const spinInterval = setInterval(() => {
      setSymbols((prevSymbols) => {
        const newSymbol = prevSymbols.shift();
        prevSymbols.push(newSymbol!);
        return [...prevSymbols];
      });
    }, 100);

    setTimeout(() => {
      clearInterval(spinInterval);
      const newReels = Array.from({ length: 9 }, () =>
        getSymbolWithProbability()
      );
      setSymbols(newReels);

      const winningCombinations: number[][] = [
        // Horizontal wins
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical wins
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal wins
        [0, 4, 8],
        [2, 4, 6],
      ];

      let win = false;
      let winnings = 0;

      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (newReels[a] === newReels[b] && newReels[a] === newReels[c]) {
          const symbol = newReels[a];
          const value = symbolValues[symbol];
          win = true;
          winnings = value;
          setBalance((prevBalance) => prevBalance + value);
          console.log("Winning combination", combination);
          break;
        }
      }

      if (!win) {
        setBalance((prevBalance) => prevBalance - 1);
      }

      setLastWin(win);
      setLastWinnings(winnings);
      setSpinning(false);
    }, Math.floor(Math.random() * 3000) + 1000);
  };

  const getSymbolWithProbability = (): keyof SymbolValues => {
    const symbols: Array<keyof SymbolValues> = [
      "🍎",
      "🍇",
      "🍊",
      "🍋",
      "🍉",
      "🍓",
      "🍒",
      "🍑",
      "🍍",
    ];
    const probabilities: number[] = [0.05, 0.1, 0.2, 0.3, 0.45, 0.6, 0.75, 0.9];

    const random = Math.random();
    let symbol: keyof SymbolValues = "🍍"; // Default symbol if no match

    probabilities.some((prob, index) => {
      if (random < prob) {
        symbol = symbols[index];
        return true; // Exit the loop when a match is found
      }
      return false;
    });

    return symbol;
  };

  return (
    <div className="container">
      <Reels spinning={spinning} symbols={symbols} />
      <Balance balance={balance} />
      <SpinButton onClick={handleSpinClick} />
      <Result lastWin={lastWin} lastWinnings={lastWinnings} />
      <div>
        <button onClick={handleModalClick}>Show Rules and Odds</button>
        {showModal && <Modal setShowModal={setShowModal} />}
      </div>
    </div>
  );
};

export default Slots;
