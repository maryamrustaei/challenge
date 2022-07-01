import Main from '../../layout/Main'
import axios from 'axios'

export default function Post ({ post }) {
  return (
    <Main>
      <article>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </article>
    </Main>
  )
}



export async function getServerSideProps ({ params: {id} }) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`
  const { data: post } = await axios(url)

  return {
    props: { post }
  }
}
