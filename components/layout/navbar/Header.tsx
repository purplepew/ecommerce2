'use client'
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme, Link, Stack, Box } from "@mui/material"
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

                <Box sx={{ marginLeft: 'auto' }}>
                    <Cart decreaseSize={true} />
                </Box>
            </>
        )
    } else {
        content = (
            <>
                <Stack direction='row' alignItems='center' gap={3}>
                    <Logo isIconOnly={mediumScreenSize} />
                    <Navigations />
                </Stack>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        margin: '0 auto'
                    }}
                >
                    <Searchbar />
                </Box>

                <Box sx={{ marginLeft: 'auto' }}>
                    <Cart />
                </Box>
            </>
        )
    }

    return (
        <AppBar position='static'>
            <Toolbar>
                {content}
            </Toolbar>
        </AppBar>
    )
}

export default index