import React, { useState } from 'react';
import { BackgroundContainer, Icon, IconContainer, Item, Link, NavContainer, NavigationContainer, NavList } from './navigation.styles';

const Navigation = () => {
    const [toggle, settoggle] = useState(false);

    return(
        <NavigationContainer >
            <IconContainer toggle={toggle}  onClick={() => settoggle(!toggle)}>
                <Icon toggle={toggle} >&nbsp;</Icon>
            </IconContainer>

            <BackgroundContainer toggle={toggle} >&nbsp;</BackgroundContainer>

            <NavContainer toggle={toggle}>
                <NavList onClick={() => settoggle(!toggle)}>
                    <Item ><Link href="/" >صفحه اصلی</Link></Item>
                    <Item ><Link href="#about" >درباره ایرانیچر</Link></Item>
                    <Item ><Link href="#section-tours" >تور ها</Link></Item>
                    <Item ><Link href="#signin-signup" >ثبت نام | ورود</Link></Item>
                    <Item ><Link href="#" >همکاری با ایرانیچر</Link></Item>
                    <Item ><Link href="#" >وبلاگ</Link></Item>
                </NavList>
            </NavContainer>
        </NavigationContainer>
    )
}

export default Navigation;