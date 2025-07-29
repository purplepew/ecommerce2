import { Box, ButtonBase, SxProps } from '@mui/material'
import { JSX, MouseEvent, ReactNode } from 'react'

type Props = {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void,
    overrideSx?: SxProps,
    title: string,
    icon: JSX.Element
}

const SmallButton = ({ onClick, overrideSx, title, icon }: Props) => {

    return (
        <Box
            sx={{
                border: '1px solid #9f9f9f',
                borderRadius: 1,
                p: 1,
                display: 'flex',
                alignContent: 'center',
                backgroundColor: 'primary',
                cursor: 'pointer',
                ...overrideSx
            }}
            component={ButtonBase}
            onClick={onClick}
            title={title}
        >
            {icon}
        </Box >
    )
}

export default SmallButton