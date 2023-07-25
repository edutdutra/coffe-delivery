import {Banner} from "./Banner";

import {HomeContainer} from "./styles.ts";


export function Home() {
    return (
        <HomeContainer>
            <Banner />

            <span>LISTA DE CAFÉS</span>
        </HomeContainer>
    )
}