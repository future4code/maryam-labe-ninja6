// import React from "react"
// import { ContainerHome } from "./HomeStyle"
// import { Carousel } from "../Carousel/Carousel"
// import { Testimonial } from "../Testimonial/Testimonial"
// import { Media } from "../Media/Media"
// import { Title } from "../Title/Title"
// import { ChooseNinja } from "../ChooseNinja/ChooseNinja"
// import Cart from "../Cart/Cart"
// import { ServicosLoja } from "../Servicos/Servicos"


// export default class Home extends React.Component {
//     state = {
//         currentPage: ''
//     }

//     changePage = (currentPage) => {
//         this.setState({ currentPage: currentPage })
//     }

//     render() {
//         const renderCurrentPage = () => {
//             switch (this.state.currentPage) {
//                 case 'cart':
//                     return <Cart />
//                 case 'service':
//                     return <ServicosLoja />
//                 default:
//                     return (
//                         <ContainerHome>

//                             <Carousel />

//                             <Testimonial />

//                             <Media />

//                         </ContainerHome>
//                     )
//             }
//         }

//         return (
//             <>
//                 <Title />
//                 <ChooseNinja
//                     changePage={this.changePage} />
//                 {renderCurrentPage()}

//             </>

//         )
//     }
// }


