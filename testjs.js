// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to 'light-mode'
const currentTheme = localStorage.getItem('theme') || 'light-mode';
body.classList.add(currentTheme);

// Set checkbox state based on current theme
if (currentTheme === 'dark-mode') {
    themeToggle.checked = true;
}

// Listen for toggle changes
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    }
});

// News data for page1.html
const newsData = [
    {
        id: 1,
        title: "Program extins în perioada sărbătorilor",
        description: "Vă informăm că în perioada sărbătorilor de iarnă, programul va fi modificat...",
        date: "15 Dec 2024",
        category: "Anunț",
        image: "https://via.placeholder.com/400x250"
    },
    {
        id: 2,
        title: "Vaccinare antigripală gratuită",
        description: "A început campania de vaccinare antigripală gratuită pentru persoanele eligibile...",
        date: "10 Dec 2024",
        category: "Sănătate",
        image: "https://via.placeholder.com/400x250"
    },
    {
        id: 3,
        title: "Servicii noi disponibile",
        description: "Suntem bucuroși să anunțăm introducerea unor noi servicii medicale...",
        date: "5 Dec 2024",
        category: "Servicii",
        image: "https://via.placeholder.com/400x250"
    }
];

// Load news if newsGrid exists (for page1.html)
const newsGrid = document.getElementById('newsGrid');
if (newsGrid) {
    newsData.forEach(news => {
        const newsCard = `
            <a href="#" class="news-card">
                <div class="card-image">
                    <img src="${news.image}" alt="${news.title}">
                    <div class="card-date">${news.date}</div>
                </div>
                <div class="card-content">
                    <div class="card-category">${news.category}</div>
                    <h3 class="card-title">${news.title}</h3>
                    <p class="card-description">${news.description}</p>
                    <span class="card-link">Citește mai mult</span>
                </div>
            </a>
        `;
        newsGrid.innerHTML += newsCard;
    });
}