import React from "react";
import Itens from "./Itens";



export default class Carrinho extends React.Component {
    render() {
        const cartItens = /* this.props.carrinho && */ this.props.cart.map(iten => {
            return <Itens
                key ={iten.id}                
                title={iten.title}
                price={iten.price}
                quantidade= {iten.quantidade}
                onClick={() => this.props.removeItenFromCart(iten)}
                />
        })
        return (
            <>
                <div>
                    {cartItens}
                </div>
                <div>
                    <p> Valor total = R$ {this.props.totalPrice}  ,00 </p>
                </div>
            </>
        )
    }
}