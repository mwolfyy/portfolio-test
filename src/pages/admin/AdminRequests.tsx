import React, { useEffect, useState } from 'react';
import CyberCard from '../../components/UI/CyberCard';
import SEOHead from '../../components/Layout/SEOHead';

const AdminRequestsPage = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch('/.netlify/functions/get-requests');
        const data = await res.json();
        setRequests(data.requests || []);
      } catch (err) {
        console.error('Error loading requests:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  return (
    <>
      <SEOHead title="Заявки | Админ" description="Всички заявки от формата за контакт" />
      <div className="pt-24 pb-20 container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Всички Заявки</h1>

        {loading ? (
          <p>Зареждане...</p>
        ) : requests.length === 0 ? (
          <p>Няма получени заявки.</p>
        ) : (
          <div className="space-y-6">
            {requests.map((req, index) => (
              <CyberCard key={index} glowColor="blue">
                <p><strong>Име:</strong> {req.name}</p>
                <p><strong>Имейл:</strong> {req.email}</p>
                <p><strong>Телефон:</strong> {req.phone}</p>
                <p><strong>Тема:</strong> {req.subject}</p>
                <p><strong>Съобщение:</strong> {req.message}</p>
                <p className="text-sm text-gray-400"><strong>Дата:</strong> {req.date}</p>
                <div className="mt-4 flex gap-3">
                  <button className="px-3 py-1 bg-green-600 rounded text-white">Готово</button>
                  <button className="px-3 py-1 bg-red-600 rounded text-white">Изтрий</button>
                  <button className="px-3 py-1 bg-yellow-500 rounded text-white">Закачи</button>
                </div>
              </CyberCard>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AdminRequestsPage;
