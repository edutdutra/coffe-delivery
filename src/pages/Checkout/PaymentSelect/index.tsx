import {BasePaymentOption, PaymentSelectContainer} from "./styles.ts";
import {Bank, CreditCard, Money} from "@phosphor-icons/react";

export function PaymentSelect() {
    return (
        <PaymentSelectContainer>
            <BasePaymentOption className="active">
                <CreditCard size={16}/>
                <span>Cartão de crédito</span>
            </BasePaymentOption>
            <BasePaymentOption>
                <Bank size={16}/>
                <span>cartão de débito</span>
            </BasePaymentOption>
            <BasePaymentOption>
                <Money size={16}/>
                <span>dinheiro</span>
            </BasePaymentOption>
        </PaymentSelectContainer>
    )
}