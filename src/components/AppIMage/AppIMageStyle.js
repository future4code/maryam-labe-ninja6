import styled, { keyframes, css } from "styled-components";

const forwardIMageAnimation = keyframes`
    0%{
        right: -50%;
    }
    100%{
        right: 0%;
    }
`

const backwardIMageAnimation = keyframes`
    0%{
        right: 50%;
    }
    100%{
        right: 0%;
    }
`

export const StyledImageContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;       
    ${props => props.imageDir === "forward" ?
        css`
        animation: ${forwardIMageAnimation} 1s ease;
        right: 0;        
        `:css`
        animation: ${backwardIMageAnimation} 1s ease;
        lefth: 50%;
        `    
    }     
    display: flex;
    justify-content: center;
    align-items: center;
`

// * tamanho da imagem
export const StyledImage = styled.img`
    width: 80%;
    height: 80%;    
`