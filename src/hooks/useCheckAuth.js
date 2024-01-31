import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FirebaseAuth } from "../firebase/config"
import { onAuthStateChanged } from "firebase/auth"
import { login, logout } from "../store/auth/authSlice"

// custom hook para mantener la sesión iniciada aunque se recargue la página
export const useCheckAuth = () => {

    const { status } = useSelector( state => state.auth )
    const dispatch = useDispatch()
    
    // vamos a revisar si la persona está autenticada o no
    useEffect( () => {

        // función de firebase para cuando cambia el estado de la autenticación
        // regresa un observable
        onAuthStateChanged( FirebaseAuth, async( user ) => {
        
            if ( !user ) return dispatch( logout() )

            const { uid, email, displayName, photoURL } = user
            dispatch( login({ uid, email, displayName, photoURL }) )
        
        } )

    }, [])

    return {
        status // nos indicará si está autenticado o no
    }

}