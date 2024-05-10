import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    height: 15rem;
`;

interface ToggleButtonProps {
    isOpen: boolean;
}

export const ToggleButton = styled.div<ToggleButtonProps>`
    display: flex;
    align-items: center;

    font-size: 16px;
    cursor: pointer;

    span {
        display: inline-block;
        transition: transform 0.3s ease;
        transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    }
`;

interface FormProps {
    isOpen: boolean;
}

export const Form = styled.div<FormProps>`
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    justify-content: start;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    height: auto-fit;
`;
