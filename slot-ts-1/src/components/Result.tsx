import React from "react";

interface ResultProps {
  lastWin: boolean | null;
  lastWinnings: number | null;
}

const Result: React.FC<ResultProps> = ({ lastWin, lastWinnings }) => {
  return (
    <div className="balance" id="result">
      {lastWin !== null
        ? lastWin
          ? `You won ${lastWinnings}!`
          : "Try again!"
        : null}
    </div>
  );
};

export default Result;
