import styled from 'styled-components';

export const ContainerCard = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-end;
    align-items: center;
    box-sizing: border-box;
    background-color:  #FFFFFF;
    margin: auto;
    padding: 25px;
    box-shadow: 0px 2px 4px rgba(48, 46, 69, 0.06);
    border-radius: 8px;
    margin-bottom: 32px;
    flex-direction: column;

    @media (max-width: 425px){
       flex-direction: column;
       width: 90%;
    }
`;

export const Title = styled.div`
   font-style: normal;
    font-weight: bold;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: #302E45;
    margin-right: 18px;
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    color: #302E45;
`;

export const SubTile = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #5C5E6D;
`;

export const BoxText = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 21px;

    @media (max-width: 425px){
       width: 80%;
    }
`;

export const BoxTag = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 425px){
    width: 100%;
    height: 70px;
    margin-top: 20px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    }
`;

export const Box = styled.div`
    width: 50%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;
    flex-direction: row;
`;