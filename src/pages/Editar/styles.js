import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    justify-content: center;
    margin: auto;
    
`;

export const Card = styled.div`
    width: 60%;
    height: auto;
    display: flex;
    box-sizing: border-box;
    background-color:  #FFFFFF;
    margin: 40px  auto;
    box-shadow: 0px 2px 4px rgba(48, 46, 69, 0.06);
    border-radius: 8px;
    flex-direction: column;
    align-items: flex-start;
    padding: 45px 55px;
`;


export const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    justify-content: flex-start;
    color: #302E45;
    margin-top: 15px;
`;


export const BoxCard2 = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    margin: auto;
    margin: 40px 0;
    column-gap: 30px;
    margin: auto;
`;

export const BoxCard3 = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    margin: auto;
    margin: 40px 0;
    column-gap: 30px;
    margin: auto;
   
`;

export const BoxButton = styled.div`
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px auto;
`;