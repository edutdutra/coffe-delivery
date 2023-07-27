import {ReactNode} from "react";
import {IconCircleContainer, IconCircleProps} from "./styles.ts";

type Props = IconCircleProps & {
    children: ReactNode
}

export function IconCircle({children, ...rest}: Props) {
    return (
        <IconCircleContainer {...rest}>
            {children}
        </IconCircleContainer>
    )
}