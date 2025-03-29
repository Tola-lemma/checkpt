# Blocked IP List Generator

## Overview
The **Blocked IP List Generator** is a simple and efficient web-based tool built with **React (MUI)** that allows users to input IP addresses, validate them, and export the formatted list as an **Excel (.xlsx) or Text (.txt) file**. This tool eliminates manual errors and enhances efficiency in managing blocked IP lists.

## Features
- **Input IPs**: Enter IPs separated by spaces, commas, or new lines.
- **Automatic Validation**: Ensures only valid IPv4 addresses are accepted.
- **Duplicate Removal**: Automatically removes duplicate entries.
- **Export Formats**: Supports downloading the list as **Excel (.xlsx) or Text (.txt)**.
- **User-Friendly UI**: Built using **React with MUI** for an intuitive interface.

## Installation
To run this project locally, follow these steps:

### Prerequisites
Ensure you have **Node.js** and **npm**  installed.

### Steps
1. Clone the repository:
   ```sh
   git clone myrepo
   cd checkpt
   ```
2. Install dependencies:
   ```sh
   npm install  
   ```
3. Start the development server:
   ```sh
   npm run dev  
   ```
4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## Usage
1. Enter IP addresses in the input field.
2. The tool automatically validates and filters valid IPv4 addresses.
3. Click **Generate Excel** to download an `.xlsx` file.
4. Click **Generate TXT** to download a `.txt` file.
5. Use the **delete button** to remove any unwanted IPs from the list.

## Deployment
To deploy the project:
```sh
npm run build  # or yarn build
```
Then deploy the `dist/` folder to any static hosting service (e.g., **Render, Vercel, Netlify, or GitHub Pages**).

## Privacy Policy
- The tool does **not store any data**.
- All processing happens locally on the user's browser.
- No data is sent to any external server.

## Contributing
Contributions are welcome! Feel free to **fork the repo** and submit a pull request.

## License
This project is licensed under the **MIT License**.

---
