import Link from 'next/link'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

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

     <ListItemIcon>     <SvgIcon>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
    </ListItemIcon>
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
          <ListItemIcon>     <WorkspacesIcon/>
    </ListItemIcon>
            <ListItemText primary="About us" >
            {/* <Link href='/about'> */}
          About us
        {/* </Link> */}
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem >
          <ListItemButton href='/post'>
          <ListItemIcon>
                <ArticleIcon fontSize='small'/>
                </ListItemIcon>
            <ListItemText primary="post" >
             
            post
            </ListItemText>
          </ListItemButton>
        </ListItem>

       
        <Divider />

        <ListItem >
          <ListItemButton href='/user'>
          <ListItemIcon><AccessibilityIcon/></ListItemIcon>
            <ListItemText primary="user" >
            {/* <Link href='/about'> */}
            user
        {/* </Link> */}
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem >
          <ListItemButton href='/contact'>
          <ListItemIcon>
            <CallIcon/>
          </ListItemIcon>
            <ListItemText primary="contact" >
            {/* <Link href='/about'> */}
            Contact us
        {/* </Link> */}
            </ListItemText>
          </ListItemButton>
        </ListItem>

        
      </List>
    </nav>
 
  </Box>

  )
}
