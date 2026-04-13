// --- 1. Тілдер базасы ---
const translations = {
    kz: {
        nav: ["Басты бет", "Біз туралы", "Каталог", "Пікірлер", "Байланыс"],
        hero_h1: "Табиғатпен үйлесімді өмір сүріңіз!",
        hero_p: "Планетамызға оң әсер ететін экологиялық таза өнімдердің таңдамалы коллекциясын ашыңыз.",
        hero_btn: "Дүкенге өту",
        about_h2: "Біз туралы",
        about_p1: "EcoShop — бұл табиғи өнімдерді сүйетіндерге арналған орын.",
        about_p2: "Біздің мақсатымыз — Қазақстанның әрбір үйіне экологиялық таза өнімдерді жеткізу.",
        stats: ["100%", "Табиғи өнімдер", "Сапа", "Тексерілген тауарлар", "Қазақстан", "Ел бойынша жеткізу", "Эко", "Қауіпсіз қаптама"],
        cat_title: "Санаттар бойынша іздеу",
        categories: ["Сөмкелер", "Күтім", "Ыдыс-аяқ", "Үйге", "Барлығы"],
        search_placeholder: "Тауарды іздеу...",
        sort_options: ["Сұрыптау (әдепкі)", "Арзаннан қымбатқа", "Қымбаттан арзанға"],
        prod_h2: "Таңдаулы өнімдер",
        prod_p: "Ертеңгі күнге арналған ерекше экологиялық таза өнімдер",
        products: ["Эко-сөмке", "Көп реттік түтікшелер", "Бамбук тақта", "Био-ланчбокс", "Майлықтар", "Соя шамы", "Кептіргіш доптар", "Шопер", "Авоська", "Тарақ", "Щетка", "Сабын", "Кофе стақаны", "Балауыз майлықтар", "Ұстара", "Люффа", "Мақта таяқшалары", "Эко-ұнтақтар"],
        details_btn: "Толығырақ",
        close_btn: "Жабу",
        buy_btn: "Сатып алу",
        add_to_cart: "Себетке салу",
        cart_title: "Себеттегі тауарлар",
        total_label: "Жалпы:",
        checkout_btn: "Тапсырыс беру",
        review_h3: "Пікір қалдыру",
        placeholders: ["Атыңыз", "Gmail почтаңыз", "Пікіріңізді жазыңыз..."],
        submit_btn: "Жіберу",
        reviews_h2: "Клиенттердің пікірі",
        contact_h2: "Бізбен байланысыңыз",
        contact_p: "Сұрақтарыңыз болса, жазыңыз:"
    },
    ru: {
        nav: ["Главная", "О нас", "Каталог", "Отзывы", "Контакты"],
        hero_h1: "Живите в гармонии с природой!",
        hero_p: "Откройте для себя коллекцию экологически чистых продуктов.",
        hero_btn: "В магазин",
        about_h2: "О нас",
        about_p1: "EcoShop — это место для любителей натуральных продуктов.",
        about_p2: "Наша цель — доставить качественные продукты в каждый дом Казахстана.",
        stats: ["100%", "Натуральные продукты", "Качество", "Проверенные товары", "Казахстан", "Доставка по стране", "Эко", "Безопасная упаковка"],
        cat_title: "Поиск по категориям",
        categories: ["Сумки", "Уход", "Посуда", "Для дома", "Все"],
        search_placeholder: "Поиск товара...",
        sort_options: ["Сортировка", "От дешевых к дорогим", "От дорогих к дешевым"],
        prod_h2: "Избранные товары",
        prod_p: "Особые эко-продукты для будущего",
        products: ["Эко-сумка", "Многоразовые трубочки", "Бамбуковая доска", "Био-ланчбокс", "Салфетки", "Свеча", "Шарики для сушки", "Шоппер", "Авоська", "Расческа", "Щетка", "Мыло", "Стакан", "Салфетки", "Бритва", "Люффа", "Палочки", "Эко-порошки"],
        details_btn: "Подробнее",
        close_btn: "Закрыть",
        buy_btn: "Купить",
        add_to_cart: "В корзину",
        cart_title: "Товары в корзине",
        total_label: "Итого:",
        checkout_btn: "Оформить заказ",
        review_h3: "Оставить отзыв",
        placeholders: ["Ваше имя", "Ваш Gmail", "Ваш отзыв..."],
        submit_btn: "Отправить",
        reviews_h2: "Отзывы клиентов",
        contact_h2: "Свяжитесь с нами",
        contact_p: "Если есть вопросы, пишите:"
    }
};

