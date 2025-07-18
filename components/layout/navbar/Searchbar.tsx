import { InputBase, Box, TextField, InputAdornment } from '@mui/material'
import React from 'react'
import { Search } from '@mui/icons-material'

const Searchbar = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}
        >
            <TextField
                placeholder='Search for a product'
                size='small'
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position='end'>
                                <Search fontSize={'small'}/>
                            </InputAdornment>
                        )
                    }
                }}
            />
        </Box>
    )
}

export default Searchbar