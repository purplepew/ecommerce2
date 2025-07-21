'use client'
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import { ReactNode } from "react";

type Props = { children: ReactNode }

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false,
        sm: false,
        mobile: true,
        tablet: true,
        md: true,
        lg: true,
        xl: false
    }
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#2f2f2f'
        },
        secondary: {
            main: '#fff'
        },
    },
    breakpoints: {
        values: {
            mobile: 680,
            tablet: 800,
            md: 700,
            lg: 1024
        }
    }
})

const Theme = (props: Props) => {
    return (
        <ThemeProvider theme={darkTheme}>
            {props.children}
        </ThemeProvider>
    )
}

export default Theme