import React, { useState } from 'react'  
import Box from '@mui/material/Box'  
import Collapse from '@mui/material/Collapse'  
import IconButton from '@mui/material/IconButton'  
import List from '@mui/material/List'  
import ListItem from '@mui/material/ListItem'  
import ListItemText from '@mui/material/ListItemText'  
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'  
import ExpandLessIcon from '@mui/icons-material/ExpandLess'  
import CategoryIcon from '@mui/icons-material/Category'  
import { useNavigate } from 'react-router-dom'  
import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'

const data = [  
  { label: 'Danh mục', key: '/categories' },  
  {   
    label: 'Thông tin theo danh mục',  
    child: [  
      { label: 'Thông tin sản phẩm', key: '/info-by-category' },  
      { label: 'Filter sản phẩm', key: '/filter-by-category' } 
    ]  
  },  
  { label: 'Thương Hiệu', key: '/brands' },  
]  

function SideBarContent() {  
  const theme = useTheme(); 
  const navigate = useNavigate()  
  const [open, setOpen] = useState({})  
  const [selectedItem, setSelectedItem] = useState(null) 

  const handleClick = (item) => {  
    if (item.child) {  
      setOpen((prev) => ({  
        ...prev,  
        [item.key]: !prev[item.key],  
      }))  
    } else {  
      setSelectedItem(item.key)
      navigate(`/home${item.key}`)
    }  
  }  

  return (  
    <Box display='flex' flexDirection='column'>  
      {data.map((item, index) => (  
        <Box theme={theme} onClick={() => handleClick(item)} key={index} mb={2}
          sx={{ cursor: 'pointer',
            '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            borderRadius: 1, 
            transition: 'background-color 0.3s ease', 
          } }} >  
          <Box
            sx={{ display: 'flex', alignItems: 'center', gap: 2, borderRadius: 1,
              height: '50px',  p: '10px', backgroundColor: theme.palette.primary.light,
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: theme.palette.primary.dark, // Màu nền khi hover sáng hơn
              },
            }}
          >
            <CategoryIcon />
            <Typography variant="h4">{item.label}</Typography>
            {item.child && (
              <IconButton sx={{ color: 'white' }}>
                {open[item.key] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            )}
          </Box>
 
          <Collapse 
            sx={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: theme.palette.primary.light, 
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: theme.palette.primary.light, 
                borderRadius: 1,
              },
            }} in={item.child && open[item.key]}>  
            <List sx={{ p: 1}}>  
              {item.child && item.child.map((itemChild) => (  
                <ListItem
                sx={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark, 
                    borderRadius: 1,
                  },
                }}
                onClick={(e) => { e.stopPropagation(); handleClick(itemChild); }}
                key={itemChild.key}
              >
                <ListItemText sx={{ ml: 2 }} primary={itemChild.label} />
              </ListItem> 
              ))}  
            </List>  
          </Collapse>  
        </Box>  
      ))}  
    </Box>  
  )  
}  

export default SideBarContent