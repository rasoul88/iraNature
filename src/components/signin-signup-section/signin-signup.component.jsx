import React, {useState} from 'react';
import { SectionContainer, FormsContainer, SignInSignUp, SignInForm, 
         TitleContainer, InputContainer, InputField, 
         SubmitButton, SocialTextContainer, SocialMediaContainer, 
         SocialIconContainer, SignUpForm, PannelsContainer, LeftPannelsContainer,
         RightPannelsContainer, ContentContainer, ImageContainer   } from "./signin-signup.styles";

import LoginSVG from "../../assets/icons/login.svg";
import RegisterSVG from "../../assets/icons/register.svg";
import Icons from "../../assets/icons/symbol-defs.svg";
const SignInSignUpPage = () => {
    const [mode, setMode] = useState('signin');

    return(
        <SectionContainer id="signin-signup" mode={mode}>
            <FormsContainer data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay="500">
                <SignInSignUp mode={mode}>
                    <SignInForm mode={mode} action="" onSubmit={() => alert("helllo")}>
                        <TitleContainer> ورود</TitleContainer>
                        <InputContainer>
                            <InputField type="text" required placeholder="نام کاربری" />
                            <svg>
                                <use xlinkHref={`${Icons}#icon-user`}/>
                            </svg>
                        </InputContainer>
                        <InputContainer >
                            <InputField type="password" required placeholder="کلمه عبور" />
                            <svg>
                                <use xlinkHref={`${Icons}#icon-key2`}/>
                            </svg>
                        </InputContainer>
                        <SubmitButton type="submit" value="ورود به حساب " solid />
                        <SocialTextContainer>با شبکه های اجتماعی زیر وارد شوید</SocialTextContainer>
                        <SocialMediaContainer>
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
                        </SocialMediaContainer>
                    </SignInForm>

                    <SignUpForm mode={mode} action="">
                        <TitleContainer>ثبت نام</TitleContainer>
                        <InputContainer>
                            <InputField type="text" required placeholder="نام کاربری" />
                            <svg>
                                <use xlinkHref={`${Icons}#icon-user`}/>
                            </svg>
                        </InputContainer>
                        <InputContainer>
                            <InputField type="email" required placeholder="ایمیل" />
                            <svg>
                                <use xlinkHref={`${Icons}#icon-envelope`}/>
                            </svg>
                        </InputContainer>
                        <InputContainer>
                            <InputField type="password" required placeholder="کلمه عبور" />
                            <svg>
                                <use xlinkHref={`${Icons}#icon-key2`}/>
                            </svg>
                        </InputContainer>
                        <SubmitButton type="submit" value="ثبت نام"/>
                        <SocialTextContainer>با شبکه های اجتماعی زیر ثبت نام کنید </SocialTextContainer>
                        <SocialMediaContainer>
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
                        </SocialMediaContainer>
                    </SignUpForm>

                </SignInSignUp>
            </FormsContainer>

            <PannelsContainer >
                <LeftPannelsContainer mode={mode}>
                    <ContentContainer>
                        <h3>حساب کاربری ندارید؟</h3>
                        <p> لطفا بر روی دکمه ی زیر کلیک کنید و با ایجاد حساب کاربری از تمام مزایای وب سایت ما بهره مند شوید</p>
                        <button onClick={() => setMode('signup')}>ثبت نام</button>
                    </ContentContainer>
                    <ImageContainer src={RegisterSVG} alt="login"/>
                </LeftPannelsContainer>
                <RightPannelsContainer mode={mode}>
                    <ContentContainer>
                        <h3>حساب کاربری دارید؟</h3>
                        <p> لطفا بر روی دکمه ی زیر کلیک کنید و با ورود به حساب کاربری که قبلا ایجاد کرده اید از تمام مزایای وب سایت ما بهره مند شوید</p>
                        <button onClick={() => setMode('signin')}>ورود</button>
                    </ContentContainer>
                    <ImageContainer src={LoginSVG} alt="register"/>
                </RightPannelsContainer>
            </PannelsContainer>

        </SectionContainer>
    )
}

export default SignInSignUpPage;