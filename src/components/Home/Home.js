import React from "react"
import { ContainerHome } from "./HomeStyle"
import { Carousel } from "../Carousel/Carousel"
import { Testimonial } from "../Testimonial/Testimonial"
import { Media } from "../Media/Media"
import { Title } from "../Title/Title"
import { ChooseNinja } from "../ChooseNinja/ChooseNinja"
import Cart from "../Cart/Cart"


export default class Home extends React.Component {
    state = {
        currentPage: ''
    }

    changePage = (currentPage) => {
        this.setState({ currentPage: currentPage })
    }

    render() {

        const renderCurrentPage = () => {
            switch (this.state.currentPage) {
                case 'home':
                    return ""
                case 'cart':
                    return <Cart />
            }
        }

        return (
            <ContainerHome>

                <Title />

                <ChooseNinja
                    changePage={this.changePage} />
                {renderCurrentPage()}

                <Carousel />

                <Testimonial />

                <Media />

            </ContainerHome>
        )
    }
}

// export const Home = () => {
//     return (
//         <ContainerHome>

//             <Title />

//             <ChooseNinja />

//             <Carousel />

//             <Testimonial />

//             <Media />

//         </ContainerHome>
//     )
// }

