import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Add from '@mui/icons-material/Add';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';
import styled from '@mui/system/styled';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '~/features/Category/categoryThunk';
import { selectToken } from '~/features/Auth/authSelectors';

const ImgPreview = styled('img')({
  width: '200px',
  height: '200px',
  objectFit: 'cover',
  marginTop: '10px',
  borderRadius: '8px',
});

export default function AddCategory() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const [showForm, setShowForm] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // Tạo URL xem trước cho ảnh
    }
  };

  const handleConfirm = () => {
    if (categoryName.trim() && imageFile) {
      const newCategory = new FormData();
      newCategory.append('name', categoryName);
      newCategory.append('image', imageFile);

      dispatch(addCategory({ newCategory, token }))
        .unwrap()
        .then(() => {
          setShowForm(false);
          setCategoryName('');
          setPreviewUrl(null);
          setImageFile(null);
        })
        .catch((error) => {
          console.error('Failed to add category:', error);
        });
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setCategoryName('');
    setPreviewUrl(null);
    setImageFile(null);
  };

  const isFormValid = categoryName.trim() !== '' && imageFile !== null;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 200, minWidth: 100 }}>
      {!showForm && (
        <Button onClick={() => setShowForm(true)} color='success' variant='contained' startIcon={<Add />}>
          Add Category
        </Button>
      )}
      <Collapse in={showForm} timeout={500}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
            <Paper component='form' sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 200 }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder='Category Name'
                onChange={(e) => setCategoryName(e.target.value)}
                value={categoryName}
              />
              <IconButton sx={{ p: '10px' }} color='primary' aria-label='upload' component='label'>
                <CloudUploadIcon />
                <input type='file' hidden accept='image/*' onChange={handleImageUpload} />
              </IconButton>
            </Paper>
          </Box>
          {previewUrl && <ImgPreview src={previewUrl} alt='Category Preview' />}
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              onClick={handleConfirm}
              color='primary'
              variant={isFormValid ? 'contained' : 'outlined'}
              startIcon={<Check />}
              disabled={!isFormValid}
            >
              Confirm
            </Button>
            <IconButton onClick={handleCancel} color='error'><Close /></IconButton>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
}
