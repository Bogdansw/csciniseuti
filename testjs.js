const newsData = [
    {
        id: 1,
        date: "31 Mai, 2024",
        category: "Noutăți și Anunțuri",
        title: "Ziua Mondială fără Tutun",
        description: "Ziua mondială fără tutun, marcată anual pe 31 mai, reprezintă un prilej important pentru a atrage [...]",
        image: "faratutun.jpg.jpg",
        link: "anunt1.html"
    },
    {
        id: 2,
        date: "19 Mai, 2024",
        category: "...",
        title: "Ziua Internațională a Medicinii de Familie",
        description: "Ziua internațională a medicilor de familie se sărbătorește anual în data de 19 mai. Scopul este [...]",
        image: "medicifamilie.jpg",
        link: "anunt2.html"
    },
    {
        id: 3,
        date: "17 Mai, 2024",
        category: "...",
        title: "Ziua Internațională de luptă împotriva Hipertensiunii Arteriale",
        description: "În fiecare an, la 17 mai, este marcată Ziua mondială de luptă împotriva hipertensiunii arteriale – [...]",
        image: "tensiune.webp",
        link: "anunt3.html"
    }
];

function createNewsCard(news) {
    return `
        <a href="${news.link}" class="news-card">
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
}

function displayNews() {
    const newsGrid = document.getElementById('newsGrid');
    
    if (!newsGrid) return; 
    
    const recentNews = newsData.slice(0, 3);
    
    const newsHTML = recentNews.map(news => createNewsCard(news)).join('');
    
    newsGrid.innerHTML = newsHTML;
}

function animateOnScroll() {
    const cards = document.querySelectorAll('.news-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.5s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150); 
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => observer.observe(card));
}


document.addEventListener('DOMContentLoaded', () => {
    displayNews();
    setTimeout(animateOnScroll, 100);
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    function toggleTheme() {
        if (themeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark'); 
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light'); 
        }
    }

    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.checked = true; 
    } else {
        body.classList.remove('dark-mode');
        themeToggle.checked = false; 
    }


   themeToggle.addEventListener('change', toggleTheme);
});

function addNews(newsItem) {
    newsData.unshift(newsItem);
    displayNews(); 
    setTimeout(animateOnScroll, 100); 
}
 
function changeDisplayCount(count) {
    const newsGrid = document.getElementById('newsGrid');
    
    if (!newsGrid) return;
    
    const selectedNews = newsData.slice(0, count);
    const newsHTML = selectedNews.map(news => createNewsCard(news)).join('');
    newsGrid.innerHTML = newsHTML;
    
    setTimeout(animateOnScroll, 100);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { addNews, displayNews, changeDisplayCount };
}

console.log("nimic de vazut aici, nu cauta.")
