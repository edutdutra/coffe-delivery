import {InputNumberButton, InputNumberContainer, InputNumberField} from "./styles.tsx";
import {Minus, Plus} from "@phosphor-icons/react";


export function InputNumber() {
    return (
        <InputNumberContainer>
            <InputNumberButton>
                <Minus size={14} weight="bold"/>
            </InputNumberButton>

            <InputNumberField
                placeholder="0"
                type="number"
                max={99}
            />

            <InputNumberButton>
                <Plus size={14} weight="bold"/>
            </InputNumberButton>
        </InputNumberContainer>
    )
}