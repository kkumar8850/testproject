import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Payment = () => {
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box>
      <Box
        display="flex"
        alignItems="self-start"
        sx={{
          backgroundColor: "#999093",
          color: "#eaeaea",
        }}
      >
        <CheckCircleIcon />
        <Box>
          <Typography>
            Free cancellation up to 1 hour before schedule time:
          </Typography>
          <Typography>
            otherwise cancellation of 100 Rs will applies to block driver
            schedule.
          </Typography>
          <Typography>
            Overtime rates are now 2 Rs per minute, and night charges are Rs
            200.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          p: "20px",
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography>Payment Options</Typography>
          <Button variant="outlined">Back</Button>
        </Box>
        <Box>
          <FormControl fullWidth>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                classes={{
                  root: {
                    "&.MuiFormControlLabel-label": {
                      width: "100%",
                    },
                  },
                }}
                value="female"
                control={<Radio />}
                label={
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                        width : '440px'
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontSize: "16px" }}>
                        Pay Cash
                      </Typography>
                      <Typography sx={{ fontSize: "12px" }}>
                        Pay at the end of trip
                      </Typography>
                    </Box>
                    <Typography>Rs. 660</Typography>
                  </Box>
                }
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label={
                    <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                        width : '440px'
                    }}
                    >
                        <Box>
                            <Typography sx={{ fontSize: "16px" }}>
                            Pay Online
                            </Typography>
                            <Typography sx={{ fontSize: "12px" }}>
                            Make full payment now
                            </Typography>
                        </Box>
                        <Typography>Rs. 660</Typography>
                    </Box>
                }
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
