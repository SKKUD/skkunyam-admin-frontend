import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Box, Button, TextField, Select, MenuItem, FormControl, InputLabel, IconButton, Divider, FormControlLabel, Switch } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import addImg from '../../images/addImg.png';

const MenuPopup = ({ open, onClose, actionType="add" }) => {
  const [seasonMenu, setSeasonMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('COFFEE'); 
  const [menuName, setMenuName] = useState('');
  const [options, setOptions] = useState(['']);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleAddOption = () => {
    setOptions([...options, '']);
  };
  
  const handleDeleteOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };  

  const renderTextField = (placeholder, state, setState) => (
    <TextField
      label=""
      placeholder={placeholder}
      fullWidth
      inputProps={{ style: { fontSize: 13, padding: '8px 15px' } }}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset, &:hover fieldset, &.Mui-focused fieldset': {
            borderColor: 'rgba(255, 205, 77, 1)',
          },
        },
        backgroundColor: 'rgba(255, 251, 229, 1)'
      }}
      value={state}
      onChange={(e) => setState(e.target.value)}
    />
  );
  

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm">
      <DialogTitle sx={{ p: 5, pb: 3, textAlign: 'center', fontWeight: 600, fontSize: 28 }}>
        {actionType === "add" ? "메뉴 추가하기" : "메뉴 관리하기"}
      </DialogTitle>
      <DialogContent sx={{ p: 6 }}>
        <Box sx={{ textAlign: 'center' }}>
          <input
            type="file"
            accept="image/*"
            id="image-upload"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
          <label htmlFor="image-upload">
            <Button
              variant="outlined"
              sx={{ border: 0, '&:hover': { border: 0 }, width: 160, height: 160, background: `url(${selectedImage || addImg}) center/cover no-repeat` }}
              component="span"
            />
          </label>
          <Typography sx={{ m: 1, color: 'rgba(117, 117, 117, 1)', fontSize: '14px', fontWeight: 400 }}>클릭하여 음료 이미지 업로드</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography sx={{ color: 'rgba(70, 70, 70, 1)', fontSize: '16px', fontWeight: 700 }}>시즌메뉴</Typography>
          <Switch 
            color="warning"
            sx={{
                '& .MuiSwitch-thumb': {
                color: 'rgba(255, 205, 77, 1)',
                },
            }}
            checked={seasonMenu} onChange={() => setSeasonMenu(!seasonMenu)} 
          />
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box>
          <Typography sx={{ color: 'rgba(70, 70, 70, 1)', fontSize: '16px', fontWeight: 700, my: 1 }}>카테고리 선택</Typography>
          <FormControl fullWidth sx={{ mb: 1 }}>
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              inputProps={{ id: 'category-select' }}
              sx={{
                '& .MuiSelect-select.MuiSelect-select': {
                  padding: '6px 15px',
                },
              }}
            >
              <MenuItem value="" disabled>
                카테고리를 선택하세요
              </MenuItem>
              <MenuItem value="COFFEE">COFFEE</MenuItem>
              <MenuItem value="TEA">TEA</MenuItem>
              <MenuItem value="SMOOTHIE">SMOOTHIE</MenuItem>
              <MenuItem value="JUICE">JUICE</MenuItem>
            </Select>
          </FormControl>
          <Typography sx={{ color: 'rgba(70, 70, 70, 1)', fontSize: '16px', fontWeight: 700, my: 1 }}>메뉴이름</Typography>
          {renderTextField("메뉴 이름을 입력해주세요", menuName, setMenuName)} 
        </Box>
        <Box sx={{m: '15px 0'}}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <Typography sx={{ color: 'rgba(70, 70, 70, 1)', fontSize: '16px', fontWeight: 700 }}>옵션추가</Typography>
            <button style={{border: '1px solid rgba(177, 177, 177, 1)', borderRadius: '18px', padding: '2px 8px', color: 'rgba(117, 117, 117, 1)', fontSize: 12, backgroundColor: 'rgba(238, 238, 238, 1)'}} onClick={handleAddOption}>
              + 옵션 추가하기
            </button>
          </div>
          {options.map((option, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center'}}>
              {renderTextField("옵션을 입력하세요", option, (value) => {
                const newOptions = [...options];
                newOptions[index] = value;
                setOptions(newOptions);
              })}
              <IconButton onClick={() => handleDeleteOption(index)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
        </Box>
      </DialogContent>
      <DialogActions sx={{ display: 'flex', justifyContent: 'space-between', p: 0 }}>
        <Button
          fullWidth
          sx={{ backgroundColor: 'rgba(255, 205, 77, 1)', color: 'rgba(70, 70, 70, 1)', borderRadius: 0, p: '12px', fontWeight: 700, fontSize: 16 }}
        >
          메뉴등록하기
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MenuPopup;
