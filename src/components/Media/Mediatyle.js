import styled from "styled-components";

export const MediaContainer = styled.div`
    background-color: #111835;
    height: 20vh;      
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TituloMedia = styled.div`
    color: #f3cb11;
    padding: 16px; 
    font-size: 2rem;

    @media(max-width:640px){
        font-size: 1rem;                       
        }
`

export const ImagensMediaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
        
    img {       
        width: 200px        
    }

    @media(max-width:640px){
        img {       
            width: 50px        
        }
    }
`