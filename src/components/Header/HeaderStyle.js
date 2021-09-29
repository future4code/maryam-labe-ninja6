import styled from "styled-components"
import bgHeader from "../../images/headerNinjaBackground.gif"

export const HeaderContainer = styled.div` 
    display: flex;
    align-items: center;    
    justify-content: space-between;
    height: 20vh;    
    font-size: 2rem;     
    background-image: url(${bgHeader});      
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const HeaderLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {        
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 50%;
        padding: 8px;
    }
`

export const HeaderNav = styled.nav`
    button {
        font-size: 1rem;
        margin: 10px;
        padding: 8px;
        background-color: #f8d613;
        border-radius: 10px;
    }
`
