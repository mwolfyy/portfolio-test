// Create a server-side data source instead of relying on Zustand during SSG
import { Post } from '@/types/blog';

// Sample blog posts data - move from store to static data source
export const samplePosts: Post[] = [
  {
    id: '1',
    title: 'Как да подобрите SEO на вашия уебсайт за 2024',
    slug: 'kak-da-podobrite-seo-na-vashiya-uebsayt-za-2024',
    content: `# Как да подобрите SEO на вашия уебсайт за 2024

SEO оптимизацията е ключова за успеха на всеки уебсайт в днешния дигитален свят. В тази статия ще разгледаме най-важните стратегии за подобряване на SEO през 2024 година.

## 1. Техническо SEO

Техническото SEO е основата на всяка успешна оптимизация. Включва:

- Оптимизация на скоростта на зареждане
- Мобилна оптимизация
- SSL сертификат
- Правилна URL структура

## 2. Съдържание

Качественото съдържание остава крал в SEO. Фокусирайте се върху:

- Създаване на полезно и уникално съдържание
- Използване на ключови думи по естествен начин
- Редовно обновяване на съдържанието

## 3. Потребителско изживяване

Google все повече обръща внимание на потребителското изживяване:

- Core Web Vitals
- Лесна навигация
- Интуитивен дизайн

## Заключение

SEO е дългосрочна стратегия, която изисква постоянство и адаптиране към промените в алгоритмите на търсачките.`,
    excerpt: 'Научете как да подобрите SEO на вашия уебсайт с най-новите стратегии за 2024 година. Техническо SEO, съдържание и потребителско изживяване.',
    tags: ['SEO', 'Техническо SEO', 'Съдържание', 'UX'],
    seoTitle: 'Как да подобрите SEO на вашия уебсайт за 2024 | Станчев SEO',
    seoDescription: 'Научете най-ефективните SEO стратегии за 2024. Техническо SEO, оптимизация на съдържание и подобряване на потребителското изживяване.',
    seoKeywords: 'SEO 2024, техническо SEO, оптимизация на съдържание, потребителско изживяване',
    author: 'Станчев',
    publishedAt: '2024-01-15T10:00:00Z',
    status: 'published'
  },
  {
    id: '2',
    title: 'Локално SEO за български бизнеси',
    slug: 'lokalno-seo-za-bulgarski-biznesi',
    content: `# Локално SEO за български бизнеси

Локалното SEO е от критично значение за бизнесите, които обслужват клиенти в определен географски район. В България има специфики, които трябва да се вземат предвид.

## Google My Business оптимизация

Първата стъпка е създаването и оптимизацията на Google My Business профил:

- Попълване на всички данни
- Добавяне на снимки
- Събиране на отзиви
- Редовно обновяване

## Локални ключови думи

Използвайте ключови думи, които включват:

- Името на града
- Района или квартала
- "близо до мен"
- Местни забележителности

## Локални директории

Регистрирайте бизнеса си в:

- Български бизнес директории
- Отраслови каталози
- Местни уебсайтове

## Заключение

Локалното SEO изисква специфичен подход, адаптиран към българския пазар и местните особености.`,
    excerpt: 'Пълно ръководство за локално SEO в България. Google My Business, локални ключови думи и директории за по-добра видимост.',
    tags: ['Локално SEO', 'Google My Business', 'България', 'Местен бизнес'],
    seoTitle: 'Локално SEO за български бизнеси | Пълно ръководство',
    seoDescription: 'Научете как да оптимизирате локалното SEO за вашия бизнес в България. Google My Business, локални ключови думи и директории.',
    seoKeywords: 'локално SEO България, Google My Business, местен бизнес, локални ключови думи',
    author: 'Станчев',
    publishedAt: '2024-01-10T14:30:00Z',
    status: 'published'
  },
  {
    id: '3',
    title: 'Структурирани данни и Schema.org',
    slug: 'strukturirani-danni-i-schema-org',
    content: `# Структурирани данни и Schema.org

Структурираните данни са начин да помогнете на търсачките да разберат по-добре съдържанието на вашия уебсайт.

## Какво са структурираните данни?

Структурираните данни са код, който добавяте към HTML-а на страницата си, за да предоставите допълнителна информация на търсачките.

## Видове Schema markup

Най-популярните видове включват:

- Organization
- LocalBusiness
- Product
- Article
- FAQ

## Как да внедрите Schema.org

1. Изберете подходящия тип schema
2. Генерирайте JSON-LD кода
3. Добавете го в head секцията
4. Тествайте с Google Rich Results Test

## Ползи от структурираните данни

- Rich snippets в резултатите
- По-добра видимост
- Повишена кликаемост

## Заключение

Структурираните данни са мощен инструмент за подобряване на SEO и видимостта в търсачките.`,
    excerpt: 'Всичко за структурираните данни и Schema.org. Как да внедрите и какви ползи да очаквате от rich snippets.',
    tags: ['Структурирани данни', 'Schema.org', 'Rich snippets', 'JSON-LD'],
    seoTitle: 'Структурирани данни и Schema.org | Пълно ръководство',
    seoDescription: 'Научете как да използвате структурираните данни и Schema.org за по-добро SEO. Rich snippets, JSON-LD и практически съвети.',
    seoKeywords: 'структурирани данни, Schema.org, rich snippets, JSON-LD, SEO',
    author: 'Станчев',
    publishedAt: '2024-01-05T09:15:00Z',
    status: 'published'
  }
];

export function getAllPosts(): Post[] {
  return samplePosts.filter(post => post.status === 'published');
}

export function getPostBySlug(slug: string): Post | undefined {
  return samplePosts.find(post => post.slug === slug && post.status === 'published');
}

export function getAllTags(): string[] {
  return Array.from(
    new Set(samplePosts.flatMap(post => post.tags))
  );
}

export function getRelatedPosts(currentPost: Post, limit: number = 3): Post[] {
  return samplePosts
    .filter(p => 
      p.id !== currentPost.id && 
      p.status === 'published' && 
      p.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, limit);
}