import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define API URL
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Async thunk to fetch users
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await fetch(API_URL);
  return response.json();
});

// Create user slice
const userSlice = createSlice({
  name: "user",
  initialState: { // kahi par bhi kuch fetch karna hai this will be the process 
    users: [], // araay ki length mention karni hai where you are importing this function 
    loading: false,
    error: null,
  },
  reducers: {}, // kis kis function mai kya kya change karna hai 

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => { // these are the functions as switch case
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
