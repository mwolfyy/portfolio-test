import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/UI/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-cyber-black bg-grid-pattern bg-grid-pattern opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            SEO <span className="neon-text">Оптимизация</span> за Българския Пазар
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Помагам на българските бизнеси да постигнат по-добра видимост в Google и да привлекат повече клиенти чрез професионални SEO услуги.
          </p>
          
          <div className="flex flex-col items-center md:flex-row justify-center gap-4 mt-8">
            <Link href="/uslugi" className="w-full md:w-auto">
              <Button variant="primary" size="lg" icon={<ArrowRight size={20} />} fullWidth className="text-lg md:text-base">
                Разгледай Услугите
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-cyber-purple text-4xl font-bold mb-2">1</div>
              <div className="text-gray-400">Година Опит</div>
            </div>
            
            <div className="p-4">
              <div className="text-cyber-blue text-4xl font-bold mb-2">5+</div>
              <div className="text-gray-400">Успешни Проекти</div>
            </div>
            
            <div className="p-4">
              <div className="text-cyber-teal text-4xl font-bold mb-2">90%</div>
              <div className="text-gray-400">Клиенти на Първа Страница</div>
            </div>
            
            <div className="p-4">
              <div className="text-cyber-pink text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-400">Поддръжка</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;