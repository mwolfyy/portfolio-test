// netlify/functions/get-requests.js
const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async function () {
  try {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    const requests = rows.map(row => ({
      name: row.Name,
      email: row.Email,
      phone: row.Phone,
      subject: row.Subject,
      message: row.Message,
      date: row.Date,
    }));

    return {
      statusCode: 200,
      body: JSON.stringify({ requests }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
