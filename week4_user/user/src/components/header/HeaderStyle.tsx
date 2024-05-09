import { styled } from 'styled-components';

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 15rem;

    background-color: ${({ theme }) => theme.colors.pink};
    gap: 1rem;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    font-size: 5rem;

    text-align: center;
`;
