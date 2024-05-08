import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GamePage from './pages/GamePage';
import styled from 'styled-components';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<GamePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
