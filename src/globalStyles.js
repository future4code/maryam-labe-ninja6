import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        border: none;
        padding-inline-start: 0px;
        margin-block-start: 0em;
        margin-block-end: 0em;
        font-family: 'Raleway', Arial, sans-serif;        
    }
  
    :root {
        --background: #303030;
        --branco: #FFFFFF;
        --bgYelow: #f8d613;
        --letterYelow: #f3cb11;
        --bgBlue: #0145b4;
        --letterBlue: #0448b7;
        --bgDarkBlue:#111835;
        --letterDarkBlue: #151b33;
    }
      
   body{
        background: var(--background); 
        color: var(--branco); 
        font-size: 1rem; // REM = 1rem = 16px  
   }

   body, input, textarea, button{     
        font-weight: 400;
   }

   h1, h2, h3, h4, h5, h6, strong{
        font-weight: 800;
   }

   button{
        cursor: pointer;
   }  

   html{
        @media(max-width:1080px){
            font-size: 93.85%; //15px
        } 
        @media(max-width:720px){
            font-size: 87.5%; //14px
        } 
    }  
`;

