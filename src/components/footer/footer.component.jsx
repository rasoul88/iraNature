import React from 'react';
import { FooterContainer, LogoContainer, LinksContainer, ContactContainer, 
        IconsContainer, SocialIconContainer, Copyright } from "./footer.styles";
import TextLogo from "../text-logo/text-logo.component";
import Icons from "../../assets/icons/symbol-defs.svg";

const Footer = () => (
    <FooterContainer>
        <LogoContainer>
                <TextLogo >iraNature</TextLogo>
        </LogoContainer>
        <LinksContainer>
            <li>درباره ایرانیچر</li>
            <li>سوالات متداول</li>
            <li>وبلاگ ایرانیچر</li>
            <li>قوانین</li>
            <li>تماس با پشتیبانی</li>
            <li>همکاری با ایرانیچر</li>
        </LinksContainer>
        <ContactContainer>
            <h3>ما را در شبکه های اجتماعی دنبال کنید</h3>
            <IconsContainer>
                <SocialIconContainer color="#3b5998">
                    <svg>
                        <use xlinkHref={`${Icons}#icon-facebook2`}/>
                    </svg>
                </SocialIconContainer>
                <SocialIconContainer color="#00acee">
                    <svg>
                        <use xlinkHref={`${Icons}#icon-twitter`}/>
                    </svg>
                </SocialIconContainer>
                <SocialIconContainer color="#ea4335">
                    <svg>
                        <use xlinkHref={`${Icons}#icon-google`}/>
                    </svg>
                </SocialIconContainer>
                <SocialIconContainer  color="#0e76a8">
                    <svg>
                        <use xlinkHref={`${Icons}#icon-linkedin`}/>
                    </svg>
                </SocialIconContainer>
                <SocialIconContainer  color="#dd2a7b">
                    <svg>
                        <use xlinkHref={`${Icons}#icon-instagram`}/>
                    </svg>
                </SocialIconContainer>
                <SocialIconContainer  color="#4fce5d">
                    <svg>
                        <use xlinkHref={`${Icons}#icon-whatsapp`}/>
                    </svg>
                </SocialIconContainer>
                <SocialIconContainer  color="#0088cc">
                    <svg>
                        <use xlinkHref={`${Icons}#icon-telegram`}/>
                    </svg>
                </SocialIconContainer>
                <SocialIconContainer  color="#FF0000">
                    <svg>
                        <use xlinkHref={`${Icons}#icon-youtube`}/>
                    </svg>
                </SocialIconContainer>
            </IconsContainer>
        </ContactContainer>
        <Copyright>
            <p>.کلیه حقوق این وب‌سایت محفوظ و متعلق به آقای رسول صحرایی است &copy;</p> 
        </Copyright>
    </FooterContainer>
);

export default Footer;