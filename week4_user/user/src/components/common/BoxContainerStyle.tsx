import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    position: absolute;
    top: 30vh;
    right: 30vw;
    left: 30vw;

    height: 40vh;
    padding: 2rem 5rem;

    border: none;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 1rem 3rem rgb(0 0 0 / 10%);
    border-radius: 1rem;
`;
