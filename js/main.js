/* ─── DATA ─── */
const DATA = {
  team: [
    { name: 'Anand Kumar Jha', role: 'Founder', img: 'Gallery/Adobe Express - file.png', bio: '' },
    { name: 'Ritik Kumar', role: 'Head of Field Operations', img: '', bio: '' },
    
  
/*
  alumni: [
    { name: 'Vikram Yadav', role: 'Former Data Analyst', current: 'Environmental Consultant, UNEP' },
    { name: 'Neha Patel', role: 'Former Field Coordinator', current: 'NGO Director, Gujarat Water Trust' },
    { name: 'Arjun Singh', role: 'Former Lab Technician', current: 'Quality Assurance, Indian Oil' },
    { name: 'Meera Devi', role: 'Former Community Manager', current: 'Social Worker, Bihar Health Dept' }
  ],
  */

  socials: [
    { name: 'Instagram', url: 'https://www.instagram.com/ow.mithila.jal.shakti/', icon: '📷' },
   // { name: 'Twitter', url: 'https://twitter.com/openwater', icon: '𝕏' },
   // { name: 'YouTube', url: 'https://youtube.com/@openwater', icon: '▶️' },
   // { name: 'LinkedIn', url: 'https://linkedin.com/company/openwater', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com/anandjha27/openWater', icon: '📝' }
  ],
/*
  articles: [
    { date: 'Feb 15', title: 'Real-Time Monitoring Saves Rivers', category: 'Blog', url: '#' },
    { date: 'Jan 28', title: 'When Citizens Become Environmental Guardians', category: 'Insights', url: '#' },
    { date: 'Dec 10', title: 'The Future of Open Environmental Data', category: 'Commentary', url: '#' },
    { date: 'Nov 05', title: 'Lessons from 5000 Days of Monitoring', category: 'Blog', url: '#' }
  ],
*/
  /*events: [
    { day: '14', mon: 'Jun 2025', title: 'Mithila Water Conclave 2025', loc: 'Darbhanga, Bihar', desc: 'Annual gathering of researchers, government officials and community leaders to discuss river health across the Mithila basin.', type: 'upcoming' },
    { day: '28', mon: 'May 2025', title: 'Webinar: Monsoon & River Pollution Dynamics', loc: 'Online', desc: 'Talk with Dr. Priya Sharma, IIT Patna on how monsoon seasonality affects pollution loads. Free registration open.', type: 'upcoming' },
    { day: '03', mon: 'May 2025', title: 'School Outreach — Madhubani District', loc: 'Madhubani, Bihar', desc: 'Interactive water-testing workshops for Class 8–10 students across 6 schools. 320 students participated.', type: 'completed' },
    { day: '12', mon: 'Apr 2025', title: 'Bagmati River Clean-Up Drive', loc: 'Samastipur, Bihar', desc: '280 volunteers collected 4.2 tonnes of waste in partnership with Samastipur municipality.', type: 'completed' },
    { day: '22', mon: 'Mar 2025', title: 'World Water Day Public Talk', loc: 'Patna Science College Auditorium', desc: 'Panel discussion on Bihar\'s groundwater crisis attended by 450+ citizens and policymakers.', type: 'completed' },
    { day: '14', mon: 'Feb 2025', title: 'Sensor Network Expansion Workshop', loc: 'Darbhanga Field Station', desc: 'Training session for 35 community volunteers on IoT sensor installation and maintenance along the Kamla river stretch.', type: 'completed' },
    { day: '08', mon: 'Jan 2025', title: 'Annual Review & Strategic Planning 2025', loc: 'openWater HQ, Darbhanga', desc: 'Internal review of 2024 outcomes and roadmap for 2025 R&D and community programmes.', type: 'completed' },
    { day: '20', mon: 'Dec 2024', title: 'Bihar Environment Summit — Keynote', loc: 'Hotel Maurya, Patna', desc: 'openWater presented key findings on industrial effluent impact on the Gandak river system.', type: 'completed' }
  ],
  */

  journals: [
    { vol: 'Vol. 2, Q3 2025', title: '', summary: '', authors: '', drive: 'https://drive.google.com/' },
    { vol: 'Vol. 1, Q2 2026', title: '', summary: '', authors: '', drive: 'https://drive.google.com/' },
    
  ],

/*
  news: [
    { cat: 'Milestone', img: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600&q=75', title: 'openWater crosses 5,000 daily data points from Mithila river network', body: 'Our sensor network expansion in Q1 2025 pushed real-time data throughput past a landmark threshold, enabling finer-grained pollution alerts for downstream communities and early warning systems for fishers.', date: '08 May 2025' },
    { cat: 'Policy', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=75', title: 'Bihar government cites openWater data in new industrial discharge guidelines', body: 'The Bihar State Pollution Control Board referenced two years of openWater monitoring data while drafting updated effluent discharge norms for textile and food processing industries along the Bagmati corridor.', date: '02 May 2025' },
    { cat: 'Research', img: 'https://images.unsplash.com/photo-1569249044596-c49d34136e68?w=600&q=75', title: 'New study: arsenic levels in Gandak tributaries 3× safe limit during dry season', body: 'Quarterly lab results confirm elevated arsenic concentrations at 6 of 14 monitored sites during the April–June dry season window. Community alerts have been issued and safe alternative water points identified.', date: '21 Apr 2025' },
    { cat: 'Community', img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=75', title: 'Madhubani fishing cooperative joins river health monitoring programme', body: 'A 180-member fishing cooperative has formally partnered with openWater to report daily observations on water colour, odour, and fish behaviour — adding a rich community intelligence layer to our sensor data.', date: '14 Apr 2025' },
    { cat: 'Award', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75', title: 'openWater receives National Environmental Data Excellence recognition 2025', body: 'The Ministry of Environment, Forest and Climate Change recognised openWater for outstanding contribution to open environmental data at the national Environment Day awards in New Delhi.', date: '05 Apr 2025' }
  ],
*/
  gallery: {
    mission: [
      { src: 'Gallery/ASV_Photos/ASV.jpg', label: 'Water Sampling' },
      { src: 'Gallery/ASV_Photos/ASV.jpg', label: 'River Survey' },
      { src: 'Gallery/ASV_Photos/ASV.jpg', label: 'Lab Analysis' },
      { src: 'Gallery/ASV_Photos/ASV.jpg', label: 'Clean-Up Drive' },
      { src: 'Gallery/ASV_Photos/ASV.jpg', label: 'Field Research' },
      { src: 'Gallery/ASV_Photos/ASV.jpg', label: 'Sensor Monitoring' },
      { src: 'Gallery/ASV_Photos/ASV.jpg', label: 'River Assessment' },
      { src: 'Gallery/ASV_Photos/ASV.jpg', label: 'Ecosystem Study' },
      { src: 'Gallery/ASV_Photos/ASV.jpg', label: 'Data Collection' }
    ],
    foundation: [
      { src: 'Gallery/ASV_Photos/ASV.jpg', label: 'Team Workshop' },
      { src: 'Gallery/ASV_Photos/ASV.jpg', label: 'Team Workshop' },
      { src: 'Gallery/ASV_Photos/ASV.jpg', label: 'Team Workshop' },
      { src: 'Gallery/ASV_Photos/ASV.jpg', label: 'Team Workshop' },
      { src: 'Gallery/ASV_Photos/ASV.jpg', label: 'Team Workshop' },
      { src: 'Gallery/ASV_Photos/ASV.jpg', label: 'Team Workshop' },
      { src: 'Gallery\Kanwar_Lake_Begusarai_by_Ziddi_Photowala.jpg', label: 'Community Outreach' }
    ]
  }
};

/* ─── NAV ─── */
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

/* ─── PAGE ROUTER ─── */
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

/* ─── NAVIGATION CLICK HANDLING ─── */
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
    // Close dropdown on mobile after click
    if (window.innerWidth < 900) {
      navLinks.classList.remove('open');
    }
  });
});

