import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    padding: 0 150px;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    background-color: #FFFFFF;

    @media (max-width: 425px){
       padding: 8px 20px;
       flex-direction: column;
       height: 100px;
       justify-content: space-evenly;
    }
`;

export const Title = styled.div`
    
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    display: flex;
    align-items: center;
    color: #12AFCB;

    @media (max-width: 425px){
       font-size: 14px;
    }
`;

export const Box = styled.div`
    
    margin-right: 20px;
    display: flex;
`;