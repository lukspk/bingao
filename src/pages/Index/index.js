import React, { Component } from 'react';
import {  Container, Row, Col, Button } from 'react-bootstrap';

import "./styles.css";
import { render } from '@testing-library/react';
import Header from '../../components/header';

export default class Index extends Component {
    
    constructor(props)
    {
        super(props)
        this.state = {
            tabela : [],
            valoresSorteados : [],
        };
    }

    componentDidMount() {
        this.resetar();
    }
  
    verificaTabuleiroCompleto()
    {
        let tabela = this.state.tabela;

        for (let i = 0; i < tabela.length; i ++) {
            if (tabela[i].status == false) {
                return false;
            }
        }

        return true;
    }

    numeroRandomico()
    {
        let min = Math.ceil(1);
        let max = Math.floor(76);
        return (Math.floor(Math.random() * (max - min)) + min);
    }
    sortear()
    {
        let numero = this.numeroRandomico();
        let table = this.state.tabela;

        while(table[numero - 1 ].status == true && !this.verificaTabuleiroCompleto())  {
            numero = this.numeroRandomico();
        }

        if (!this.verificaTabuleiroCompleto()) {
            table[numero - 1 ].status = true; 
        let valoresSorteados = this.state.valoresSorteados;
        valoresSorteados.push(numero);

        this.setState(
            {
                tabela : table,
                valoresSorteados : valoresSorteados
            });
        }
        
    }

    resetar()
    {
        let table = [];
        for (let i = 1; i <= 75; i++) {
            table.push({
                valor : i,
                status : false
            });
        }
        this.setState({tabela: table, valoresSorteados : []});
    }
    render() {
        return (             
            <div>
            <Header></Header>
            
             <Container>
                    
                 <Row>
                    <Col>
                    <div className="cartela-row mt-3">
                         <div className="cartela-container">
                         <div className="title-container mb-2">
                                <Row>
                                    <Col> <h3 className="title ml-3 font-weight-bold">Bingão</h3></Col>
                                    <Col>
                                    <div className="button-align">
                                        <Button variant="danger" onClick={() => this.resetar()} style={!this.verificaTabuleiroCompleto() ? {display : 'none'} : {}}>Resetar</Button>
                                        <Button onClick={() => this.sortear()} className="ml-3" variant="success">Sortear</Button>
                                    </div> 
                                    </Col>
                                </Row>      
                            </div>
                            <hr></hr>
                            <div className="tabela">
                                {
                                    this.state.tabela.map((tabela, index) => {                                        
                                        return (
                                        <Button key={index} 
                                        className={"tabela-item "} variant={tabela.status  == true ? 'danger': 'primary'}>{tabela.valor}
                                        </Button> )
                                        }
                                    )
                                }
                            </div>

                            
                         </div>
                     </div>
                    </Col>
                 </Row>  
                 <Row>
                     <Col>
                            <div className="cartela-row mt-2 mb-2">
                                <div className="cartela-container font-weight-bold">
                                        <h3>Números Sorteados</h3>
                                        {
                                            this.state.valoresSorteados.map( (valor, index) => {
                                                return (
                                                    <span>
                                                        {' ' + valor}
                                                    </span>
                                                
                                                ) 
                                            })
                                        }
                                    </div>
                            </div>
                     </Col>
                 </Row>
                <Row>
                    <Col>
                                 
                    </Col>
                </Row>  
                <Row>
                    <Col>
                    <div className="cartela-row mt-2 mb-2">
                        <div className="cartela-container">
                        <div class="panel panel-warning">
                        <div class="panel-body panel-group-body">
                            <h4>
                                <strong>O que é o Bingão?</strong>
                            </h4>
                            <p class="text-justify ">O Bingão é uma ferramenta que realiza o
                                <strong> sorteio de números online </strong>
                                a partir de uma quantidade definida para cartela, tendo assim disponível os 
                                números para a realização de um bingo online
                                <strong> , o Bingão </strong>
                                pode ser utilizado sempre que necessário para sua diversão.</p>
                            <h4>
                                <strong>Como funciona o Bingão?</strong>
                            </h4>
                            <p class="text-justify"> <strong>O Bingão </strong>
                                é muito fácil e rápido. O usuário só precisa clicar no botão <strong>Sortear </strong>
                                e a ferramenta irá gerar números aleatórios para o prosseguimento do bingo, tendo visualização dos números
                                já sorteados em ordem de saída logo abaixo da tabela de números.
                                </p>
                            </div>
                     </div>
                        </div>
                    </div>
                    
	
                    </Col>
                </Row>
             </Container>
                   
            </div>
               
           );
    }
    
}