import styled from "styled-components"
import bgHeader from "../../images/headerNinjaBackground.gif"

export const HeaderContainer = styled.div` 
    display: flex;
    align-items: center;    
    justify-content: space-between;
    height: 12vh;    
    font-size: 1rem;     
    background-image: url(${bgHeader});      
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0px 16px 0
`

export const HeaderLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        border-radius: 50%;
        width: 100px;
        height: 100px;        
    }

    img {        
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
        padding: 1px;
    }

    h2 {
        font-size: 2rem;
        font-weight: 700;        
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
