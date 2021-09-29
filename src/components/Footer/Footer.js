import React from "react";

import {
	Atendimento,
	FooterContainer,
	FooterCustomerServices,
	FooterSocialNetworks,
	Facebook,
	Twitter,
	Linkedin,
	Instagram,
	Youtube,
	SocialNetworksContainer,
	Phone,
	Envelope
} from "./FooterStyle";

export const Footer = () => {

	return (<>
		<FooterContainer>
			<FooterSocialNetworks>
				<h1>Acesse nossas redes sociais:</h1>
				<SocialNetworksContainer>
					<Facebook target="_blanck" href="https://www.facebook.com/"><i className="fa fa-facebook"></i></Facebook>
					<Twitter target="_blanck" href="https://twitter.com/"><i className="fa fa-twitter"></i></Twitter>
					<Linkedin target="_blanck" href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></Linkedin>
					<Instagram target="_blanck" href="https://www.instagram.com/"><i className="fa fa-instagram"></i></Instagram>
					<Youtube target="_blanck" href="https://www.youtube.com/"><i className="fa fa-youtube-play"></i></Youtube>
				</SocialNetworksContainer>
			</FooterSocialNetworks>

			<div></div>

			<FooterCustomerServices>
				<h1> Atendimento:</h1>
				<h2>Segunda a sexta, das 9h às 18h.</h2>
				<Atendimento id="atendimento-ancora" >
					<Phone href="/"><i className="fa fa-phone"></i> +55 11 9999 88888</Phone>
					<Envelope href="/"><i className="fa fa-envelope"></i> 4confort@confort.com</Envelope>
				</Atendimento>
			</FooterCustomerServices>
		</FooterContainer>
	</>
	)
}
