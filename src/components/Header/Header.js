import React from "react"
import { HeaderContainer, HeaderLogo, HeaderNav } from "./HeaderStyle"
import logo from "../../images/iconeLogoPage.jpg"

export const Header = (props) => {
    return (<>
        <HeaderContainer>
            <HeaderLogo>
                <a href="index.html"> <img src={logo} alt="logo" /> </a>
                <h1> LabNinja </h1>
            </HeaderLogo>
            <HeaderNav>
                <button onClick={() => props.changePage("home")}> <i className="fa fa-home"></i> Home </button>
                <button onClick={() => props.changePage("cart")}> <i className="fa fa-shopping-cart"></i> Carrinho </button>
                <button><a href="#atendimento-ancora"> <i className="fa fa-mobile-phone"></i> Atendimento</a></button>
                <button><a href="#atendimento-ancora"> <i className="fa fa-laptop"></i> Redes Sociais</a></button>
            </HeaderNav>
        </HeaderContainer>
    </>
    )
}
