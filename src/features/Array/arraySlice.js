import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  left_value: ["Apple","Grape","Strawberry","Cherry","Plum"],
  right_value:["Watermelon","Banana","Peach"]
};

// slice利用　　action.type,reducerの定義
export const arrayMoveSlice = createSlice({
  name: 'arrayMove',
  initialState,
  reducers: {
    to_right: (state) => {
      // 非破壊的に変更してる
      const newLeftArr = [...state.left_value];
      const movingValue = newLeftArr.pop();
      state.left_value = newLeftArr;
      if(movingValue!==undefined){
        state.right_value = state.right_value.concat(movingValue);
      }
    },
    to_left: (state) => {
      const newRightArr = [...state.right_value];
      const movingValue = newRightArr.pop();
      state.right_value = newRightArr;
      if(movingValue!==undefined){
        state.left_value = state.left_value.concat(movingValue);
      }
    }
  }
});

export const { to_right, to_left } = arrayMoveSlice.actions;

export const selectLeftArray = (state) => state.left_value;
export const selectRightArray = (state) => state.right_value;

export default arrayMoveSlice.reducer;
