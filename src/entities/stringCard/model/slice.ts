import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TCard = {
  number: number;
  heading: string;
  description: string;
} | null;

type TSingleCardState = {
  card: TCard;
}

const initialState: TSingleCardState = {
  card: null,
};

const singleCardSlice = createSlice({
  name: 'singleCard',
  initialState,
  reducers: {
    setCard: (state, action: PayloadAction<TCard>) =>  {
      state.card = action.payload;
    },
    clearCard: (state) => {
      state.card = initialState.card;
    },
    findCard: (state, action: PayloadAction<number>) => {
      state.card = state.cards.filter(el => el.number === action.payload);
    },
  },
});

export const name = singleCardSlice.name;
export const actions = singleCardSlice.actions;
export const reducer = singleCardSlice.reducer;
