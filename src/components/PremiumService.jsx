import { Box, FormControlLabel, FormGroup, Paper, Switch, Typography } from '@mui/material'
import React from 'react'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const PremiumService = () => {
    return (
        <Paper
            sx={{
                p : '20px',
                mt : '20px'
            }}
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Box
                    display="flex"
                    alignItems="center"
                >
                    <PersonSearchIcon 
                        fontSize="large"
                    />
                    <Box
                        sx={{ml : '20px'}}
                    >
                        <Typography sx={{fontWeight : 'bold'}}>Premium Driver</Typography>
                        <Typography sx={{fontSize : '13px'}}>For luxurious and reliable experience</Typography>
                    </Box>
                </Box>
                <Box>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />}/>
                    </FormGroup>
                </Box>
            </Box>
        </Paper>
    )
}

export default PremiumService