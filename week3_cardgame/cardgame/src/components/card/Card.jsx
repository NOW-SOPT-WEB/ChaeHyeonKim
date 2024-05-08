import React, { useState } from 'react';
import * as C from './CardStyle';

export default function Card({ img, open }) {
    return (
        <C.CardWrapper $isOpen={open}>
            <C.FrontCard $img={img}></C.FrontCard>
            <C.BackCard></C.BackCard>
        </C.CardWrapper>
    );
}
