import type { RouteDefinition } from 'solid-app-router'
import { lazy } from 'solid-js'
import Home from './pages/home'

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/iss',
    component: lazy(() => import('./pages/iss')),
  },
  {
    path: '**',
    component: lazy(() => import('./pages/error')),
  },
]
