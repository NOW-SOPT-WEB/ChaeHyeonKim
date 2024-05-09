import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <Signup />,
    },
    {
        path: '/main/:id',
        element: <Main />,
    },
]);

export default function Router() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
