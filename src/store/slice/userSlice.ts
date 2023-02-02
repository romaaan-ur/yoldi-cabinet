import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IApiKey, IProfile } from "@/types";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../store";

type State = {
  token: string;
  data: null | IProfile;
};

const initialState: State = {
  token: "",
  data: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserToken(state, { payload }: PayloadAction<IApiKey>) {
      state.token = payload.value;
    },
    updateUser(state, action: PayloadAction<IProfile>) {
      state.data = action.payload;
    },
    signOutUser(state) {
      state.data = null;
      state.token = "";
    },
  },
  extraReducers(builder) {
    builder.addCase<typeof HYDRATE, PayloadAction<AppState, typeof HYDRATE>>(
      HYDRATE,
      (state, { payload }) => ({ ...state, ...payload.user })
    );
  },
});

export const { setUserToken, updateUser, signOutUser } = userSlice.actions;

export const getUser = (state:AppState) => state[userSlice.name].data;

export default userSlice.reducer;
