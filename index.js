const express = require("express");

const { google } = require("googleapis")

const spreadsheetId = "138hLBPL_QWZhJgv4nCZtZDYSGpCyxmVnwdbTyl2qhlA"

const app = express();

app.get("/add-video-requests", async (req, res) => {
    // res.send("hello world")
    const auth = new google.auth.GoogleAuth({
        keyFile: 'creator-app-key.json',
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    });

    // create client instance for auth

    const client = await auth.getClient();


    // Instance of Google sheets API

    const googleSheets = google.sheets({ version: "v4", auth: client }); // object to access information


    // get meta data about spread shit

    // const metadata = await googleSheets.spreadsheets.get({
    //     auth,
    //     spreadsheetId,

    // });

    // read rows from spreadsheet


    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Sheet1!A:A"
    })


    // WRITE ROWS TO SPREADSHEET

    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Sheet1!A:B",
        valueInputOption: "USER_ENTERED",

        resource: {
            values: [
                ["Make a tutorial2", "My new name"],
                ["Make a tutorial3", "My new name"],
            ]
        }

    })

    res.send(getRows.data)

})

const PORT = 2345;

app.listen(PORT, () => {
    console.log(`listening on ${PORT} `)
})