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
import Signup from './pages/Signup';

// styles
import GlobalStyles from './styles/GlobalStyles';

// react query & tools
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { DarkModeProvider } from './context/DarkModeContext';
import { AuthProvider } from './context/AuthContext';
import ProtectRoute from './features/authentication/ProtectRoute';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: (
          <ProtectRoute>
            <Dashboard />
          </ProtectRoute>
        ),
      },
      {
        path: '/bookings',
        element: (
          <ProtectRoute>
            <Bookings />
          </ProtectRoute>
        ),
      },
      {
        path: '/bookings/:bookingId',
        element: (
          <ProtectRoute>
            <Booking />
          </ProtectRoute>
        ),
      },
      {
        path: '/account',
        element: (
          <ProtectRoute>
            <Account />
          </ProtectRoute>
        ),
      },
      {
        path: '/cabins',
        element: (
          <ProtectRoute>
            <Cabins />
          </ProtectRoute>
        ),
      },

      {
        path: '/settings',
        element: (
          <ProtectRoute>
            <Settings />
          </ProtectRoute>
        ),
      },
      {
        path: '/users',
        element: (
          <ProtectRoute>
            <Users />
          </ProtectRoute>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
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
