import React from "react"
import { Snip1104Blue, Snip1104Yelow } from "./HomeStyle"
import { AnimatedContainer, ContainerHome } from "./HomeStyle"
import hairBlueBg from "../../images/comCabeloBlue.jpg"
import hairYelowBg from "../../images/comCabeloYelow.jpg"
import { Carousel } from "../Carousel/Carousel"
import { Testimonial } from "../Testimonial/Testimonial"
import { Media } from "../Media/Media"
import { Title } from "../Title/Title"

// export default class Home extends React.Component {
//     state = {
//         linkFor: "page1"
//     }

//     changeLink = (linkFor) => {
// 		this.setState({ linkFor: linkFor })
// 	}

//     render() {

//         const renderLinkFor = () => {
// 			if (this.state.linkFor === "page1") {
// 				return <Cart />
// 			} else if (this.state.linkFor === "page2") {
// 				return <Cart />
// 			}
// 		}

//         return (
//             <>
//                 <Title />

//                 <ContainerHome>
//                     <AnimatedContainer>
//                         <Snip1104Blue>
//                             <img src={hairBlueBg} alt="ninja face" />
//                             <figcaption>
//                                 <h2>Seja um<span> Ninja</span></h2>
//                             </figcaption>
//                             <a href={}></a>
//                         </Snip1104Blue>

//                         <Snip1104Yelow>
//                             <img src={hairYelowBg} alt="ninja face" />
//                             <figcaption>
//                                 <h2>Contrate um<span> Ninja</span></h2>
//                             </figcaption>
//                             <a href="index.html"></a>
//                         </Snip1104Yelow>
//                     </AnimatedContainer>
//                 </ContainerHome>

//                 <Carousel />

//                 <Testimonial />

//                 <Media />

//             </>
//         )
//     }
// }

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
                        <a href="../Cart/Cart.js"></a>
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