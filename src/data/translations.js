// Дані для перекладу
export const translations = {
    uk: {
        profileName: "Король Сергій Володимирович",
        profileTitle: "Веб-розробник",
        navAbout: "Про себе",
        navMilitary: "Військова служба",
        navEducation: "Навчання",
        navCourses: "Курси",
        navPortfolio: "Портфоліо",
        navContacts: "Контакти",
        aboutTitle: "Про себе",
        aboutText1: "Цілеспрямований та енергійний веб-розробник із пристрастю до створення дивовижних та функціональних веб-сайтів і додатків. Постійно вдосконалюю свої навички, починаючи ще з університетських часів. Завжди відкритий до нових викликів та готовий навчатися для досягнення найкращих результатів у команді.",
        aboutText2: `<strong>Front-End Розробка</strong><ul>
<li><strong>React:</strong> Глибокі знання у розробці додатків, включаючи використання сучасних підходів, таких як Flux та Redux для управління станом.</li>
<li><strong>Angular:</strong> Вміння створювати зв'язування даних (data binding) та застосовувати Dependency Injection.</li>
<li><strong>JavaScript:</strong> Досвід у реалізації клієнтських сценаріїв, обробці подій та асинхронних запитів (Ajax) для забезпечення кросбраузерної сумісності.</li>
<li><strong>HTML:</strong> Впевнене володіння тегами, атрибутами та семантичною структурою для створення добре організованих веб-сторінок.</li>
<li><strong>CSS:</strong> Навички використання селекторів, значень, списків, кольорів, шрифтів та інших метрик для якісного форматування складних веб-документів.</li>
</ul><hr/>
<strong>Back-End Розробка</strong><ul>
<li><strong>Node.js:</strong> Досвід роботи з серверною частиною, розуміння основ взаємодії та створення Back-End логіки.</li>
</ul><hr/>
<strong>Інструменти та методології</strong><ul>
<li><strong>Системи контролю версій:</strong> Досвід роботи з Git для ефективного управління кодом.</li>
<li><strong>Збірка проєктів:</strong> Розуміння тонкощів використання Webpack для оптимізації та збірки проєктів.</li>
<li><strong>Тестування:</strong> Вміння застосовувати модульне тестування для забезпечення якості коду.</li>
<li><strong>Розробка та налагодження:</strong> Навички швидкої перевірки, налагодження коду та обробки помилок.</li>
<li><strong>Робота з формами:</strong> Володіння принципами створення форм та валідації даних за допомогою регулярних виразів.</li>
<li><strong>Принципи програмування:</strong> Знайомство з основними поняттями об'єктно-орієнтованого програмування (ООП).</li>
<li><strong>Командна робота:</strong> Розуміння основ ефективної співпраці в команді розробників.</li>
</ul>`,
        languagesTitle: "Мови",
        languageUkr: "Українська: Рідна",
        languageRu: "Російська: Вільно",
        languageEn: "Англійська: Базовий рівень (активно вивчаю)",
        languageJp: "Японська: Базовий рівень (активно вивчаю)",
        militaryTitle: "Військова служба",
        militaryService: "Військова служба в Збройних Силах України",
        militaryServicePeriods: [
            {
                period: "10.2020 — 03.2023",
                type: "Вид служби: За контрактом",
                unit: "Військова частина: 81-ша окрема аеромобільна бригада",
                note: "10.03.2023 року переведений до 60-ї окремої механізованої бригади."
            },
            {
                period: "05.2019 — 05.2020",
                type: "Вид служби: За контрактом",
                unit: "Військова частина: 131-й окремий розвідувальний батальйон"
            },
            {
                period: "03.2017 — 09.2017",
                type: "Вид служби: За контрактом",
                unit: "Військова частина: 300-й навчальний танковий полк"
            },
            {
                period: "01.2015 — 04.2016",
                type: "Вид служби: За мобілізацією",
                unit: "Військова частина: 95-та окрема десантно-штурмова бригада"
            }
        ],
        militarySkills: "Навички та досягнення",
        militarySkill1: "Володіння військовою технікою та зброєю.",
        militarySkill2: "Досвід роботи в команді та прийняття рішень в екстремальних умовах.",
        militarySkill3: "Розвиток лідерських якостей та відповідальності за підлеглих.",
        educationTitle: "Навчання",
        educationItems: [
            {
                degree: "Свідоцтво про робітничу кваліфікацію",
                level: "Робітнича кваліфікація",
                institution: "Відокремлений підрозділ Національного університету біоресурсів і природокористування України \"Бобровицький коледж економіки та менеджменту ім. О. Майнової\"",
                specialty: "Оператор комп'ютерного набору (Професія)",
                date: "24.06.2011"
            },
            {
                degree: "Диплом молодшого спеціаліста",
                level: "Молодший спеціаліст",
                institution: "Відокремлений підрозділ Національного університету біоресурсів і природокористування України \"Бобровицький коледж економіки та менеджменту ім. О. Майнової\"",
                specialty: "Фінанси і кредит",
                date: "24.06.2011"
            },
            {
                degree: "Диплом кваліфікованого робітника",
                level: "Кваліфікований робітник",
                institution: "Київське вище професійне училище залізничного транспорту імені В.С. Кудряшова",
                specialty: "Провідник пасажирського вагона (Професія)",
                date: "06.06.2014"
            }
        ],
        coursesTitle: "Курси",
        programmingCourses: [
            {
                title: "Front End (Диплом Комп'ютерної Академії ШАГ)",
                platform: "Комп'ютерна Академія ШАГ",
                date: "12.06.2025",
                skills: "Розробка вебсторінок мовою розмітки HTML5 з використанням каскадних таблиць стилів CSS3, розробка клієнтських сценаріїв з використанням JavaScript, JavaScript Advanced, використання фреймворків Angular, React",
                certificate: "STEP Король укр.pdf"
            },
            {
                title: "Основи Linux",
                platform: "Prometheus",
                date: "28.10.2024",
                skills: "Виданий через платформу Prometheus у партнерстві з The Linux Foundation та Cloud Native Computing Foundation",
                certificate: "Certificate 42.pdf"
            },
            {
                title: "Основи програмування (мовою Python)",
                platform: "Prometheus",
                date: "10.10.2024",
                skills: "Курс наданий Нікітою Павлюченком, викладачем Національного Технічного Університету України \"КПІ\"",
                certificate: "Certificate 22.pdf"
            },
            {
                title: "Git для розподіленої розробки програмного забезпечення",
                platform: "Prometheus",
                date: "07.10.2024",
                skills: "Система контролю версій Git для ефективного управління кодом",
                certificate: "Certificate 16.pdf"
            },
            {
                title: "Програмування для всіх: основи Python",
                platform: "Prometheus",
                date: "25.09.2024",
                skills: "Основи мови програмування Python, написання перших програм на Python, використання змінних для зберігання, пошуку та обчислення інформації, застосування функцій та циклів",
                certificate: "Certificate 10.pdf"
            },
            {
                title: "Python: Структури даних",
                platform: "Prometheus",
                date: "21.09.2024",
                skills: "Принципи структур даних, створення програм, що зчитують та записують дані з файлів, збереження даних за допомогою словників Python, виконання багатоетапних завдань",
                certificate: "Certificate 9.pdf"
            },
            {
                title: "Основи програмування з HTML, CSS та JavaScript",
                platform: "Prometheus",
                date: "04.05.2024",
                skills: "Створення вебсторінок та застосунків, гіпертекстова мова розмітки, каскадні таблиці стилів, основні аспекти застосування JavaScript",
                certificate: "Certificate 1.pdf"
            }
        ],
        droneCourses: [
            {
                title: "Безпілотні системи. Основи БПЛА",
                platform: "Міністерство оборони України",
                date: "24.10.2024",
                skills: "Складено іспит",
                certificate: "Сертифікат до курсу Безпілотні системи. Основи БпЛА - Сергій Король - .pdf"
            },
            {
                title: "Застосування технологій в умовах війни",
                platform: "Prometheus",
                date: "21.09.2024",
                skills: "Оцінка: \"B\". Курс розроблено командою проєкту Victory Drones",
                certificate: "Certificate 8.pdf"
            },
            {
                title: "Інженерний курс: Народний FPV",
                platform: "Prometheus",
                date: "19.06.2024",
                skills: "Курс створено фахівцями волонтерського проєкту Victory Drones та українського виробника дронів Vyriy Drone",
                certificate: "Certificate 5.pdf"
            },
            {
                title: "Інженер БПЛА. Базовий курс",
                platform: "Prometheus",
                date: "11.06.2024",
                skills: "Керівник проєкту Victory Drones Благодійного фонду Dignitas: Марія Берлінська",
                certificate: "Certificate 4.pdf"
            }
        ],
        otherCourses: [
            {
                title: "Інформаційна безпека",
                platform: "Prometheus",
                date: "26.10.2024",
                skills: "Партнери: Центр інформації та документації НАТО в Україні та ГО «Інтерньюз-Україна»",
                certificate: "Certificate 41.pdf"
            },
            {
                title: "Особливості роботи офіцера психолога в умовах бойових дій",
                platform: "Prometheus",
                date: "23.10.2024",
                skills: "Засвідчений Генерал-майором Голоднюком Олександром Миколайовичем та Бригадним генералом Шевченком Анатолієм Михайловичем",
                certificate: "Certificate 38.pdf"
            },
            {
                title: "Перша домедична допомога в умовах війни",
                platform: "Prometheus",
                date: "15.10.2024",
                skills: "Опановані навички: оцінювально-аналітична компетентність, лідерська компетентність, компетенція з інформальної освіти та професійно-особистісного розвитку, здатність до навчання протягом життя",
                certificate: "Certificate 29.pdf"
            },
            {
                title: "OSINT - розвідка з відкритих джерел та інформаційна безпека",
                platform: "Prometheus",
                date: "18.10.2024",
                skills: "Курс розроблено командою проєкту Victory Drones Благодійного фонду Dignitas",
                certificate: "Certificate 33.pdf"
            },
            {
                title: "Бізнес-англійська",
                platform: "Prometheus",
                date: "14.10.2024",
                skills: "Курс наданий викладачкою, тренером з бізнес-англійської Іванною Табачук",
                certificate: "Certificate 28.pdf"
            }
        ],
        portfolioTitle: "Портфоліо",
        projectTitle1: "E-commerce Платформа",
        projectDesc1: "Повнофункціональний інтернет-магазин з кошиком та системою оплати.",
        projectTitle2: "Застосунок для подорожей",
        projectDesc2: "Мобільний додаток для планування подорожей та пошуку цікавих місць.",
        projectTitle3: "Особистий блог",
        projectDesc3: "Платформа для ведення блогу з адмін-панеллю та коментарями.",
        technologiesTitle: "Технології",
        viewProjectTitle: "Перейти в проект",
        viewGithubTitle: "Перейти на GitHub",
        contactsTitle: "Контакти",
        linkedinProfile: "LinkedIn Профіль",
        githubProfile: "GitHub Профіль",
        contactPrompt: "Зв'яжіться зі мною будь-яким зручним для вас способом!",
        awardsTitle: "Нагороди",
        awards: [
            {
                title: 'Медаль «За поранення»',
                year: '2024 рік',
                img: '5.png',
            },
            {
                title: 'О́рден «За мужність» III ступеня',
                year: '2022 рік',
                img: '4.png',
            },
            {
                title: 'Медаль «Захисникам вітчизни»',
                year: '2019 рік',
                img: '3.png',
            },
            {
                title: 'Нагрудний знак «Учасник АТО»',
                year: '2016 рік',
                img: '2.png',
            },
            {
                title: 'Нагрудний знак «Ветеран війни»',
                year: '2016 рік',
                img: '1.png',
            },
        ],
    },
    en: {
        profileName: "Korol Serhii",
        profileTitle: "Web Developer",
        navAbout: "About Me",
        navMilitary: "Military Service",
        navEducation: "Education",
        navCourses: "Courses",
        navPortfolio: "Portfolio",
        navContacts: "Contacts",
        aboutTitle: "About Me",
        aboutText1: "Purposeful and energetic web developer with a passion for creating amazing and functional websites and applications. I constantly improve my skills, starting from my university years. Always open to new challenges and ready to learn to achieve the best results in a team.",
        aboutText2: `<strong>Front-End Development</strong><ul>
<li><strong>React:</strong> Deep knowledge in application development, including the use of modern approaches such as Flux and Redux for state management.</li>
<li><strong>Angular:</strong> Ability to create data binding and apply Dependency Injection.</li>
<li><strong>JavaScript:</strong> Experience in implementing client-side scenarios, event handling, and asynchronous requests (Ajax) to ensure cross-browser compatibility.</li>
<li><strong>HTML:</strong> Confident use of tags, attributes, and semantic structure to create well-organized web pages.</li>
<li><strong>CSS:</strong> Skills in using selectors, values, lists, colors, fonts, and other metrics for high-quality formatting of complex web documents.</li>
</ul><hr/>
<strong>Back-End Development</strong><ul>
<li><strong>Node.js:</strong> Experience with server-side development, understanding the basics of interaction and creating back-end logic.</li>
</ul><hr/>
<strong>Tools and Methodologies</strong><ul>
<li><strong>Version Control Systems:</strong> Experience with Git for effective code management.</li>
<li><strong>Project Bundling:</strong> Understanding the intricacies of using Webpack for project optimization and bundling.</li>
<li><strong>Testing:</strong> Ability to apply unit testing to ensure code quality.</li>
<li><strong>Development and Debugging:</strong> Skills in quick code checking, debugging, and error handling.</li>
<li><strong>Working with Forms:</strong> Proficiency in creating forms and validating data using regular expressions.</li>
<li><strong>Programming Principles:</strong> Familiarity with the main concepts of object-oriented programming (OOP).</li>
<li><strong>Teamwork:</strong> Understanding the basics of effective collaboration in a development team.</li>
</ul>`,
        languagesTitle: "Languages",
        languageUkr: "Ukrainian: Native",
        languageRu: "Russian: Fluent",
        languageEn: "English: Basic level (actively learning)",
        languageJp: "Japanese: Basic level (actively learning)",
        militaryTitle: "Military Service",
        militaryService: "Military Service in the Armed Forces of Ukraine",
        militaryServicePeriods: [
            {
                period: "10.2020 — 03.2023",
                type: "Type of Service: Contract",
                unit: "Military Unit: 81st Separate Airborne Brigade",
                note: "10.03.2023 transferred to 60th Separate Motorized Brigade."
            },
            {
                period: "05.2019 — 05.2020",
                type: "Type of Service: Contract",
                unit: "Military Unit: 131st Separate Reconnaissance Battalion"
            },
            {
                period: "03.2017 — 09.2017",
                type: "Type of Service: Contract",
                unit: "Military Unit: 300th Tank Training Regiment"
            },
            {
                period: "01.2015 — 04.2016",
                type: "Type of Service: Mobilization",
                unit: "Military Unit: 95th Separate Assault Brigade"
            }
        ],
        militarySkills: "Skills and Achievements",
        militarySkill1: "Proficiency in military equipment and weapons.",
        militarySkill2: "Experience working in a team and making decisions in extreme conditions.",
        militarySkill3: "Development of leadership qualities and responsibility for subordinates.",
        educationTitle: "Education",
        educationItems: [
            {
                degree: "Certificate of Worker Qualification",
                level: "Worker Qualification",
                institution: "Separate subdivision of the National University of Life and Environmental Sciences of Ukraine \"Bobrovytsia College of Economics and Management named after O. Mainova\"",
                specialty: "Computer Typing Operator (Profession)",
                date: "24.06.2011"
            },
            {
                degree: "Junior Specialist Diploma",
                level: "Junior Specialist",
                institution: "Separate subdivision of the National University of Life and Environmental Sciences of Ukraine \"Bobrovytsia College of Economics and Management named after O. Mainova\"",
                specialty: "Finance and Credit",
                date: "24.06.2011"
            },
            {
                degree: "Qualified Worker Diploma",
                level: "Qualified Worker",
                institution: "Kyiv Higher Vocational School of Railway Transport named after V.S. Kudryashov",
                specialty: "Passenger Car Conductor (Profession)",
                date: "06.06.2014"
            }
        ],
        coursesTitle: "Courses",
        programmingCourses: [
            {
                title: "Front End (STEP Computer Academy Diploma)",
                platform: "STEP Computer Academy",
                date: "12.06.2025",
                skills: "Web page development using HTML5 markup language with CSS3 cascading style sheets, client-side scripting using JavaScript, JavaScript Advanced, using Angular and React frameworks",
                certificate: "STEP Король укр.pdf"
            },
            {
                title: "Linux Fundamentals",
                platform: "Prometheus",
                date: "28.10.2024",
                skills: "Issued through Prometheus platform in partnership with The Linux Foundation and Cloud Native Computing Foundation",
                certificate: "Certificate 42.pdf"
            },
            {
                title: "Programming Fundamentals (Python)",
                platform: "Prometheus",
                date: "10.10.2024",
                skills: "Course provided by Nikita Pavlyuchenko, lecturer at the National Technical University of Ukraine \"KPI\"",
                certificate: "Certificate 22.pdf"
            },
            {
                title: "Git for Distributed Software Development",
                platform: "Prometheus",
                date: "07.10.2024",
                skills: "Git version control system for effective code management",
                certificate: "Certificate 16.pdf"
            },
            {
                title: "Programming for Everyone: Python Basics",
                platform: "Prometheus",
                date: "25.09.2024",
                skills: "Python programming language basics, writing first Python programs, using variables to store, search and calculate information, applying functions and loops",
                certificate: "Certificate 10.pdf"
            },
            {
                title: "Python: Data Structures",
                platform: "Prometheus",
                date: "21.09.2024",
                skills: "Data structure principles, creating programs that read and write data from files, storing data using Python dictionaries, performing multi-step tasks",
                certificate: "Certificate 9.pdf"
            },
            {
                title: "Programming Fundamentals with HTML, CSS and JavaScript",
                platform: "Prometheus",
                date: "04.05.2024",
                skills: "Creating web pages and applications, hypertext markup language, cascading style sheets, basic aspects of JavaScript application",
                certificate: "Certificate 1.pdf"
            }
        ],
        droneCourses: [
            {
                title: "Unmanned Systems. UAV Fundamentals",
                platform: "Ministry of Defense of Ukraine",
                date: "24.10.2024",
                skills: "Exam completed",
                certificate: "Сертифікат до курсу Безпілотні системи. Основи БпЛА - Сергій Король - .pdf"
            },
            {
                title: "Application of Technologies in War Conditions",
                platform: "Prometheus",
                date: "21.09.2024",
                skills: "Grade: \"B\". Course developed by the Victory Drones project team",
                certificate: "Certificate 8.pdf"
            },
            {
                title: "Engineering Course: People's FPV",
                platform: "Prometheus",
                date: "19.06.2024",
                skills: "Course created by specialists of the Victory Drones volunteer project and Ukrainian drone manufacturer Vyriy Drone",
                certificate: "Certificate 5.pdf"
            },
            {
                title: "UAV Engineer. Basic Course",
                platform: "Prometheus",
                date: "11.06.2024",
                skills: "Project Manager Victory Drones of Dignitas Charitable Foundation: Maria Berlinska",
                certificate: "Certificate 4.pdf"
            }
        ],
        otherCourses: [
            {
                title: "Information Security",
                platform: "Prometheus",
                date: "26.10.2024",
                skills: "Partners: NATO Information and Documentation Center in Ukraine and NGO \"Internews-Ukraine\"",
                certificate: "Certificate 41.pdf"
            },
            {
                title: "Features of Military Psychologist Work in Combat Conditions",
                platform: "Prometheus",
                date: "23.10.2024",
                skills: "Certified by Major General Holodniuk Oleksandr Mykolayovych and Brigadier General Shevchenko Anatoliy Mykhailovych",
                certificate: "Certificate 38.pdf"
            },
            {
                title: "First Pre-Medical Aid in War Conditions",
                platform: "Prometheus",
                date: "15.10.2024",
                skills: "Acquired skills: evaluative-analytical competence, leadership competence, informal education and professional-personal development competence, lifelong learning ability",
                certificate: "Certificate 29.pdf"
            },
            {
                title: "OSINT - Open Source Intelligence and Information Security",
                platform: "Prometheus",
                date: "18.10.2024",
                skills: "Course developed by the Victory Drones project team of the Dignitas Charitable Foundation",
                certificate: "Certificate 33.pdf"
            },
            {
                title: "Business English",
                platform: "Prometheus",
                date: "14.10.2024",
                skills: "Course provided by Ivanna Tabachuk, lecturer and business English trainer",
                certificate: "Certificate 28.pdf"
            }
        ],
        portfolioTitle: "Portfolio",
        projectTitle1: "E-commerce Platform",
        projectDesc1: "A fully functional online store with a shopping cart and payment system.",
        projectTitle2: "Travel Application",
        projectDesc2: "A mobile application for planning trips and finding interesting places.",
        projectTitle3: "Personal Blog",
        projectDesc3: "A blogging platform with an admin panel and comments.",
        technologiesTitle: "Technologies",
        viewProjectTitle: "View Project",
        viewGithubTitle: "View GitHub",
        contactsTitle: "Contacts",
        linkedinProfile: "LinkedIn Profile",
        githubProfile: "GitHub Profile",
        contactPrompt: "Contact me in any way convenient for you!",
        awardsTitle: "Awards",
        awards: [
            {
                title: 'Medal "For Wounds"',
                year: '2024',
                img: '5.png',
            },
            {
                title: 'Order "For Courage" 3th Class',
                year: '2022',
                img: '4.png',
            },
            {
                title: 'Medal "To Defenders of the Fatherland"',
                year: '2019',
                img: '3.png',
            },
            {
                title: 'Badge "ATO Participant"',
                year: '2016',
                img: '2.png',
            },
            {
                title: 'Badge "War Veteran"',
                year: '2016',
                img: '1.png',
            },
        ],
    }
}; 