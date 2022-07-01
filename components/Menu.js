import Link from 'next/link'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

// import InboxIcon from '@mui/icons-material/Inbox';
// import DraftsIcon from '@mui/icons-material/Drafts';

export default function Menu () {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, alighn:"center" }}>
    <nav aria-label="main mailbox folders">
      <List>
        <ListItem disablePadding>

          <ListItemButton href='/'>
      
                      <ListItemText primary="Home" >
              {/* <Link href='/'>
                <a>Home</a>
              </Link> */}
              Home
                     </ListItemText>
       
          </ListItemButton>
        </ListItem>
        <Divider />

        <ListItem >
          <ListItemButton href='/about'>
          
            <ListItemText primary="About us" >
            {/* <Link href='/about'> */}
          About us
        {/* </Link> */}
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider />

        <ListItem >
          <ListItemButton href='/contact'>
          
            <ListItemText primary="contact" >
            {/* <Link href='/about'> */}
            Contact us
        {/* </Link> */}
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider />

        <ListItem >
          <ListItemButton href='/user'>
          
            <ListItemText primary="user" >
            {/* <Link href='/about'> */}
            user
        {/* </Link> */}
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider />

        <ListItem >
          <ListItemButton href='/post'>
          
            <ListItemText primary="post" >
            {/* <Link href='/about'> */}
            post
        {/* </Link> */}
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
 
  </Box>

  )
}
