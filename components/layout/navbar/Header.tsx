'use client'
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme, Link, Stack } from "@mui/material"
import Logo from "./Logo"
import Navigations from "./Navigations"
import Searchbar from "./Searchbar"
import Cart from "./Cart"
import Menu from "./Menu"

const index = () => {
    const theme = useTheme()
    const mediumScreenSize = useMediaQuery(theme.breakpoints.down('md'), {
        defaultMatches: false,
    })
    const smallScreenSize = useMediaQuery(theme.breakpoints.down('sm'), {
        defaultMatches: false
    })

    let content

    if (smallScreenSize) {
        content = (
            <>
                <Menu />
                <Logo />
                <Cart decreaseSize={true} />
            </>
        )
    } else {
        content = (
            <>
                <Stack direction='row' alignItems='center' gap={3}>
                    <Logo isIconOnly={mediumScreenSize} />
                    <Navigations />
                </Stack>

                <Searchbar />

                <Cart />
            </>
        )
    }

    return (
        <AppBar>
            <Toolbar>
                {content}
            </Toolbar>
        </AppBar>
    )
}

export default index