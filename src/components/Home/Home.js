import React from "react"
import { Snip1104Blue, Snip1104Yelow } from "./HomeStyle"
import { AnimatedContainer, ContainerHome } from "./HomeStyle"
import hairBlueBg from "../../images/comCabeloBlue.jpg"
import hairYelowBg from "../../images/comCabeloYelow.jpg"
import { Carousel } from "../Carousel/Carousel"
import { Testimonial } from "../Testimonial/Testimonial"
import { Media } from "../Media/Media"
import { Title } from "../Title/Title"

export const Home = () => {
    return (
        <>
            <Title />
            
            <ContainerHome>               
                <AnimatedContainer>
                    <Snip1104Blue>
                        <img src={hairBlueBg} alt="ninja face" />
                        <figcaption>
                            <h2>Seja um<span> Ninja</span></h2>
                        </figcaption>
                        <a href="index.html"></a>
                    </Snip1104Blue>

                    <Snip1104Yelow>
                        <img src={hairYelowBg} alt="ninja face" />
                        <figcaption>
                            <h2>Contrate um<span> Ninja</span></h2>
                        </figcaption>
                        <a href="index.html"></a>
                    </Snip1104Yelow>
                </AnimatedContainer>
            </ContainerHome>

            
               <Carousel /> 
            
            
           
            <Testimonial />
                
            <Media />
               


        </>
    )
}
