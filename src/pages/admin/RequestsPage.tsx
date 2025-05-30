import React, { useEffect, useState } from 'react';
import CyberCard from '../../components/UI/CyberCard';

interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  pinned?: boolean;
  done?: boolean;
}

const RequestsPage = () => {
  const [requests, setRequests] = useState<ContactRequest[]>([]);

  useEffect(() => {
    fetch('/.netlify/functions/get-requests')
      .then(res => res.json())
      .then(data => setRequests(data.requests || []))
      .catch(err => console.error('Error loading requests:', err));
  }, []);

  const handleAction = (index: number, action: 'done' | 'delete' | 'pin') => {
    setRequests(prev =>
      prev.map((req, i) =>
        i === index
          ? action === 'done'
            ? { ...req, done: true }
            : action === 'pin'
              ? { ...req, pinned: !req.pinned }
              : null
          : req
      ).filter(Boolean) as ContactRequest[]
    );
  };

  return (
    <div className="pt-24 pb-20 container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Заявки от формата</h1>
      <div className="space-y-6">
        {requests.map((req, i) => (
          <CyberCard key={i} glowColor={req.pinned ? 'pink' : 'blue'}>
            <div className="mb-2 text-sm text-gray-400">{req.date}</div>
            <div className="font-bold">{req.name} - {req.email}</div>
            {req.phone && <div>📞 {req.phone}</div>}
            {req.subject && <div>🎯 {req.subject}</div>}
            <p className="mt-2 text-gray-300">{req.message}</p>

            <div className="mt-4 flex gap-3">
              <button onClick={() => handleAction(i, 'done')} className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded">Готово</button>
              <button onClick={() => handleAction(i, 'delete')} className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded">Изтрий</button>
              <button onClick={() => handleAction(i, 'pin')} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded">{req.pinned ? 'Откачи' : 'Закачи'}</button>
            </div>
          </CyberCard>
        ))}
      </div>
    </div>
  );
};

export default RequestsPage;
