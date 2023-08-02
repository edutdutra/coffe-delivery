import {
    ConfirmOrderButton,
    ConfirmOrderContainer,
    OrderDetailsContainer,
    OrderDetailsRow,
    OrderPriceText,
    OrderText,
    OrderTotalText
} from "./styles.ts";

import {SelectedCoffee} from "../SelectedCoffee";

export function ConfirmOrder() {
    return (
        <ConfirmOrderContainer>
            <SelectedCoffee />

            <OrderDetailsContainer>
                <OrderDetailsRow>
                    <OrderText>Total de itens</OrderText>
                    <OrderPriceText>R$ 29,70</OrderPriceText>
                </OrderDetailsRow>
                <OrderDetailsRow>
                    <OrderText>Entrega</OrderText>
                    <OrderPriceText>R$ 3,50</OrderPriceText>
                </OrderDetailsRow>
                <OrderDetailsRow>
                    <OrderTotalText>Total</OrderTotalText>
                    <OrderTotalText>R$ 33,20</OrderTotalText>
                </OrderDetailsRow>
            </OrderDetailsContainer>

            <ConfirmOrderButton>confirmar pedido</ConfirmOrderButton>
        </ConfirmOrderContainer>
    )
}