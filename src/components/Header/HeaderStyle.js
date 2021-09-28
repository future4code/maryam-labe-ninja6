import styled from "styled-components"

export const HeaderContainer = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 20vh;
    background-color: #212a2f;
    font-size: 2rem;  
    background-image: url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/0d715e71558965.5bc9241b555d5.gif");  
    /* background-image: url("/src/assets/headerNinjaBackground.gif"); */
    height:20vh;    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const HeaderLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    /* img {        
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 50%;
        padding: 8px;
    } */
`

export const HeaderNav = styled.nav`
    button {
        font-size: 1rem;
        margin: 10px;
        padding: 8px;
    }
`
