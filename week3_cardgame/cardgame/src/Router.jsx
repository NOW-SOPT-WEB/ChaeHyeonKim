import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GamePage from './pages/GamePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <GamePage />,
    },
]);

export default function Router() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
