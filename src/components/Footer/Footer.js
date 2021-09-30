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

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaPhone, FaEnvelope } from "react-icons/fa";

export const Footer = () => {

	return (<>
		<FooterContainer>
			<FooterSocialNetworks>
				<h1>Acesse nossas redes sociais:</h1>
				<SocialNetworksContainer>
					<Facebook target="_blanck" href="https://www.facebook.com/"> < FaFacebook /> </Facebook>
					<Twitter target="_blanck" href="https://twitter.com/"> < FaTwitter /></Twitter>
					<Linkedin target="_blanck" href="https://www.linkedin.com/"> < FaLinkedin /> </Linkedin>
					<Instagram target="_blanck" href="https://www.instagram.com/"> < FaInstagram /> </Instagram>
					<Youtube target="_blanck" href="https://www.youtube.com/"> < FaYoutube /> </Youtube>
				</SocialNetworksContainer>
			</FooterSocialNetworks>

			<div></div>

			<FooterCustomerServices>
				<h1> Atendimento:</h1>
				<h2>Segunda a sexta, das 9h às 18h.</h2>
				<Atendimento id="atendimento-ancora" >
					<Phone href="/">< FaPhone /> +55 11 9999 88888</Phone>
					<Envelope href="/">< FaEnvelope /> 4confort@confort.com</Envelope>
				</Atendimento>
			</FooterCustomerServices>
		</FooterContainer>
	</>
	)
}
