import { Router } from 'solid-app-router'
import { render } from 'solid-js/web'
import 'virtual:windi.css'
import { App } from './app'

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.body
)
