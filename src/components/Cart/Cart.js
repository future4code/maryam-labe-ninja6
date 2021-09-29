import React from "react";
import Carrinho from "./Carrinho"
import { CartContainer } from "./CartStyle";
import { TitleContainer } from "../Home/HomeStyle";
import { GiBroadsword } from "react-icons/gi"



export default class Cart extends React.Component {
	state = {
		cart: [
			{
				id: 1,
				title: "Serviço 1",
				price: 100,
				image: "imagem1",
				quantidade: 1
			},
			{
				id: 2,
				title: "Serviço 2",
				price: 200,
				image: "imagem2",
				quantidade: 2
			}
		],
		totalPrice: 0
	}

	/* 	addItenToCart = (iten) => {
			if (iten.quantidade !== 1) {
			iten.quantidade = 1
			const newCart = [iten, ...this.state.cart]
			this.setState ({
				carrinho: newCart
			})
			} else {
				const newCart = this.state.carrinho.map (product => {
					if (product.quantidade !== 1) {
						return {...product, product:quantidade + 1}
					}else{
						return product
					}
				}
				)}
		} */

	removeItenFromCart = (itenToRemove) => {
		/* if(itenToRemove.quantidade === 1){ */
		const newCart = this.state.cart.filter(iten => {
			if (iten.id !== itenToRemove.id) {
				return iten
			}
		})
		this.setState({
			cart: newCart
		})
		/* } */

	}

	render() {
		return (<>
			<TitleContainer> <h2> Carrinho</h2> </TitleContainer>
			<CartContainer>
				<Carrinho
					cart={this.state.cart}
					totalPrice={this.state.totalPrice}
					removeItenFromCart={this.removeItenFromCart}
				/>
				<button className="finalizar">Finalizar compra <GiBroadsword /></button>
			</CartContainer>
		</>
		)
	}
}