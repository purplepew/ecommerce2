'use client'
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme, Link, Stack } from "@mui/material"
import Logo from "./Logo"
import Navigations from "./Navigations"
import Searchbar from "./Searchbar"
import Cart from "./Cart"

const index = () => {
    const theme = useTheme()
    const isTight = useMediaQuery(theme.breakpoints.down('md'), {
        defaultMatches: false,
    })

    return (
        <AppBar>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Stack direction='row' alignItems='center' gap={2}>
                    <Logo isIconOnly={Boolean(isTight)} />
                    <Navigations />
                </Stack>

                <Searchbar />

                <Cart />
            </Toolbar>
        </AppBar>
    )
}

export default index