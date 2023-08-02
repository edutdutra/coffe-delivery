import {
    CoffeeName, CoffeePrice,
    RemoveCoffeeButton,
    SelectedCoffeeContainer,
    SelectedCoffeeContent,
    SelectedCoffeeDetails
} from "./styles.ts";

import coffeeImg from '../../../assets/cafe-expresso.png'
import {InputNumber} from "../../../components/InputNumber";
import {Trash} from "@phosphor-icons/react";

export function SelectedCoffee() {
    return (
        <SelectedCoffeeContainer>
            <SelectedCoffeeContent>
                <img src={coffeeImg} alt="imagem do café selecionado"/>

                <SelectedCoffeeDetails>
                    <CoffeeName>Expresso Tradicional</CoffeeName>
                    <div>
                        <InputNumber/>
                        <RemoveCoffeeButton>
                            <Trash />
                            <span>Remover</span>
                        </RemoveCoffeeButton>
                    </div>
                </SelectedCoffeeDetails>
            </SelectedCoffeeContent>

            <CoffeePrice>R$ 9,90</CoffeePrice>
        </SelectedCoffeeContainer>
    )
}