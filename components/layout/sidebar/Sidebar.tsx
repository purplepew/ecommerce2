'use client'
import { ExpandMore } from '@mui/icons-material'
import { Box, Button, ButtonBase, ClickAwayListener, Collapse, Link, List, ListItem, ListItemText, Menu, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import NextLink from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { MouseEvent, useCallback, useMemo, useRef, useState } from 'react'
const collections = [
    'All',
    'Bags',
    'Drinkware',
    'Electronics',
    'Footware',
    'Headwear',
    'Hoodies',
    'Jackets',
    'Kids',
    'Pets',
    'Shirts',
    'Stickers'
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

    const renderLinks = useMemo(() => collections.map((name, index) => (
        <ListItem key={name}>
            <NextLink
                href={`/search/${name.toLowerCase()}`}
                style={{ textDecoration: 'none' }}
                onClick={() => {
                    setSelectedIndex(index)
                    toggleDropdown(true)
                }}
                prefetch={true}
            >
                <Typography
                    color='secondary'
                    variant='body2'
                    sx={{
                        '&:hover': {
                            textDecoration: 'underline',
                        }
                    }}
                >{name}</Typography>
            </NextLink>
        </ListItem>
    )), [])

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