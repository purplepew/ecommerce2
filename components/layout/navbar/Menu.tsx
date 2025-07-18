import { Menu as MenuIcon } from '@mui/icons-material'
import { Box, ButtonBase, Collapse, List, ListItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import Navigations from './Navigations'

const Menu = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
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
                onClick={() => setOpen(!open)}
            >
                <MenuIcon sx={{ fontSize: '1rem' }} />
            </Box>
            <Collapse
                in={open}
                orientation='horizontal'

            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        backgroundColor: '#000',
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >

                    <Navigations />
                </Box>
            </Collapse>
        </>
    )
}

export default Menu