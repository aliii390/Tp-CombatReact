import "./ButtonCapacity.css";
import { useDispatch } from "react-redux";
import { hitMonster, hitBack } from "../../features/fightSlice";
import { useState } from "react";
import CombatMessage from "../Message/Message.jsx";

function ButtonCapacity({player}) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState(null);

  const fight = () => {
    // sa c'est l'attque du joueir
    dispatch(hitMonster({ damage: 5, playerId: player.id }));
    setMessage(`🗡️ ${player.name} attaque le monstre !`);
    
    // sa c la contre attaque du monstre
    if (player.pv > 0) {
      setTimeout(() => {
        dispatch(hitBack({ damage: 5, playerId: player.id }));
        setMessage(`💀 Le monstre contre-attaque ${player.name} !`);
      }, 500);
    }


    // faut trouve la solution pour que quand l'user n'a plus de vi sa lui affiche un message comme quoi il a plus de vie
    if(player.pv === 0){
      setTimeout(() => {
        dispatch(hitBack({damage:0, playerId: player.id }))
        setMessage(`heeee ${player.name} tu na plus de vie`)
      }, 500)
     
    }
  };

  return (
    <>
      {message && <CombatMessage message={message} />}
      <button
        type="button"
        onClick={fight}
        className="btn btn-success material-tooltip-main"
      >
        hit
        <i className="fas fa-bomb"></i> 5<i className="fas fa-fire-alt"></i> - 5
      </button>
    </>
  );
}

export default ButtonCapacity;