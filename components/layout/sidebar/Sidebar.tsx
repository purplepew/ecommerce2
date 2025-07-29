'use client'
import { ExpandMore } from '@mui/icons-material'
import { Box, Button, ClickAwayListener, Collapse, List, ListItem, Typography, useMediaQuery, useTheme } from '@mui/material'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useMemo, useState } from 'react'

export const collections = [
    'all',
    'bags',
    'drinkware',
    'electronics',
    'footwear',
    'headwear',
    'hoodies',
    'jackets',
    'kids',
    'pets',
    'shirts',
    'stickers'
]

const Sidebar = () => {
    const pathname = usePathname()

    const theme = useTheme()
    const smallScreenSize = useMediaQuery(theme.breakpoints.down('mobile'), {
        defaultMatches: false
    })

    const paramIndex = collections.findIndex(collection => collection.toLocaleLowerCase() === pathname.split('/')[2])

    const [selectedIndex, setSelectedIndex] = useState(paramIndex ?? 0)
    const [open, setOpen] = useState(false)

    const toggleDropdown = (close?: boolean) => setOpen(close ? false : !open) // when an argument is provided that is true, the dropdown closes

    const renderLinks = useMemo(() => collections.map((name, index) => {
        const target = name !== 'all' ? `/search/${name}` : '/search'
        return (
            <ListItem key={name} dense>
                <NextLink
                    href={target}
                    style={{ textDecoration: 'none' }}
                    onClick={() => {
                        setSelectedIndex(index)
                        toggleDropdown(true)
                    }}
                    prefetch={true}
                >
                    <Typography
                        variant='caption'
                        color='textPrimary'
                        sx={{
                            '&:hover': {
                                textDecoration: 'underline',
                            }
                        }}
                    >{name[0].toUpperCase() + name.substring(1)}</Typography>
                </NextLink>
            </ListItem>
        )
    }), [])

    let content

    if (!smallScreenSize) {
        content = (
            <>
                <ListItem disableGutters>
                    <Typography variant='caption' color='textSecondary'>Collections</Typography>
                </ListItem>
                <List dense>
                    {renderLinks}
                </List>
            </>
        )
    } else {
        content = (
            <ClickAwayListener onClickAway={() => toggleDropdown(true)}>
                <Box>
                    <Button
                        onClick={() => toggleDropdown()}
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        endIcon={<ExpandMore />}
                        sx={{
                            justifyContent: 'space-between'
                        }}
                    >
                        {collections[selectedIndex]}
                    </Button>
                    <Collapse
                        in={open}
                        style={{
                            position: 'absolute',
                        }}
                    >
                        <List dense
                            sx={{
                                // width: anchorEl?.offsetWidth,
                                // display: anchorEl ? 'block' : 'none'
                            }}
                        >
                            {renderLinks}
                        </List>
                    </Collapse>
                </Box>
            </ClickAwayListener>
        )
    }

    return (
        <Box>
            {content}
        </Box>
    )
}

export default Sidebar