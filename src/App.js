import React from 'react';
import { GlobalStyle } from './globalStyles';
import { Footer } from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import { ServicosLoja } from './components/Servicos/Servicos';
import {
	FaHome,
	FaShoppingCart,
	FaPhoneAlt,
	FaLaptopCode
} from "react-icons/fa";
import logo from "../src/images/iconeLogoPage.jpg"
import {
	HeaderContainer,
	HeaderLogo, HeaderNav
} from "../src/components/Header/HeaderStyle"
import hairBlueBg from "../src/images/comCabeloBlue.jpg"
import hairYelowBg from "../src/images/comCabeloYelow.jpg"
import {
	AnimatedContainer,
	ContainerHome,
	Snip1104Blue,
	Snip1104Yelow
} from "../src/components/ChooseNinja/ChooseNinjaStyle";
import { Carousel } from './components/Carousel/Carousel';
import { Testimonial } from './components/Testimonial/Testimonial';
import { Media } from './components/Media/Media';
import { AppContainer } from './AppContainer';
import { Title } from './components/Title/Title';
import SignUp from './components/Signup/SignUp';
import TelaServico from './components/Servicos/Listas';



export default class App extends React.Component {
	state = {
		section: "start",
	};

	handleClickStart = () => {
		this.setState({ section: "start" });
	}

	handleClickBeninja = () => {
		this.setState({ section: "beNinja" });
	}

	handleClickHireNinja = () => {
		this.setState({ section: "hireNinja" });
	};

	handleClicCart = () => {
		this.setState({ section: "cart" });
	};

	renderSection = () => {
		switch (this.state.section) {
			case "start":
				return (
					<>
					<TelaServico />	
						<Title />						
						<ContainerHome>
							<AnimatedContainer>
								<button onClick={this.handleClickBeninja}>
									<Snip1104Blue>
										<img src={hairBlueBg} alt="ninja face" />
										<figcaption>
											<h2>Seja um<span> Ninja</span></h2>
										</figcaption>										
									</Snip1104Blue>
								</button>

								<button onClick={this.handleClickHireNinja}>
									<Snip1104Yelow>
										<img src={hairYelowBg} alt="ninja face" />
										<figcaption>
											<h2>Contrate um<span> Ninja</span></h2>
										</figcaption>										
									</Snip1104Yelow>
								</button>
							</AnimatedContainer>
						</ContainerHome>
						<Testimonial />
						<Media />
						<Carousel />						
					</>
				);
			case "beNinja":
				return <SignUp />;
			case "hireNinja":
				return <ServicosLoja />;
			case "cart":
				return <Cart />;
			default:
				return <h2>Error!</h2>;
		}
	};

	render() {
		return (
			<AppContainer>
				<GlobalStyle />
				<HeaderContainer>
					<HeaderLogo>
						<button onClick={this.handleClickStart}>
							<img src={logo} alt="logo" />
						</button>
						<h2> LabNinja </h2>
					</HeaderLogo>
					<HeaderNav>
						<button onClick={this.handleClickStart}> < FaHome /> Home </button>
						<button onClick={this.handleClicCart}> < FaShoppingCart /> Carrinho </button>
						<button><a href="#atendimento-ancora"> < FaPhoneAlt /> Atendimento </a></button>
						<button><a href="#atendimento-ancora"> < FaLaptopCode /> Redes Sociais</a></button>
					</HeaderNav>
				</HeaderContainer>
				{this.renderSection()}
				<Footer />
			</AppContainer>
		);
	}
}

