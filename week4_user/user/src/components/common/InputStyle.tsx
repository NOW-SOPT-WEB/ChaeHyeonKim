import styled from 'styled-components';

// interface ToggleButtonProps {
//     isOpen: boolean;
// }

export const Input = styled.input`
    border-radius: 0.5rem;

    &:focus {
        border: 1px solid ${({ theme }) => theme.colors.pink};
    }
`;
