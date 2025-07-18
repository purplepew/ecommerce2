'use client'
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme, Link } from "@mui/material"
import Logo from "./Logo"
import Navigations from "./Navigations"

const index = () => {
    const theme = useTheme()
    const isTight = useMediaQuery(theme.breakpoints.down('md'), {
        defaultMatches: false,
    })

    return (
        <AppBar>
            <Toolbar sx={{justifyContent: 'space-around'}}>
                <Logo isIconOnly={Boolean(isTight)} />
                <Navigations />
            </Toolbar>
        </AppBar>
    )
}

export default index