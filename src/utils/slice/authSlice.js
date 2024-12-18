import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,   
  role: null,   
  name: null,    
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, role, name } = action.payload;
      state.token = token;
      state.role = role;
      state.name = name;  
      state.isAuthenticated = !!token;      
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.name = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
