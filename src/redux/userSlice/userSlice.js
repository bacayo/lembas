// import { createSlice } from '@reduxjs/toolkit';
// import { signInWithEmailAndPassword, loginAsync } from '../../api';

// const userSlice = createSlice({
//   name: 'userSlice',
//   initialState: {
//     isLoading: false,
//     error: null,
//     user: [],
//   },
//   extraReducers: builder => {
//     // builder.addCase(signInWithEmailAndPassword.pending, state => {
//     //   state.isLoading = true;
//     // });
//     // builder.addCase(signInWithEmailAndPassword.fulfilled, (state, action) => {
//     //   state.isLoading = false;
//     //   state.user = action.payload;
//     // });
//     // builder.addCase(signInWithEmailAndPassword.rejected, (state, action) => {
//     //   state.isLoading = false;
//     //   state.error = action.error.message;
//     // });
//     builder.addCase(loginAsync.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.user = action.payload;
//     });
//   },
// });

// export default userSlice.reducer;
