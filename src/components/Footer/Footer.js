import React from "react";

import { FooterContainer, FooterCustomerServices, FooterSocialNetworks } from "./FooterStyle";

export const Footer = () => {

	return (<>
		<FooterContainer>
			{/* <h2>teste</h2>
			<img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/732ea571558965.5bc9241b53aae.gif" /> */}
			<FooterSocialNetworks>
				<h1>Acesse nossas redes sociais:</h1>
				<div className="redesSociais">
					<a target="_blanck" className="facebook" href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
					<a target="_blanck" className="twitter" href="https://twitter.com/"><i className="fa fa-twitter"></i></a>
					<a target="_blanck" className="linkedin" href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a>
					<a target="_blanck" className="instagram" href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>
					<a target="_blanck" className="youTube" href="https://www.youtube.com/"><i className="fa fa-youtube-play"></i></a>
				</div>
			</FooterSocialNetworks>
			<FooterCustomerServices>
				<h2> Atendimento:</h2>
				<p>Segunda a sexta, das 9h às 18h.</p>
				<div id="atendimento-ancora" className="atendimento">
					<a className="telefone" href="/"><i className="fa fa-phone"></i> +55 11 9999 88888</a>
					<a className="email" href="/"><i className="fa fa-envelope"></i> 4confort@confort.com</a>
				</div>
			</FooterCustomerServices>
		</FooterContainer>
	</>
	)
}
