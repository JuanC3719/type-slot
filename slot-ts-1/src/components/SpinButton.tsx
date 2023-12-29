import React from "react";

interface SpinButtonProps {
  onClick: () => void;
}

const SpinButton: React.FC<SpinButtonProps> = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      Spin
    </button>
  );
};

export default SpinButton;
