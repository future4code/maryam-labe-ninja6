import styled from "styled-components"
import ImgBg from "../../images/kunaiBackground.jpg"

export const ContainerHome = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    padding: 8px;
    height: 70vh;

    background-image: url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/bbd89271558965.5bc9241b51e89.jpg ");
    /* background-image: url("/src/images/kunaiBackground.jpg");*/
    /* background-image: url("../../images/kunaiBackground.jpg"); */
    background-image: url()(${ImgBg});

    background-position: center;   
    background-size: cover;

`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;

  h2 {
    font-size: 4rem;
  }

  p {
    font-size: 2rem;
  }
`

export const AnimatedContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;


  figure.snip1104 {  
    position: relative;
    overflow: hidden;
    margin: 10px;
    min-width: 220px;
    max-width: 310px;
    max-height: 220px;
    width: 100%;
    background: #000000;
    color: #ffffff;
    text-align: center;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }

  figure.snip1104 * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  figure.snip1104 img {
    max-width: 100%;
    position: relative;
    opacity: 0.4;
  }

  figure.snip1104 figcaption {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  figure.snip1104 h2 {
    position: absolute;
    left: 40px;
    right: 40px;
    display: inline-block;
    background: #000000;
    -webkit-transform: skew(-10deg) rotate(-10deg) translate(0, -50%);
    transform: skew(-10deg) rotate(-10deg) translate(0, -50%);
    padding: 12px 5px;
    margin: 0;
    top: 50%;
    text-transform: uppercase;
    font-weight: 400;
  }

  figure.snip1104 h2 span {
    font-weight: 800;
  }

  figure.snip1104:before {
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

  figure.snip1104 a {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    z-index: 1;
  }

  figure.snip1104.red {
    background: #581a14;
  }

  figure.snip1104.red h2 {
    background: #36100c;
  }

  figure.snip1104:hover img,
  figure.snip1104.hover img {
    opacity: 1;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  figure.snip1104:hover h2,
  figure.snip1104.hover h2 {
    -webkit-transform: skew(-10deg) rotate(-10deg) translate(-150%, -50%);
    transform: skew(-10deg) rotate(-10deg) translate(-150%, -50%);
  }

  figure.snip1104:hover:before,
  figure.snip1104.hover:before {
    -webkit-transform: rotate(110deg) translateY(-150%);
    transform: rotate(110deg) translateY(-150%);
  }

`
