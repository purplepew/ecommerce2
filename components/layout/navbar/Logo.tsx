import React from 'react'
import { Details } from '@mui/icons-material'
import { Typography, Link, Box } from '@mui/material'
import NextLink from "next/link"


type Props = { isIconOnly?: boolean }

const Logo = ({ isIconOnly = false }: Props) => {

    const LogoIcon = () => (
        <Box
            sx={{
                backgroundColor: '#000',
                border: '.5px solid #8f8f8f',
                borderRadius: 2,
                p: '.2rem .4rem'
            }}
        >
            <Details color='secondary' fontSize={'small'} />
        </Box>
    )

    if (isIconOnly) {
       return <LogoIcon />
    } else {
        return (
            <Link
                href="/"
                prefetch={true}
                component={NextLink}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: .5
                }}
            >
                <LogoIcon />
                <Typography variant='body2' color='secondary'>XD STORE</Typography>
            </Link>
        )
    }
}

export default Logo