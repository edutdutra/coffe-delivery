import { Route, Routes } from 'react-router-dom'

export function Router() {
    return (
        <Routes>
            {/*ToDo - Criar default layout */}
            <Route path="/">
                {/*ToDo - Adicionar as rotas conforme for criando as pages dentro do layout */}
                <Route path="/" />
            </Route>
        </Routes>
    )
}
