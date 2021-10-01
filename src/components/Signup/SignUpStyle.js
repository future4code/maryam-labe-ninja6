import styled from "styled-components"
import bgHome from "../../images/kunaiBackground.jpg"


export const SignUpContainer = styled.form` 
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid yellow;
    margin: 20px;
    height: 70vh;
    padding: 30px;
    background-image: url(${bgHome});      
    background-position: center;   
    background-size: cover;
    background-repeat: no-repeat;
    
    
`

export const DivLine = styled.div` 
    display: flex;
    align-items: center;
    flex-direction: row;
    border: 1px solid black;
	margin-top: 10px;
	
    
`

export const Button = styled.button `
    background-color: white;
    padding: 10px;
    vertical-align: top;
    box-shadow: 2px 1px 2px gray;
    margin: 40px

    ::active {
        box-shadow: 0 0 0 yellow;
        margin: 6px 10px 2px 10px;
    }

    

`

export const Input = styled.input `
    width: 300px;
    margin: 10px;
    height: 30px;
    ::placeholder {
        color: black;
        font-size: 17px;
      }
    

`

export const Label = styled.label`
    width: 300px;
    margin: 10px;
    height: 30px;
    justify-content: center;
    align-items:center;

`