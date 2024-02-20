import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TCard = {
  number: number | string;
  heading: string;
  description: string;
};

type TSingleCardState = {
  card: TCard;
}

const initialState: TSingleCardState = {
  card: {
    number: 0,
    heading: '',
    description: '',
  },
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
  },
});

export const name = singleCardSlice.name;
export const actions = singleCardSlice.actions;
export const reducer = singleCardSlice.reducer;
