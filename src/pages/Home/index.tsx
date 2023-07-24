import {
    BannerContainer,
    BannerContent,
    BannerItem,
    BannerItemsColumn,
    BannerItemsContainer,
    HomeContainer, IconCircle,
    Subtitle,
    Title
} from "./styles.ts";
import coffeHome from "../../assets/coffe-home.svg";
import {Coffee, Package, ShoppingCart, Timer} from "@phosphor-icons/react";

export function Home() {
    return (
        <HomeContainer>
            <BannerContainer>
                <BannerContent>
                    <Title>Encontre o café perfeito para qualquer hora do dia</Title>
                    <Subtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Subtitle>

                    <BannerItemsContainer>
                        <BannerItemsColumn>
                            <BannerItem>
                                <IconCircle circleColor="yellowDark">
                                    <ShoppingCart size={16} weight="fill"/>
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

                <img src={coffeHome} alt=""/>
            </BannerContainer>


            <span>LISTA DE CAFÉS</span>
        </HomeContainer>
    )
}