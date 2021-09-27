import React from "react";
import styled from "styled-components"

const ContainerFooter = styled.div` 
display: flex;
align-items: center;
justify-content: space-between;
height: 30vh;
background-color: coral;
`

export default class Footer extends React.Component {
	render () {
	return (<>
        <ContainerFooter>
        <p> Footer </p>
        </ContainerFooter>
	</>
	)
}
}