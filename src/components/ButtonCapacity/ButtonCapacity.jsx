import "./ButtonCapacity.css";
import { useDispatch } from "react-redux"
import { hitMonster } from "../../features/fightSlice";
import {hitBack} from "../../features/fightSlice";

function ButtonCapacity({player}) {
  const dispatch = useDispatch();

  const fight = () => {
// dispatch l'action
    dispatch(hitMonster({ damage: 5, playerId: player.id }));
    console.log(`🗡️ Attaque lancée par ${player.name}!`);
    
  // sa c'est pour la contre attaque du monstre
    if (player.pv > 0) {
      setTimeout(() => {
        dispatch(hitBack({ damage: 5, playerId: player.id }));
        console.log(` Le monstre contre-attaque ${player.name}!`);
      }, 500);
    }
  };

  // const back = () =>{
  //    dispatch(hitBack(5));
  //    console.log("le joueur est toucher");
     
  // }

  return (

    <>
    

    <button
      type="button"
      onClick={fight}
      className="btn btn-success material-tooltip-main "
    >
      hit
      <i className="fas fa-bomb"></i> 5<i className="fas fa-fire-alt"></i> - 5
    </button>





    </>
   
  );
}

export default ButtonCapacity;
