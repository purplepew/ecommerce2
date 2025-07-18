'use client'
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material"
import Logo from "./Logo"

const index = () => {
    const theme = useTheme()
    const isTight = useMediaQuery(theme.breakpoints.down('md'), {
        defaultMatches: false,
    })

    return (
        <AppBar>
            <Toolbar>
                <Logo isIconOnly={Boolean(isTight)} />
            </Toolbar>
        </AppBar>
    )
}

export default index