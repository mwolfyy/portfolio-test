const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Методът не е разрешен' };
  }

  const body = JSON.parse(event.body);

  const { name, email, phone, subject, message } = body;

  // Тук добавяш твоя Google Sheet ID и credentials
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  });

  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];

  await sheet.addRow({
    Name: name,
    Email: email,
    Phone: phone || '',
    Subject: subject || '',
    Message: message,
    Timestamp: new Date().toISOString(),
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  };
};
