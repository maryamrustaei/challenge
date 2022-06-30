import axios from 'axios'
import Main from '../../layout/Main'

export default function User ({ user = {} }) {
  return (
    <Main>
     <article>
     <h3>{user.name}</h3>
      <p>{user.email}</p>
     </article>
    </Main>
  )
}

export async function getStaticPaths () {

  const url = 'https://jsonplaceholder.typicode.com/users'
  const { data: users } = await axios(url)

  users.length = 5

  const paths = users.map(user => ({ params: { id: `${user.id}` } }))

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps ({ params: { id } }) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`
  const { data: user } = await axios(url)

  return {
    props: { user },
    revalidate: 5
  }
}
