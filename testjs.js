const newsData = [
    {
        id: 1,
        date: "31 Mai, 2024",
        category: "Noutăți și Anunțuri",
        title: "Ziua Mondială fără Tutun",
        description: "Ziua mondială fără tutun, marcată anual pe 31 mai, reprezintă un prilej important pentru a atrage [...]",
        fullContent: `
            <h2>Ziua Mondială fără Tutun - 31 Mai 2024</h2>
            <p>Ziua mondială fără tutun, marcată anual pe 31 mai, reprezintă un prilej important pentru a atrage atenția asupra efectelor nocive ale consumului de tutun și pentru a promova politici eficiente de reducere a consumului de tutun.</p>
            
            <h3>De ce este important?</h3>
            <p>Consumul de tutun este una dintre cele mai mari amenințări la adresa sănătății publice cu care s-a confruntat vreodată lumea, ucigând peste 8 milioane de oameni pe an în întreaga lume. Dintre aceștia, mai mult de 7 milioane sunt consumatori direcți, iar aproximativ 1,2 milioane sunt nefumători expuși fumului pasiv.</p>
            
            <h3>Beneficiile renunțării la fumat:</h3>
            <ul>
                <li>După 20 de minute: Tensiunea arterială și pulsul scad</li>
                <li>După 12 ore: Nivelul de monoxid de carbon din sânge revine la normal</li>
                <li>După 2-12 săptămâni: Circulația sângelui se îmbunătățește</li>
                <li>După 1 an: Riscul de boală cardiacă scade cu jumătate</li>
                <li>După 10 ani: Riscul de cancer pulmonar scade cu jumătate</li>
            </ul>
            
            <h3>Cum te putem ajuta?</h3>
            <p>Centrul nostru oferă consultații gratuite pentru persoanele care doresc să renunțe la fumat. Programează-te la medicul de familie pentru mai multe informații și suport personalizat.</p>
        `,
        image: "faratutun.jpg.jpg"
    },
    {
        id: 2,
        date: "19 Mai, 2024",
        category: "Celebrări",
        title: "Ziua Internațională a Medicinei de Familie",
        description: "Ziua internațională a medicilor de familie se sărbătorește anual în data de 19 mai. Scopul este [...]",
        fullContent: `
            <h2>Ziua Internațională a Medicinei de Familie</h2>
            <p>Ziua internațională a medicilor de familie se sărbătorește anual în data de 19 mai. Scopul este de a recunoaște contribuția esențială a medicilor de familie în sistemul de sănătate și de a promova importanța îngrijirii primare.</p>
            
            <h3>Rolul medicului de familie</h3>
            <p>Medicul de familie este primul contact al pacientului cu sistemul de sănătate și asigură:</p>
            <ul>
                <li>Îngrijire medicală continuă și personalizată</li>
                <li>Prevenție și educație pentru sănătate</li>
                <li>Diagnostic și tratament pentru afecțiuni comune</li>
                <li>Coordonarea îngrijirii cu alți specialiști</li>
                <li>Monitorizarea bolilor cronice</li>
            </ul>
            
            <h3>Serviciile noastre</h3>
            <p>La Centrul de Sănătate Cinișeuți, oferim o gamă completă de servicii de medicină de familie, inclusiv consultații preventive, tratamente pentru afecțiuni acute și cronice, și îngrijire personalizată pentru toate vârstele.</p>
            
            <p><strong>Program: Luni - Vineri, 08:00 - 18:00</strong></p>
        `,
        image: "medicifamilie.jpg"
    },
    {
        id: 3,
        date: "17 Mai, 2024",
        category: "Sănătate Publică",
        title: "Ziua Internațională de luptă împotriva Hipertensiunii Arteriale",
        description: "În fiecare an, la 17 mai, este marcată Ziua mondială de luptă împotriva hipertensiunii arteriale – [...]",
        fullContent: `
            <h2>Ziua de Luptă împotriva Hipertensiunii Arteriale</h2>
            <p>În fiecare an, la 17 mai, este marcată Ziua mondială de luptă împotriva hipertensiunii arteriale – o inițiativă globală menită să crească gradul de conștientizare cu privire la această afecțiune și la impactul ei asupra sănătății.</p>
            
            <h3>Ce este hipertensiunea arterială?</h3>
            <p>Hipertensiunea arterială (tensiunea arterială crescută) este o afecțiune cronică în care presiunea sângelui în artere este constant crescută. Este cunoscută și ca "ucigașul tăcut" deoarece adesea nu prezintă simptome evidente.</p>
            
            <h3>Valori normale vs. hipertensiune:</h3>
            <ul>
                <li><strong>Normal:</strong> Sub 120/80 mmHg</li>
                <li><strong>Ridicată:</strong> 120-129/sub 80 mmHg</li>
                <li><strong>Hipertensiune stadiul 1:</strong> 130-139/80-89 mmHg</li>
                <li><strong>Hipertensiune stadiul 2:</strong> 140/90 mmHg sau mai mare</li>
            </ul>
            
            <h3>Prevenție și control</h3>
            <p>Modificări ale stilului de viață care pot ajuta:</p>
            <ul>
                <li>Reducerea consumului de sare</li>
                <li>Menținerea unei greutăți sănătoase</li>
                <li>Activitate fizică regulată</li>
                <li>Limitarea consumului de alcool</li>
                <li>Gestionarea stresului</li>
                <li>Renunțarea la fumat</li>
            </ul>
            
            <p><strong>Recomandare:</strong> Monitorizați-vă tensiunea arterială regulat și consultați medicul de familie pentru evaluare și tratament personalizat.</p>
        `,
        image: "tensiune.webp"
    },
    {
        id: 4,
        date: "1 Decembrie, 2024",
        category: "Sănătate Publică",
        title: "Ziua Mondială de Luptă împotriva SIDA",
        description: "În fiecare an, pe 1 decembrie, comunitatea globală marchează Ziua Mondială de Luptă împotriva SIDA [...]",
        fullContent: `
            <h2>Ziua Mondială de Luptă împotriva SIDA</h2>
            <p>În fiecare an, pe 1 decembrie, comunitatea globală marchează Ziua Mondială de Luptă împotriva SIDA, o zi dedicată sensibilizării cu privire la epidemia de HIV/SIDA și comemorării celor care au pierdut lupta cu această boală.</p>
            
            <h3>Informații esențiale despre HIV/SIDA</h3>
            <p>HIV (virusul imunodeficienței umane) este un virus care atacă sistemul imunitar al organismului. Dacă nu este tratat, HIV poate duce la SIDA (sindromul imunodeficienței dobândite).</p>
            
            <h3>Căi de transmitere:</h3>
            <ul>
                <li>Contact sexual neprotejat</li>
                <li>Partajarea acelor contaminate</li>
                <li>De la mamă la copil în timpul sarcinii, nașterii sau alăptării</li>
                <li>Transfuzii de sânge contaminat (foarte rar în prezent)</li>
            </ul>
            
            <h3>Prevenție</h3>
            <ul>
                <li>Utilizarea prezervativelor</li>
                <li>Testare regulată</li>
                <li>Nu partajați ace sau seringi</li>
                <li>Tratament preventiv pentru persoanele cu risc crescut</li>
            </ul>
            
            <h3>Testare și confidențialitate</h3>
            <p>Testarea pentru HIV este gratuită și confidențială. Un diagnostic precoce permite începerea tratamentului la timp și o viață normală.</p>
            
            <p><strong>Pentru informații și consiliere, contactați-ne la numărul: +37325451307</strong></p>
        `,
        image: "hiv.jpg"    },
    {
        id: 5,
        date: "14 Noiembrie, 2024",
        category: "Sănătate Publică",
        title: "Ziua Mondială a Diabetului",
        description: "Ziua Mondială a Diabetului, marcată pe 14 noiembrie, este cea mai mare campanie de sensibilizare [...]",
        fullContent: `
            <h2>Ziua Mondială a Diabetului - 14 Noiembrie</h2>
            <p>Ziua Mondială a Diabetului, marcată pe 14 noiembrie, este cea mai mare campanie de sensibilizare cu privire la diabet din lume. Data a fost aleasă pentru a marca ziua de naștere a lui Frederick Banting, care, împreună cu Charles Best, a descoperit insulina în 1921.</p>
            
            <h3>Tipuri de diabet:</h3>
            <ul>
                <li><strong>Diabetul tip 1:</strong> Organismul nu produce insulină</li>
                <li><strong>Diabetul tip 2:</strong> Organismul nu folosește eficient insulina</li>
                <li><strong>Diabetul gestațional:</strong> Apare în timpul sarcinii</li>
            </ul>
            
            <h3>Simptome de alarmă:</h3>
            <ul>
                <li>Sete excesivă și urinare frecventă</li>
                <li>Foame extremă</li>
                <li>Slăbire inexplicabilă</li>
                <li>Oboseală</li>
                <li>Vedere încețoșată</li>
                <li>Vindecarea lentă a rănilor</li>
            </ul>
            
            <h3>Prevenție și management:</h3>
            <ul>
                <li>Alimentație echilibrată și sănătoasă</li>
                <li>Activitate fizică regulată (minimum 30 min/zi)</li>
                <li>Menținerea unei greutăți sănătoase</li>
                <li>Monitorizarea regulată a glicemiei</li>
                <li>Respectarea tratamentului prescris</li>
            </ul>
            
            <p><strong>Oferim teste gratuite de glicemie și consultații pentru prevenția și managementul diabetului. Programați-vă astăzi!</strong></p>
        `,
        image: "diabet.jpg"
    },
    {
        id: 6,
        date: "10 Octombrie, 2024",
        category: "Sănătate Mentală",
        title: "Ziua Mondială a Sănătății Mentale",
        description: "Ziua Mondială a Sănătății Mentale, sărbătorită pe 10 octombrie, are ca scop creșterea gradului [...]",
        fullContent: `
            <h2>Ziua Mondială a Sănătății Mentale</h2>
            <p>Ziua Mondială a Sănătății Mentale, sărbătorită pe 10 octombrie, are ca scop creșterea gradului de conștientizare cu privire la problemele de sănătate mintală din întreaga lume și mobilizarea eforturilor în sprijinul sănătății mentale.</p>
            
            <h3>De ce este importantă sănătatea mentală?</h3>
            <p>Sănătatea mentală este la fel de importantă ca și sănătatea fizică. Afectează modul în care gândim, simțim și acționăm. De asemenea, ajută la determinarea modului în care gestionăm stresul, ne raportăm la alții și luăm decizii.</p>
            
            <h3>Semne că ai putea avea nevoie de ajutor:</h3>
            <ul>
                <li>Tristețe sau depresie prelungită</li>
                <li>Anxietate excesivă sau îngrijorări</li>
                <li>Schimbări extreme de dispoziție</li>
                <li>Izolare socială</li>
                <li>Probleme de somn</li>
                <li>Dificultăți de concentrare</li>
                <li>Modificări ale apetitului</li>
            </ul>
            
            <h3>Cum să îți îngrijești sănătatea mentală:</h3>
            <ul>
                <li>Vorbește despre sentimentele tale</li>
                <li>Menține-te activ fizic</li>
                <li>Adoptă o alimentație sănătoasă</li>
                <li>Consumă alcool cu moderație</li>
                <li>Menține legătura cu prietenii și familia</li>
                <li>Cere ajutor când ai nevoie</li>
                <li>Fă pauze regulate</li>
                <li>Practică relaxarea și mindfulness</li>
            </ul>
            
            <p><strong>Dacă tu sau cineva pe care îl cunoști se confruntă cu probleme de sănătate mintală, nu ezitați să căutați ajutor profesional. Suntem aici pentru a vă susține.</strong></p>
            
            <p><em>Linia Telefonică de Asistență în Criză: 0 800 0 8000 (apel gratuit, 24/7)</em></p>
        `,
        image: "sanatatementala.png"
    }
];

