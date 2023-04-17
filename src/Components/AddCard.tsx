import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'

export default function AddCard() {
    const handleClick = () => {
        alert("You clicked me!")
    }

    return (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="Delete"
            onClick={handleClick}
            sx={{}} >
            <AddIcon />
        </IconButton>
    )
}
