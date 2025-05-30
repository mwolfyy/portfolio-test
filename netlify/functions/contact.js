const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async function (event) {
  try {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    const { name, email, phone, subject, message } = JSON.parse(event.body);

    await sheet.addRow({
      Име: name,
      Имейл: email,
      Телефон: phone,
      Тема: subject,
      Съобщение: message,
      Дата: new Date().toLocaleString('bg-BG'),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Успешно изпратено!' }),
    };
  } catch (error) {
    console.error('Error submitting to Google Sheet:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Възникна грешка при изпращане' }),
    };
  }
};
