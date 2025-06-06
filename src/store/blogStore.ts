import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Post } from '../types/blog';

interface BlogState {
  posts: Post[];
  addPost: (post: Post) => void;
  updatePost: (id: string, post: Post) => void;
  deletePost: (id: string) => void;
  getPostBySlug: (slug: string) => Post | undefined;
}

// Using persist middleware to store data in localStorage
export const useBlogStore = create<BlogState>()(
  persist(
    (set, get) => ({
      posts: [
        {
          id: '1',
          title: 'Как да оптимизирате своя уебсайт за българския пазар',
          slug: 'kak-da-optimizirate-svoya-uebsayt-za-balgarskiya-pazar',
          content: `# Как да оптимизирате своя уебсайт за българския пазар

SEO оптимизацията за българския пазар има своите специфики. В тази статия ще разгледаме основните стъпки, които трябва да предприемете, за да постигнете максимални резултати.

## 1. Използвайте български език правилно

Една от най-важните стъпки е да създадете качествено съдържание на български език. Това означава:

- Използвайте правилна граматика и пунктуация
- Избягвайте машинни преводи
- Адаптирайте съдържанието към българската аудитория

## 2. Проучване на ключови думи за българския пазар

Инструментите за ключови думи често показват по-малки обеми търсения за българския пазар, но това не означава, че няма потенциал:

- Използвайте Google Keyword Planner с фокус върху България
- Проучете свързаните търсения в Google
- Анализирайте конкуренцията си

## 3. Локално SEO

Локалното SEO е изключително важно за българския пазар:

- Регистрирайте се в Google My Business
- Добавете структурирани данни за локален бизнес
- Оптимизирайте за местни търсения като "близо до мен"

## 4. Технически аспекти

Техническото SEO е основа за добри резултати:

- Оптимизирайте скоростта на зареждане
- Направете сайта мобилно-приятелски
- Проверете за технически грешки редовно

## Заключение

Оптимизацията за българския пазар изисква специфичен подход и разбиране на местните особености. С правилната стратегия можете да постигнете отлични резултати и да изпреварите конкуренцията си.`,
          excerpt: 'Научете специфичните стратегии за SEO оптимизация, насочени към българските потребители и търсачки, които ще ви помогнат да достигнете до правилната аудитория.',
          tags: ['SEO', 'България', 'Локална оптимизация'],
          seoTitle: 'SEO оптимизация за българския пазар | Пълно ръководство',
          seoDescription: 'Научете как да оптимизирате вашия уебсайт специално за българския пазар с нашето подробно ръководство за SEO.',
          seoKeywords: 'SEO България, българска SEO оптимизация, локално SEO, оптимизация за търсачки',
          author: 'Станчев',
          publishedAt: '2023-10-15T10:00:00.000Z',
          status: 'published',
        },
        {
          id: '2',
          title: 'Най-добрите практики за изграждане на връзки в България',
          slug: 'nay-dobrite-praktiki-za-izgrazhdane-na-vrazki-v-balgariya',
          content: `# Най-добрите практики за изграждане на връзки в България

Изграждането на качествени обратни връзки е ключов фактор за успешното SEO. В тази статия ще разгледаме специфичните практики, които работят за българския интернет пазар.

## Защо са важни обратните връзки?

Обратните връзки (backlinks) са един от най-силните сигнали за Google и другите търсачки, че вашият сайт е авторитетен и заслужава по-високо класиране.

## Стратегии за български уебсайтове

### 1. Сътрудничество с местни бизнеси

Партньорствата с други български компании могат да бъдат взаимноизгодни. Можете да:

- Предложите гостуващи публикации
- Създадете съвместно съдържание
- Обменяте връзки, когато е релевантно

### 2. Български бизнес директории

Регистрирайте се в авторитетни български бизнес директории като:

- Български фирмен каталог
- Локални камари на търговията
- Специализирани браншови директории

### 3. Местни медии и блогове

Установете връзки с български блогъри и новинарски сайтове:

- Изпращайте прессъобщения за значими събития
- Предлагайте експертни коментари по теми от вашата област
- Спонсорирайте местни събития и получете медийно отразяване

## Какво да избягвате

Внимавайте с практики, които могат да навредят на репутацията ви:

- Закупуване на връзки от съмнителни източници
- Прекомерен обмен на връзки
- Връзки от нерелевантни сайтове

## Заключение

Изграждането на качествени обратни връзки в българското интернет пространство изисква последователност и автентичност. Фокусирайте се върху създаването на полезно съдържание и изграждането на истински връзки с вашата общност.`,
          excerpt: 'Открийте най-ефективните стратегии за изграждане на качествени обратни връзки, специално адаптирани за българския интернет пазар и SEO особености.',
          tags: ['Линкбилдинг', 'SEO', 'Обратни връзки'],
          seoTitle: 'Изграждане на обратни връзки в България | SEO ръководство',
          seoDescription: 'Научете най-ефективните стратегии за изграждане на качествени обратни връзки в България за по-добро SEO класиране.',
          seoKeywords: 'линкбилдинг България, обратни връзки, български SEO, изграждане на връзки',
          author: 'Станчев',
          publishedAt: '2023-11-05T11:30:00.000Z',
          status: 'published',
        },
        {
          id: '3',
          title: 'Технически SEO одит - задължителни стъпки за всеки български сайт',
          slug: 'tehnicheski-seo-odit-zadalzhitelni-stapki-za-vseki-balgarski-sayt',
          content: `# Технически SEO одит - задължителни стъпки за всеки български сайт

Техническият SEO одит е основна част от всяка SEO стратегия. В тази статия ще разгледаме специфичните аспекти, които трябва да проверите за български уебсайт.

## Защо е важен техническият одит?

Дори най-доброто съдържание няма да донесе резултати, ако търсачките не могат да индексират правилно вашия сайт или ако потребителите имат лошо изживяване поради технически проблеми.

## Основни елементи на техническия одит

### 1. Проверка на индексирането

Уверете се, че:

- Сайтът ви е правилно индексиран от Google
- Нямате блокирани важни страници в robots.txt
- Метатаговете ви са правилно настроени

### 2. Скорост на зареждане

Скоростта на зареждане е критичен фактор, особено за мобилни устройства:

- Оптимизирайте изображенията
- Използвайте кеширане на браузъра
- Минимизирайте JavaScript и CSS файловете

### 3. Мобилна оптимизация

С преминаването към mobile-first индексиране, това е задължително:

- Тествайте дали сайтът ви е мобилно-приятелски
- Проверете четимостта на текста на малки екрани
- Уверете се, че бутоните са достатъчно големи за докосване

### 4. URL структура и вътрешни връзки

Създайте логична структура на сайта:

- Използвайте смислени URL адреси, за предпочитане на кирилица или транслитерация
- Създайте ясна йерархия на категориите
- Оптимизирайте вътрешните връзки

### 5. SSL сертификат и сигурност

Сигурността е важен ранкиращ фактор:

- Внедрете HTTPS протокол
- Поддържайте актуален SSL сертификат
- Проверявайте редовно за уязвимости

## Инструменти за технически одит

За провеждане на цялостен технически одит можете да използвате:

- Google Search Console
- Screaming Frog SEO Spider
- GTmetrix за проверка на скоростта
- Mobile-Friendly Test на Google

## Заключение

Редовният технически SEO одит е задължителен за поддържането на здравословен уебсайт. Препоръчително е да провеждате такъв одит поне веднъж на три месеца, за да се уверите, че техническата основа на вашия сайт е стабилна.`,
          excerpt: 'Подробно ръководство за провеждане на цялостен технически SEO одит на вашия уебсайт, с акцент върху специфичните изисквания за българския пазар.',
          tags: ['Технически SEO', 'SEO одит', 'Оптимизация'],
          seoTitle: 'Технически SEO одит за български сайтове | Пълно ръководство',
          seoDescription: 'Научете как да направите професионален технически SEO одит на вашия български уебсайт с това подробно ръководство стъпка по стъпка.',
          seoKeywords: 'технически SEO, SEO одит, скорост на сайт, мобилна оптимизация, индексиране',
          author: 'Станчев',
          publishedAt: '2023-12-10T09:15:00.000Z',
          status: 'published',
        }
      ],
      
      addPost: (post) =>
        set((state) => ({
          posts: [
            ...state.posts,
            {
              ...post,
              id: Date.now().toString(),
              publishedAt: new Date().toISOString(),
            },
          ],
        })),
        
      updatePost: (id, updatedPost) =>
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === id ? { ...updatedPost, id } : post
          ),
        })),
        
      deletePost: (id) =>
        set((state) => ({
          posts: state.posts.filter((post) => post.id !== id),
        })),
        
      getPostBySlug: (slug) => {
        const { posts } = get();
        return posts.find((post) => post.slug === slug);
      },
    }),
    {
      name: 'blog-storage',
    }
  )
);