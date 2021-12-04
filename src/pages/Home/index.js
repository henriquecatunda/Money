import React, {useEffect, useState} from 'react'
import Menu from '../../components/Menu';
import Card from '../../components/Card';
import { BoxCard, Container } from "./styles";
import pluss from '../../assets/plus.png';
import api from '../../Api/api'

export default function Home() {

    const [dados, setDados] = useState([]);

    const Allget = () => {

        api.get()
            .then((response) => {
                setDados(response.data);
                console.log(response.data);
            }).catch((error) => console.log(error))
    }


    useEffect(() => {

        Allget();

    }, [])


    const Excluir = (id) => {
        // axios.delete(`http://localhost:3001/enterprises/${id}`)
        //   .then((response) => {
        //     Allget();
        //   }).catch((error) => console.log(error))
    }




    return (

        <Container>

            <Menu titleMenu="Money Money" title="adicionar" icon={pluss} />

            <BoxCard>
            {dados && dados.map((dado, i) => (
                <Card key={i} cnpj={dado.cnpj} cpf={dado.cpf} nome={dado.nome} valor={dado.valor} faturamento={dado.faturamento} endereço={`${dado.endereço.logradouro}, ${dado.endereço.bairro} - ${dado.endereço.numero}, ${dado.endereço.cidade}`} email={dado.email} telefone={dado.telefone} onClick={() => Excluir(dado.id)} />
            ))}
            </BoxCard>

        </Container>

    );
}
