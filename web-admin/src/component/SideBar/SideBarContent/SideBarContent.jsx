import React, { useState } from 'react';  
import Box from '@mui/material/Box';  
import Collapse from '@mui/material/Collapse';  
import IconButton from '@mui/material/IconButton';  
import List from '@mui/material/List';  
import ListItem from '@mui/material/ListItem';  
import ListItemText from '@mui/material/ListItemText';  
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';  
import ExpandLessIcon from '@mui/icons-material/ExpandLess';  
import CategoryIcon from '@mui/icons-material/Category';  
import { useNavigate } from 'react-router-dom';  

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
];  

function SideBarContent() {  
  const navigate = useNavigate();  
  const [open, setOpen] = useState({});  

  const handleClick = (item) => {  
    if (item.child) {  
      setOpen((prev) => ({  
        ...prev,  
        [item.key]: !prev[item.key],  
      }));  
    } else {  
      navigate(`/home${item.key}`);

    }  
  };  

  return (  
    <Box display='flex' flexDirection='column'>  
      {data.map((item, index) => (  
        <Box onClick={() => handleClick(item)} sx={{ cursor: 'pointer' }} key={index} mb={2}>  
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>  
            <CategoryIcon />  
            <span style={{ marginRight: 8, flex: 1, marginLeft: 10 }}>{item.label}</span>  
            {item.child && (  
              <IconButton style={{ color: open[item.key] ? 'blue' : 'inherit' }}>  
                {open[item.key] ? <ExpandLessIcon /> : <ExpandMoreIcon />}  
              </IconButton>  
            )}  
          </div>  
          <Collapse in={item.child && open[item.key]}>  
            <List>  
              {item.child && item.child.map((itemChild) => (  
                <ListItem  
                  key={itemChild.key}  
                  onClick={(e) => {  
                    e.stopPropagation();  
                    handleClick(itemChild);  
                  }}   
                  sx={{ flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }}  
                >  
                  <ListItemText primary={itemChild.label} />  
                </ListItem>  
              ))}  
            </List>  
          </Collapse>  
        </Box>  
      ))}  
    </Box>  
  );  
}  

export default SideBarContent;