import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define API URL
const API_URL = "https://jsonplaceholder.typicode.com/posts/1";

// Async thunk to fetch users
export const fetchPost = createAsyncThunk("Post/fetchPost", async () => {
    const response = await fetch(API_URL);
    return response.json();
  });

  const UserFunction = createSlice({
    name: "post",
    initialState: { // kahi par bhi kuch fetch karna hai this will be the process 
      posts: [], // araay ki length mention karni hai where you are importing this function 
      loading: false,
      error: null,
    },
    reducers: {}, // kis kis function mai kya kya change karna hai 
  
    extraReducers: (builder) => {
      builder
        .addCase(fetchPost.pending, (state) => { // these are the functions as switch case
          state.loading = true;
        })
        .addCase(fetchPost.fulfilled, (state, action) => {
          state.loading = false;
          state.posts = action.payload;
        })
        .addCase(fetchPost.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export default UserFunction.reducer; // defualt keyword lagaya hai to kisi bhiname se export kar sakt ehain 