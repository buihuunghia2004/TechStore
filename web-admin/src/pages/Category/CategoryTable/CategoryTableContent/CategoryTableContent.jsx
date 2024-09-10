import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory, deleteCategory } from '~/features/Category/categoryThunk'
import { selectAllCategories, selectCategoryStatus } from '~/features/Category/categorySelectors'

export default function CategoryTableContent() {  
  const dispatch = useDispatch()
  const categories = useSelector(selectAllCategories)
  const status = useSelector(selectCategoryStatus)

  useEffect(() => {  
    if (status === 'idle') {  
      dispatch(fetchCategory())
    }  
  }, [status, dispatch])

  const handleDelete = (id) => {  
    dispatch(deleteCategory(id))
  }

  return (  
    <TableContainer sx={{backgroundColor:'white'}} component={Paper}>  
      <Table sx={{ minWidth: 650 }}>  
        <TableHead>  
          <TableRow>  
            <TableCell sx={{ fontSize: '0.9705rem', fontWeight: 'bold' }} align="center">Số thứ tự</TableCell>  
            <TableCell sx={{ fontSize: '0.9705rem', fontWeight: 'bold' }} align="center">Tên danh mục</TableCell>  
            <TableCell sx={{ fontSize: '0.9705rem', fontWeight: 'bold' }}  align="center">Hình ảnh</TableCell>  
            <TableCell sx={{ fontSize: '0.9705rem', fontWeight: 'bold' }}  align="center">Thương hiệu</TableCell>  
            <TableCell sx={{ fontSize: '0.9705rem', fontWeight: 'bold' }}  align="center">Thao tác</TableCell>  
          </TableRow>  
        </TableHead>  
        <TableBody>  
          {categories.map((category, index) => (  
            <TableRow key={category._id}>  
              <TableCell sx={{ fontSize: '0.8705rem',fontFamily:'Roboto', color:'black' }} align="center">{index + 1}</TableCell>  
              <TableCell sx={{ fontSize: '0.8705rem',fontFamily:'Roboto', color:'black' }} align="center">{category.name}</TableCell>  
              <TableCell sx={{ fontSize: '0.8705rem',fontFamily:'Roboto', color:'black' }} align="center">  
                <img src={category.imgUrl} alt={category.name} style={{ width: '100px', height: 'auto' }} />  
              </TableCell>  
              <TableCell sx={{ fontSize: '0.8705rem',fontFamily:'Roboto', color:'black' }} align="center">  
                {category.brands?.length || 0}
              </TableCell>  
              <TableCell align="center">  
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>  
                  <Button sx={{ backgroundColor: 'primary', color: 'white' }}>Sửa</Button>  
                  <Button  
                    sx={{ backgroundColor: 'red', color: 'white',
                      '&:hover': { backgroundColor: '#C40C0C' }
                     }}  
                    onClick={() => handleDelete(category._id)}  
                  >  
                    Xóa  
                  </Button>  
                </Box>  
              </TableCell>  
            </TableRow>  
          ))}  
        </TableBody>  
      </Table>  
    </TableContainer>  
  )
}