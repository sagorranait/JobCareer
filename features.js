import { createSlice } from '@reduxjs/toolkit'

const initialState = { user: null }

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    storeUser: (state, action) => {
      const { 
        _id,
        type, 
        email, 
        connects, 
        username,
        imgURL
      } = action.payload?.user;
      
	  	state.user = { id: _id, type, email, connects, username, imgURL };
    }
  }
});

export const { storeUser } = userSlice.actions;
export const getUser = state => state.users.user;
export default userSlice.reducer;