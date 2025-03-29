import React from "react";
import { Typography, Container, Paper } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>About This Tool</Typography>
        <Typography paragraph>
          The <strong>Blocked IP Excel or TXT Generator</strong> is a simple and efficient tool for generating an Excel or TXT file from a list of IPv4 addresses.
        </Typography>
        <Typography paragraph>
          It was designed to help us easily manage blocked IP lists without requiring manual formatting or rewriting the same thing many times.
        </Typography>
        <Typography variant="h6">Key Features:</Typography>
        <ul>
          <li>Automatically validates and filters IPv4 addresses.</li>
          <li>Removes duplicate entries.</li>
          <li>Exports the list into an Excel file with structured formatting that we use while blocking malicious IP on checkpoint smart console.</li>
        </ul>
      </Paper>
    </Container>
  );
};

export default About;
