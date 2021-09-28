import styled from "styled-components"
import bgFooter from "../../images/foooterNinjaBackground.gif"

export const FooterContainer = styled.div` 
    font-size: 1rem;
    background-color: #212a2f;
    display: flex;
    flex-direction: column;
    justify-content: space-between;    
    color: #b3babb;
    /* background-image: url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/732ea571558965.5bc9241b53aae.gif"); */
    /* background-image: url("../../images/foooterNinjaBackground.gif"); */
    background-image: url()(${bgFooter});
    height:70vh;    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const FooterSocialNetworks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    
    a {
        padding: 10px;
        color: #dae5e8;
    }

    .redesSociais {
        padding: 10px;
        display: flex;
        align-items: center;
        font-size: 50px;
    }

    .facebook:hover {
        background-position: right center; 
        color: #3b5998;
        text-decoration: none;
    }

    .twitter:hover {
        background-position: right center; 
        color:  #00acee;
        text-decoration: none;
    }

    .linkedin:hover {
        background-position: right center; 
        color: #0e76a8;
        text-decoration: none;
    }

    .instagram:hover {
        background-position: right center; 
        color: #d6249f;   
        text-decoration: none;
    }

    .youTube:hover {
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
    
    .atendimento {
        display: flex;
        align-items: center;
    }
`