import Link from 'next/link'

export default function Menu () {
  return (
    <menu>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/posts'>
            <a>Posts</a>
          </Link>
        </li>
        <li>
          <Link href='/users'>
            <a>Users</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        menu {
          width: 120px;
          padding: 0;
        }
        li {
          list-style-type: none;
        }
      `}</style>
    </menu>
  )
}
