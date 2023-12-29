import React from "react";
import "../pages/pagesCss/Slots.css";

interface ReelsProps {
  symbols: string[];
  spinning: boolean;
}

const Reels: React.FC<ReelsProps> = ({ symbols, spinning }) => {
  return (
    <div className="reels-container">
      <div className={`slot-machine${spinning ? " spin" : ""}`}>
        <div className="reels">
          {symbols.map((symbol, index) => (
            <div key={index} className="symbol">
              {symbol}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reels;
