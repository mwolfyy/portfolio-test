import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Users, ExternalLink, TrendingUp, Activity } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import CyberCard from '../../components/UI/CyberCard';
import { useBlogStore } from '../../store/blogStore';

const AdminDashboard: React.FC = () => {
  const { posts } = useBlogStore();
  
  const publishedCount = posts.filter(post => post.status === 'published').length;
  const draftCount = posts.filter(post => post.status === 'draft').length;

  // For demo purposes, these would normally come from analytics
  const stats = {
    visitors: 1245,
    pageViews: 3842,
    avgTimeOnPage: '2:35',
    bounceRate: '45%',
  };

  return (
    <>
      <SEOHead
        title="Админ панел | SEO Специалист Станчев"
        description="Административен панел"
        canonicalUrl="https://stanchev-seo.bg/admin"
      />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h1 className="text-3xl font-bold mb-4 md:mb-0">
              <span className="neon-text">Админ</span> панел
            </h1>
            <Link to="/" className="text-cyber-blue hover:text-cyber-purple transition-colors flex items-center">
              <ExternalLink size={18} className="mr-2" />
              Към сайта
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <CyberCard glowColor="purple">
              <div className="flex items-start">
                <div className="p-3 rounded-md bg-cyber-purple/20 mr-4">
                  <FileText className="text-cyber-purple" size={24} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Публикации</div>
                  <div className="text-2xl font-bold">{publishedCount}</div>
                </div>
              </div>
            </CyberCard>
            
            <CyberCard glowColor="blue">
              <div className="flex items-start">
                <div className="p-3 rounded-md bg-cyber-blue/20 mr-4">
                  <Users className="text-cyber-blue" size={24} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Посетители</div>
                  <div className="text-2xl font-bold">{stats.visitors}</div>
                </div>
              </div>
            </CyberCard>
            
            <CyberCard glowColor="teal">
              <div className="flex items-start">
                <div className="p-3 rounded-md bg-cyber-teal/20 mr-4">
                  <TrendingUp className="text-cyber-teal" size={24} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Преглеждания</div>
                  <div className="text-2xl font-bold">{stats.pageViews}</div>
                </div>
              </div>
            </CyberCard>
            
            <CyberCard glowColor="pink">
              <div className="flex items-start">
                <div className="p-3 rounded-md bg-cyber-pink/20 mr-4">
                  <Activity className="text-cyber-pink" size={24} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Отскачане</div>
                  <div className="text-2xl font-bold">{stats.bounceRate}</div>
                </div>
              </div>
            </CyberCard>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blog Overview */}
            <div className="lg:col-span-2">
              <CyberCard glowColor="purple" className="mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Преглед на блога</h2>
                  <Link to="/admin/blog" className="text-cyber-blue hover:text-cyber-purple transition-colors">
                    Виж всички
                  </Link>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-3 text-gray-400 text-sm border-b border-cyber-gray pb-2">
                    <div>Заглавие</div>
                    <div>Дата</div>
                    <div>Статус</div>
                  </div>
                  
                  {posts.slice(0, 5).map((post) => (
                    <div key={post.id} className="grid grid-cols-3 items-center">
                      <div className="truncate pr-4">{post.title}</div>
                      <div className="text-gray-400">
                        {new Date(post.publishedAt).toLocaleDateString('bg-BG')}
                      </div>
                      <div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          post.status === 'published' 
                            ? 'bg-cyber-green/20 text-cyber-green' 
                            : 'bg-cyber-yellow/20 text-cyber-yellow'
                        }`}>
                          {post.status === 'published' ? 'Публикувана' : 'Чернова'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-cyber-gray flex justify-between">
                  <div>
                    <span className="text-gray-400">Публикувани:</span> <span className="font-bold">{publishedCount}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Чернови:</span> <span className="font-bold">{draftCount}</span>
                  </div>
                  <Link 
                    to="/admin/blog/нов" 
                    className="text-cyber-purple hover:text-cyber-pink transition-colors"
                  >
                    + Нова публикация
                  </Link>
                </div>
              </CyberCard>
              
              {/* Analytics */}
              <CyberCard glowColor="blue">
                <h2 className="text-xl font-bold mb-6">Аналитични данни</h2>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="text-gray-400">Посетители</div>
                      <div className="font-bold">{stats.visitors}</div>
                    </div>
                    <div className="h-2 bg-cyber-gray rounded-full overflow-hidden">
                      <div className="h-full bg-cyber-blue rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="text-gray-400">Преглеждания на страница</div>
                      <div className="font-bold">{stats.pageViews}</div>
                    </div>
                    <div className="h-2 bg-cyber-gray rounded-full overflow-hidden">
                      <div className="h-full bg-cyber-purple rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="text-gray-400">Ср. време на страница</div>
                      <div className="font-bold">{stats.avgTimeOnPage}</div>
                    </div>
                    <div className="h-2 bg-cyber-gray rounded-full overflow-hidden">
                      <div className="h-full bg-cyber-pink rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="text-gray-400">Процент на отскачане</div>
                      <div className="font-bold">{stats.bounceRate}</div>
                    </div>
                    <div className="h-2 bg-cyber-gray rounded-full overflow-hidden">
                      <div className="h-full bg-cyber-teal rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>
              </CyberCard>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Quick Actions */}
              <CyberCard glowColor="teal">
                <h2 className="text-xl font-bold mb-6">Бързи действия</h2>
                
                <div className="space-y-3">
                  <Link to="/admin/blog/нов" className="block p-4 bg-cyber-gray hover:bg-cyber-gray/80 rounded-md transition-colors">
                    <div className="font-medium">Нова публикация</div>
                    <div className="text-sm text-gray-400">Създайте нова публикация в блога</div>
                  </Link>
                  
                  <Link to="/admin/blog" className="block p-4 bg-cyber-gray hover:bg-cyber-gray/80 rounded-md transition-colors">
                    <div className="font-medium">Управление на блога</div>
                    <div className="text-sm text-gray-400">Редактирайте или изтрийте публикации</div>
                  </Link>
                  
                  <a href="/" target="_blank" rel="noopener noreferrer" className="block p-4 bg-cyber-gray hover:bg-cyber-gray/80 rounded-md transition-colors">
                    <div className="font-medium">Преглед на сайта</div>
                    <div className="text-sm text-gray-400">Отворете сайта в нов раздел</div>
                  </a>
                </div>
              </CyberCard>
              
              {/* Top Pages */}
              <CyberCard glowColor="pink">
                <h2 className="text-xl font-bold mb-6">Топ страници</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Начална страница</div>
                      <div className="text-sm text-gray-400">/</div>
                    </div>
                    <div className="text-cyber-teal">1,245</div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Услуги</div>
                      <div className="text-sm text-gray-400">/услуги</div>
                    </div>
                    <div className="text-cyber-teal">845</div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Блог</div>
                      <div className="text-sm text-gray-400">/блог</div>
                    </div>
                    <div className="text-cyber-teal">632</div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">За мен</div>
                      <div className="text-sm text-gray-400">/за-мен</div>
                    </div>
                    <div className="text-cyber-teal">421</div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Контакти</div>
                      <div className="text-sm text-gray-400">/контакти</div>
                    </div>
                    <div className="text-cyber-teal">298</div>
                  </div>
                </div>
              </CyberCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;