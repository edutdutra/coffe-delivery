import {
    OrderInfoCard,
    OrderInfoText,
    SuccessContainer,
    SuccessContent,
    SuccessSubTitle,
    SuccessTitle
} from "./styles.ts";
import imgSuccess from "../../assets/img-success.svg";
import {IconCircle} from "../../components/IconCircle";
import {CurrencyDollar, MapPin, Timer} from "@phosphor-icons/react";

export function Success() {
    return (
        <SuccessContainer>
            <SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>
            <SuccessSubTitle>Agora é só aguardar que logo o café chegará até você</SuccessSubTitle>

            <SuccessContent>
                <OrderInfoCard>
                    <div>
                        <IconCircle circleColor="purple">
                            <MapPin size={16} weight="fill"/>
                        </IconCircle>

                        <div>
                            <OrderInfoText>
                                Entrega em <b> Rua João Daniel Martinelli, 102 </b>
                            </OrderInfoText>

                            <OrderInfoText>
                                Farrapos - Porto Alegre, RS
                            </OrderInfoText>
                        </div>
                    </div>

                    <div>
                        <IconCircle circleColor="yellow">
                            <Timer size={16} weight="fill"/>
                        </IconCircle>

                        <div>
                            <OrderInfoText>
                                Previsão de entrega
                            </OrderInfoText>
                            <OrderInfoText>
                                <b>20 min - 30 min</b>
                            </OrderInfoText>
                        </div>
                    </div>

                    <div>
                        <IconCircle circleColor="yellowDark">
                            <CurrencyDollar size={16}/>
                        </IconCircle>

                        <div>
                            <OrderInfoText>
                                Pagamento na entrega
                            </OrderInfoText>

                            <OrderInfoText>
                                <b>Cartão de Crédito</b>
                            </OrderInfoText>
                        </div>
                    </div>
                </OrderInfoCard>

                <img src={imgSuccess} alt=""/>
            </SuccessContent>
        </SuccessContainer>
    )
}