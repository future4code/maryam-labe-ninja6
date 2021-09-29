import React from "react"

export default class TodosDetalhes extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.changePage("Lista Serviços")}>Listas</button>
            </div>
        )
    }
}