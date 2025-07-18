import React from 'react'
import NextLink from 'next/link'
import { Link, Stack, Typography } from '@mui/material'

const Navigations = () => {

    const CustomLink = ({ title, location }: { title: string, location: string }) => {
        return (
            <Link component={NextLink} href={location} >
                <Typography
                    color='secondary'
                    variant='body2'
                    sx={{ '&:hover': { textDecoration: 'underline', opacity: .7 } }}
                >
                    {title}
                </Typography>
            </Link>
        )
    }

    return (
        <Stack direction='row' gap={1}>
            <CustomLink title='All' location='/search' />
            <CustomLink title='Shirts' location='/search/shirts' />
            <CustomLink title='Stickers' location='/search/stickers' />
        </Stack>
    )
}

export default Navigations