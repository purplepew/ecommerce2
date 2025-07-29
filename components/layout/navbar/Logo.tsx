import React from 'react'
import { Details } from '@mui/icons-material'
import { Typography, Link, Box } from '@mui/material'
import NextLink from "next/link"


type Props = { showIconOnly?: boolean }

const Logo = ({ showIconOnly = false }: Props) => {

    const LogoIcon = () => (
        <Link
            sx={{
                backgroundColor: '#000',
                border: '.5px solid #8f8f8f',
                borderRadius: 2,
                p: '.2rem .4rem',
            }}
            href="/"
            prefetch={true}
            component={NextLink}
        >
            <Details color='secondary' fontSize={'small'} />
        </Link>
    )

    if (showIconOnly) {
        return (
            <LogoIcon />
        )
    } else {
        return (
            <Box 
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1
            }}
            >
                <LogoIcon />
                <Typography variant='body2' color='secondary'>XD STORE</Typography>
            </Box>
        )
    }
}

export default Logo