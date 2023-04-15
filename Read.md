# ADD YOUR VIDEO REQUESTS

I made this google sheet api for my viewers to add their video requests via API integration.

const {google} = require('googleapis');
## To update rows
// Authenticate with Google API
// ...

// Retrieve row data
const sheets = google.sheets({version: 'v4', auth});
const spreadsheetId = 'your-spreadsheet-id';
const range = 'Sheet1!A2:D2';
const response = await sheets.spreadsheets.values.get({
  spreadsheetId,
  range,
});

// Update row values
const row = response.data.values[0];
row[0] = 'New Value 1';
row[1] = 'New Value 2';
row[2] = 'New Value 3';
row[3] = 'New Value 4';

// Update row in Google Sheets
await sheets.spreadsheets.values.update({
  spreadsheetId,
  range,
  valueInputOption: 'USER_ENTERED',
  resource: {
    values: [row],
  },
});
