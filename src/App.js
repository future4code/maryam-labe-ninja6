import React from 'react'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { GlobalStyle } from './globalStyles';


export default class App extends React.Component {
	render() {
		return (<>
			<GlobalStyle />
			<Header />
			<Home />
			<Footer />
		</>
		)
	}
}

