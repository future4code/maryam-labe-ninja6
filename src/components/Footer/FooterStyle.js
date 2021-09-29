import styled from "styled-components"

export const FooterContainer = styled.div` 
    font-size: 1rem;
    background-color: #212a2f;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-content: center;
    align-items: center;        
    color: #b3babb;    
    background-image: url(${require(`../../images/foooterNinjaBackground.gif`)});
    height:60vh;    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    
`

export const FooterSocialNetworks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    `

export const SocialNetworksContainer = styled.div`
    align-items: center;
    display: flex;

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
`
export const Atendimento = styled.div`
    display: flex;
    align-items: center;
`