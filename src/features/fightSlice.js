import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [
    // Nous stockerons nos combattants ici sous forme de tableau
    //  Exemple: 1, { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
    { id: 1, name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30 },
    { id: 2, name: "play2", pv: 100, pvMax: 100, mana: 30, manaMax: 30 },
    { id: 3, name: "play3", pv: 100, pvMax: 100, mana: 30, manaMax: 30 },
    { id: 4, name: "play4", pv: 100, pvMax: 100, mana: 30, manaMax: 30 },

  ],
  monster: {  
    // Notre boss à combattre
    name: "Crypto",
    pv: 400,
    pvMax: 800
  
  },
};

export const fightSlice = createSlice({
  name: "fight",
  initialState,
  reducers: {
    hitMonster: (state, action) => {
      const { damage } = action.payload;
      state.monster.pv = Math.max(0, state.monster.pv - damage);
    },
  
    hitBack: (state, action) => {
      const { damage, playerId } = action.payload;
      // Trouver le joueur par son ID et appliquer les dégâts
      const player = state.players.find(p => p.id === playerId);
      if (player) {
        player.pv = Math.max(0, player.pv - damage);
      }
    },
  },
});

// Export des actions
export const { hitMonster } = fightSlice.actions;
export const {hitBack} = fightSlice.actions;

// Nous exportons le reducer généré automatiquement
export default fightSlice.reducer;