/* ─── DATA ─── */
const DATA = {
  team: [
    { name: 'Anand Kumar Jha', role: 'Founder', img: 'Gallery/anandjha.png', bio: 'Environmental scientist and founder of openWater.' },
  ],

  
  socials: [
    { name: 'Instagram', url: 'https://www.instagram.com/ow.mithila.jal.shakti/', icon: '📷' },
    { name: 'GitHub', url: 'https://github.com/anandjha27/openWater', icon: '📝' }
  ],

  articles: [
    //{ date: 'Feb 15', title: 'Water Quality Monitoring', category: 'Blog', url: '#' },
   // { date: 'Jan 28', title: 'Community Science Initiative', category: 'Insights', url: '#' }
  ],

  events: [
    //{ day: '14', mon: 'Jun 2025', title: 'Mithila Water Conclave 2025', loc: 'Darbhanga, Bihar', desc: 'Annual gathering of researchers and community leaders.', type: 'upcoming' },
    //{ day: '28', mon: 'May 2025', title: 'Webinar: Monsoon & River Pollution', loc: 'Online', desc: 'Talk on monsoon seasonality and pollution loads.', type: 'upcoming' },
  ],

  journals: [
    //{ vol: 'Vol. 2, Q3 2025', title: 'River Quality Monitoring Report', summary: 'Latest findings on water quality across Mithila rivers.', authors: 'Anand Jha, Team', date: 'Sep 2025', drive: 'https://drive.google.com/' },
    //{ vol: 'Vol. 1, Q2 2026', title: 'Community Impact Study', summary: 'Assessment of community involvement in monitoring.', authors: 'Ritik Kumar', date: 'Jun 2026', drive: 'https://drive.google.com/' }
  ],

  news: [
    //{ cat: 'Milestone', img: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600&q=75', title: 'Water Monitoring Initiative Launches', body: 'openWater begins real-time monitoring across Mithila region.', date: '08 May 2025' },
    //{ cat: 'Update', img: 'https://images.unsplash.com/photo-1569249044596-c49d34136e68?w=600&q=75', title: 'Community Engagement Report', body: 'Over 500 community members now engaged in monitoring programs.', date: '15 Apr 2025' }
  ],

  gallery: {
    mission: [
      { src: 'Gallery/ASV_Photos/Water_Sampling.jpg', label: 'Water Sampling' },
      { src: 'Gallery/ASV_Photos/River_Survey.jpg', label: 'River Survey' },
      { src: 'Gallery/ASV_Photos/Lab_Analysis.jpg', label: 'Lab Analysis' },
      { src: 'Gallery/ASV_Photos/ASV.jpg', label: 'IOT Vessel' },
    ],
    foundation: [
      { src: 'Gallery/foundation/Team_Workshop.jpg', label: 'Team Workshop' },
      { src: 'Gallery/foundation/Team_Workshop.jpg', label: 'Team Workshop' },
      { src: 'Gallery/foundation/Team_Workshop.jpg', label: 'Team Workshop' },
      { src: 'Gallery/foundation/Team_Workshop.jpg', label: 'Team Workshop' }
    ]
  }
};

const nav = document.getElementById('mainNav');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40));

hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

document.querySelectorAll('#navLinks a, #navLinks button').forEach(el => {
  el.addEventListener('click', () => {
    if (window.innerWidth < 900) navLinks.classList.remove('open');
  });
});

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
    initFadeIn();
  }
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === pageId);
  });
  if (navLinks.classList.contains('open')) navLinks.classList.remove('open');
}

document.querySelectorAll('[data-page]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    const pg = el.dataset.page;
    const tab = el.dataset.tab;
    showPage(pg);
    if (tab) {
      setTimeout(() => {
        if (pg === 'page-gallery') switchGalleryTab(tab);
        if (pg === 'page-rnd') switchRndTab(tab);
      }, 50);
    }
    if (window.innerWidth < 900) navLinks.classList.remove('open');
  });
});

document.querySelectorAll('.nav-links > li > button').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const dropdown = btn.parentElement.querySelector('.dropdown');
    if (dropdown) {
      dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
    }
  });
});

document.addEventListener('click', e => {
  if (!e.target.closest('.nav-links > li')) {
    document.querySelectorAll('.dropdown').forEach(d => d.style.display = 'none');
  }
});

function buildGalleryPreview() {
  const grid = document.getElementById('galleryPreviewGrid');
  if (!grid) return;
  const items = DATA.gallery.mission.slice(0, 4);
  grid.innerHTML = items.map(item => `
    <div class="gp-item">
      <img src="${item.src}" alt="${item.label}" loading="lazy">
      <div class="gp-overlay"><span>${item.label}</span></div>
    </div>
  `).join('');
}

function buildEventsPreview() {
  const list = document.getElementById('eventsPreviewList');
  if (!list || !DATA.events) return;
  const items = DATA.events.slice(0, 5);
  list.innerHTML = items.map(ev => `
    <div class="ep-item">
      <div class="ep-date"><div class="day">${ev.day}</div><div class="mon">${ev.mon}</div></div>
      <div class="ep-info"><h3>${ev.title}</h3><p>${ev.loc}</p></div>
      <span class="ep-tag ${ev.type}">${ev.type === 'upcoming' ? 'Upcoming' : 'Completed'}</span>
    </div>
  `).join('');
}

