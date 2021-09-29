import React, { useState } from "react";
import styled from "styled-components";

import first from "../../images/faceNinjaBlueAndYelow.jpg";
import second from "../../images/newIcone2blueANDyelow.jpg";
import thirt from "../../images/newIconeblueANDyelow.jpg";
import forth from "../../images/swordBackground.jpg";
import fifth from "../../images/comCabeloYelow.jpg";
import sixth from "../../images/headerNinjaBackground.gif";
import seventh from "../../images/foooterNinjaBackground.gif"
import {
    CarouselContainer,
    StyledImageContainer,
    StyledImage,    
    CarouselStyledContainer,
    StyledArrowContainer
} from "./CarouselStyle";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

const images = [first, second, thirt, forth, fifth, sixth, seventh];


export const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex(prevIndex => prevIndex + 1);
    }

    const prevImage = () => {
        setCurrentImageIndex(prevIndex => prevIndex - 1);
    }

    return (<>
        <CarouselStyledContainer>
            <CarouselContainer>

                {currentImageIndex !== 0 && (
                    <StyledArrowContainer onClick={prevImage} leftPosition="10%">
                        <MdKeyboardArrowLeft />
                    </StyledArrowContainer>
                )}

                <StyledImageContainer>
                    <StyledImage src={images[currentImageIndex]} />
                </StyledImageContainer>

                {currentImageIndex !== images.length - 1 && (
                    <StyledArrowContainer onClick={nextImage} leftPosition="90%">
                        <MdKeyboardArrowRight />
                    </StyledArrowContainer>
                )}

            </CarouselContainer>
        </CarouselStyledContainer>
    </>
    )
}