import { Handler } from '@netlify/functions';
import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { format } from 'date-fns-tz';

const analyticsDataClient = new BetaAnalyticsDataClient();

const propertyId = process.env.GA_PROPERTY_ID; // трябва да е от вида "properties/XXXXXXX"

export const handler: Handler = async () => {
  try {
    // Форматиране на вчерашна дата (00:00 BG TIME)
    const timeZone = 'Europe/Sofia';
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const formattedDate = format(yesterday, 'yyyy-MM-dd', { timeZone });

    const [response] = await analyticsDataClient.runReport({
      property: propertyId,
      dateRanges: [
        {
          startDate: formattedDate,
          endDate: formattedDate,
        },
      ],
      metrics: [
        { name: 'users' },
        { name: 'screenPageViews' },
        { name: 'averageSessionDuration' },
        { name: 'bounceRate' },
      ],
    });

    const row = response.rows?.[0]?.metricValues || [];

    const results = {
      visitors: parseInt(row[0]?.value || '0', 10),
      pageViews: parseInt(row[1]?.value || '0', 10),
      avgTimeOnPage: formatSeconds(Number(row[2]?.value || '0')),
      bounceRate: `${parseFloat(row[3]?.value || '0').toFixed(2)}%`,
    };

    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
  } catch (error: any) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Грешка при извличане на аналитични данни', error }),
    };
  }
};

// Хелпър: конвертира секунди във формат mm:ss
function formatSeconds(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
