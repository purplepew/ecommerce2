'use client'
import { AppBar, Toolbar, useMediaQuery, useTheme, Stack, Box } from "@mui/material"
import Logo from "./Logo"
import Navigations from "./Navigations"
import Searchbar from "./Searchbar"
import Cart from "./Cart"
import Menu from "./Menu"


const Header = () => {
    const theme = useTheme()

    const mediumScreenSize = useMediaQuery(theme.breakpoints.down('tablet'), {
        defaultMatches: false,
    })
    const smallScreenSize = useMediaQuery(theme.breakpoints.down('mobile'), {
        defaultMatches: false
    })

    let content

    if (smallScreenSize) {
        // mobile screen
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
        //desktop screen
        content = (
            <>
                <Stack direction='row' alignItems='center' gap={3}>
                    <Logo showIconOnly={mediumScreenSize} />
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

export default Header