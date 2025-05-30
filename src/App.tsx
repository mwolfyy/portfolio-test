import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/admin/LoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminBlogPosts from './pages/admin/AdminBlogPosts';
import AdminEditPost from './pages/admin/AdminEditPost';
import PrivateRoute from './components/Auth/PrivateRoute';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiesPage from './pages/CookiesPage';
import { ScrollToTop } from './components/Layout/ScrollToTop';
import AdminRequests from './pages/admin/AdminRequests';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="услуги" element={<ServicesPage />} />
          <Route path="за-мен" element={<AboutPage />} />
          <Route path="контакти" element={<ContactPage />} />
          <Route path="вход" element={<LoginPage />} />
          <Route path="политика-за-поверителност" element={<PrivacyPage />} />
          <Route path="общи-условия" element={<TermsPage />} />
          <Route path="бисквитки" element={<CookiesPage />} />
          <Route path="*" element={<NotFoundPage />} />
          
          {/* Admin Routes */}
          <Route path="admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
          <Route path="admin/blog" element={<PrivateRoute><AdminBlogPosts /></PrivateRoute>} />
          <Route path="admin/blog/нов" element={<PrivateRoute><AdminEditPost /></PrivateRoute>} />
          <Route path="admin/blog/:id" element={<PrivateRoute><AdminEditPost /></PrivateRoute>} />
          <Route path="admin/заявки" element={<PrivateRoute><AdminRequests /></PrivateRoute>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
