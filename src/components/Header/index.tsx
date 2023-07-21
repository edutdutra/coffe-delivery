import {CartContainer, HeaderContainer, LocationContainer, MenuContainer} from "./styles.ts";

import logo from '../../assets/logo.svg'
import {NavLink} from "react-router-dom";
import {MapPin, ShoppingCart} from "@phosphor-icons/react";

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt=""/>

            <MenuContainer>
                <LocationContainer>
                    <MapPin size={22} weight="fill"/>
                    <span>Florianópolis, SC</span>
                </LocationContainer>
                <NavLink to="/checkout" title="Carrinho">
                    <CartContainer>
                        <ShoppingCart size={22}/>
                    </CartContainer>
                </NavLink>
            </MenuContainer>
        </HeaderContainer>
    )
}