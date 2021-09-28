import React from "react"
import { HeaderContainer, HeaderLogo, HeaderNav } from "./HeaderStyle"


export const Header = (props) => {
    return (<>
        <HeaderContainer>
            <HeaderLogo>
            {/* <a href="index.html"> <img src="" alt="ninja" /> </a> */}
            <h2> LabNinja </h2>
            </HeaderLogo>
            <HeaderNav>
                <button onClick={() => props.changePage("home")}>  Home </button>
                <button onClick={() => props.changePage("cart")}> <i className="fa fa-shopping-cart"></i> Carrinho </button>
                {/* <button><a href="#atendimento-ancora"> <i className="fa fa-mobile-phone"></i> Atendimento</a></button> */}
            </HeaderNav>
        </HeaderContainer>
    </>
    )
}
