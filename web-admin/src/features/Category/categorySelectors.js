
import { createSelector } from 'reselect';

export const selectAllCategories = (state) => state.category.data;

export const selectCategoryStatus = (state) => state.category.status;


export const selectCategoryError = (state) => state.category.error;

export const selectCategoryById = (state, categoryId) =>
  state.category.data.find(category => category._id === categoryId);

export const selectCategoryCount = createSelector(
  [selectAllCategories],
  (categories) => categories.length
);
