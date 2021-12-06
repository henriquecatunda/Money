import React,{useState} from 'react';
import { Card, Container, BoxCard3, BoxCard2, Title, BoxButton } from "./styles";
import Input from '../../components/Input'
import Menu from '../../components/Menu';
import pluss from '../../assets/plus.png'
import Button from "../../components/Button";
import {useHistory } from 'react-router-dom';
import api from '../../Api/api'

export default function Cadastrar() {


    const history = useHistory();

    const [cnpj, setCnpj] = useState('');
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [faturamento, setFaturamento] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const [logradouro, setLogradouro] = useState('');
    const [cidade, setcidade] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [message, setMessage] = useState('');


    const cpfvalidar = (cpf) => {
        cpf = cpf.replace(/\D/g, '');
        if(cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
        var result = true;
        [9,10].forEach(function(j){
            var soma = 0, r;
            cpf.split(/(?=)/).splice(0,j).forEach(function(e, i){
                soma += parseInt(e) * ((j+2)-(i+1));
            });
            r = soma % 11;
            r = (r <2)?0:11-r;
            if(r != cpf.substring(j, j+1)) result = false;
        });
        return result;
    }

    const Adicionar = (e) => {
        e.preventDefault()
        
        const cpfvalidar = (cpf) => {
            cpf = cpf.replace(/\D/g, '');
            if(cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
            var result = true;
            [9,10].forEach(function(j){
                var soma = 0, r;
                cpf.split(/(?=)/).splice(0,j).forEach(function(e, i){
                    soma += parseInt(e) * ((j+2)-(i+1));
                });
                r = soma % 11;
                r = (r <2)?0:11-r;
                if(r != cpf.substring(j, j+1)) result = false;
            });
            return result;
        }

        try {
    
          if (cnpj.length === 0 || cpf.length === 0 || nome.length === 0 || valor.length === 0 || faturamento.length === 0 || email.length === 0
            || telefone.length === 0 || logradouro.length === 0 || cidade.length === 0 || numero.length === 0) {
            setMessage(
              'Informar todos os campos do formulámario!'
            );
          } else {
              if(cpfvalidar){
    
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
    
            api.post('',empre)
              .then((response) => {
                history.push(`/`);
              }).catch((error) => console.log(error))
          }else{
              alert("vvv")

          }
        }
    
    
        } catch (error) {
    
          if (error.response.status === 404)
            setMessage('Ocorreu algum problema no servidor!');
    
          setTimeout(() => {
            setMessage('');
    
          }, 5000);
        }
    
    }

    return (

        <Container>

            <Menu titleMenu="Cadastro de  empréstimos" title="adicionar" icon={pluss} />

            <Card >

                <Title> Empresa </Title>

                <Input title="CNPJ" value={cnpj} onChange={(e) => setCnpj(e.target.value)}/>

                <BoxCard2>
                    <Input title="Valor solicitado" value={valor} onChange={(e) => setValor(e.target.value)}/>
                    <Input title="Faturamento anual" value={faturamento} onChange={(e) => setFaturamento(e.target.value)}/>
                </BoxCard2>

                <Title> Indereço empresa </Title>


                <Input title="Logradouro" value={logradouro} onChange={(e) => setLogradouro(e.target.value)}/>

                <BoxCard3>
                    <Input title="Cidade" value={cidade} onChange={(e) => setcidade(e.target.value)}/>
                    <Input title="Numero" value={numero} onChange={(e) => setNumero(e.target.value)}/>
                    <Input title="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)}/>
                </BoxCard3>


                <Title> Solicitante </Title>

                <BoxCard2>
                    <Input title="Nome completo" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    <Input title="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                    <Input title="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <Input title="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
                </BoxCard2>

                <Title>
                {message}
                </Title>

                <BoxButton>
                    <Button title="Cadastrar" onClick={Adicionar} />
                </BoxButton>

            </Card>
        </Container>

    );
}
