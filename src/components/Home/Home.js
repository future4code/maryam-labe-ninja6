import React from "react"
import { Snip1104, Snip1104Red, TitleContainer } from "./HomeStyle"
import { AnimatedContainer, ContainerHome } from "./HomeStyle"
import hairBlueBg from "../../images/comCabeloBlue.jpg"
import hairYelowBg from "../../images/comCabeloYelow.jpg"
import { Carousel } from "../Carousel/Carousel"
import { Testimonial } from "../Testimonial/Testimonial"
import { MediaContainer } from "../Media/Mediatyle"

export const Home = () => {
    return (
        <>
            <ContainerHome>
                <TitleContainer>
                    <h2> Labeninjas </h2>
                    <p> O talento certo no momento certo! </p>
                </TitleContainer>
                <AnimatedContainer>
                    <Snip1104Red>
                        <img src={hairBlueBg} alt="ninja face" />
                        <figcaption>
                            <h2>Seja um<span> Ninja</span></h2>
                        </figcaption>
                        <a href="index.html"></a>
                    </Snip1104Red>

                    <Snip1104>
                        <img src={hairYelowBg} alt="ninja face" />
                        <figcaption>
                            <h2>Contrate um<span> Ninja</span></h2>
                        </figcaption>
                        <a href="index.html"></a>
                    </Snip1104>
                </AnimatedContainer>
            </ContainerHome>

            <Carousel />
           
            <Testimonial />
                
            <MediaContainer />
               


        </>
    )
}
