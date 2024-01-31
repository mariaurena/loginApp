import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { useCheckAuth } from "../hooks/useCheckAuth"
import { GalleryRoutes } from "../gallery/routes/GalleryRoutes"

export const AppRouter = () => {

    // para ver el estado del usuario (authenticated / no-authenticated)
    const { status } = useCheckAuth()

    return (
        <Routes>
            { 
                ( status === 'authenticated' ) 
                ?  <Route path = "/*" element = { <GalleryRoutes />} />
                :  <Route path = "/auth/*" element = { <AuthRoutes />} />
            }

            {/* Por si no estás autenticado e intentas acceder a cualquier ruta */}
            <Route path = '/*' element= {<Navigate to = '/auth/login' />} />
           
        </Routes>
    )
}