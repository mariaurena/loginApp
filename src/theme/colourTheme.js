import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const colourTheme = createTheme({
    palette: {
        primary: {
            main: '#5d5042' 
        },
        secondary: {
            main: '#9ccc65' 
        },
        error: {
            main: red.A400
        }
    }
})