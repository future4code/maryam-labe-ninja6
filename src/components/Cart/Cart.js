import React from "react";
import Carrinho from "./Carrinho"
import { CartContainer, Title } from "./CartStyle";
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
		totalPrice: 300
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
			addTotalPrice(cost) => {
				this.setState ({
					totalPrice: this.state.totalPrice + cost
				})
			}
		} */

	removeItenFromCart = (itenToRemove) => {
		const newCart = this.state.cart.filter(iten => {
			if (iten.id !== itenToRemove.id) {
				return iten
			}
		})
		this.setState({
			cart: newCart
		})
		this.removeTotalPrice(itenToRemove.price)
	}
	removeTotalPrice = (cost) => {
		this.setState({
			totalPrice: this.state.totalPrice - cost
		})
	}

	render() {
		return (
			<>
				<Title><h2>Carrinho</h2></Title>
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