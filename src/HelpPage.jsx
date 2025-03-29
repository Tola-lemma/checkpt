import React from "react";
import { Typography, Container, Paper } from "@mui/material";

const Help = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Help Page
        </Typography>
        <Typography paragraph>
          The <strong>Blocked IP Excel or TXT Generator</strong> helps us create an
          Excel file from a list of valid IPv4 addresses.
        </Typography>
        <Typography variant="h6">How to Use</Typography>
        <ul>
          <li>
            Enter IP addresses separated by spaces, commas, or new lines or just
            copy-paste into the provided field.
          </li>
          <li>Only valid IPv4 addresses are accepted.</li>
          <li>Duplicate IPs are automatically removed.</li>
          <li>Click the "Generate Excel" or "Generate TXT" button to download the file.</li>
        </ul>
        <Typography variant="h6">Troubleshooting</Typography>
        <ul>
          <li>Ensure IP addresses are correctly formatted.</li>
          <li>Verify that you have at least one valid IP before exporting.</li>
        </ul>
        <Typography variant="h6">Generate Excel File</Typography>
        <ul>
          <li>Click the Generate Excel or Generate TXT button.</li>
          The tool creates an Excel or TXT file with the valid IPs in the format:
          <ul>
            <li>
              Column 1: Object (e.g., Blocked_IP_March_29_2025(98.55.10.10)).
            </li>
            <li>Column 2: IP Address (e.g., 98.55.10.10).</li>
          </ul>
          The file is automatically downloaded.
          <li>
            Finally, open the Excel or TXT file and copy-paste the data directly into
            the checkpoint, eliminating the need for back-and-forth copying of
            objects and IPs from Email or shared file.  But it is important to keep in mind that we must read carefully the file that SOC analyst gives us. specialy the one that is shared as a file.
          </li>
        </ul>
      </Paper>
    </Container>
  );
};

export default Help;
