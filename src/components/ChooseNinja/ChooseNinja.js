import React from "react";
import hairBlueBg from "../../images/comCabeloBlue.jpg"
import hairYelowBg from "../../images/comCabeloYelow.jpg"
import {
    AnimatedContainer,
    ContainerHome,
    Snip1104Blue,
    Snip1104Yelow
} from "./ChooseNinjaStyle";

export const ChooseNinja = (props) => {
    return (
        <ContainerHome>
            <AnimatedContainer>
                <button onClick={() => props.changePage("signup")}>
                   
                    <Snip1104Blue>
                        <img src={hairBlueBg} alt="ninja face" />
                        <figcaption>
                            <h2>Seja um<span> Ninja</span></h2>
                        </figcaption>
                        {/* <a href="/"></a> */}
                    </Snip1104Blue>
                </button>

                <button onClick={() => props.changePage("cart")}>
                    <Snip1104Yelow>
                        <img src={hairYelowBg} alt="ninja face" />
                        <figcaption>
                            <h2>Contrate um<span> Ninja</span></h2>
                        </figcaption>
                        {/* <a href="/"></a> */}
                    </Snip1104Yelow>
                </button>
            </AnimatedContainer>
        </ContainerHome>
    )
}