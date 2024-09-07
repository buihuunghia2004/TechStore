// src/features/category/categoryThunk.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '~/api/api';

export const fetchCategory = createAsyncThunk('category/fetchCategory', async () => {
  try {
    const response = await api.get('api/categories');
    return response.data;
  } catch (error) {
    throw Error(error.response?.data?.message || 'Something went wrong');
  }
});

export const addCategory = createAsyncThunk(
    'category/addCategory',
    async ({ newCategory}) => {
      try {
        const response = await api.post('api/categories', newCategory, {
          headers: {
            'Content-Type': 'multipart/form-data' 
          }
        });
        console.log(response.data);
        return response.data;
      } catch (error) {
        throw Error(error.response?.data?.message || 'Failed to add category');
      }
    }
  );

export const updateCategory = createAsyncThunk('category/updateCategory', async (updatedCategory) => {
  try {
    const response = await api.put(`api/categories/${updatedCategory._id}`, updatedCategory);
    return response.data;
  } catch (error) {
    throw Error(error.response?.data?.message || 'Failed to update category');
  }
});

export const deleteCategory = createAsyncThunk('category/deleteCategory', async (categoryId) => {
  try {
    const response = await api.delete(`api/categories/${categoryId}`);
    return { _id: categoryId };
  } catch (error) {
    throw Error(error.response?.data?.message || 'Failed to delete category');
  }
});
