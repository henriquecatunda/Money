import React from 'react';
import Delete from '../../assets/delete.png'
import Toedit from '../../assets/Toedit.png'
import { ContainerCard, Title,Buttons, SubTile, BoxText, BoxTag, Box } from "./styles"
import { Link} from 'react-router-dom';

export default function Card(props) {

    const { cnpj, cpf, nome, valor, faturamento, endereço, email, telefone, idEditar, dadosProps,onClick} = props;

    return (
        <ContainerCard>
            <BoxText>
                <Title>{cnpj} </Title>
                <Buttons>

                <Link to={{ pathname:`/editar/${idEditar}`,  state:{dadosProps},}}>
                    <button > <img src={Toedit} alt="Logo" /> </button>
                </Link>

                    <button onClick={onClick}> <img src={Delete} alt="Logo" /> </button>
                </Buttons>
            </BoxText>

            <BoxTag>
                <Box>
                    <SubTile> {valor}  </SubTile>
                </Box>
                <Box>
                    <SubTile> {faturamento}  </SubTile>
                </Box>
            </BoxTag>
            <BoxTag>
                <Box>
                    <SubTile> {nome}  </SubTile>
                </Box>
                <Box>
                    <SubTile> {cpf}  </SubTile>
                </Box>
            </BoxTag>
            <BoxTag>
                <Box>
                    <SubTile> {email}  </SubTile>
                </Box>
                <Box>
                    <SubTile> {telefone}  </SubTile>
                </Box>
            </BoxTag>
            <BoxTag>
               
                    <SubTile> {endereço}  </SubTile>
               
            </BoxTag>

        </ContainerCard>
    )

}
