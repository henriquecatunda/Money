import React, { useState } from 'react';
import { Card, Container, BoxCard3, BoxCard2, Title, BoxButton } from "./styles";
import Input from '../../components/Input'
import Menu from '../../components/Menu';
import pluss from '../../assets/plus.png'
import Button from "../../components/Button";
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import api from '../../Api/api'
import { useLocation } from "react-router"

export default function Editar() {

    const location = useLocation();
    const {dadosProps} = (location.state);
    console.log('props',dadosProps);

    const history = useHistory();
    const { id } = useParams();
    const [dados, setDados] = useState([]);

    const [cnpj, setCnpj] = useState(dadosProps.cnpj);
    const [cpf, setCpf] = useState(dadosProps.cpf);
    const [nome, setNome] = useState(dadosProps.nome);
    const [valor, setValor] = useState(dadosProps.valor);
    const [faturamento, setFaturamento] = useState(dadosProps.faturamento);
    const [email, setEmail] = useState(dadosProps.email);
    const [telefone, setTelefone] = useState(dadosProps.telefone);

    const [logradouro, setLogradouro] = useState(dadosProps.endereço.logradouro);
    const [cidade, setcidade] = useState(dadosProps.endereço.cidade);
    const [numero, setNumero] = useState(dadosProps.endereço.numero);
    const [bairro, setBairro] = useState(dadosProps.endereço.bairro);
    const [message, setMessage] = useState(dadosProps.endereço.message);


    const cpfvalidar = (cpf) => {
        cpf = cpf.replace('.',"") 
        cpf = cpf.replace('.',"") 
        cpf = cpf.replace('-', '');
        cpf = cpf.split('');
        
        var v1 = 0;
        var v2 = 0;
        var aux = false;
        
        console.log("cpf", cpf)

        if(cpf.length != 11) return false;
       
        var aux = false;
        
        for (var i = 1; cpf.length > i; i++) {
            if (cpf[i - 1] != cpf[i]) {
                aux = true;   
            }
        } 
        
        if (aux == false) {
            return false; 
        } 

        for (var i = 0, p = 10; (cpf.length - 2) > i; i++, p--) {
            v1 += cpf[i] * p; 
        } 
        
        v1 = ((v1 * 10) % 11);
        
        if (v1 == 10) {
            v1 = 0; 
        }
        
        if (v1 != cpf[9]) {
            return false; 
        }

        for (var i = 0, p = 11; (cpf.length - 1) > i; i++, p--) {
                v2 += cpf[i] * p; 
            } 
            
        v2 = ((v2 * 10) % 11);
            
        if (v2 == 10) {
                v2 = 0; 
        }
            
        if (v2 != cpf[10]) {
                return false; 
        }else {   
            return true; 
        }
    }

    const cnpjvalidar = (cnpj) => {
        console.log("cnpj", cnpj)
        cnpj = cnpj.replace('.',"");
        cnpj = cnpj.replace('.',""); 
        cnpj = cnpj.replace('-', '');
        cnpj = cnpj.replace('/', ''); 
        cnpj = cnpj.split('');

        var v1 = 0;
        var v2 = 0;
        var aux = false;

        if(cnpj.length != 14) return false;

        for (var i = 1; cnpj.length > i; i++) { 
            if (cnpj[i - 1] != cnpj[i]) {  
                aux = true;   
            } 
        } 
        
        if (aux == false) {  
            return false; 
        }
        
        for (var i = 0, p1 = 5, p2 = 13; (cnpj.length - 2) > i; i++, p1--, p2--) {
            if (p1 >= 2) {  
                v1 += cnpj[i] * p1;  
            } else {  
                v1 += cnpj[i] * p2;  
            } 
        } 
        
        v1 = (v1 % 11);
        
        if (v1 < 2) { 
            v1 = 0; 
        } else { 
            v1 = (11 - v1); 
        } 
        
        if (v1 != cnpj[12]) {  
            return false; 
        } 
        
        for (var i = 0, p1 = 6, p2 = 14; (cnpj.length - 1) > i; i++, p1--, p2--) { 
            if (p1 >= 2) {  
                v2 += cnpj[i] * p1;  
            } else {   
                v2 += cnpj[i] * p2; 
            } 
        }
        
        v2 = (v2 % 11); 
        
        if (v2 < 2) {  
            v2 = 0;
        } else { 
            v2 = (11 - v2); 
        } 
        
        if (v2 != cnpj[13]) {   
            return false; 
        } else {  
            return true; 
        }
    }

    const emailValidar = (email) => {

        if(typeof email !== "undefined"){
            let lastAtPos = email.lastIndexOf('@');
            let lastDotPos = email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
                return false;
            }else{
                return true;
            }
        }  
        return false;
    }


    const Atualizar = () => {

        cpfvalidar(cpf);
        cnpjvalidar(cnpj);
        emailValidar(email);

        if (cnpj.length === 0 || cpf.length === 0 || nome.length === 0 || valor.length === 0 || faturamento.length === 0 || email.length === 0
            || telefone.length === 0 || logradouro.length === 0 || cidade.length === 0 || numero.length === 0) {
            setMessage(
                'Informar todos os campos do formulámario!'
            );
        } else {

            if(cpfvalidar(cpf)){
                if(cnpjvalidar(cnpj)){
                    if(emailValidar(email)){
                        const empre = {

                            cpf: cpf,
                            cnpj: cnpj,
                            nome: nome,
                            valor: valor,
                            faturamento: faturamento,
                            telefone: telefone,
                            email: email,
                            endereço: {
                                logradouro: logradouro,
                                cidade: cidade,
                                numero: numero,
                                bairro: bairro,
                            }

                        };

                        api.patch(`/${id}`, empre)
                            .then((response) => {
                                history.push(`/`);
                            }).catch((error) => console.log(error))
                  }else{
                    alert('E-mail invalido')
                  }
            }else{
                alert('CNPJ invalido')
            }
        }else{
            alert('CPF invalido')
        }
    }
    }

    return (

        <Container>

            <Menu titleMenu="Atualizar empréstimos" title="adicionar" icon={pluss} />

            <Card >

                <Title> Empresa </Title>

                <Input title="CNPJ" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />

                <BoxCard2>
                    <Input title="Valor solicitado" value={valor} onChange={(e) => setValor(e.target.value)} />
                    <Input title="Faturamento anual" value={faturamento} onChange={(e) => setFaturamento(e.target.value)} />
                </BoxCard2>

                <Title> Indereço empresa </Title>


                <Input title="Logradouro" value={logradouro} onChange={(e) => setLogradouro(e.target.value)} />

                <BoxCard3>
                    <Input title="Cidade" value={cidade} onChange={(e) => setcidade(e.target.value)} />
                    <Input title="Numero" value={numero} onChange={(e) => setNumero(e.target.value)} />
                    <Input title="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                </BoxCard3>


                <Title> Solicitante </Title>

                <BoxCard2>
                    <Input title="Nome completo" value={nome} onChange={(e) => setNome(e.target.value)} />
                    <Input title="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                    <Input title="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input title="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                </BoxCard2>

                <Title>
                    {message}
                </Title>

                <BoxButton>
                    <Button title="Atualizar" onClick={Atualizar} />
                </BoxButton>

            </Card>
        </Container>

    );
}
