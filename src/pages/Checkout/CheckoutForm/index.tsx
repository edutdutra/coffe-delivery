import {BaseFormInput, CheckoutFormContainer, FormRow, StreetFormInput} from "./styles.ts";

export function CheckoutForm() {
    return (
        <CheckoutFormContainer>
            <BaseFormInput placeholder="CEP" />
            <StreetFormInput placeholder="Rua" />

            <FormRow>
                <BaseFormInput placeholder="Número" />
                <BaseFormInput placeholder="Complemento" />
            </FormRow>

            <FormRow>
                <BaseFormInput placeholder="Bairro" />
                <BaseFormInput placeholder="Cidade" />
                <BaseFormInput placeholder="UF" />
            </FormRow>
        </CheckoutFormContainer>
    )
}