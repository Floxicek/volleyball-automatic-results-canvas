import express from 'express';
import { google } from 'googleapis';

const app = express();
const port = 3000;

app.get('/api/sheet-data', async (req, res) => {
  try {
    const sheetID = req.query.sheetID;
    const range = req.query.range;

    const auth = new google.auth.GoogleAuth({
      keyFile: "secret.json",
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetID,
      range: range,
    });

    res.json(response.data.values);
    console.log("Sheet data retrieved successfully");
  } catch (error) {
    console.error("Error retrieving sheet data:", error);
    res.status(500).json({ error: "Failed to retrieve sheet data" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});