import { Close, Menu as MenuIcon } from '@mui/icons-material'
import { Box, ButtonBase, Collapse, IconButton, List, ListItem, Modal, Slide, Toolbar, Typography } from '@mui/material'
import React, { JSX, useState } from 'react'
import Navigations from './Navigations'
import Searchbar from './Searchbar'

const Menu = () => {
    const [open, setOpen] = useState(false)

    const toggle = () => setOpen(!open)

    const CustomButton = ({ children, onClick }: { children: JSX.Element, onClick: () => void }) => {
        return (
            <Box
                sx={{
                    border: '1px solid #9f9f9f',
                    borderRadius: 1,
                    p: 1,
                    mr: 'auto',
                    display: 'flex',
                    alignContent: 'center',
                    backgroundColor: 'primary',
                    cursor: 'pointer',
                }}
                component={ButtonBase}
                onClick={onClick}
            >
                {children}
            </Box>
        )
    }

    return (
        <>
            <CustomButton onClick={toggle}>
                <MenuIcon sx={{ fontSize: '1rem' }} />
            </CustomButton>

            <Slide
                in={open}
                direction='right'
                style={{ zIndex: 4 }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        backgroundColor: '#000',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <Toolbar>
                        <CustomButton onClick={toggle}>
                            <Close sx={{ fontSize: '1rem' }} />
                        </CustomButton>
                    </Toolbar>

                    <Box
                        sx={{
                            textAlign: 'left',
                            '&>*': {
                                transform: 'none'
                            },
                            px: 2
                        }}
                    >
                        <Searchbar />
                    </Box>

                    <Box
                        sx={{
                            '&>*>*': { fontSize: '2rem' },
                            px: 2
                        }}
                    >
                        <Navigations />
                    </Box>
                </Box>
            </Slide>
        </>
    )
}

export default Menu