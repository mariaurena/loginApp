import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { useCheckAuth } from "../hooks/useCheckAuth"

export const AppRouter = () => {

    // para ver el estado del usuario (authenticated / no-authenticated)
    const { status } = useCheckAuth()

    return (
        <Routes>
            { 
                ( status === 'authenticated' ) 
                ?  <Route path = "/auth/*" element = { <AuthRoutes />} />
                :  <Route path = "/auth/*" element = { <AuthRoutes />} />
            }
           
        </Routes>
    )
}