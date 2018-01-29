import { Draws, AddDraw } from './pages';
const routes = [
  {
    path: '/draws',
    component: Draws,
    exact: true
  },
  {
    path: '/draw/new',
    component: AddDraw,
    exact: true
  }
];

export default routes;

