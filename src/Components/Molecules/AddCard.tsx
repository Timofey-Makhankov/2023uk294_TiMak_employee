import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import { Link as RouterLink } from 'react-router-dom';

/**
 * The Add button request for the main page
 * @returns A Add Card molecule (component)
 */
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
