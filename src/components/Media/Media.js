import React from "react";
import { ImagensMediaContainer, MediaContainer, TituloMedia } from "./Mediatyle";
import exame from "../../images/exame.png"
import estadao from "../../images/estadao.png"
import forbes from "../../images/forbes.png"
import globoplay from "../../images/globoplay.png"
import empresas from "../../images/pequenasEmpresasGrandesNegocios.png"

export const Media = () => {
    return (
        <MediaContainer>
            <TituloMedia>
            <h2>Ninjas na mídia</h2>
            </TituloMedia>
            <ImagensMediaContainer>
                <img src={estadao} alt="estadao" />
                <img src={globoplay} alt="globoplay" />
                <img src={forbes} alt="forbes" />
                <img src={empresas} alt="empresas" />
                <img src={exame} alt="exame" />
            </ImagensMediaContainer>
        </MediaContainer>
    )
}