// --- 2. Тілді ауыстыру функциясы ---
function setLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    // Навигация
    document.querySelectorAll('nav a').forEach((link, i) => { if(t.nav[i]) link.innerText = t.nav[i]; });

    // Hero және About
    if(document.querySelector('.hero h1')) document.querySelector('.hero h1').innerText = t.hero_h1;
    if(document.querySelector('.hero p')) document.querySelector('.hero p').innerText = t.hero_p;
    if(document.querySelector('.btn-main')) document.querySelector('.btn-main').innerText = t.hero_btn;
    if(document.querySelector('#about .section-title')) document.querySelector('#about .section-title').innerText = t.about_h2;

    // Статистика
    document.querySelectorAll('.stat-card h3, .stat-card p').forEach((el, i) => { if(t.stats[i]) el.innerText = t.stats[i]; });

    // Каталог
    const catTitle = document.querySelector('.categories-section .section-title');
    if (catTitle) catTitle.innerText = t.cat_title;
    document.querySelectorAll('.category-item span').forEach((span, i) => { if (t.categories[i]) span.innerText = t.categories[i]; });
    
    const searchInput = document.getElementById('catalog-search');
    if (searchInput) searchInput.placeholder = t.search_placeholder;

    const sortSelect = document.getElementById('price-sort');
    if (sortSelect) {
        Array.from(sortSelect.options).forEach((opt, i) => { if (t.sort_options[i]) opt.innerText = t.sort_options[i]; });
    }

    // Тауарлар
    if(document.querySelector('#products .section-title')) document.querySelector('#products .section-title').innerText = t.prod_h2;
    if(document.querySelector('#products p')) document.querySelector('#products p').innerText = t.prod_p;
    document.querySelectorAll('.card h3').forEach((h3, i) => { if (t.products[i]) h3.innerText = t.products[i]; });
    
    // Батырмалар
    document.querySelectorAll('.buy-btn').forEach(btn => btn.innerText = t.buy_btn);
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => btn.innerText = t.add_to_cart);
    document.querySelectorAll('.info-btn').forEach(btn => {
        const content = btn.nextElementSibling;
        btn.innerText = (content && content.style.display === "block") ? t.close_btn : t.details_btn;
    });

    // Себет (Modal)
    if(document.querySelector('#cart-modal h2')) document.querySelector('#cart-modal h2').innerText = t.cart_title;
    if(document.querySelector('#cart-modal strong')) document.querySelector('#cart-modal strong').innerText = t.total_label;
    const checkoutBtn = document.querySelector('#cart-modal .buy-btn'); 
    if (checkoutBtn) checkoutBtn.innerText = t.checkout_btn;

    // Пікірлер
    const reviewForm = document.getElementById('add-review');
    if (reviewForm) {
        if(reviewForm.querySelector('h3')) reviewForm.querySelector('h3').innerText = t.review_h3;
        if(document.getElementById('reviewer-name')) document.getElementById('reviewer-name').placeholder = t.placeholders[0];
        if(document.getElementById('reviewer-email')) document.getElementById('reviewer-email').placeholder = t.placeholders[1];
        if(document.getElementById('reviewer-text')) document.getElementById('reviewer-text').placeholder = t.placeholders[2];
        if(reviewForm.querySelector('.btn-submit')) reviewForm.querySelector('.btn-submit').innerText = t.submit_btn;
    }
    if(document.querySelector('#reviews h2')) document.querySelector('#reviews h2').innerText = t.reviews_h2;

    // Байланыс
    if(document.querySelector('#contact h2')) document.querySelector('#contact h2').innerText = t.contact_h2;
    if(document.querySelector('#contact p')) document.querySelector('#contact p').innerText = t.contact_p;

    // Тіл батырмалары
    if(document.getElementById('lang-kz')) document.getElementById('lang-kz').classList.toggle('active', lang === 'kz');
    if(document.getElementById('lang-ru')) document.getElementById('lang-ru').classList.toggle('active', lang === 'ru');
    
    renderCart(); 
}

// --- 3. Себет (Cart) Логикасы ---
let cart = [];

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateUI();
}

function changeQuantity(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) cart.splice(index, 1);
    updateUI();
}

function updateUI() {
    const countEl = document.getElementById('cart-count');
    if(countEl) countEl.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
    renderCart();
}

