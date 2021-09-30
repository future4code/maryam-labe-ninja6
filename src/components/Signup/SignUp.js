import React from "react";
import { SignUpContainer, DivLine, Button, Input, Label} from "./SignUpStyle";
import styled from "styled-components"
import axios from 'axios'

const url = "https://labeninjas.herokuapp.com"
const key = "maryam-labe-ninjas6"
const headers = { 'Authorization' : "e2190c39-7930-4db4-870b-bed0e5e4b88e" }

export default class SignUp extends React.Component {

	criarChave = async (event) => {
        return await axios.post(url + '/auth',{
            name: "maryam-labe-ninjas6"
       });
    }
		
	
		state = {
			titulo: "",
			descricao: "",
			preco: "insira o preço",
			formasPagamento: [],
			dataDisponivel: "" 
		}

		handleTitulo = (event) => {
			this.setState({titulo: event.target.value})
			console.log(this.state.titulo)
		}

		handleDescricao = (event) => {
			this.setState({descricao: event.target.value})
			console.log(this.state.descricao)
		}

		handlePreco = (event) => {
			this.setState({preco: event.target.value})
			console.log(this.state.preco)
		}

		handleFormasPagamento = (event) => {
			const novaFormasPagamento = [...this.state.formasPagamento]
			novaFormasPagamento.push(event.target.value)
			this.setState({formasPagamento: novaFormasPagamento})
			console.log(this.state.formasPagamento)
		}

		handleDataDisponivel = (event) => {
			this.setState({dataDisponivel: event.target.value})
			console.log(this.state.dataDisponivel)
			
			console.log("estou aqui na data")
		}

		cadastrarComApi = async(event)=> {
			event.preventDefault()
			const body = {
						
			title:this.state.titulo,
			description:this.state.descricao,
			price:Number(this.state.preco),
			paymentMethods:this.state.formasPagamento,
			dueDate:this.state.dataDisponivel


			}

			axios.post(
				url + '/jobs', body, 
				 { headers: headers }
			).then(response => {
				alert("Cadastro realizado com sucesso")
				this.setState({ titulo: "", descricao: "", preco: "", formasPagamento: [], dataDisponivel:""})
			}).catch(err =>{
				console.log(err)
			})
			
		}





		render() {


		return (<>
			<SignUpContainer>
				<h1>Preencha o seu serviço</h1>
				<div>
					<Input
						type="text"
						placeholder="Título"
						value={this.state.titulo}
						onChange={this.handleTitulo}
						
					/>
				</div>
				<div>
                    <Input
                        type="text"
                        placeholder="Descrição"
						value={this.state.descricao}
						onChange={this.handleDescricao}
                        
                    />
                </div>
                <div>
                    <Input
                        type="number"
                        placeholder="Preço"
						value={this.state.preco}
						onChange={this.handlePreco}
                        
                    />
                </div>
                    
                <Label>
                    <select 
						
						value={this.state.formasPagamento}
						onChange={this.handleFormasPagamento}
                    >
                        <option>Cartão de Débito</option>
                        <option>Cartão de Crédito</option>
                        <option>Paypal</option>
                        <option>Boleto</option>
                        <option>Pix</option>
                    </select>
                </Label>
				<div>
				

					
				<Input
                        type="date"
                        value={this.state.dataDisponivel}
                        onChange={this.handleDataDisponivel}
                    />   
				</div>
                    
                    <Button 
						type="submit"
						onClick={this.cadastrarComApi}>
					   <p>Cadastrar</p> 
					</Button>
			</SignUpContainer>
		</>
		)
	}
}