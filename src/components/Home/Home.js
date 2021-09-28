import React from "react"
import { TitleContainer } from "./HomeStyle"
import { AnimatedContainer, ContainerHome } from "./HomeStyle"



export const Home = () => {

    return (<ContainerHome>
        <TitleContainer>
            <h2> Labeninjas </h2>
            <p> O talento certo no momento certo! </p>
        </TitleContainer>

        <AnimatedContainer>
            <figure className="snip1104 red">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample33.jpg" alt="sample33" />
                <figcaption>
                    <h2>Seja um<span> Ninja</span></h2>
                </figcaption>
                <a href="Cart"></a>
            </figure>

            <figure className="snip1104">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample35.jpg" alt="sample35" />
                <figcaption>
                    <h2>Contrate um<span> Ninja</span></h2>
                </figcaption>
                <a href="#"></a>
            </figure>
        </AnimatedContainer>
    </ContainerHome>
    )
}
