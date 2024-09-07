// src/features/category/categorySlice.js

import { createSlice } from '@reduxjs/toolkit';
import { fetchCategory, addCategory, updateCategory, deleteCategory } from './categoryThunk';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addCategorySuccess: (state, action) => {
      state.data.push(action.payload);
    },
    updateCategorySuccess: (state, action) => {
      const index = state.data.findIndex(category => category._id === action.payload._id);
      if (index >= 0) {
        state.data[index] = action.payload;
      }
    },
    deleteCategorySuccess: (state, action) => {
      state.data = state.data.filter(category => category._id !== action.payload._id);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.push(action.payload);
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.data.findIndex(category => category._id === action.payload._id);
        if (index >= 0) {
          state.data[index] = action.payload;
        }
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = state.data.filter(category => category._id !== action.payload._id);
      });
  },
});

export const { addCategorySuccess, updateCategorySuccess, deleteCategorySuccess } = categorySlice.actions;
export default categorySlice.reducer;
