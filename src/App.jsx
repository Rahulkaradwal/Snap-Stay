import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

//Page Components
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Cabins from './pages/Cabins';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Settings from './pages/Settings';
import Booking from './pages/Booking';
import Users from './pages/Users';
import Account from './pages/Account';
import AppLayout from './ui/AppLayout';

// styles
import GlobalStyles from './styles/GlobalStyles';

// react query & tools
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { DarkModeProvider } from './context/DarkModeContext';
import ProtectedRoute from './ui/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

const router = createBrowserRouter([
  {
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: '/bookings',
        element: <Bookings />,
      },
      {
        path: '/bookings/:bookingId',
        element: <Booking />,
      },
      {
        path: '/account',
        element: <Account />,
      },
      {
        path: '/cabins',
        element: <Cabins />,
      },

      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/users',
        element: <Users />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
  return (
    <AuthProvider>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyles />
          <RouterProvider router={router} />
          <Toaster
            position="top-center"
            reverseOrder={true}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: { duration: 5000 },
              style: {
                fontSize: '16px',
                maxWidth: '500px',
                padding: '16px 24px',
                background: 'var(---color-grey-0)',
                color: 'var(--color-grey-700)',
              },
            }}
          />
        </QueryClientProvider>
      </DarkModeProvider>
    </AuthProvider>
  );
}

export default App;
