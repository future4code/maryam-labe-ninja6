import React from "react"
import styled from "styled-components"

const ContainerHeader = styled.div` 
display: flex;
align-items: center;
justify-content: space-between;
height: 30vh;
background-color: crimson;
button {
    margin: 10px;
    padding: 8px;
}
`

export default class Header extends React.Component {
	render () {
	return (<>
        <ContainerHeader>
        <p> Header </p>
        <div>
        <button> Home </button>
        <button> Carrinho </button>
        </div>
        </ContainerHeader>
	</>
	)
}
}