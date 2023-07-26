import {
    CartButton,
    CoffeeCardContainer, CoffeeCardContent,
    CoffeeCardFooter,
    CoffeeDescription,
    CoffeeName, CoffeePrice,
    CoffeeTag, InteractionContainer, MoneySign, PriceContainer,
    TagContainer
} from "./styles.ts";

import cafeExpresso from "../../../assets/cafe-expresso.png";
import {ShoppingCartSimple} from "@phosphor-icons/react";
import {InputNumber} from "../../../components/InputNumber";

export function CoffeeCard() {
    return (
        <CoffeeCardContainer>
            <CoffeeCardContent>
                <img src={cafeExpresso} alt=""/>
                <TagContainer>
                    <CoffeeTag>tradicional</CoffeeTag>
                </TagContainer>

                <CoffeeName>Expresso Tradicional</CoffeeName>
                <CoffeeDescription>O tradicional café feito com água quente e grãos moídos</CoffeeDescription>
            </CoffeeCardContent>

            <CoffeeCardFooter>
                <PriceContainer>
                    <MoneySign>R$</MoneySign>
                    <CoffeePrice>9,90</CoffeePrice>
                </PriceContainer>

                <InteractionContainer>
                    <InputNumber/>
                    <CartButton>
                        <ShoppingCartSimple size={22} weight="fill"/>
                    </CartButton>
                </InteractionContainer>
            </CoffeeCardFooter>
        </CoffeeCardContainer>
    )
}