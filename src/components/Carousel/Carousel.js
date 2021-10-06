import React, { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { AppImage } from "../AppIMage/AppImage";
import {
    CarouselContainer,
    CarouselStyledContainer,
    StyledArrowContainer,
    StyledIndicator,
    StyledIndicatorContainer
} from "./CarouselStyle";
import first from "../../images/faceNinjaBlueAndYelow.jpg";
import second from "../../images/newIcone2blueANDyelow.jpg";
import thirt from "../../images/newIconeblueANDyelow.jpg";
import forth from "../../images/swordBackground.jpg";
import fifth from "../../images/comCabeloYelow.jpg";
import sixth from "../../images/headerNinjaBackground.gif";
import seventh from "../../images/foooterNinjaBackground.gif"

const images = [first, second, thirt, forth, fifth, sixth, seventh];


export const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState("forward");

    const nextImage = () => {
        setCurrentImageIndex(prevIndex => prevIndex + 1);
        setDirection("forward");
    }

    const prevImage = () => {
        setCurrentImageIndex(prevIndex => prevIndex - 1);
        setDirection("backward");
    }

    return (<>
        <CarouselStyledContainer>
            <CarouselContainer>

                {currentImageIndex !== 0 && (
                    <StyledArrowContainer
                        onClick={prevImage}
                        leftPosition="7%"
                        // leftPosition="1%" //* muda a posição da arrow do lado esquerdo, pra mobile teria que ser 1%. Como fazer?
                        arrowDir="backward"
                    >
                        <MdKeyboardArrowLeft />
                    </StyledArrowContainer>
                )}

                <AppImage src={images[currentImageIndex]} imageDir={direction} />

                {currentImageIndex !== images.length - 1 && (
                    <StyledArrowContainer
                        onClick={nextImage}
                        leftPosition="90%"
                        arrowDir="forward"
                    >
                        <MdKeyboardArrowRight />
                    </StyledArrowContainer>
                )}
            </CarouselContainer>

            <StyledIndicatorContainer>
                {images.map((img, index) => (
                    <StyledIndicator key={img} bgColor={index === currentImageIndex ? "#f8d613;" : ""} />
                ))}
            </StyledIndicatorContainer>

        </CarouselStyledContainer>
    </>
    )
}