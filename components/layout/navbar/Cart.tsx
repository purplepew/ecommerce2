import SmallButton from '@/components/SmallButton'
import { Close, ShoppingCart } from '@mui/icons-material'
import { Box, Collapse, Drawer, Menu, Slide, Stack, Toolbar, Typography } from '@mui/material'
import React, { MouseEvent, useState } from 'react'

type Props = {
    decreaseSize?: boolean
}

const Cart = (props: Props) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>()
    const open = Boolean(anchorEl)

    const handleOpen = (e: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <SmallButton
                overrideSx={{
                    '&:hover': {
                        '& > *': {
                            transform: 'scale(1.2)',
                            transition: 'transform .4s',
                        }
                    },
                    ...(props.decreaseSize && { p: 1 }),
                    zIndex: 1
                }}
                onClick={handleOpen}
                title='Cart history'
                icon={
                    <ShoppingCart
                        sx={{ fill: 'none', stroke: 'currentcolor', strokeWidth: 1, fontSize: props.decreaseSize ? '1rem' : '1.2rem' }}
                    />
                }
            />
            <Drawer open={open} onClose={handleClose} anchor='right'>
                <Box
                    sx={{
                        backgroundColor: '#000',
                        height: '100vh',
                        width: '400px'
                    }}
                >
                    <Toolbar
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography>My Cart</Typography>
                        <SmallButton
                            onClick={handleClose}
                            title='Close Cart'
                            icon={
                                <Close sx={{ stroke: 'none', fontSize: '1rem' }} />
                            }
                            overrideSx={{ marginLeft: 'auto' }}
                        />
                    </Toolbar>


                    
                </Box>
            </Drawer>
        </>
    )
}

export default Cart