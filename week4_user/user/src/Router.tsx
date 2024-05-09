import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';
import Mypage from './pages/Mypage';

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
        path: '/main/:memberId',
        element: <Main />,
    },
    {
        path: '/mypage/:memberId',
        element: <Mypage />,
    },
]);

export default function Router() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
