import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-bottom: 20px;
`;

export const BoxCard = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    margin: auto;
    margin: 40px 0;
    gap: 30px;
    row-gap: 20px;
    margin: auto;
    padding: 40px 150px;
`;
