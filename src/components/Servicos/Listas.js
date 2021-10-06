import React from "react";
import axios from "axios"

// const url = `https://labeninjas.herokuapp.com/jobs/${id}`;
const headers = {
    headers: {
        Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e",
    },
};

export default class TelaServico extends React.Component {  
    state = {
      listas: []
    }
  
    listDetails = (id) => {
      const url = `https://labeninjas.herokuapp.com/jobs/${id}`;
      console.log(id)
      axios.get(url, headers)
      .then((res) => {
        console.log(res.data)
        this.setState({listas: res.data})
      }).catch((erro) => {

      })
    }

  render() {    

    const listaDetalhes = this.state.listas.map((idJobs) => {
      return <div onClick = { ( )=> this.listDetails(idJobs.id) }></div>
    })

    
    // const listaDetalhes = <div>{this.state.listas.id}
    // <h2>{this.state.listas.title}</h2>
    // <p>{this.state.litas.description}</p>
    // <p>R$ {this.state.listas.price ? this.state.listas.price.toFixed() : "0,0"}</p>
    // <p>Formas de pagamento{this.state.listas.paymentMethods}</p>
    // <p>prazo{this.state.listas.dueData}</p>
    // </div>
    
    return (
      <div>
        <h1> detalhes </h1>
        {listaDetalhes}
      </div>
    )
  }
}

