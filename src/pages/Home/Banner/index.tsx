import {
    BannerContainer,
    BannerContent,
    BannerItem,
    BannerItemsColumn,
    BannerItemsContainer, IconCircle,
    Subtitle,
    Title
} from "./styles.ts";

import {Coffee, Package, ShoppingCartSimple, Timer} from "@phosphor-icons/react";
import coffeeHome from "../../../assets/coffee-home.svg";

export function Banner() {
    return (
        <BannerContainer>
            <BannerContent>
                <Title>Encontre o café perfeito para qualquer hora do dia</Title>
                <Subtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Subtitle>

                <BannerItemsContainer>
                    <BannerItemsColumn>
                        <BannerItem>
                            <IconCircle circleColor="yellowDark">
                                <ShoppingCartSimple size={16} weight="fill"/>
                            </IconCircle>
                            <span>Compra simples e segura</span>
                        </BannerItem>

                        <BannerItem>
                            <IconCircle circleColor="yellow">
                                <Timer size={16} weight="fill"/>
                            </IconCircle>
                            <span>Entrega rápida e rastreada</span>
                        </BannerItem>

                    </BannerItemsColumn>
                    <BannerItemsColumn>
                        <BannerItem>
                            <IconCircle circleColor="gray">
                                <Package size={16} weight="fill"/>
                            </IconCircle>
                            <span>Embalagem mantém o café intacto</span>
                        </BannerItem>

                        <BannerItem>
                            <IconCircle circleColor="purple">
                                <Coffee size={16} weight="fill"/>
                            </IconCircle>
                            <span>O café chega fresquinho até você</span>
                        </BannerItem>
                    </BannerItemsColumn>
                </BannerItemsContainer>
            </BannerContent>

            <img src={coffeeHome} alt=""/>
        </BannerContainer>
    )
}