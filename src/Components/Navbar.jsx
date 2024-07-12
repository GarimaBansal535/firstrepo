import { Pets } from '@mui/icons-material'
import {MenuItem, AppBar, styled, Toolbar, Typography,Box, InputBase,Badge, Avatar,Menu } from '@mui/material'
import React, { useState } from 'react'
import Notification from '@mui/icons-material/NotificationAdd';
import MailIcon from '@mui/icons-material/Mail';
import img from '../assets/images/hero.jpg'


const StyleToolbar=styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between',
    
    
})

const Search=styled('div')(({theme})=>({
 background:'white',
 width:'400px',
 height:'28px',
 padding:'0 10px',
 borderRadius:theme.shape.borderRadius
}))

const Icons=styled(Box)(({theme})=>({
    // background:'white',
    width:'100px',
    height:'10px',
    display:'flex',
    gap:'20px',
    alignItems:'center'
  
   }))

   const Userbox=styled(Box)(({theme})=>({
    //  background:'white',
    width:'40px',
    height:'10px',
    display:'flex',
    gap:'10px',
    alignItems:'center'
   }))

  //  const AppBarContainer = styled('div')({
  //   width: '100%',
  //   maxWidth: '2500px', // Set your desired max-width here
  //   margin: '0 auto',
  // });

export default function Navbar() {
  const [open,setOpen]=useState(false)
  return (
    // <AppBarContainer>
    <AppBar position='fixed' > 
            <StyleToolbar>
            <Typography variant='h6' className="hiddenPrint hidden-xs">navebar</Typography>
            <Search><InputBase placeholder='Search...'/></Search>
            <Icons><Badge badgeContent={4} color="error">
       <MailIcon  />
     </Badge>
<Badge badgeContent={4} color="error">
  <Notification  />
</Badge>
<Avatar alt="Remy Sharp" src={img} style={{width:30,height:30}} onClick={(e)=>setOpen(true)} />
</Icons>

{/* <Userbox>
<Avatar alt="Remy Sharp" src={img} style={{width:30,height:30}} onClick={(e)=>setOpen(true)}/>
<Typography variant='span'> John</Typography>
</Userbox> */}

{/* <Pets  className="hiddenPrint hidden-sm"/> */}
</StyleToolbar>

<Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={(e)=>setOpen(false)}
        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem > Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
            </AppBar>
           
  )
}
