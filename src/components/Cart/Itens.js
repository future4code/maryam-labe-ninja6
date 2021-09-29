import React from "react";
import { ItensContainer } from "./CartStyle";
import { AiTwotoneDelete } from "react-icons/ai"


export default class Itens extends React.Component {
    render() {
        return (
            <><ItensContainer>
                <p> Quantidade: </p>
                {this.props.quantidade}
            </ItensContainer>
                <ItensContainer>
                    <p> Produto: </p>
                    {this.props.title}
                </ItensContainer>
                <ItensContainer>
                    <p> Preço: </p>
                    {this.props.price}
                    <button onClick={this.props.onClick}><AiTwotoneDelete /></button>
                </ItensContainer></>

        )
    }
}