import styled from 'styled-components';

export const DesignButton = styled.button`
    width: 10rem;
    height: 5rem;
    margin: 1rem;

    border: none;
    border-radius: 1rem;

    background-color: ${({ theme }) => theme.colors.pink};
    font-size: 1.5rem;

    &:hover {
        background-color: ${({ theme }) => theme.colors.darkpink};
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
`;
