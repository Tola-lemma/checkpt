import React from "react";
import { Typography, Container, Paper } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>Privacy Policy</Typography>
        <Typography paragraph>
          This tool does not collect, store, or share any user data. All processing is done locally on your device.
        </Typography>
        <Typography paragraph>
          The entered IPs never leave your browser, ensuring privacy and security.
        </Typography>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy;
