import styled from 'styled-components';

export const Input = styled.input`
    border-radius: 1rem;

    &:focus {
        border: 1px solid ${({ theme }) => theme.colors.pink};
    }
`;
