import styled from "styled-components"

export const CartContainer = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 50px;
    margin-right: 50px;
    height: 70vh;
/*     background-image: url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/3609e971558965.5bc9241b50ac9.jpg"); 
    background-image: url("/src/images/swordBackground.jpg");   */
    background-position: center;   
    background-size: cover;
    .finalizar {
        margin: 5px;    
        font-size: 1rem;
        margin: 10px;
        padding: 5px;
        background-color: #f8d613;
        border-radius: 10px;
    }
    .finalizar:hover {
        color:  #c4302b;
        padding: 8px;
    }


`

export const ItensContainer = styled.div` 
    display: flex;    
    align-items: center;  
    margin: 5px;  

        button {
        margin: 5px;    
        font-size: 1rem;
        margin: 10px;
        padding: 2px;
        background-color: #f8d613;
        border-radius: 10px;
    }
    `

export const Title = styled.div` 
    display: flex;
    justify-content: center;
    h2 {
        font-size: 3rem;
    }

    p {
        font-size: 2rem;
    }
`


