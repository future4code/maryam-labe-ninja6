import React from "react"
import axios from "axios"
import styled from "styled-components"
import {
    StyleComplet,
    ListStyle,
    Button,
    EstiloFiltro,
    StyloTeste
} from "./Estilo"

const url = "https://labeninjas.herokuapp.com/jobs";
const headers = {
  headers: {
    Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e",
  },
};
export class ServicosLoja extends React.Component {

    state = {
        servicosPrestados: []
    }


    componentDidMount() {
        this.imprimiServicos()
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

        const todosOsServicos = this.state.servicosPrestados.map((jobs) => {

           

            return (
                <div>
                <StyleComplet>
                    <StyloTeste >
                    <h2>{jobs.title}</h2>
                    <p> Valor {jobs.dueDate} por {jobs.price}</p>

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
         <input placeholder="Busca" type="text"></input>

         <form>
         <label>Ordenar:</label>
            <select>
              <option>Título</option>
              <option>Preço</option>
              <option>Maior valor</option>
              <option>Menor valor</option>
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