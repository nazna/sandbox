import { useRoutes } from 'solid-app-router'
import { Topnav } from './components/topnav'
import { routes } from './routes'

export function App() {
  const Routing = useRoutes(routes)

  return (
    <>
      <Topnav />
      <Routing />
    </>
  )
}
