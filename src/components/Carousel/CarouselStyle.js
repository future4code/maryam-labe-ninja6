import styled, { keyframes, css } from "styled-components";

//* Velocidade de transição
const forwardArrowAnimation = keyframes`
    0%{
        right: 50%;
    }
    100%{
        right: 90%;
    }
`
const backwardArrowAnimation = keyframes`
    0%{
        right: 50%;
    }
    100%{
        right: 5%;
    }
`

//* Para a nimação do Carrossel foi preciso colocar position absolute e relative em alguns.
export const CarouselStyledContainer = styled.div`
    /* position: relative; */
    overflow: hidden; // * pra não correr a barra de rolagem em baixo
    background-color: #0448b7;    
`

export const CarouselContainer = styled.div`
    width: 90%;
    height: 80vh;    
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;   
    position: relative; 

    @media(max-width:768px){
        height: 30vh; 
    }
`

export const StyledArrowContainer = styled.div`
    font-size: 35px;
    width: 50px;
    height: 50px;    
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;    
    left: ${props => props.leftPosition};
    position: absolute;   
    
    @media(max-width:768px){
        font-size: 25px;
        width: 30px;
        height: 30px;        
    }
    
    ${props => props.arrowDir === "forward" ?
        css`
        animation: ${forwardArrowAnimation} 1s ease;        
        `: css`
        animation: ${backwardArrowAnimation} 1s ease;
        lefth: 5%;
        `
    }
    z-index: 1;
    cursor: pointer;
    :hover{
        background-color: #f8d613;
    }
`

//* indicação de qual imagem está, na barra de baixo, os traços.
export const StyledIndicatorContainer = styled.div`
    width: 200px;
    margin: 0 auto;
    display: flex;
    padding: 10px;
`

export const StyledIndicator = styled.div`
    width: 30px;
    height: 8px;
    margin: 5px;
    background-color: #d9d9d9;
    background-color: ${(props) => props.bgColor};
    border-radius: 5px;    
`