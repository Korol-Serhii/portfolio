# Особисте Портфоліо - Король Сергій Володимирович

Сучасне особисте портфоліо веб-розробника Король Сергій Володимирович з підтримкою української та англійської мов, створене на React та Tailwind CSS.

## 🚀 Особливості

- **Двоязичність**: Повна підтримка української та англійської мов
- **Адаптивний дизайн**: Оптимізовано для всіх пристроїв
- **Сучасний UI**: Темна тема з красивими анімаціями
- **Модульна архітектура**: Чітко організований код
- **Швидкість**: Побудовано на Vite для швидкої розробки

## 📋 Секції

- **Про себе**: Особиста інформація та фото
- **Нагороди**: Досягнення та сертифікати
- **Навчання**: Освіта та дипломні роботи
- **Курси**: Пройдені курси та навчання
- **Портфоліо**: Проекти з описом та зображеннями
- **Контакти**: Зв'язок через email, телефон та соціальні мережі

## 🛠 Технології

- **React 18** - Основний фреймворк
- **Tailwind CSS** - Стилізація
- **Vite** - Збірка та розробка
- **JavaScript (ES6+)** - Мова програмування

## 📦 Встановлення

1. Клонуйте репозиторій:
```bash
git clone https://github.com/your-username/personal-portfolio.git
cd personal-portfolio
```

2. Встановіть залежності:
```bash
npm install
```

3. Запустіть проект:
```bash
npm run dev
```

4. Відкрийте браузер за адресою `http://localhost:3000`

## 🏗 Структура проекту

```
personal-portfolio/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── About.jsx
│   │   │   ├── Awards.jsx
│   │   │   ├── Contacts.jsx
│   │   │   ├── Courses.jsx
│   │   │   ├── Education.jsx
│   │   │   └── Portfolio.jsx
│   │   ├── LanguageSwitcher.jsx
│   │   └── Sidebar.jsx
│   ├── data/
│   │   └── translations.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Налаштування

### Зміна особистої інформації

Відредагуйте файл `src/data/translations.js` для зміни:
- Імені та посади
- Особистої інформації
- Нагород та досягнень
- Освіти та курсів
- Проектів у портфоліо
- Контактної інформації

### Зміна зображень

Замініть placeholder зображення на свої:
- Фото профілю в `Sidebar.jsx`
- Особисте фото в `About.jsx`
- Зображення проектів в `Portfolio.jsx`

### Зміна кольорової схеми

Налаштуйте кольори в `tailwind.config.js` або `src/index.css`

## 📱 Адаптивність

Проект повністю адаптивний:
- **Мобільні пристрої**: Гамбургер-меню з бічною панеллю
- **Планшети**: Адаптивна сітка для проектів
- **Десктоп**: Повна функціональність з бічною панеллю

## 🚀 Розгортання

### Netlify
1. Підключіть репозиторій до Netlify
2. Налаштуйте build команду: `npm run build`
3. Вкажіть папку: `dist`

### Vercel
1. Підключіть репозиторій до Vercel
2. Автоматичне розгортання при push

### GitHub Pages
1. Додайте в `package.json`:
```json
{
  "homepage": "https://your-username.github.io/personal-portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

## 🤝 Внесок

1. Форкніть проект
2. Створіть feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit зміни (`git commit -m 'Add some AmazingFeature'`)
4. Push до branch (`git push origin feature/AmazingFeature`)
5. Відкрийте Pull Request

## 📄 Ліцензія

Цей проект розповсюджується під ліцензією MIT. Дивіться `LICENSE` для деталей.

## 📞 Контакти

- Email: email@example.com
- Телефон: +38 000 000 00 00
- GitHub: [your-username](https://github.com/your-username)

---

Створено з ❤️ для демонстрації навичок веб-розробки 