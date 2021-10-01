import styled from "styled-components"

export const FooterContainer = styled.div` 
    font-size: 1rem;
    background-color: #111835;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-content: center;
    align-items: center;        
    color: #f3cb11;   
    background-image: url(${require(`../../images/foooterNinjaBackground.gif`)});
    height:30vh;    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;  
    
    @media(max-width:768px){
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
        height:30vh;        
    }  

`

export const FooterSocialNetworks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center; 

    @media(max-width:768px){
        padding: 1px;  
        h1 {
            padding: 1px;
            font-weight: 600;
        }     
    }   
    
`

export const SocialNetworksContainer = styled.div`
    align-items: center;
    display: flex;
    padding: 16px;

    @media(max-width:768px){
        padding: 1px;      
    } 
`

export const Facebook = styled.a`    
    padding: 10px;
    color: #dae5e8;
    padding: 10px;
    font-size: 2rem;
    
    :hover {
        background-position: right center; 
        color: #3b5998;
        text-decoration: none;
    }
`

export const Twitter = styled.a`    
    padding: 10px;
    color: #dae5e8;
    padding: 10px;
    font-size: 2rem;

    :hover {
            background-position: right center; 
            color:  #00acee;
            text-decoration: none;
    }
`

export const Linkedin = styled.a`    
    padding: 10px;
    color: #dae5e8;
    padding: 10px;
    font-size: 2rem;

    :hover {
        background-position: right center; 
        color: #0e76a8;
        text-decoration: none;
    }
`
export const Instagram = styled.a`    
    padding: 10px;
    color: #dae5e8;
    padding: 10px;
    font-size: 2rem;

    :hover {
        background-position: right center; 
        color: #d6249f;   
        text-decoration: none;
    }
`
export const Youtube = styled.a`    
    padding: 10px;
    color: #dae5e8;
    padding: 10px;
    font-size: 2rem;

    :hover {
        background-position: right center; 
        color:  #c4302b;
        text-decoration: none;
    }
`

export const FooterCustomerServices = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;  
    
    h1 {
        padding: 16px;
    }

    h2 {
        color: #dae5e8;
    }

    @media(max-width:768px){
        padding: 1px; 
        h1 {
            padding: 1px;
            font-weight: 600;
        }  
        h2 {
            padding: 1px;
            font-weight: 600;
        }    
    } 
`
export const Atendimento = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;  
    padding: 16px;  

    @media(max-width:768px){
        padding: 6px;
              
    } 
`
export const Phone = styled.a`     
    color: #dae5e8;
    padding: 8px;
    font-size: 2rem;  
    
    @media(max-width:768px){
        padding: 1px;
        font-size: 1rem;       
    } 
`

export const Envelope = styled.a`    
    padding: 10px;
    color: #dae5e8;
    padding: 10px;
    font-size: 2rem;

    @media(max-width:768px){
        padding: 1px;  
        font-size: 1rem;    
    } 
`

