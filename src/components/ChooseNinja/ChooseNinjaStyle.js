import styled from "styled-components"
import bgHome from "../../images/kunaiBackground.jpg"

export const ContainerHome = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;     
    height: 46vh;  
    background-color: #111835;  
    /* background-image: url(${bgHome});      */
    background-position: center;   
    background-size: cover;
    background-repeat: no-repeat;

    @media(max-width:768px){
      height: 20vh;       
    }
`

export const AnimatedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button{
    margin: 16px;
  }

  @media(max-width:768px){
    button{
      margin: 6px;
    }       
  }
`

export const Snip1104Blue = styled.figure`
    position: relative;
    overflow: hidden;
    margin: 1px;
    min-width: 220px;
    max-width: 310px;
    max-height: 320px;
    width: 100%;    
    background: #0145b4; //* muda o fundo no lado esquerdo na imagem
    color: #ffffff;
    text-align: center;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);

    @media(max-width:768px){
      margin: 0px;
      min-width: 120px;
      max-width: 110px;
      max-height: 120px;        
    }  

    * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  } 
  
  img {
    max-width: 100%;
    position: relative;
    opacity: 0.4;
  }

  figcaption {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  
  h2 {
    position: absolute;
    left: 40px;
    right: 40px;
    display: inline-block;    
    background:#111835; //* muda o fundo de onde está escrito
    -webkit-transform: skew(-10deg) rotate(-10deg) translate(0, -50%);
    transform: skew(-10deg) rotate(-10deg) translate(0, -50%);
    padding: 12px 5px;
    margin: 0;
    top: 50%;
    text-transform: uppercase;
    font-weight: 400;   
    
    @media(max-width:768px){    
      left: 10px;
      right: 10px;
      font-weight:200;
    }       
    
  }
  
  h2 span {
    font-weight: 800;

    @media(max-width:768px){
      font-weight: 700;
    }

  }
  
  :before {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    content: '';
    background: #ffffff;
    position: absolute;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    -webkit-transform: rotate(110deg) translateY(-50%);
    transform: rotate(110deg) translateY(-50%);
  }
  
  a {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    z-index: 1;
  }

  :hover img, .hover img {
    opacity: 1;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  :hover h2, .hover h2 {
    -webkit-transform: skew(-10deg) rotate(-10deg) translate(-150%, -50%);
    transform: skew(-10deg) rotate(-10deg) translate(-150%, -50%);
  }

  :hover:before, .hover:before {
    -webkit-transform: rotate(110deg) translateY(-150%);
    transform: rotate(110deg) translateY(-150%);
  }
`

export const Snip1104Yelow = styled(Snip1104Blue)`
    
  background:  #f8d613; //* muda o fundo no lado esquerdo na imagem    
  
  h2 {   
    background:  #f3cb11; //* muda o fundo de onde está escrito      
  }  
`

