import { Card, Container,BoxCard3,BoxCard2,Title,BoxButton } from "./styles";
import Input from '../../components/Input'
import Menu from '../../components/Menu';
import pluss from '../../assets/plus.png'
import Button from "../../components/Button";

export default function Editar() {


    const Atualizar = () => {

    }

    return (

        <Container>

            <Menu titleMenu="Atualizar empréstimos" title="adicionar" icon={pluss} />

            <Card >

                <Title> Empresa </Title>

                <Input title="CNPJ" />

                <BoxCard2>
                    <Input title="Valor solicitado" />
                    <Input title="Faturamento anual" />
                </BoxCard2>

                <Title> Indereço empresa </Title>


                    <Input title="Logradouro" />

                <BoxCard3>
                    <Input title="Cidade" />
                    <Input title="Numero" />
                    <Input title="Bairro" />
                </BoxCard3>


                <Title> Solicitante </Title>

                <BoxCard2>
                    <Input title="Nome completo" />
                    <Input title="CPF" />
                    <Input title="E-mail" />
                    <Input title="Telefone" />
                </BoxCard2>

                <BoxButton>
                    <Button title="Atualizar" onClick={Atualizar} />
                </BoxButton>

            </Card>  
        </Container>

    );
}
