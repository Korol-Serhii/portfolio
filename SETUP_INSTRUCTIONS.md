# Інструкції з Налаштування Проекту

## 🚀 Швидкий Старт

### 1. Встановлення Залежностей
```bash
npm install
```

### 2. Запуск Проекту
```bash
npm run dev
```

### 3. Відкриття в Браузері
Відкрийте `http://localhost:3000` у вашому браузері

## 📝 Налаштування Особистої Інформації

### Зміна Імені та Посади
Відредагуйте файл `src/data/translations.js`:

```javascript
uk: {
    profileName: "Ваше Реальне Ім'я",
    profileTitle: "Ваша Посада",
    // ...
},
en: {
    profileName: "Your Real Name",
    profileTitle: "Your Position",
    // ...
}
```

### Зміна Особистої Інформації
Знайдіть секцію `aboutText1` та `aboutText2`:

```javascript
aboutText1: "Ваш особистий опис...",
aboutText2: "Ваш досвід та навички...",
```

### Додавання Нагород
Розширте секцію нагород:

```javascript
award1: "Ваша перша нагорода",
award2: "Ваша друга нагорода",
award3: "Ваша третя нагорода",
// Додайте більше нагород за потреби
```

### Оновлення Освіти
Змініть інформацію про освіту:

```javascript
eduDegree1: "Ваша Спеціальність",
eduUni1: "Ваш Університет, Роки навчання",
eduDesc1: "Опис вашої освіти та дипломної роботи",
```

### Додавання Курсів
Оновіть курси:

```javascript
courseTitle1: "Назва вашого курсу",
coursePlatform1: "Платформа, Рік",
// Додайте більше курсів
```

### Налаштування Портфоліо
Змініть проекти:

```javascript
projectTitle1: "Назва вашого проекту",
projectDesc1: "Опис функціональності проекту",
// Додайте більше проектів
```

### Оновлення Контактів
Змініть контактну інформацію:

```javascript
// В компоненті Contacts.jsx замініть:
<a href="mailto:your-real-email@example.com">your-real-email@example.com</a>
<a href="tel:+380000000000">+38 000 000 00 00</a>
<a href="https://github.com/your-username">GitHub</a>
```

## 🖼️ Зміна Зображень

### Фото Профілю
Замініть placeholder в `src/components/Sidebar.jsx`:

```javascript
<img 
    src="/path/to/your/profile-photo.jpg" 
    alt="Ваше фото" 
    className="rounded-full w-28 h-28 border-4 border-gray-600 object-cover" 
/>
```

### Особисте Фото
Замініть в `src/components/sections/About.jsx`:

```javascript
<img 
    src="/path/to/your/about-photo.jpg" 
    alt="Ваше фото" 
    className="rounded-lg w-full md:w-1/3 max-w-xs object-cover shadow-lg" 
/>
```

### Зображення Проектів
Замініть в `src/components/sections/Portfolio.jsx`:

```javascript
<img 
    src="/path/to/your/project1.jpg" 
    alt="Проект 1" 
    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
/>
```

## 🎨 Налаштування Дизайну

### Зміна Кольорової Схеми
Відредагуйте `tailwind.config.js`:

```javascript
colors: {
    'sky': {
        400: '#your-blue-color',
        500: '#your-blue-color',
        600: '#your-blue-color',
        700: '#your-blue-color',
    },
    'gray': {
        200: '#your-light-gray',
        300: '#your-gray',
        400: '#your-gray',
        600: '#your-gray',
        700: '#your-gray',
        800: '#your-dark-gray',
        900: '#your-darkest-gray',
    }
}
```

### Зміна Шрифту
В `index.html` замініть Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

В `tailwind.config.js`:

```javascript
fontFamily: {
    'inter': ['YourFont', 'sans-serif'],
},
```

### Додавання Логотипу
Створіть папку `public/images/` та додайте логотип:

```javascript
<img src="/images/your-logo.png" alt="Логотип" className="w-8 h-8" />
```

## 📱 Налаштування Адаптивності

