import React from 'react';
import { GlobalStyle } from './globalStyles';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import { ServicosLoja } from './components/Servicos/Servicos';

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

