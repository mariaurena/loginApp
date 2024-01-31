import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth/thunks";

export const NavBar = () => {

    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch( startLogout() )
    }

    const { displayName } = useSelector( state => state.auth )

    return (
        <AppBar
            position='fixed'
        >

            <Toolbar>
                <IconButton
                    // color heredado
                    color = 'inherit'
                    edge = "start"
                    sx = {{ mr:2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction = 'row' justifyContent = 'space-between' alignItems = 'center'>
                    <Typography variant = 'h6' noWrap component = 'div'>
                        { displayName }
                    </Typography>

                    <IconButton 
                        onClick={ onLogout }
                        color = 'error'>
                        <LogoutOutlined />
                    </IconButton>

                </Grid>
            </Toolbar>

        </AppBar>
    )
}