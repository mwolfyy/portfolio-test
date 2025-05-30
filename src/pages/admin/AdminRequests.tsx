import React, { useEffect, useState } from 'react';
import CyberCard from '../../components/UI/CyberCard';
import SEOHead from '../../components/Layout/SEOHead';

const AdminRequests: React.FC = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/.netlify/functions/get-requests')
      .then(res => res.json())
      .then(data => {
        setRequests(data.requests || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleAction = (id: string, action: 'done' | 'delete' | 'pin') => {
    alert(`Действие "${action}" върху заявка с ID: ${id}`);
    // Можеш тук да добавиш реална логика за обновяване
  };

  return (
    <>
      <SEOHead title="Заявки | Админ панел" description="Всички заявки от формата за контакт" />
      <div className="pt-24 pb-20 container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Заявки от формата</h1>

        {loading ? (
          <p className="text-gray-300">Зареждане...</p>
        ) : (
          requests.map((req: any, index: number) => (
            <CyberCard key={index} glowColor="teal" className="mb-6">
              <div className="mb-2">
                <strong>Име:</strong> {req.Name}
              </div>
              <div className="mb-2">
                <strong>Имейл:</strong> {req.Email}
              </div>
              <div className="mb-2">
                <strong>Телефон:</strong> {req.Phone}
              </div>
              <div className="mb-2">
                <strong>Тема:</strong> {req.Subject}
              </div>
              <div className="mb-2">
                <strong>Съобщение:</strong> {req.Message}
              </div>
              <div className="mb-2 text-sm text-gray-400">
                <strong>Дата:</strong> {req.Date}
              </div>

              <div className="flex space-x-4 mt-4">
                <button onClick={() => handleAction(req._rowNumber, 'done')} className="px-4 py-1 bg-cyber-green/20 text-cyber-green rounded">Готово</button>
                <button onClick={() => handleAction(req._rowNumber, 'delete')} className="px-4 py-1 bg-cyber-red/20 text-cyber-red rounded">Изтрий</button>
                <button onClick={() => handleAction(req._rowNumber, 'pin')} className="px-4 py-1 bg-cyber-yellow/20 text-cyber-yellow rounded">Закачи</button>
              </div>
            </CyberCard>
          ))
        )}
      </div>
    </>
  );
};

export default AdminRequests;
