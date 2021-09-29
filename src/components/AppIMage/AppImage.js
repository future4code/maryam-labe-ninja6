import React, { useState, useEffect } from "react";
import { StyledImage, StyledImageContainer } from "./AppIMageStyle";

export const AppImage = ({ src, imageDir }) => {
    const [currentImage, setCurrentImage] = useState("");

    useEffect(() => {
        setCurrentImage(src);
    }, [src])

    return (
        <>
            {currentImage === src && (
                <StyledImageContainer imageDir={imageDir}>
                    <StyledImage src={src} />
                </StyledImageContainer>
            )}
        </>
    )
}