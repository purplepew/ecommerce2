'use client'
import { Box } from '@mui/material'
import React from 'react'
import { useParams } from 'next/navigation'

const page = () => {
    const { collection } = useParams()

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
            {collection}
        </Box>
    )
}

export default page