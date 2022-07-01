// import Link from 'next/link'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import CallIcon from '@mui/icons-material/Call';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import WorkspacesIcon from '@mui/icons-material/Workspaces';

export default function Menu () {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, alighn:"center" }}>
    <nav aria-label="main mailbox folders">
      <List>

        <ListItem disablePadding>
          <ListItemButton href='/'>
                      <ListItemIcon><HomeIcon/></ListItemIcon>
                      <ListItemText className='ListItemText' primary="Home" >
                                    {/* <Link href='/'>
                                      <a>Home</a>
                                    </Link> */}
                          Home
                </ListItemText>
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem disablePadding>
          <ListItemButton href='/about'>
          <ListItemIcon><WorkspacesIcon/></ListItemIcon>
            <ListItemText className='ListItemText' primary="About us">About us</ListItemText>
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem disablePadding>
          <ListItemButton href='/post'>
            <ListItemIcon><ArticleIcon fontSize='small'/></ListItemIcon>
            <ListItemText className='ListItemText' primary="post" >post</ListItemText>
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem  disablePadding>
          <ListItemButton href='/user'>
          <ListItemIcon><AccessibilityIcon/></ListItemIcon>
            <ListItemText className='ListItemText' primary="user" >user</ListItemText>
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem disablePadding>
          <ListItemButton href='/contact'>
          <ListItemIcon>
            <CallIcon/>
          </ListItemIcon>
            <ListItemText className='ListItemText' primary="contact" >
            Contact us
            </ListItemText>
          </ListItemButton>
        </ListItem>
        
      </List>
    </nav> 
    <style>
      {`
      .ListItemText{
        width:80px
      }
      `}
    </style>
  </Box>
  )
}


