import React from "react"

export default class TodosDetalhes extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.changeTela()}>Listas</button>
            </div>
        )
    }
}