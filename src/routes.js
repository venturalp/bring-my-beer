// @flow
import Home from './pages/home'
import Results from './pages/results'
import Erro404 from './pages/erro404'

export default [
  {
    component: Home,
    path: '/',
    exact: true,
  },
  {
    component: Results,
    path: '/results',
    exact: true,
  },
  {
    component: Erro404,
    path: '*',
  },
]
