import {SuccessContainer, SuccessSubTitle, SuccessTitle} from "./styles.ts";
import imgSuccess from "../../assets/img-success.svg";

export function Success() {
    return (
        <SuccessContainer>
            <SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>
            <SuccessSubTitle>Agora é só aguardar que logo o café chegará até você</SuccessSubTitle>

            <div>
                <img src={imgSuccess} alt=""/>
            </div>
        </SuccessContainer>
    )
}