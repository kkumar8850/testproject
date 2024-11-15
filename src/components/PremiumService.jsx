import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  FormControlLabel,
  FormGroup,
  IconButton,
  Paper,
  Switch,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

const PremiumService = () => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false)
    setChecked(false)
  }

  return (
    <Paper
      sx={{
        p: "20px",
        mt: "20px",
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <PersonSearchIcon fontSize="large" />
          <Box sx={{ ml: "20px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Premium Driver</Typography>
            <Typography sx={{ fontSize: "13px" }}>
              For luxurious and reliable experience
            </Typography>
          </Box>
        </Box>
        <Box>
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={checked} onChange={handleCheck} />}
            />
          </FormGroup>
        </Box>
      </Box>
      <Dialog open={open} maxWidth="sm" fullWidth>
        <DialogContent
            sx={{
                position : 'relative'
            }}
        >
            <IconButton
                sx={{position : 'absolute', top : '20px', right : '20px'}}
                onClick={handleClose}
            >
                <CancelIcon />
            </IconButton>
            <Box
                sx={{textAlign : 'center'}}
            >
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFHZsc3xwRGK_buY_o47OogoecMLL8W_dfjw&s"
                    alt="driver_image"
                />
            </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <PersonSearchIcon fontSize="large" />
              <Box sx={{ ml: "20px" }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Premium Driver
                </Typography>
                <Typography sx={{ fontSize: "13px" }}>
                  For luxurious and reliable experience
                </Typography>
              </Box>
            </Box>
            <Typography>Rs. 500</Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "primary.main",
              mt: "20px",
              color: "#fff",
              p: "5px",
            }}
          >
            <Typography>Fare will updated with Rs. 500</Typography>
          </Box>
          <FormGroup
            sx={{mt : '20px'}}  
        >
            <FormControlLabel
              control={<Checkbox checked={consent} onChange={()=> setConsent(!consent)} />}
              label="I agree for the changes for premium driver services"
            />
          </FormGroup>
          <Box
            sx={{
              textAlign: "center",
              mt: "30px",
            }}
          >
            <Button
              variant="outlined"
              disabled={!consent}
              sx={{
                borderRadius: "50px",
                textTransform: "capitalize",
              }}
            >
              Add Premium Driver
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Paper>
  );
};

export default PremiumService;
