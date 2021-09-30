import React from 'react';
import { GlobalStyle } from './globalStyles';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import SignUp from './components/Signup/SignUp';
import Cart from './components/Cart/Cart';



export default class App extends React.Component {
	state = {
		currentPage: "signup"
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
			
			} else if (this.state.currentPage === "signup") {
				return <SignUp />
			}
		}

		return (<>
			<GlobalStyle />

			<Header
				changePage={this.changePage} />
			{renderCurrentPage()}

			<Footer />
			
			
			
		</>
		)
	}
}

