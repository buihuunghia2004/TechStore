import React, { useState } from 'react';
import { Button, Box, Collapse, InputBase, IconButton, Paper } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Add from '@mui/icons-material/Add';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '~/features/Category/categoryThunk';
import { selectToken } from '~/features/Auth/authSelectors';

export default function AddCategory() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const [showForm, setShowForm] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'categoryName') setCategoryName(value);
    if (name === 'image') {
      const file = files?.[0];
      if (file) {
        setImageFile(file);
        setPreviewUrl(URL.createObjectURL(file));
      }
    }
  };
  
  const handleConfirm = () => {
    if (categoryName.trim() && imageFile) {
      const newCategory = new FormData();
      newCategory.append('name', categoryName);
      newCategory.append('image', imageFile);
      
      dispatch(addCategory({ newCategory }))
        .unwrap()
        .then(() => {
          setShowForm(false);
          setCategoryName('');
          setPreviewUrl(null);
          setImageFile(null);
        })
        .catch((error) => {
          console.error("Error details:", error);
          console.error("Error response data:", error.response?.data);
        });
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setCategoryName('');
    setPreviewUrl(null);
    setImageFile(null);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 200, minWidth: 100 }}>
      {!showForm ? (
        <Button onClick={() => setShowForm(true)} color='success' variant='contained' startIcon={<Add />}>
          Add Category
        </Button>
      ) : (
        <Collapse in={showForm} timeout={500}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2}}>
              <Paper component='form' sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 200, backgroundColor: 'white' }}>
                <InputBase
                  name='categoryName'
                  sx={{ ml: 1, flex: 1 }}
                  placeholder='Category Name'
                  onChange={handleChange}
                  value={categoryName}
                />
                <IconButton sx={{ p: '10px' }} color='primary' aria-label='upload' component='label'>
                  <CloudUploadIcon />
                  <input type='file' hidden name='image' accept='image/*' onChange={handleChange} />
                </IconButton>
              </Paper>
            </Box>
            {previewUrl && (
              <Box
                component='img'
                src={previewUrl}
                alt='Category Preview'
                sx={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'cover',
                  marginTop: '10px',
                  borderRadius: '8px',
                }}
              />
            )}
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                onClick={handleConfirm}
                color='primary'
                variant={categoryName.trim() && imageFile ? 'contained' : 'outlined'}
                startIcon={<Check />}
                disabled={!categoryName.trim() || !imageFile}
              >
                Confirm
              </Button>
          
              <IconButton onClick={handleCancel} color='error'><Close /></IconButton>
            </Box>
          </Box>
        </Collapse>
      )}
    </Box>
  );
}
