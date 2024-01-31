import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { colourTheme } from "./colourTheme"

export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme = { colourTheme }>
            <CssBaseline>
                { children }
            </CssBaseline>
        </ThemeProvider>
    )
}