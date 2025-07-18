'use client'
import { createTheme, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

type Props = { children: ReactNode }

const defaultTheme = createTheme({})

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
            ...defaultTheme.breakpoints.values,
            sm: 680
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