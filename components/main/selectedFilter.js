import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';
import { activeFilterData } from '../../redux/actions/selectorFilterAction';

export default function SelectedFilter() {
    const { activeFilterList } = useSelector(state => state.selector);
    const dispatch = useDispatch();
    const handleDelete = (option) => {
        const filterIndex = activeFilterList.indexOf(option)
        const newFilter = [...activeFilterList]
        newFilter.splice(filterIndex, 1)
        dispatch(activeFilterData(newFilter))
    };

    const handleClearAll = () => {
        dispatch(activeFilterData([]))
    };

    return (
        <div style={{ marginBottom: '10px' }}>
            {activeFilterList.length >= 1 && <div style={{ marginBottom: '10px' }}> {activeFilterList.length} item(s) Selected. <span className='linklike' onClick={handleClearAll} >Clear All</span></div>}
            <Stack direction="row" spacing={1}>
                {activeFilterList.map((option, index) => (
                    <Chip label={option} key={option + index} sx={{ textTransform: 'capitalize' }} variant="outlined" onDelete={(option) => handleDelete(option)} />
                ))}
            </Stack>
            <style jsx>
                {`.linklike{
                        text-decoration: underline;
                        color: #0d6efd;
                        cursor: pointer;
                        margin-left: 5px;
                }`}
            </style>
        </div>
    );
}