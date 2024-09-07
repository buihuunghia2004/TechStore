import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Input from '@mui/material/Input';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Button from '@mui/material/Button';
import AddCategory from '../OrderTable/Table/Add';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory, addCategory, updateCategory, deleteCategory } from '~/features/Category/categoryThunk';
import { selectAllCategories, selectCategoryStatus, selectCategoryError } from '~/features/Category/categorySelectors';

export default function OrderTable() {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);
  const status = useSelector(selectCategoryStatus);
  const error = useSelector(selectCategoryError);
  const [newCategory, setNewCategory] = useState({ name: '', imgUrl: '', brands: [] });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCategory());
    }
  }, [status, dispatch]);

  const handleAddCategory = () => {
    dispatch(addCategory(newCategory));
    setNewCategory({ name: '', imgUrl: '', brands: [] }); // Reset form
  };

  const handleUpdateCategory = (category) => {
    const updatedCategory = { ...category, name: 'Updated Name' }; // Modify as needed
    dispatch(updateCategory(updatedCategory));
  };

  const handleDeleteCategory = (id) => {
    dispatch(deleteCategory(id));
  };
  return (
    <Box >
      <Box
        className="SearchAndFilters-mobile"
        sx={{ display: { xs: "flex", sm: "none" }, my: 1, gap: 1 }}
      >
        <Input
          size="sm"
          placeholder="Search"
          startAdornment={<SearchIcon />}
          sx={{ flexGrow: 1 }}
        />
        <IconButton
          size="sm"
          variant="outlined"
          color="neutral"
          onClick={() => setOpen(true)}
        >
          <FilterAltIcon />
        </IconButton>
      </Box>

      <AddCategory />

      <Box
        className="SearchAndFilters-tabletUp"
        sx={{
          borderRadius: "sm",
          py: 2,
          flexWrap: "wrap",
          gap: 1.5,
          display: { xs: "none", sm: "flex" },
          "& > *": { minWidth: { xs: "120px", md: "160px" } },
        }}
      >
        <FormControl sx={{ flex: 1 }} size="sm">
          <FormLabel>Search for order</FormLabel>
          <Input
            size="sm"
            placeholder="Search"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>

      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{textAlign:'center'}}>Số thứ tự</TableCell>
              <TableCell align="center">Tên danh mục</TableCell>
              <TableCell align="center">Hình ảnh</TableCell>
              <TableCell align="center">Thương hiệu</TableCell>
              <TableCell align="center">Thao tác</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(categories) && categories.length > 0 && categories.map((category, index) => (
              <TableRow key={category._id}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{category.name}</TableCell>
                <TableCell align="center">
                  <img src={category.imgUrl} alt={category.name} style={{ width: "100px", height: "auto" }} />
                </TableCell>
                <TableCell align="center">
                  <Typography>{category.brands ? category.brands.length : 0}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                    <Button sx={{ backgroundColor: "blue", color: "white" }}>
                      Sửa
                    </Button>
                    <Button sx={{ backgroundColor: "red", color: "white" }}>
                      Xóa
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
