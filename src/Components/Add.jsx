import React from "react";
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import { Box, Typography,Avatar,TextField, Stack } from "@mui/material";
import { styled } from "@mui/material/styles"; 
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DateRangeIcon from '@mui/icons-material/DateRange';

import shahid from '../assets/images/shahid.jpg'

const Stylemodal=styled(Modal)({
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
})
const UserBox=styled(Box)({
    display:'flex',
    alignItems:'center',
    gap:"10px",
    marginBottom:"20px"
})

export default function Add(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(<>  
      <Tooltip title="Add" onClick={handleOpen} style={{position:'fixed',bottom:17 }}>
        
        <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
      </Tooltip>
      <Stylemodal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={{width: 400, 
            height: 280, 
            padding: '20px',
            background:"background.default",
             color:"text.primary",
              borderRadius:10}} >
<Typography variant="h6" style={{color:'grey',textAlign:'center'}}>Create Post</Typography>
        
<UserBox>
        <Avatar alt="shahid" src={shahid} style={{width:30,height:30}}/>
        <Typography variant="body1" style={{fontWeight:500,color:'grey',textAlign:'center', marginLeft: 2 }}>Shahid Kapoor</Typography>
        
        </UserBox>
        <TextField
          id="standard-multiline-static"
          
          multiline
          rows={3}
          placeholder="What's on your Mind"
          variant="standard"
          style={{width:'100%'}}
        />
        <Stack direction='row' style={{ marginTop:7, marginBottom:10,gap:7}}>
            <EmojiEmotionsIcon color="primary"/>
            <ImageIcon color="secondary"/>
            <VideoCameraBackIcon color="success"/>
            <PersonAddAlt1Icon color="error"/>
        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="Basic button group">
  <Button style={{width:'1000px'}}>Post</Button>
  <Button><DateRangeIcon/></Button>
 
</ButtonGroup>
        </Box>
        
      </Stylemodal>

      
  </>)
}