/* ─── DROPDOWN BUTTON HANDLING ─── */
document.querySelectorAll('.nav-links > li > button').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const dropdown = btn.parentElement.querySelector('.dropdown');
    if (dropdown) {
      dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
    }
  });
});

/* ─── CLOSE DROPDOWNS ON OUTSIDE CLICK ─── */
document.addEventListener('click', e => {
  if (!e.target.closest('.nav-links > li')) {
    document.querySelectorAll('.dropdown').forEach(d => d.style.display = 'none');
  }
});

/* ─── HOME: GALLERY PREVIEW (4 items) ─── */
function buildGalleryPreview() {
  const grid = document.getElementById('galleryPreviewGrid');
  if (!grid) return;
  const items = DATA.gallery.mission.slice(0, 4);
  grid.innerHTML = items.map(item => `
    <div class="gp-item" data-page="page-gallery">
      <img src="${item.src}" alt="${item.label}" loading="lazy">
      <div class="gp-overlay"><span>${item.label}</span></div>
    </div>
  `).join('');
  grid.querySelectorAll('.gp-item').forEach(el => {
    el.addEventListener('click', () => showPage('page-gallery'));
  });
}

/* ─── HOME: EVENTS PREVIEW (5 items) ─── */
function buildEventsPreview() {
  const list = document.getElementById('eventsPreviewList');
  if (!list) return;
  const items = DATA.events.slice(0, 5);
  list.innerHTML = items.map(ev => `
    <div class="ep-item">
      <div class="ep-date"><div class="day">${ev.day}</div><div class="mon">${ev.mon}</div></div>
      <div class="ep-info">
        <h3>${ev.title}</h3>
        <p>${ev.loc}</p>
      </div>
      <span class="ep-tag ${ev.type}">${ev.type === 'upcoming' ? 'Upcoming' : 'Completed'}</span>
    </div>
  `).join('');
}

