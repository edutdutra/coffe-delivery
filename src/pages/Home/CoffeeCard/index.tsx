import {
    CartButton,
    CoffeeCardContainer,
    CoffeeCardFooter,
    CoffeeDescription,
    CoffeeName, CoffeePrice,
    CoffeeTag, MoneySign,
    TagContainer
} from "./styles.ts";

import cafeExpresso from "../../../assets/cafe-expresso.png";
import {ShoppingCartSimple} from "@phosphor-icons/react";

export function CoffeeCard() {
    return (
        <CoffeeCardContainer>
            <img src={cafeExpresso} alt=""/>
            <TagContainer>
                <CoffeeTag>tradicional</CoffeeTag>
            </TagContainer>

            <CoffeeName>Expresso Tradicional</CoffeeName>
            <CoffeeDescription>O tradicional café feito com água quente e grãos moídos</CoffeeDescription>

            <CoffeeCardFooter>
                <MoneySign>R$</MoneySign>
                <CoffeePrice>9,90</CoffeePrice>


                <CartButton>
                    <ShoppingCartSimple size={22} weight="fill"/>
                </CartButton>
            </CoffeeCardFooter>
        </CoffeeCardContainer>
    )
}