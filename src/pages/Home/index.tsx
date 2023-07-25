import {Banner} from "./Banner";

import {HomeContainer} from "./styles.ts";
import {CoffeeCard} from "./CoffeeCard";


export function Home() {
    return (
        <HomeContainer>
            <Banner />

            <CoffeeCard />
        </HomeContainer>
    )
}