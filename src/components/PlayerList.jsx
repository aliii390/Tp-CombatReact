import { useState } from "react";
import PlayerCard from "./PlayerCard";
import { useSelector } from "react-redux";

function PlayerList() {
  const joueur = useSelector((state) => state.fight.players);
  // const [players] = useState({
  //   1: { name:"test", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
  //   2: { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
  //   3: { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
  //   4: { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 },
  // });

  return (
    <div className="row">
      {Object.values(joueur).map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
}

export default PlayerList;
