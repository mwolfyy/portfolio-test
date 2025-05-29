import { useState } from 'react';
import jsPDF from 'jspdf';
import { useBlogStore } from '../store/blogStore';

export const useCV = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { posts } = useBlogStore();

  const generateCV = async () => {
    setIsGenerating(true);
    
    try {
      // Create a new PDF with UTF-8 support
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        putOnlyUsedFonts: true,
        floatPrecision: 16
      });

      // Add UTF-8 font support
      doc.addFont('https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5Q.ttf', 'Roboto', 'normal');
      doc.setFont('Roboto');
      
      // Set up some variables for positioning
      let y = 20;
      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 20;
      const contentWidth = pageWidth - (margin * 2);
      
      // Add header - name and title
      doc.setFillColor(20, 20, 40); // Dark background
      doc.rect(0, 0, pageWidth, 40, 'F');
      
      doc.setTextColor(147, 51, 234); // Cyber purple
      doc.setFontSize(32);
      doc.text('Станчев', pageWidth / 2, 22, { align: 'center' });
      
      doc.setTextColor(255, 255, 255); // White
      doc.setFontSize(20);
      doc.text('SEO Специалист', pageWidth / 2, 32, { align: 'center' });
      
      y = 40;
      
      // Contact Information
      doc.setFillColor(200, 200, 200); // Slightly lighter background
      doc.setLineWidth(0.5);
      doc.line(margin, y, pageWidth - margin, y);
      y += 10;
      
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(12);
      const contactInfo = 'Имейл: hello@stanchev.bg | Телефон: +359 88 888 8888 | София, България';
      doc.text(contactInfo, pageWidth / 2, y + 5, { 
        align: 'center',
        maxWidth: contentWidth
      });
      
      y += 15;
      
      // Profile Summary
      doc.setTextColor(147, 51, 234); // Cyber purple
      doc.setFontSize(16);
      doc.setFont('Roboto', 'bold');
      doc.text('Профил', margin, y);
      
      y += 10;
      doc.setTextColor(50, 50, 50); // Dark text
      doc.setFontSize(11);
      doc.setFont('Roboto', 'normal');
      
      const profileText = 'SEO специалист с 1 годинa опит в оптимизацията за търсачки за българския пазар. Експерт в изграждането на стратегии за подобряване на онлайн видимостта и повишаване на органичния трафик. Специализиран в локално SEO, техническа оптимизация и създаване на съдържание.';
      
      const splitProfileText = doc.splitTextToSize(profileText, contentWidth);
      doc.text(splitProfileText, margin, y);
      
      y += splitProfileText.length * 7 + 10;
      
      // Experience
      doc.setTextColor(147, 51, 234); // Cyber purple
      doc.setFontSize(16);
      doc.setFont('Roboto', 'bold');
      doc.text('Опит', margin, y);
      
      y += 10;
      
      // Add experience entries
      const experiences = [
        {
          title: 'Стажант | WebStation',
          period: '2025 - до момента',
          description: 'Консултиране на над 50 бизнеса за подобряване на тяхното SEO присъствие в българския пазар. Разработване на персонализирани стратегии за повишаване на органичния трафик.'
        },
      ];

      experiences.forEach(exp => {
        doc.setTextColor(6, 182, 212); // Cyber blue
        doc.setFontSize(14);
        doc.setFont('Roboto', 'bold');
        doc.text(exp.title, margin, y);
        
        y += 7;
        doc.setTextColor(100, 100, 100);
        doc.setFontSize(11);
        doc.setFont('Roboto', 'italic');
        doc.text(exp.period, margin, y);
        
        y += 7;
        doc.setTextColor(50, 50, 50);
        doc.setFont('Roboto', 'normal');
        const descLines = doc.splitTextToSize(exp.description, contentWidth);
        doc.text(descLines, margin, y);
        
        y += descLines.length * 7 + 10;
      });

      // Add blog posts as publications
      if (posts.length > 0) {
        doc.setTextColor(147, 51, 234); // Cyber purple
        doc.setFontSize(16);
        doc.setFont('Roboto', 'bold');
        doc.text('Публикации', margin, y);
        
        y += 10;
        
        // List top 3 blog posts
        const recentPosts = posts
          .filter(post => post.status === 'published')
          .slice(0, 3);

        recentPosts.forEach(post => {
          if (y > doc.internal.pageSize.getHeight() - 40) {
            doc.addPage();
            y = 20;
          }

          doc.setTextColor(6, 182, 212); // Cyber blue
          doc.setFontSize(12);
          doc.setFont('Roboto', 'bold');
          const titleLines = doc.splitTextToSize(post.title, contentWidth);
          doc.text(titleLines, margin, y);
          
          y += titleLines.length * 7;
          doc.setTextColor(100, 100, 100);
          doc.setFontSize(10);
          doc.setFont('Roboto', 'italic');
          doc.text(new Date(post.publishedAt).toLocaleDateString('bg-BG'), margin, y);
          
          y += 7;
          doc.setTextColor(50, 50, 50);
          doc.setFont('Roboto', 'normal');
          const excerptLines = doc.splitTextToSize(post.excerpt, contentWidth);
          doc.text(excerptLines, margin, y);
          
          y += excerptLines.length * 5 + 7;
        });
      }
      
      // Save the PDF
      doc.save('stanchev-seo-cv.pdf');
    } catch (error) {
      console.error('Error generating CV:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    generateCV,
    isGenerating,
  };
};
