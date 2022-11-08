import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  id: null,
};

export const increase = createAction("INCREASE");
export const decrease = createAction("DECREASE");

const countReducer = createReducer(initialState, {
  [increase]: (state) => ({ value: state.value + 1, id: state.id }),
  [decrease]: (state) => ({ value: state.value - 1 }),
});

export default countReducer;
