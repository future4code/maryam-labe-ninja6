import React from "react"
import axios from "axios"
import styled from "styled-components"
import {
    StyleComplet,
    ListStyle,
    Button,
    EstiloFiltro,
    StyloTeste,
    Preco
} from "./Estilo"

const url = "https://labeninjas.herokuapp.com/jobs";
const headers = {
  headers: {
    Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e",
  },
};
export class ServicosLoja extends React.Component {

    state = {
        servicosPrestados: [],
        query: "",
        minPrice: "",
        maxPrice: "",
        sorting: "title",
        ordem: 1
    }


    componentDidMount() {
        this.imprimiServicos()
    }

    updateQuery = (e) => {
        this.setState({query: e.target.value})
    }

    updateMinPrice = (e) => {
        this.setState({minPrice: e.target.value})
    }

    updateMaxPrice = (e) => {
        this.setState({maxPrice: e.target.value})
    }

    updateSorting = (e) => {
        this.setState({sorting: e.target.value})
    }

    updateOrdem = (e) => {
        this.setState({ordem: e.target.value})
    }

    imprimiServicos = () => {

        
        axios.get(url, headers)
        .then((res) => {
            this.setState({servicosPrestados: res.data.jobs})
            console.log(res.data.jobs)

        }).catch((erro) => {
            console.log(erro)

        })
    }
    render() {

        const todosOsServicos = this.state.servicosPrestados.
        filter(jobs => {
            return jobs.title.toLowerCase().includes(this.state.query.toLocaleLowerCase())
        })
        .filter(jobs => {
            return this.state.minPrice === "" || jobs.price >= this.state.minPrice

        })
        .filter(jobs => {
            return this.state.maxPrice === "" || jobs.price <= this.state.maxPrice
        })
        .sort((currentJobs, nextJobs) => {
            switch (this.state.sorting){
                case "title":
                    return this.state.ordem * currentJobs.title.localeCompare(nextJobs.title)
                case "duedata":
                    return this.state.ordem * (new Date(currentJobs.dueData).getTime() - new Date(nextJobs.dueDate).getTime())
                default:
            }
                return this.state.ordem * (currentJobs.price - nextJobs.price)
        })
        .map((jobs) => {
  
            return (
                <div>
                <StyleComplet>
                    <StyloTeste >
                    <h2>{jobs.title}</h2>
                    <p> Válido até {jobs.dueDate} <br></br> por <Preco>R$: {jobs.price}</Preco></p>

                    <Button>Adicionar ao carrinho</Button>

                    <Button>Detalhes</Button>
                    </StyloTeste>
                    
                </StyleComplet>
                </div>

            )
        })
     return (
     <div>

         <EstiloFiltro>
         <input placeholder="Buscar por nome"
         value={this.state.query}
         onChange={this.updateQuery}></input>

        <input placeholder="Preço mínimo" type="number"
         value={this.state.minPrice}
         onChange={this.updateMinPrice}></input>

        <input placeholder="Preço máximo" type="number"
         value={this.state.maxPrice}
         onChange={this.updateMaxPrice}></input>


         <form>
         <label for="sorte">Ordenação:</label>
            <select name="sorte"
            value={this.state.sorting}
            onChange={this.updateSorting}>
              <option value="title">Título</option>
              <option value="price">Preço</option>
              <option value="datas">Por datas</option>
            </select>

            <select name="ordem"
            value={this.state.ordem}
            onChange={this.updateOrdem}>
              <option value={1}>Ordem crescente</option>
              <option value={-1}>Ordem decrescente</option>
            </select>
         </form>
         </EstiloFiltro>
         <ListStyle>
                
     {todosOsServicos}
     
     </ListStyle>
                
     </div>
        )
    }
}