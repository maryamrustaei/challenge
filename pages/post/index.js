import Link from 'next/link'
import Main from '../../layout/Main'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Posts ({ posts }) {


  return (
    <Main>
      <article>
        <h3>Posts list</h3>

        <TableContainer className='style' component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell align="left">title</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map(({id,title}) => (
                <TableRow
                  key={id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">{id}</TableCell>
                  <TableCell   component="th" scope="row">
                  <Link href={`/post/${id}`}><a>{title}</a></Link>
                  </TableCell>
      
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>


      </article>
  <style>
      {`
      .style{
        height:323px
      }
      `}
    </style>
    </Main>
  
        
  )
}


export async function getServerSideProps () {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const response = await fetch(url)
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}
