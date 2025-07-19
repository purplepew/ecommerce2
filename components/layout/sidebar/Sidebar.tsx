import { Box, Link, List, ListItem, ListItemText, Typography } from '@mui/material'
import NextLink from 'next/link'
import React from 'react'
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
    return (
        <Box>
            <List dense>
                <ListItem disableGutters>
                    <Typography variant='caption' color='textSecondary'>Collections</Typography>
                </ListItem>
                {collections.map(name => (
                    <ListItem key={name} disableGutters>
                        <NextLink
                            href={`/search/${name}`}
                            prefetch={true}
                            style={{ textDecoration: 'none' }}
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
                ))}
            </List>
        </Box>
    )
}

export default Sidebar