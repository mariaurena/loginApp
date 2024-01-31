import { Grid, IconButton, Typography } from '@mui/material'
import '../../styles/GlassEffect.css'
import { LogoutOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../store/auth/thunks'
import { useMemo } from 'react'

// contiene todo lo que queremos reutilizar del auth
export const AuthLayout = ({ children, title = '' }) => {

  const { status, displayName } = useSelector( state => state.auth )

  const isAuthenticated = useMemo( () => status === 'authenticated', [status])

  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch( startLogout() )
  }

  return (
    <Grid
      container 
      className="glass-container"
      direction = "column"
      alignItems = "center"
      justifyContent = "center"
      // sx coge primary.main de nuestro purpleTheme
      sx = {{ 
        minHeight: '100vh', 
        backgroundColor: 'primary.main', 
        padding: 4 }}
      >
        <Typography
          variant='h4'
          sx={{ position: 'absolute', top: 5, right: 60 }}>
        
          { displayName }

        </Typography>
        
        <IconButton 
          disabled = { !isAuthenticated }
          onClick={ onLogout }
          color = 'error'
          sx={{ position: 'absolute', top: 0, right: 0 }}>
          <LogoutOutlined fontSize='large'/>
        </IconButton>

        <Grid
          item 
          className="glass-content"
          xs = { 3 }
          // estilo
          sx = {{ 
              width: { sm: 400 },
              padding: 4, 
          }}>

          <Typography 
            variant= 'h5' 
            sx = {{ mb: 1 , fontWeight: 'bold'}}>
              { title }
          </Typography>

        { children }

        </Grid>

    </Grid>
  )
}
