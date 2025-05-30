const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('../../creds.json'); // Тук добавяш своя .json файл с credentials

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body);

    const doc = new GoogleSpreadsheet('YOUR_SHEET_ID');
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({
      Name: data.name,
      Email: data.email,
      Phone: data.phone || '',
      Subject: data.subject || '',
      Message: data.message,
      Timestamp: new Date().toISOString()
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };

  } catch (err) {
    console.error('Error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Грешка при записване в Sheets' }),
    };
  }
};