import { ShoppingCart } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import React from 'react'

type Props = {
    decreaseSize?: boolean
}

const Cart = (props: Props) => {
    return (
        <Box
            sx={{
                border: '1px solid #9f9f9f',
                borderRadius: 1,
                p: props.decreaseSize ? 1 : 1.5,
                ml: 'auto',
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
                sx={{ fill: 'none', stroke: 'currentcolor', strokeWidth: 1, fontSize: props.decreaseSize ? '1rem' : '1.2rem' }}
            />
        </Box>
    )
}

export default Cart