### Додавання Нових Breakpoints
В `tailwind.config.js`:

```javascript
screens: {
    'xs': '475px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
}
```

### Кастомні Компоненти
Створіть нові компоненти в `src/components/`:

```javascript
// src/components/CustomComponent.jsx
import React from 'react';

const CustomComponent = ({ t }) => (
    <section>
        <h1 className="section-title">Нова секція</h1>
        <div className="text-gray-300">
            Ваш контент
        </div>
    </section>
);

export default CustomComponent;
```

## 🌐 Налаштування SEO

### Meta Tags
В `index.html`:

```html
<title>Ваше Ім'я - Веб-розробник</title>
<meta name="description" content="Особисте портфоліо веб-розробника Ваше Ім'я">
<meta name="keywords" content="веб-розробник, React, JavaScript, Ваше Ім'я">
<meta name="author" content="Ваше Ім'я">
```

### Open Graph
```html
<meta property="og:title" content="Ваше Ім'я - Веб-розробник">
<meta property="og:description" content="Особисте портфоліо веб-розробника">
<meta property="og:image" content="/images/og-image.jpg">
<meta property="og:url" content="https://your-domain.com">
```

### Favicon
Замініть favicon в `public/`:

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/png" href="/favicon.png" />
```

## 🔧 Розширення Функціональності

### Додавання Нової Мови
В `src/data/translations.js`:

```javascript
fr: {
    profileName: "Votre Nom",
    profileTitle: "Développeur Web",
    // Додайте всі переклади
}
```

В `src/components/LanguageSwitcher.jsx`:

```javascript
<button onClick={() => setLanguage('fr')}>
    FRA
</button>
```

### Додавання Нової Секції
1. Створіть компонент в `src/components/sections/`
2. Додайте переклади в `translations.js`
3. Імпортуйте в `App.jsx`
4. Додайте в навігацію

### Інтеграція з CMS
Для динамічного контенту:

```javascript
// src/hooks/useContent.js
import { useState, useEffect } from 'react';

export const useContent = (language) => {
    const [content, setContent] = useState(null);
    
    useEffect(() => {
        // Завантаження контенту з API
        fetchContent(language).then(setContent);
    }, [language]);
    
    return content;
};
```

## 🚀 Розгортання

### Netlify
1. Підключіть GitHub репозиторій
2. Налаштування:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

### Vercel
1. Імпортуйте проект з GitHub
2. Автоматичне розгортання
3. Налаштуйте домен

### GitHub Pages
1. Додайте в `package.json`:
```json
{
  "homepage": "https://your-username.github.io/repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

2. Встановіть gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Розгорніть:
```bash
npm run deploy
```

## 🔍 Тестування

### Локальне Тестування
```bash
npm run build
npm run preview
```

### Перевірка Адаптивності
- Chrome DevTools
- Responsive Design Mode
- Тестування на реальних пристроях

### Перевірка Продуктивності
- Lighthouse
- PageSpeed Insights
- WebPageTest

## 📊 Аналітика

### Google Analytics
Додайте в `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Hotjar
```html
<!-- Hotjar Tracking Code -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:YOUR_HJID,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

## 🔒 Безпека

### Content Security Policy
Додайте в `index.html`:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;">
```

### HTTPS
Обов'язково для production:
- Налаштуйте SSL сертифікат
- Перенаправляйте HTTP на HTTPS
- Використовуйте HSTS

## 📞 Підтримка

### Логування Помилок
```javascript
// src/utils/errorBoundary.js
class ErrorBoundary extends React.Component {
    componentDidCatch(error, errorInfo) {
        console.error('Error:', error);
        console.error('Error Info:', errorInfo);
        // Відправка в сервіс логування
    }
}
```

### Моніторинг Продуктивності
```javascript
// src/utils/performance.js
export const trackPerformance = () => {
    if ('performance' in window) {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                console.log('Performance:', entry);
            }
        });
        observer.observe({ entryTypes: ['navigation', 'resource'] });
    }
};
```

---

Слідуйте цим інструкціям для повного налаштування вашого портфоліо! 