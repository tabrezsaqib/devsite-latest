import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';

export default function SelectedFilter() {
    const { activeFilterList } = useSelector(state => state.selector);
    const handleDelete = () => {
        alert('You clicked the delete icon.');
    };

    return (
        <Stack direction="row" spacing={1}>
            {activeFilterList.map((option, index) => (
                <Chip label={option} key={option + index} sx={{ textTransform: 'capitalize' }} variant="outlined" onDelete={handleDelete} />
            ))}
        </Stack>
    );
}