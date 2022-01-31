import { Link } from 'solid-app-router'

export function Topnav() {
  return (
    <nav class="container mx-auto m-20">
      <ul class="flex gap-10">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/iss">Iss</Link>
        </li>
        <li>
          <Link href="/404">Error</Link>
        </li>
      </ul>
    </nav>
  )
}
