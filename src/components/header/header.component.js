import React from 'react';
import { HeaderContainer,LogoContainer, TextBoxContainer, HeadingContainer } from "./header.styles";

import CustomButton from "../custom-button/custom-button.component";
import TextLogo from "../text-logo/text-logo.component";

const Header = () => {
    return(
        <HeaderContainer>
            <LogoContainer>
                <TextLogo >iraNature</TextLogo>
            </LogoContainer>
            <TextBoxContainer >
                <HeadingContainer>
                    <span >...طبیعت</span>
                    <span >جایی که زندگی رخ می دهد</span>
                </HeadingContainer>
                <CustomButton targetElement="#section-tours" color="#777" 
                    backgroundColor="white" animation="moveInBottom"
                >
                    تور های ما را ببینید
                </CustomButton>
            </TextBoxContainer>
        </HeaderContainer>
    )
}

export default Header;