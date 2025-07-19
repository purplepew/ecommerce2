import { Box, ButtonBase, SxProps } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode,
    onClick: () => void,
    overrideSx?: SxProps
}

const SmallButton = ({ children, onClick, overrideSx }: Props) => {
    return (
        <Box
            sx={{
                border: '1px solid #9f9f9f',
                borderRadius: 1,
                p: 1,
                mr: 'auto',
                display: 'flex',
                alignContent: 'center',
                backgroundColor: 'primary',
                cursor: 'pointer',
                ...overrideSx
            }}
            component={ButtonBase}
            onClick={onClick}
        >
            {children}
        </Box >
    )
}

export default SmallButton