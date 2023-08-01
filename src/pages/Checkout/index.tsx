import {CheckoutForm} from "./CheckoutForm";
import {CurrencyDollar, MapPinLine} from "@phosphor-icons/react";

import {CheckoutBaseCard, CheckoutCardHeader, CheckoutColumn, CheckoutContainer, CheckoutTitle} from "./styles.ts";
import {PaymentSelect} from "./PaymentSelect";

// ToDo - Finalizar card de pagamento
// ToDo - Finalizar card de cafés selecionados

export function Checkout() {
    return (
        <CheckoutContainer>
            <form action="">
                <CheckoutColumn>
                    <CheckoutTitle>Complete seu pedido</CheckoutTitle>
                    <CheckoutBaseCard>
                        <CheckoutCardHeader iconColor="yellowDark">
                            <MapPinLine size={24}/>
                            <div>
                                <h2>Endereço de Entrega</h2>
                                <span>Informe o endereço onde deseja receber seu pedido</span>
                            </div>
                        </CheckoutCardHeader>
                        <CheckoutForm/>
                    </CheckoutBaseCard>

                    <CheckoutBaseCard>
                        <CheckoutCardHeader iconColor="purple">
                            <CurrencyDollar size={24}/>
                            <div>
                                <h2>Pagamento</h2>
                                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                            </div>
                        </CheckoutCardHeader>

                        <PaymentSelect />
                    </CheckoutBaseCard>
                </CheckoutColumn>

                <CheckoutColumn>
                    <CheckoutTitle>Cafés selecionados</CheckoutTitle>
                    <CheckoutBaseCard>
                    </CheckoutBaseCard>
                </CheckoutColumn>
            </form>
        </CheckoutContainer>
    )
}