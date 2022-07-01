import axios from 'axios'
import Link from 'next/link'
import Main from '../../layout/Main'

export default function Users ({ users }) {
  return (
    <Main>
        <article>
          <h3>Users List</h3>
            <ol>
              {users.map(user => (
                <Link key={user.id} href={`/user/${user.id}`}>
                  <a>
                    <li> {user.name}</li>
                  </a>
                </Link>
              ))}
            </ol>
        </article>
    </Main>
  )
}

export async function getStaticProps () {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const { data: users } = await axios(url)

  return {
    props: { users },
    revalidate: 5
  }
}
