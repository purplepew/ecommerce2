import SmallButton from '@/components/SmallButton'
import { ShoppingCart } from '@mui/icons-material'
import React from 'react'

type Props = {
    decreaseSize?: boolean
}

const Cart = (props: Props) => {
    return (
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
            onClick={() => { }}
        >
            <ShoppingCart
                sx={{ fill: 'none', stroke: 'currentcolor', strokeWidth: 1, fontSize: props.decreaseSize ? '1rem' : '1.2rem' }}
            />
        </SmallButton >
    )
}

export default Cart