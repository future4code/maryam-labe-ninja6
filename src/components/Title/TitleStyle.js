import styled from "styled-components"
import bgHeader from "../../images/headerNinjaBackground.gif"
import bgHome from "../../images/kunaiBackground.jpg"

export const TitleStyle = styled.div`
    height:15vh;
    background-color: #111835;
    background-image: url(${bgHome}); 
    background-position: center;   
    background-size: cover;
    background-repeat: no-repeat;
    color: #f3cb11;
    display: flex;
    flex-direction: column;
    align-items: center;  
    justify-content: center;
  
     h2 {
        font-size: 4rem;
    }

    p {
        font-size: 2rem;
    }
`