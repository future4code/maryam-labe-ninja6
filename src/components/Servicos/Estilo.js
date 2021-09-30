import styled from "styled-components"

export const StyleComplet = styled.div`
 display: flex;
 margin: 10px;
`;

export const ListStyle = styled.div`
    display: grid;
    text-align: center;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media screen and (min-width: 577px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }

    h2,
  p {
    font-size: 14px;
    margin: 0;

  }
  h2 {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
    margin: 10px;
    cursor: pointer;
    padding: 5px;
`;

export const EstiloFiltro = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 40px 20px 0;
  gap: 20px;
  
  input {
    border-radius: 8px;
    padding: 10px;
  }

  select {
    border-radius: 8px;
    text-align: center;
    padding: 10px;
    margin: 10px;

  }

`;

export const StyloTeste = styled.div`
    background-color: #3f3b3b;
  border-radius: 10px;
  margin: 0 auto;
  color: white;
  padding: 30px 20px 20px;

  h4,
  p {
    font-size: 13px;
    margin: 0;
  }

  h4 {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;
export const Preco = styled.p`
color: yellow;

`;

