import styled from "styled-components"
import bgHome from "../../images/kunaiBackground.jpg"

export const TitleStyle = styled.div`
    height:12vh;
    background-color: #111835;
    /* background-image: url(${bgHome});  */
    background-position: center;   
    background-size: cover;
    background-repeat: no-repeat;
    color: #f3cb11;
    display: flex;
    flex-direction: column;
    align-items: center;  
    justify-content: center;
  
     h2 {
        font-size: 3rem;
        font-weight: 600;
    }

    p {
        font-size: 2rem;
    }
`