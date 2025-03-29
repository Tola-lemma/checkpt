import React, { useState } from "react";
import { Button, TextField,AppBar, Toolbar, Container, Typography, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import HelpPrivacy from './HelpPage'
const isValidIPv4 = (ip) => {
  const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)$/;
  return ipv4Regex.test(ip);
};

const getFormattedDate = () => {
  const today = new Date();
  const month = today.toLocaleString("en-US", { month: "long" });
  const day = today.getDate();
  const year = today.getFullYear();
  return `${month}_${day}_${year}`;
};

const App = () => {
  const [ips, setIps] = useState("");
  const [validIps, setValidIps] = useState([]);

  const handleInputChange = (e) => {
    const inputText = e.target.value.trim();
    const ipList = inputText.split(/[\s,]+/).filter(ip => isValidIPv4(ip)); // Validate and filter IPs
    const uniqueIps = [...new Set(ipList)]; // Remove duplicates
    setIps(e.target.value);
    setValidIps(uniqueIps);
  };

  const handleDeleteIp = (ipToDelete) => {
    setValidIps(validIps.filter(ip => ip !== ipToDelete));
  };

  const handleExport = () => {
    if (validIps.length === 0) {
      alert("No valid IPs to export!");
      return;
    }

    const formattedDate = getFormattedDate();
    const data = validIps.map(ip => ({
      Object: `Blocked_IP_${formattedDate}(${ip})`,
      "IP Address": ip
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Blocked IPs");

    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8" });
    saveAs(blob, `Blocked_IPs_${formattedDate}.xlsx`);
  };
  const handleExportTxt = () => {
    if (validIps.length === 0) {
      alert("No valid IPs to export!");
      return;
    }
  
    const formattedDate = getFormattedDate();
    const data = validIps
      .map(ip => `Blocked_IP_${formattedDate}(${ip}) \t|\t ${ip}`)
      .join("\n"); // Format each line
  
    const blob = new Blob([data], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `Blocked_IPs_${formattedDate}.txt`);
  };
  
  return (
    <Container maxWidth="sm">
      <Typography variant="h5" mt={3} gutterBottom>Malicious IP Excel or TXT Generator</Typography>
      
      <TextField
        label="Enter IPs (separated by space/newline or paste)"
        multiline
        rows={4}
        fullWidth
        value={ips}
        onChange={handleInputChange}
        variant="outlined"
        margin="normal"
      />

      {validIps.length > 0 && (
        <List>
          {validIps.map((ip, index) => (
            <ListItem key={index} secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteIp(ip)}>
                <Delete />
              </IconButton>
            }>
              <ListItemText primary={`Blocked_IP_${getFormattedDate()}(${ip})`} />
            </ListItem>
          ))}
        </List>
      )}

      <Button variant="contained" sx={{ mt: 2 }} color="primary" onClick={handleExport}>Generate Excel</Button>
      <Button variant="contained" sx={{ mt: 2, ml: 2 }} color="secondary" onClick={handleExportTxt}>
  Generate TXT
</Button>

    </Container>
  );
};

export default App;
