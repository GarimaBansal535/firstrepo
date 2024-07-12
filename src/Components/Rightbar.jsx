import React from 'react'
import { Box, Typography,Avatar,AvatarGroup, withStyles } from '@mui/material';
import sarukh from '../assets/images/sarukh.png'
import rashmika from '../assets/images/rashmika.jpg'
import shahid from '../assets/images/shahid.jpg'
import sonali from '../assets/images/sonali.jpg'
import tara from '../assets/images/tara.png'
import road from '../assets/images/road.jpg'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import flower from '../assets/images/flower.jpg'

import watermillon from '../assets/images/watermillon.jpg'
import leave from '../assets/images/leave.jpg'
import honey from '../assets/images/hoeny.jpeg'
import maggie from '../assets/images/maggie.jpeg'
import football from '../assets/images/football.jpg'
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default  function Rightbar () {
  return (
    <div style={{flex:1,display:{xs:'none',sm:'block'}}}>
      <Box position='fixed' style={{marginTop:'15px',width:330}}>
    <Typography variant='h6' style={{fontWeight:100}}>Online Friends</Typography>
    <AvatarGroup max={7}>
      <Avatar alt="Sarukh" src={sarukh} />
      <Avatar alt="Rashmika" src={rashmika} />
      <Avatar alt="Shahid" src={shahid} />
      <Avatar alt="Sonali" src={sonali} />
      <Avatar alt="Tara" src={tara} />
      <Avatar alt="Rashmika" src={rashmika} />
      <Avatar alt="Sonali" src={sonali} />
      <Avatar alt="Tara" src={tara} />
    </AvatarGroup>

    <Typography variant='h6' style={{fontWeight:100}}>Latest Photos</Typography>

    <ImageList sx={{ width: 360, height:200 }} cols={3} rowHeight={97}>

    <ImageListItem>
      <img
        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={flower}
        alt={flower}
        loading="lazy"
      />
    </ImageListItem>
    

    <ImageListItem>
      <img
        //  srcSet={road}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={leave}
        alt={leave}
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem>
      <img
        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={honey}
        alt={honey}
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem>
      <img
        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={maggie}
        alt={maggie}
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem>
      <img
        //  srcSet={road}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={football}
        alt={football}
        loading="lazy"
      />
    </ImageListItem>
    
    <ImageListItem>
      <img
        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={watermillon}
        alt={watermillon}
        loading="lazy"
      />
    </ImageListItem>
</ImageList>

<Typography variant='h6' style={{fontWeight:100}}>Latest Conversation</Typography>
      
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="sarukh" src={sarukh}/>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="shahid" src={shahid} />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Shahid
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Rasmika" src={rashmika} />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Rashmika
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
      </div>
  )
}
