import { useState } from 'react';

const useAuxDisplay = () => {
  const [showHelp, setShowHelp] = useState(false);
  const [showInventory, setShowInventory] = useState(false);

  const toggleHelp = () => {
    setShowHelp((prev) => !prev);
    setShowInventory(false);
  };

  const toggleInventory = () => {
    setShowInventory((prev) => !prev);
    setShowHelp(false);
  };

  const hideAuxDisplay = () => {
    setShowHelp(false);
    setShowInventory(false);
  };

  return { showHelp, showInventory, toggleHelp, toggleInventory, hideAuxDisplay };
};

export default useAuxDisplay;
