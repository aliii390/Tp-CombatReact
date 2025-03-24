import { useState, useEffect } from 'react';
import './Message.css';



// pour afficher les message 

function CombatMessage({ message, duration = 2000 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="combat-message">
      {message}
    </div>
  );
}

export default CombatMessage;