import styled from 'styled-components';

export const ModalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50rem;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 1rem;
    font-size: 3rem;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
`;

export const ConfirmBtn = styled.button`
    padding: 1rem 2rem;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.pink};
    border: none;
    border-radius: 1rem;
    color: white;
    cursor: pointer;
`;
