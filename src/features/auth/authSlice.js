import { createSlice } from "@reduxjs/toolkit";

// Initial state for the authentication slice
const initialState = {
  token: undefined,
  user: undefined,
  id: undefined,
  user_data: undefined,
  form_data: undefined,
};

// Create a slice of the Redux store for authentication
const authSlice = createSlice({
  name: "auth",  
  initialState,
  reducers: { 
    userLoggedIn: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.id = action.payload.id;
    },
 
    userLoggedOut: (state) => {
      state.token = undefined;
      state.user = undefined;
      state.id = undefined;
      state.user_data = null;
    },  
    setUserData: (state, action) => {
      state.user_data = action.payload;
    },
    setFormData: (state, action) => {
      state.form_data = action.payload;
    },
    
  },
});
 
export const {
  userLoggedIn,
  userLoggedOut,
  setUserData,
  setFormData,
} = authSlice.actions;
 
export default authSlice.reducer;
