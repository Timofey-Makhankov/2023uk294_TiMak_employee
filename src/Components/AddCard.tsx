import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import { Link as RouterLink } from 'react-router-dom';

export default function AddCard() {
    return (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="Delete"
            component={RouterLink}
            to={"/create"}
            sx={{}} >
            <AddIcon />
        </IconButton>
    )
}