function buildJournalPreview() {
  const grid = document.getElementById('journalPreviewCards');
  if (!grid) return;
  const items = DATA.journals.slice(0, 2);
  grid.innerHTML = items.map(j => `
    <div class="jp-card">
      <div class="jp-vol">${j.vol}</div>
      <h3>${j.title}</h3>
      <p>${j.summary}</p>
      <div class="jp-footer">
        <span class="jp-date">${j.date}</span>
        <a href="${j.drive}" target="_blank" rel="noopener" class="jp-dl">Download →</a>
      </div>
    </div>
  `).join('');
}

function buildNewsPreview() {
  const featEl = document.getElementById('newsFeatured');
  const sideEl = document.getElementById('newsSide');
  if (!featEl || !sideEl || !DATA.news || DATA.news.length === 0) return;
  const items = DATA.news.slice(0, 5);
  const feat = items[0];
  featEl.innerHTML = `
    <img src="${feat.img}" alt="${feat.title}" loading="lazy">
    <div class="news-feat-body">
      <span class="news-cat">${feat.cat}</span>
      <h3>${feat.title}</h3>
      <p>${feat.body}</p>
      <div class="news-date">${feat.date}</div>
    </div>
  `;
  sideEl.innerHTML = items.slice(1, 5).map(n => `
    <div class="ns-item">
      <span class="news-cat">${n.cat}</span>
      <h4>${n.title}</h4>
      <div class="news-date">${n.date}</div>
    </div>
  `).join('');
}

let currentGalleryTab = 'mission';

function buildGalleryPage(tab) {
  const grid = document.getElementById('galleryFullGrid');
  if (!grid) return;
  grid.innerHTML = DATA.gallery[tab].map(item => `
    <div class="gf-item">
      <img src="${item.src}" alt="${item.label}" loading="lazy">
      <div class="gf-overlay"><span>${item.label}</span></div>
    </div>
  `).join('');
}

function switchGalleryTab(tab) {
  currentGalleryTab = tab;
  document.querySelectorAll('#galleryTabs .tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.gallerytab === tab);
  });
  buildGalleryPage(tab);
}

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-gallerytab]');
  if (btn) switchGalleryTab(btn.dataset.gallerytab);
});

function buildEventsPage() {
  const list = document.getElementById('eventsFullList');
  if (!list || !DATA.events) return;
  list.innerHTML = DATA.events.map(ev => `
    <div class="ev-item">
      <div class="ev-date"><div class="day">${ev.day}</div><div class="mon">${ev.mon}</div></div>
      <div class="ev-info"><h3>${ev.title}</h3><div class="ev-loc">${ev.loc}</div><div class="ev-desc">${ev.desc}</div></div>
      <span class="ev-tag ${ev.type}">${ev.type === 'upcoming' ? 'Upcoming' : 'Completed'}</span>
    </div>
  `).join('');
}

function switchRndTab(tab) {
  document.querySelectorAll('.rnd-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.rndtab === tab);
  });
  document.querySelectorAll('.rnd-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === 'rnd-' + tab);
  });
}

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-rndtab]');
  if (btn) switchRndTab(btn.dataset.rndtab);
});

function buildJournalPage() {
  const list = document.getElementById('journalFullList');
  if (!list) return;
  list.innerHTML = DATA.journals.map(j => `
    <div class="jl-item">
      <div><div class="jl-vol">${j.vol}</div><h3>${j.title}</h3><p>${j.summary}</p><div class="jl-meta">Authors: ${j.authors}</div></div>
      <div class="jl-actions"><div class="jl-date-badge">${j.date}</div><a href="${j.drive}" target="_blank" rel="noopener" class="btn-dl">Download</a></div>
    </div>
  `).join('');
}

function buildNewsPage() {
  const list = document.getElementById('newsFullList');
  if (!list || !DATA.news) return;
  list.innerHTML = DATA.news.slice(0, 5).map(n => `
    <div class="nfl-item">
      <img src="${n.img}" alt="${n.title}" loading="lazy">
      <div class="nfl-body"><span class="news-cat">${n.cat}</span><h3>${n.title}</h3><p>${n.body}</p><div class="news-date">${n.date}</div></div>
    </div>
  `).join('');
}

function buildTeamPage() {
  const grid = document.getElementById('teamGrid');
  if (!grid) return;
  grid.innerHTML = DATA.team.map(member => `
    <div class="team-profile">
      <div class="tp-avatar"><img src="${member.img}" alt="${member.name}" loading="lazy"></div>
      <h3>${member.name}</h3>
      <div class="tp-role">${member.role}</div>
      <p>${member.bio}</p>
    </div>
  `).join('');
}



function buildArticles() {
  const list = document.getElementById('articlesList');
  if (!list) return;
  list.innerHTML = DATA.articles.map(a => `
    <div class="article-item"><div class="ai-date">${a.date}</div><h3><a href="${a.url}">${a.title}</a></h3><span class="ai-cat">${a.category}</span></div>
  `).join('');
}

function buildSocialFooter() {
  const socials = document.getElementById('socialLinks');
  if (!socials) return;
  socials.innerHTML = DATA.socials.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener" title="${s.name}" class="social-link">${s.icon}</a>
  `).join('');
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Sent ✓';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.disabled = false;
      contactForm.reset();
    }, 3000);
  });
}

function initFadeIn() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.page.active .fade-in:not(.visible)').forEach(el => observer.observe(el));
}

(function init() {
  buildGalleryPreview();
  buildEventsPreview();
  buildJournalPreview();
  buildNewsPreview();
  buildEventsPage();
  buildGalleryPage('mission');
  buildJournalPage();
  buildNewsPage();
  buildTeamPage();
  buildArticles();
  buildSocialFooter();
  showPage('page-home');
  initFadeIn();
})();