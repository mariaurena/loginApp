import { Grid, Typography } from '@mui/material'
import '../../styles/GlassEffect.css'

// contiene todo lo que queremos reutilizar del auth
export const AuthLayout = ({ children, title = '' }) => {


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
