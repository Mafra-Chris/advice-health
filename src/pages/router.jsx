import { createBrowserRouter } from 'react-router-dom';
import CreateSchedules from './CreateSchedules';
import Dashboard from './Dashboard';
import ViewSchedules from './ViewSchedules';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard></Dashboard>,
  },
  {
    path: '/criar-agendamento',
    element: <CreateSchedules></CreateSchedules>,
  },
  {
    path: '/agendamentos',
    element: <ViewSchedules></ViewSchedules>,
  },
]);
