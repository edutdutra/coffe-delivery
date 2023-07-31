import {AddressFormContainer, AddressFormHeader, BaseFormInput, CheckoutContainer, CheckoutTitle} from "./styles.ts";
import {MapPinLine} from "@phosphor-icons/react";

export function Checkout() {
    return (
        <CheckoutContainer>
            <AddressFormContainer>
                <CheckoutTitle>Complete seu pedido</CheckoutTitle>

                <form action="">
                    <AddressFormHeader>
                        <MapPinLine size={24}/>
                        <div>
                            <h2>Endereço de Entrega</h2>
                            <span>Informe o endereço onde deseja receber seu pedido</span>
                        </div>
                    </AddressFormHeader>

                    <BaseFormInput placeholder="CEP" />
                    <BaseFormInput placeholder="Rua" />

                    <div>
                        <BaseFormInput placeholder="Número" />
                        <BaseFormInput placeholder="Complemento" />
                    </div>

                    <div>
                        <BaseFormInput placeholder="Bairro" />
                        <BaseFormInput placeholder="Cidade" />
                        <BaseFormInput placeholder="UF" />
                    </div>

                </form>
            </AddressFormContainer>

        </CheckoutContainer>
    )
}