function createNewsCard(news) {
    return `
        <div class="news-card" data-id="${news.id}">
            <div class="card-image">
                <img src="${news.image}" alt="${news.title}" onerror="this.src='https://via.placeholder.com/400x250?text=Imagine+Indisponibilă'">
                <div class="card-date">${news.date}</div>
            </div>
            <div class="card-content">
                <div class="card-category">${news.category}</div>
                <h3 class="card-title">${news.title}</h3>
                <p class="card-description">${news.description}</p>
                <span class="card-link">Citește mai mult</span>
            </div>
        </div>
    `;
}

function openNewsModal(newsId) {
    const news = newsData.find(n => n.id === newsId);
    if (!news) return;
    
    let modal = document.getElementById('newsModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'newsModal';
        modal.className = 'news-modal';
        document.body.appendChild(modal);
    }
    
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="closeNewsModal()">&times;</button>
            <div class="modal-header">
                <img src="${news.image}" alt="${news.title}" onerror="this.src='https://via.placeholder.com/800x400?text=Imagine+Indisponibilă'">
                <div class="modal-meta">
                    <span class="modal-date">📅 ${news.date}</span>
                    <span class="modal-category">${news.category}</span>
                </div>
            </div>
            <div class="modal-body">
                ${news.fullContent}
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeNewsModal() {
    const modal = document.getElementById('newsModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function displayNews(count = 3) {
    const newsGrid = document.getElementById('newsGrid');
    
    if (!newsGrid) return; 
    
    const recentNews = newsData.slice(0, count);
    const newsHTML = recentNews.map(news => createNewsCard(news)).join('');
    newsGrid.innerHTML = newsHTML;
    
    const cards = document.querySelectorAll('.news-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const newsId = parseInt(this.getAttribute('data-id'));
            openNewsModal(newsId);
        });
    });
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
    displayNews(count);
    setTimeout(animateOnScroll, 100);
}

function toggleAllNews() {
    const newsGrid = document.getElementById('newsGrid');
    const btn = document.querySelector('.view-all-btn');
    
    if (!newsGrid || !btn) return;
    
    const currentCount = newsGrid.querySelectorAll('.news-card').length;
    
    if (currentCount === 3) {
        displayNews(newsData.length);
        btn.innerHTML = 'Vezi mai puțin ↑';
        btn.classList.add('expanded');
    } else {
        displayNews(3);
        btn.innerHTML = 'Vezi toate →';
        btn.classList.remove('expanded');
        
        document.querySelector('.news-section').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    setTimeout(animateOnScroll, 100);
}

document.addEventListener('DOMContentLoaded', () => {
    displayNews(3);
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
    
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('newsModal');
        if (event.target === modal) {
            closeNewsModal();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeNewsModal();
        }
    });
});

window.openNewsModal = openNewsModal;
window.closeNewsModal = closeNewsModal;
window.toggleAllNews = toggleAllNews;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { addNews, displayNews, changeDisplayCount };
}

console.log("Tot ok, sper!");