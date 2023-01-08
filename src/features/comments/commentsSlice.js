import { createSlice } from '@reduxjs/toolkit';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    items: []
  },
  reducers: {
    addComment(state, action) {
      state.items.push(action.payload);
    },
    removeComment(state, action) {
      state.items = state.items.filter(comment => comment.id !== action.payload);
    },
    fetchCommentsSuccess(state, action) {
      state.items = action.payload;
    }
  }
});

export const { addComment, removeComment, fetchCommentsSuccess } = commentsSlice.actions;

export default commentsSlice.reducer;