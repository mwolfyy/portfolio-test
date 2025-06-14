import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SiteContentStore {
  sections: Record<string, string>;
  getSection: (id: string) => string;
  updateSection: (id: string, content: string) => void;
}

const defaultContent = {
  'hero-description': 'Помагам на българските бизнеси да постигнат по-добра видимост в Google и да привлекат повече клиенти чрез професионални SEO услуги.',
  'services-description': 'Предлагам пълен набор от SEO услуги, специално адаптирани за българския пазар и особеностите на местното търсене.',
};

export const useSiteContentStore = create<SiteContentStore>()(
  persist(
    (set, get) => ({
      sections: defaultContent,
      getSection: (id) => {
        return get().sections[id] || '';
      },
      updateSection: (id, content) => {
        set((state) => ({
          sections: {
            ...state.sections,
            [id]: content,
          },
        }));
      },
    }),
    {
      name: 'site-content-storage',
    }
  )
);