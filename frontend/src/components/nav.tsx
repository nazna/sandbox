import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <header className="container">
      <nav>
        <ul>
          <li>
            <strong>example-monorepo-app</strong>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