/* ─── HOME: JOURNAL PREVIEW (2 latest) ─── */
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
        <a href="${j.drive}" target="_blank" rel="noopener" class="jp-dl">Download PDF →</a>
      </div>
    </div>
  `).join('');
}

/* ─── HOME: NEWS PREVIEW (5 items, featured first + 4 sidebar) ─── */
function buildNewsPreview() {
  const featEl = document.getElementById('newsFeatured');
  const sideEl = document.getElementById('newsSide');
  if (!featEl || !sideEl) return;
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

/* ─── GALLERY PAGE ─── */
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

/* ─── EVENTS PAGE ─── */
function buildEventsPage() {
  const list = document.getElementById('eventsFullList');
  if (!list) return;
  list.innerHTML = DATA.events.map(ev => `
    <div class="ev-item">
      <div class="ev-date"><div class="day">${ev.day}</div><div class="mon">${ev.mon}</div></div>
      <div class="ev-info">
        <h3>${ev.title}</h3>
        <div class="ev-loc">${ev.loc}</div>
        <div class="ev-desc">${ev.desc}</div>
      </div>
      <span class="ev-tag ${ev.type}">${ev.type === 'upcoming' ? 'Upcoming' : 'Completed'}</span>
    </div>
  `).join('');
}

/* ─── R&D TABS ─── */
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

/* ─── JOURNAL PAGE (all journals) ─── */
function buildJournalPage() {
  const list = document.getElementById('journalFullList');
  if (!list) return;
  list.innerHTML = DATA.journals.map(j => `
    <div class="jl-item">
      <div class="jl-left">
        <div class="jl-vol">${j.vol}</div>
        <h3>${j.title}</h3>
        <p>${j.summary}</p>
        <div class="jl-meta">Authors: ${j.authors}</div>
      </div>
      <div class="jl-actions">
        <div class="jl-date-badge">${j.date}</div>
        <a href="${j.drive}" target="_blank" rel="noopener" class="btn-dl">↓ Download PDF</a>
      </div>
    </div>
  `).join('');
}

/* ─── NEWS PAGE (5 articles) ─── */
function buildNewsPage() {
  const list = document.getElementById('newsFullList');
  if (!list) return;
  list.innerHTML = DATA.news.slice(0, 5).map(n => `
    <div class="nfl-item">
      <img src="${n.img}" alt="${n.title}" loading="lazy">
      <div class="nfl-body">
        <span class="news-cat">${n.cat}</span>
        <h3>${n.title}</h3>
        <p>${n.body}</p>
        <div class="news-date">${n.date}</div>
      </div>
    </div>
  `).join('');
}

/* ─── CONTACT FORM ─── */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Message Sent ✓';
    btn.disabled = true;
    btn.style.background = 'var(--accent-light)';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.disabled = false;
      btn.style.background = '';
      contactForm.reset();
    }, 3000);
  });
}

/* ─── FADE-IN ON SCROLL ─── */
function initFadeIn() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.page.active .fade-in:not(.visible)').forEach(el => observer.observe(el));
}

/* ─── TEAM PAGE ─── */
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

function buildAlumniPage() {
  const list = document.getElementById('alumniList');
  if (!list) return;
  list.innerHTML = DATA.alumni.map(a => `
    <div class="alumni-item">
      <div class="ai-left"><h3>${a.name}</h3><div class="ai-role">${a.role}</div></div>
      <div class="ai-right"><span class="ai-current">${a.current}</span></div>
    </div>
  `).join('');
}

function buildArticles() {
  const list = document.getElementById('articlesList');
  if (!list) return;
  list.innerHTML = DATA.articles.map(a => `
    <div class="article-item">
      <div class="ai-date">${a.date}</div>
      <h3><a href="${a.url}">${a.title}</a></h3>
      <span class="ai-cat">${a.category}</span>
    </div>
  `).join('');
}

function buildSocialFooter() {
  const socials = document.getElementById('socialLinks');
  if (!socials) return;
  socials.innerHTML = DATA.socials.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener" title="${s.name}" class="social-link">${s.icon}</a>
  `).join('');
}

/* ─── INIT ─── */
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
  buildAlumniPage();
  buildArticles();
  buildSocialFooter();
  showPage('page-home');
  initFadeIn();
})();