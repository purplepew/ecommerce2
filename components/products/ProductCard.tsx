import { Box, Skeleton, Chip, Typography } from "@mui/material";
import Image from "next/image";
import NextLink from 'next/link'
import React from "react";

type Props = {
    id: number,
    title: string,
    price: number,
    image: string,
    category: string
};

const cardHeight = 300
const cardWidth = 300

export const ProductCardSkeleton = () => {
    return (
        <Skeleton height={`${cardHeight}px`} width={`${cardWidth}px`} />
    )
}

export const ProductCard = (props: Props) => {
    const title = props.title
    const price = props.price
    const image = props.image
    return (
        <Box
            sx={{
                backgroundColor: 'background.paper',
                height: `${cardHeight}px`,
                width: `${cardWidth}px`,
                position: 'relative',
                color: 'inherit'
            }}
            component={NextLink}
            href={`product/${title}`}
            title='Add to cart'
            aria-label='Add to cart'
        >
            <Box
                sx={{
                    position: 'absolute',
                    zIndex: 4,
                    bottom: '1rem',
                    left: '1rem',
                    backgroundColor: 'primary.main',
                    p: '5px 10px',
                    borderRadius: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                }}
            >
               <Typography variant='caption'>{title}</Typography> 
               <Chip size='small' label='Add to cart' />
            </Box>
            <Image
                src={image}
                alt={title}
                fill={true}
                sizes="300px"
            />
        </Box>
    );
};