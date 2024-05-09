import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: calc(50vh - 10rem);
    right: 50rem;
    left: 50rem;

    height: 20rem;

    border: none;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 1rem 3rem rgb(0 0 0 / 10%);
    border-radius: 1rem;
`;
