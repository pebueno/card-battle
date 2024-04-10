import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../app/store'
// import { Monster } from '../components/common/types'

export interface MonsterState {
  selectedMonsterId: string | null;
  // allMonsters: Monster[]
}

const initialState: MonsterState = {
selectedMonsterId: null,
// allMonsters: []
};

export const cardSlice = createSlice({
name: "monster",
initialState,
reducers: {
  selectMonster(state, action: PayloadAction<string>) {
    state.selectedMonsterId = action.payload;
  },
  resetSelectedMonster(state) {
    state.selectedMonsterId = null;
  },
  // setAllMonsters(state, action: PayloadAction<Monster[]>) {
  //     state.allMonsters = action.payload;
  // }
},
});

export const { selectMonster, resetSelectedMonster
  // , setAllMonsters 
} = cardSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default cardSlice.reducer;