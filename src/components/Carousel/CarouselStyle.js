import styled from "styled-components";



// *Para a nimação do Carrossel, por isso foi colocado position absolute e relative em alguns.
export const CarouselStyledContainer = styled.div`
  position: relative;
  overflow: hidden;
`

export const CarouselContainer = styled.div`
    /* background-color: #FFFFFF; */
    /* color: #0448b7; */
    width: 90%;
    height: 80vh;    
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;   
    position: relative;  
`

export const StyledArrowContainer = styled.div`
    font-size: 35px;
    width: 50px;
    height: 50px;    
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    left: ${props=>props.leftPosition};
    position: absolute;
    cursor: pointer;
    :hover{
        background-color: #d9d9d9;
    }
`