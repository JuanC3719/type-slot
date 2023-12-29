import React from "react";

interface BalanceProps {
  balance: number;
}

const Balance: React.FC<BalanceProps> = ({ balance }) => {
  return <p className="balance">Balance: {balance}</p>;
};

export default Balance;
