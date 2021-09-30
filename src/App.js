import React from 'react';
import { GlobalStyle } from './globalStyles';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import { ServicosLoja } from './components/Servicos/Servicos';


// export default class App extends React.Component {
// 	state = {
// 		section: "start",
// 	};

// 	handleClickStart = () => {
// 		this.setState({ section: "start"});
// 	}

// 	handleClickBenija = () => {
// 		this.setState({ section: "beNinja"});
// 	}

// 	handleClickHireNinja = () => {
// 		this.setState({ section: "hireNinja" });
// 	  };

// 	  renderSection = () => {
// 		switch (this.state.section) {
// 		  case "start":
// 			  return <Home />
// 			// return (
// 			//   <ContainerStart>
// 			// 	<img
// 			// 	  alt="Ninja Logo"
// 			// 	  src="./sourceImages/labeninjasLogoGrande.png"
// 			// 	/>
// 			// 	<button onClick={this.handleClickBeNinja}>
// 			// 	  QUERO SER UM NINJA
// 			// 	</button>
// 			// 	<button onClick={this.handleClickHireNinja}>
// 			// 	  CONTRATAR UM NINJA
// 			// 	</button>
// 			//   </ContainerStart>
// 			// );
// 		  case "beNinja":
// 			return <Cart />;
// 		  case "hireNinja":
// 			return <Cart />;
	
// 		  default:
// 			return <h2>Oops! Algo deu errado!</h2>;
// 		}
// 	  };

// 	  render() {
// 		return (
// 		  <ContainerApp>
// 			<Header>
// 			  <button onClick={this.handleClickStart}>
// 				<img 
// 				src="./sourceImages/labeninjasLogoPeq.png" 
// 				alt="logo Labeninjas Pequeno"/>
// 				<h2>LabeNinjas</h2>
// 			  </button>
// 			</Header>
// 			{this.renderSection()}
// 		  </ContainerApp>
// 		);
// 	  }
// 	}






export default class App extends React.Component {
	state = {
		currentPage: "home"

	}


	changePage = (currentPage) => {
		this.setState({ currentPage: currentPage })
	}

	render() {
		const renderCurrentPage = () => {
			if (this.state.currentPage === "home") {
				return <Home />
			} else if (this.state.currentPage === "cart") {
				return <Cart />
			}
		}

		return (<>
			<GlobalStyle />
			
			<Header
				changePage={this.changePage} />
			{renderCurrentPage()}
			
			<ServicosLoja />

			<Footer />

		</>
		)
	}
}

