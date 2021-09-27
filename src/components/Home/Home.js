import React from "react"
import styled from "styled-components"

const ContainerHome = styled.div` 
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
background-color: cadetblue;
`

export default class Home extends React.Component {
	render () {
	return (<>
        <ContainerHome>
        <h2> Labeninjas </h2>
        <p> O talento certo no momento certo! </p>
        <div>
            <button>Quero ser um ninja</button>
            <button>Contratar um ninja</button>
        </div>
        </ContainerHome>
	</>
	)
}
}