function renderCart() {
    const list = document.getElementById('cart-items-list');
    const totalElement = document.getElementById('total-price');
    if(!list || !totalElement) return;
    
    list.innerHTML = ""; 
    let total = 0;
    cart.forEach((item, index) => {
        list.innerHTML += `<li style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1px solid #eee; padding-bottom:5px;">
            <span style="flex:1">${item.name}</span>
            <div style="flex:1; text-align:center;">
                <button onclick="changeQuantity(${index}, -1)" class="q-btn">-</button>
                <span class="q-num">${item.quantity}</span>
                <button onclick="changeQuantity(${index}, 1)" class="q-btn">+</button>
            </div>
            <span style="flex:1; text-align:right;">${item.price * item.quantity} ₸</span>
        </li>`;
        total += item.price * item.quantity;
    });
    totalElement.innerText = total;
}

function openCart() { document.getElementById('cart-modal').style.display = "block"; renderCart(); }
function closeCart() { document.getElementById('cart-modal').style.display = "none"; }

// --- 4. Тапсырыс беру (WhatsApp) ---
function checkout() {
    if (cart.length === 0) return alert("Себет бос!");
    const myNumber = "77473174791"; 
    let text = cart.map(item => `• ${item.name} (${item.quantity} дана) - ${item.price * item.quantity} ₸`).join('\n');
    const total = document.getElementById('total-price').innerText;
    const message = `*ЖАҢА ТАПСЫРЫС*\n\n${text}\n\n*Жалпы сомасы: ${total} ₸*`;
    window.open(`https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

// --- 5. Іздеу, Сұрыптау, Толығырақ ---
function liveSearch() {
    let input = document.getElementById('catalog-search').value.toLowerCase();
    document.querySelectorAll('.card').forEach(card => {
        card.style.display = card.querySelector('h3').innerText.toLowerCase().includes(input) ? "block" : "none";
    });
}

function sortProducts() {
    let type = document.getElementById('price-sort').value;
    let grid = document.querySelector('.product-grid');
    let cards = Array.from(grid.querySelectorAll('.card'));
    if (type === "default") return;
    cards.sort((a, b) => {
        let pA = parseInt(a.querySelector('p').innerText.replace(/[^0-9]/g, ''));
        let pB = parseInt(b.querySelector('p').innerText.replace(/[^0-9]/g, ''));
        return type === "low" ? pA - pB : pB - pA;
    });
    grid.innerHTML = ""; 
    cards.forEach(c => grid.appendChild(c));
}

function toggleInfo(btn) {
    const content = btn.nextElementSibling;
    const isVisible = content.style.display === "block";
    content.style.display = isVisible ? "none" : "block";
    const lang = document.getElementById('lang-kz').classList.contains('active') ? 'kz' : 'ru';
    btn.innerText = isVisible ? translations[lang].details_btn : translations[lang].close_btn;
}

// --- 6. Dark Mode және Бастапқы күй ---
const darkBtn = document.getElementById('dark-mode-toggle');
if (darkBtn) {
    darkBtn.onclick = () => {
        document.body.classList.toggle('dark-theme');
        darkBtn.innerText = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
    };
}

// Бет жүктелгенде әдепкі тілді орнату (мысалы, қазақша)
window.onload = () => {
    setLanguage('kz');
};

// --- 7. Санаттар бойынша фильтрлеу функциясы ---
function filterCategory(category) {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block'; // "Барлығы" таңдалса, бәрін көрсету
        } else {
            // Егер карточканың кластарында (class) таңдалған санат болса көрсетеді
            if (card.classList.contains(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none'; // Болмаса жасырады
            }
        }
    });

    // Тауарлар тізіміне автоматты түрде жылжыту
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// --- ТІЛДЕР БАЗАСЫН ЖАҢАРТУ ЖӘНЕ СИПАТТАМАЛАР (Осыны ең астына қой) ---

// 1. Барлық мәтіндерді орысшаға/қазақшаға ауыстыру тізімі
const extraTranslations = {
    kz: {
        details_btn: "Толығырақ",
        close_btn: "Жабу",
        buy_btn: "Сатып алу",
        add_to_cart: "Себетке салу",
        descriptions: [
            "<strong>Не үшін қажет:</strong> Пластик пакеттерді алмастыру арқылы табиғатты ластанудан қорғайды.<br><strong>Қолдану тәсілі:</strong> Дүкенге барғанда өзіңізбен бірге алып жүріңіз.",
            "<strong>Мәлімет:</strong> Тот баспайтын болаттан жасалған. Жиынтықта 4 түтікше және тазалайтын арнайы щетка бар.",
            "<strong>Мәлімет:</strong> Табиғи бамбуктан жасалған, бактерияларға төзімді және пышақты мұқалтпайды.",
            "<strong>Мәлімет:</strong> Бидай сабанынан жасалған эко-пластик. Микротолқынды пешке салуға қауіпсіз.",
            "<strong>Мәлімет:</strong> Химиясыз тазалауға арналған. Суды жақсы сіңіреді.",
            "<strong>Мәлімет:</strong> Табиғи соя балауызы. Жану кезінде зиянды заттар бөлмейді.",
            "<strong>Мәлімет:</strong> Киімді жұмсарту үшін қолданылады. Кондиционерді алмастырады.",
            "<strong>Мәлімет:</strong> 100% тығыз мақтадан жасалған. Салмағы 10 кг-ға дейін шыдайды.",
            "<strong>Мәлімет:</strong> Көкөністер мен жемістерге арналған созылмалы тор сөмке.",
            "<strong>Мәлімет:</strong> Антистатикалық әсері бар, шаштың түбін зақымдамайды.",
            "<strong>Не үшін қажет:</strong> Бамбук щеткасы 6 айда толықтай биоыдырайды.",
            "<strong>Не үшін қажет:</strong> Табиғи майлардан жасалған. Химиялық қоспасыз.",
            "<strong>Не үшін қажет:</strong> Бір реттік стақандарды алмастырады. Ыстыққа төзімді.",
            "<strong>Не үшін қажет:</strong> Пластик пленканың баламасы. Азық-түлікті балғын сақтайды.",
            "<strong>Не үшін қажет:</strong> Металл ұстара сізге өмір бойы қызмет ете алады.",
            "<strong>Не үшін қажет:</strong> 100% табиғи ысқыш. Микропластик бөлмейді.",
            "<strong>Не үшін қажет:</strong> Кәдімгі пластик таяқшалардың экологиялық баламасы.",
            "<strong>Не үшін қажет:</strong> Фосфатсыз, су қоймаларына зиян келтірмейтін ұнтақтар."
        ]
    },
    ru: {
        details_btn: "Подробнее",
        close_btn: "Закрыть",
        buy_btn: "Купить",
        add_to_cart: "В корзину",
        descriptions: [
            "<strong>Зачем это нужно:</strong> Заменяет пластиковые пакеты, защищая природу.<br><strong>Способ применения:</strong> Берите с собой в магазин.",
            "<strong>Информация:</strong> Из нержавеющей стали. В комплекте 4 трубочки и щетка.",
            "<strong>Информация:</strong> Из натурального бамбука, устойчива к бактериям.",
            "<strong>Информация:</strong> Эко-пластик из соломы пшеницы. Безопасно для микроволновки.",
            "<strong>Информация:</strong> Для очистки без химии. Хорошо впитывает воду.",
            "<strong>Информация:</strong> Натуральный соевый воск. Не выделяет вредных веществ.",
            "<strong>Информация:</strong> Для смягчения одежды. Заменяет кондиционер.",
            "<strong>Информация:</strong> Из 100% плотного хлопка. Выдерживает до 10 кг.",
            "<strong>Информация:</strong> Растягивающаяся сетчатая сумка для овощей и фруктов.",
            "<strong>Информация:</strong> Антистатический эффект, не повреждает кожу головы.",
            "<strong>Зачем это нужно:</strong> Бамбуковая щетка разлагается за 6 месяцев.",
            "<strong>Зачем это нужно:</strong> Из натуральных масел. Без химии.",
            "<strong>Зачем это нужно:</strong> Замена бумажным стаканчикам. Термостойкий.",
            "<strong>Зачем это нужно:</strong> Замена пленке. Сохраняет продукты свежими.",
            "<strong>Зачем это нужно:</strong> Металлическая бритва прослужит вам всю жизнь.",
            "<strong>Зачем это нужно:</strong> 100% натуральная мочалка. Без микропластика.",
            "<strong>Зачем это нужно:</strong> Эко-альтернатива пластиковым палочкам.",
            "<strong>Зачем это нужно:</strong> Безфосфатные порошки, безопасные для воды."
        ]
    }
};

// 2. Тілді ауыстырғанда "Толығырақ" ішін жаңарту
const originalSetLanguage = window.setLanguage; // Ескі функцияны сақтап қою

window.setLanguage = function(lang) {
    // Егер ескі setLanguage болса, соны істетіп алу
    if (typeof originalSetLanguage === "function") {
        originalSetLanguage(lang);
    }

    const t = extraTranslations[lang];
    if (!t) return;

    // Карточкаларды аралап, ішіндегі мәтіндерді ауыстыру
    document.querySelectorAll('.card').forEach((card, i) => {
        // Сипаттаманы ауыстыру
        const infoContent = card.querySelector('.info-content');
        if (infoContent && t.descriptions[i]) {
            infoContent.innerHTML = t.descriptions[i];
        }

        // Батырма мәтінін (Толығырақ) ауыстыру
        const infoBtn = card.querySelector('.info-btn');
        if (infoBtn) {
            const isVisible = infoContent && infoContent.style.display === "block";
            infoBtn.innerText = isVisible ? t.close_btn : t.details_btn;
        }

        // Сатып алу және Себетке салу батырмалары
        const buyBtn = card.querySelector('.buy-btn');
        if (buyBtn) buyBtn.innerText = t.buy_btn;

        const cartBtn = card.querySelector('.add-to-cart-btn');
        if (cartBtn) cartBtn.innerText = t.add_to_cart;
    });

    // Пікірлер бөлімі
    const reviewTitle = document.querySelector('#add-review h3');
    if (reviewTitle) reviewTitle.innerText = (lang === 'kz') ? "Пікір қалдыру" : "Оставить отзыв";

    const reviewBtn = document.querySelector('.btn-submit');
    if (reviewBtn) reviewBtn.innerText = (lang === 'kz') ? "Жіберу" : "Отправить";
};

// 3. Батырманы басқанда мәтін бірден өзгеруі үшін
function toggleInfo(btn) {
    const content = btn.nextElementSibling;
    const isVisible = content.style.display === "block";
    content.style.display = isVisible ? "none" : "block";

    // Қазіргі тілді анықтау
    const lang = document.getElementById('lang-kz').classList.contains('active') ? 'kz' : 'ru';
    btn.innerText = isVisible ? extraTranslations[lang].details_btn : extraTranslations[lang].close_btn;
}

// 4. Санаттар (фильтр) жұмыс істеуі үшін
function filterCategory(category) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            card.classList.contains(category) ? card.style.display = 'block' : card.style.display = 'none';
        }
    });
}

// --- БАЙЛАНЫС БӨЛІМІН ЖӘНЕ ДИЗАЙНДЫ ТҮЗЕТУ ---

function fixContactSection() {
    // 1. "Бізбен байланысыңыз" бөлімі мен оның алдындағы блоктың арасын біріктіру
    const contactSection = document.querySelector('.review-form-section, #contact');
    if (contactSection) {
        contactSection.style.marginTop = "0";
        contactSection.style.paddingTop = "40px";
    }

    // 2. Ақ режимдегі (Light Mode) мәтін түстерін бақылау
    const isWhite = document.body.style.backgroundColor === 'white' || 
                    window.getComputedStyle(document.body).backgroundColor === 'rgb(255, 255, 255)';

    const contactTitle = document.querySelector('.review-form-section h3, #contact h2');
    const contactText = document.querySelector('.review-form-section p, #contact p');

    if (isWhite) {
        // Егер ақ фон болса, жазуларды қара немесе ақ (жасыл блоктың ішінде болса) қылу
        if (contactTitle) contactTitle.style.color = "#ffffff"; // Жасыл фонда ақ жазу жақсы көрінеді
        if (contactText) contactText.style.color = "#f0f0f0";
        
        // Навигация мәзірін (Header) ақ фонда көрінетіндей қылу
        document.querySelectorAll('nav a, .logo').forEach(el => {
            el.style.color = "#333";
        });
    } else {
        // Қара режимде бәрін бастапқы қалпына келтіру
        document.querySelectorAll('nav a, .logo').forEach(el => {
            el.style.color = "white";
        });
    }
}

// Режим ауысқанда немесе бет жүктелгенде іске қосу
window.addEventListener('scroll', fixContactSection);
window.addEventListener('click', () => setTimeout(fixContactSection, 100));
window.onload = fixContactSection;

// --- САНИТТАРДЫ ФИЛЬТРЛЕУ ЖӘНЕ АВТОМАТТЫ ЖЫЛЖЫТУ (SCROLL) ---

function filterCategory(category) {
    // 1. Барлық карточкаларды тауып алу
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        // Егер "all" таңдалса - бәрін көрсету, әйтпесе тек класы сәйкес келетінін көрсету
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            if (card.classList.contains(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });

    // 2. ТІЗІМГЕ СРАЗУ ЖЫЛЖЫТУ (SCROLL)
    // Тауарлар орналасқан бөлімнің ID-і 'products' немесе 'catalog' болуы керек
    const catalogSection = document.getElementById('products') || document.querySelector('.catalog-section');
    
    if (catalogSection) {
        catalogSection.scrollIntoView({ 
            behavior: 'smooth', // Бірқалыпты жылжыту
            block: 'start'      // Бөлімнің ең басына апару
        });
    }
}