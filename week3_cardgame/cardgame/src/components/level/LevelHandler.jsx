import React from 'react';
import LevelBtn from './LevelBtn';
import styled from 'styled-components';
import LEVEL from './../../constants/Level';

export default function LevelHandler({ level, updateLevel }) {
    return (
        <BtnWrapper>
            {LEVEL.map((setting) => (
                <LevelBtn
                    key={setting.label}
                    isActive={level === setting.level}
                    onClick={() => updateLevel(setting.level)}>
                    {setting.label}
                </LevelBtn>
            ))}
        </BtnWrapper>
    );
}

export const BtnWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    margin: 1rem;
`;
