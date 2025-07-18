import { ShoppingCart } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import React from 'react'

const Cart = () => {
    return (
        <Box
            sx={{
                border: '1px solid #9f9f9f',
                borderRadius: 1,
                p: 1.5,
                display: 'flex',
                alignContent: 'center',
                backgroundColor: 'primary',
                cursor: 'pointer',
                '&:hover': {
                    '& > *': {
                        transform: 'scale(1.2)',
                        transition: 'transform .4s'
                    }
                }
            }}
        >
            <ShoppingCart
                sx={{ fill: 'none', stroke: 'currentcolor', strokeWidth: .5, fontSize: '1.2rem' }}
            />
        </Box>
    )
}

export default Cart