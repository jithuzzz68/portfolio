/**
 * KRISTIN WATSON — Portfolio Interactive Logic
 * Fully responsive, standalone, zero-dependency ES6 application.
 */

// --- 1. DATA MODEL: 12 FEATURED PROJECTS ---
const PROJECTS = [
  {
    id: 1,
    title: "CYAN AURA",
    client: "Vogue Italia",
    year: "2026",
    category: "Editorial",
    location: "Milan",
    image: "assets/projects/proj-1.svg",
    desc: "An exploration of cobalt gel lighting and architectural silhouettes investigating the tension between digital radiance and analog intimacy."
  },
  {
    id: 2,
    title: "VELVET DUSK",
    client: "Saint Laurent",
    year: "2026",
    category: "Campaign",
    location: "Paris",
    image: "assets/projects/proj-2.svg",
    desc: "Winter high-concept campaign filmed on location in Normandy. Emphasizing dramatic velvet drapery and chiaroscuro studio lighting."
  },
  {
    id: 3,
    title: "NEON MONOCHROME",
    client: "Acne Studios",
    year: "2025",
    category: "Fashion",
    location: "Stockholm",
    image: "assets/projects/proj-3.svg",
    desc: "Minimalist Scandinavian textile studies set against chromatic gradient backdrops and deep architectural shadows."
  },
  {
    id: 4,
    title: "AZURE HORIZON",
    client: "Dazed Magazine",
    year: "2025",
    category: "Editorial",
    location: "London",
    image: "assets/projects/proj-4.svg",
    desc: "Editorial cover series capturing movement, kinetic blue filters, and futuristic headwear on high-frequency 65mm medium format."
  },
  {
    id: 5,
    title: "SOLARIS COUTURE",
    client: "Harper's Bazaar",
    year: "2025",
    category: "Campaign",
    location: "New York",
    image: "assets/projects/proj-5.svg",
    desc: "High-voltage sun-drenched evening gowns contrasted with deep ultraviolet fill light for the September global issue."
  },
  {
    id: 6,
    title: "SAPPHIRE SHADOWS",
    client: "Balenciaga",
    year: "2025",
    category: "Runway",
    location: "Paris",
    image: "assets/projects/proj-6.svg",
    desc: "Backstage and runway documentation featuring low-angle perspective studies and sharp tungsten-to-blue gel transitions."
  },
  {
    id: 7,
    title: "SPECTRUM ECHO",
    client: "Prada Eyewear",
    year: "2024",
    category: "Campaign",
    location: "Tokyo",
    image: "assets/projects/proj-7.svg",
    desc: "Prismatic lens reflections and neon metropolis light reflections on precision crystal frames."
  },
  {
    id: 8,
    title: "CHROMA KINETIC",
    client: "Nowness Film",
    year: "2024",
    category: "Film",
    location: "Berlin",
    image: "assets/projects/proj-8.svg",
    desc: "A 4-minute experimental fashion short exploring dancer choreography amidst shifting cyan and cobalt laser sculptures."
  },
  {
    id: 9,
    title: "INDIGO ILLUSION",
    client: "Bottega Veneta",
    year: "2024",
    category: "Fashion",
    location: "Venice",
    image: "assets/projects/proj-9.svg",
    desc: "Handcrafted intrecciato leather accessories framed in ancient stone alcoves illuminated by deep teal and cyan ambient reflections."
  },
  {
    id: 10,
    title: "KINETIC GAZE",
    client: "Another Magazine",
    year: "2024",
    category: "Editorial",
    location: "Paris",
    image: "assets/projects/proj-10.svg",
    desc: "Close-up portraiture focusing on optical distortions, facial contouring, and reflective studio props."
  },
  {
    id: 11,
    title: "LUMEN SILHOUETTE",
    client: "Jacquemus",
    year: "2024",
    category: "Runway",
    location: "Marseille",
    image: "assets/projects/proj-11.svg",
    desc: "Sunset Mediterranean runway capture utilizing extreme backlighting and deep oceanic silhouettes."
  },
  {
    id: 12,
    title: "ELECTRIC REFLECTION",
    client: "Interview Magazine",
    year: "2023",
    category: "Editorial",
    location: "New York",
    image: "assets/projects/proj-12.svg",
    desc: "Retrospective cover story highlighting bold cobalt makeup art, metallic foil clothing, and high-contrast flash photography."
  }
];

// --- 2. SYNTHESIZED WEB AUDIO (ZERO EXTERNAL FILES) ---
let audioCtx = null;
let soundEnabled = false;

function playAudioChirp(freq = 880, type = 'sine', duration = 0.05) {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.5, audioCtx.currentTime + duration);
    
    gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    console.warn("Audio Context not available yet", e);
  }
}

// --- 3. DOM ELEMENTS ---
const mainNav = document.getElementById('mainNav');
const navItems = document.querySelectorAll('.nav-item');
const siteHeader = document.querySelector('.site-header');
const soundToggle = document.getElementById('soundToggle');

const viewfinder = document.getElementById('viewfinder');
const subjectStage = document.getElementById('subjectStage');
const hudCoords = document.getElementById('hudCoords');
const heroPortraitImg = document.getElementById('heroPortraitImg');

const projectsGrid = document.getElementById('projectsGrid');
const workFilters = document.getElementById('workFilters');

const archiveTableBody = document.getElementById('archiveTableBody');
const archiveSearchInput = document.getElementById('archiveSearchInput');

// Contact Drawer
const openContactBtn = document.getElementById('openContactBtn');
const mobileContactBtn = document.getElementById('mobileContactBtn');
const contactDrawer = document.getElementById('contactDrawer');
const closeContactBtn = document.getElementById('closeContactBtn');
const contactOverlay = document.getElementById('contactOverlay');
const copyEmailBtn = document.getElementById('copyEmailBtn');
const copyEmailText = document.getElementById('copyEmailText');

// Lightbox
const lightboxModal = document.getElementById('lightboxModal');
const lightboxBackdrop = document.getElementById('lightboxBackdrop');
const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxCat = document.getElementById('lightboxCat');
const lightboxYear = document.getElementById('lightboxYear');
const lightboxClient = document.getElementById('lightboxClient');
const lightboxDesc = document.getElementById('lightboxDesc');
const lightboxCounter = document.getElementById('lightboxCounter');
const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
const lightboxNextBtn = document.getElementById('lightboxNextBtn');

// Mobile Menu
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileDrawer = document.getElementById('mobileDrawer');
const closeDrawerBtn = document.getElementById('closeDrawerBtn');

// Customizer
const customizerPanel = document.getElementById('customizerPanel');
const customizerToggleBtn = document.getElementById('customizerToggleBtn');
const inputFirstName = document.getElementById('inputFirstName');
const inputLastName = document.getElementById('inputLastName');
const displayFirstName = document.getElementById('displayFirstName');
const displayLastName = document.getElementById('displayLastName');
const themePills = document.querySelectorAll('.theme-pill');
const btnResetViewfinder = document.getElementById('btnResetViewfinder');
const btnToggleHud = document.getElementById('btnToggleHud');
const btnUseReference = document.getElementById('btnUseReference');
const btnUseHighRes = document.getElementById('btnUseHighRes');
const btnUploadTrigger = document.getElementById('btnUploadTrigger');
const customPhotoInput = document.getElementById('customPhotoInput');

let currentActiveFilter = 'all';
let currentLightboxIndex = 0;

// --- 4. RENDER PROJECTS GRID ---
function renderProjects(filter = 'all') {
  projectsGrid.innerHTML = '';
  const filtered = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  filtered.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('data-id', project.id);
    card.innerHTML = `
      <div class="card-media">
        <img src="${project.image}" alt="${project.title} by Kristin Watson" class="card-img" loading="lazy">
        <span class="card-overlay-badge">${project.category.toUpperCase()}</span>
        <div class="card-hover-action" aria-label="View Project">↗</div>
      </div>
      <div class="card-info">
        <div class="card-meta">
          <span class="card-category">${project.category.toUpperCase()} // ${project.location.toUpperCase()}</span>
          <h3 class="card-title">${project.title}</h3>
          <p class="card-client">${project.client}</p>
        </div>
        <span class="card-year">${project.year}</span>
      </div>
    `;

    card.addEventListener('click', () => {
      playAudioChirp(960, 'triangle', 0.04);
      openLightbox(project.id);
    });

    projectsGrid.appendChild(card);
  });
}

// --- 5. RENDER ARCHIVE TABLE ---
function renderArchive(query = '') {
  archiveTableBody.innerHTML = '';
  const q = query.trim().toLowerCase();
  const filtered = PROJECTS.filter(p => 
    !q || 
    p.title.toLowerCase().includes(q) || 
    p.client.toLowerCase().includes(q) || 
    p.year.includes(q) || 
    p.category.toLowerCase().includes(q) ||
    p.location.toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    archiveTableBody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align:center; padding: 32px; color: rgba(255,255,255,0.5);">
          No archive items found matching "${query}".
        </td>
      </tr>
    `;
    return;
  }

  filtered.forEach(p => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="archive-year">${p.year}</td>
      <td class="archive-project-name">${p.title}</td>
      <td>${p.client}</td>
      <td><span class="badge-pill">${p.category}</span></td>
      <td>${p.location}</td>
      <td class="text-right">
        <button class="archive-view-btn" data-id="${p.id}">View ↗</button>
      </td>
    `;
    
    tr.querySelector('.archive-view-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      playAudioChirp(900, 'sine', 0.03);
      openLightbox(p.id);
    });

    archiveTableBody.appendChild(tr);
  });
}

// --- 6. LIGHTBOX DIALOG LOGIC ---
function openLightbox(projectId) {
  const index = PROJECTS.findIndex(p => p.id === projectId);
  if (index === -1) return;
  currentLightboxIndex = index;
  updateLightboxContent();
  lightboxModal.showModal();
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightboxModal.close();
  document.body.style.overflow = '';
}

function updateLightboxContent() {
  const p = PROJECTS[currentLightboxIndex];
  lightboxImg.src = p.image;
  lightboxImg.alt = p.title;
  lightboxTitle.textContent = p.title;
  lightboxCat.textContent = `${p.category.toUpperCase()} // ${p.location.toUpperCase()}`;
  lightboxYear.textContent = p.year;
  lightboxClient.textContent = `Client: ${p.client}`;
  lightboxDesc.textContent = p.desc;
  lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${PROJECTS.length}`;
}

lightboxPrevBtn.addEventListener('click', () => {
  currentLightboxIndex = (currentLightboxIndex - 1 + PROJECTS.length) % PROJECTS.length;
  playAudioChirp(750, 'sine', 0.04);
  updateLightboxContent();
});

lightboxNextBtn.addEventListener('click', () => {
  currentLightboxIndex = (currentLightboxIndex + 1) % PROJECTS.length;
  playAudioChirp(850, 'sine', 0.04);
  updateLightboxContent();
});

lightboxCloseBtn.addEventListener('click', closeLightbox);
lightboxBackdrop.addEventListener('click', closeLightbox);

window.addEventListener('keydown', (e) => {
  if (!lightboxModal.open) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lightboxPrevBtn.click();
  if (e.key === 'ArrowRight') lightboxNextBtn.click();
});

// --- 7. WORK FILTER TABS ---
workFilters.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  
  workFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentActiveFilter = btn.dataset.filter;
  playAudioChirp(1100, 'sine', 0.04);
  renderProjects(currentActiveFilter);
});

// --- 8. ARCHIVE SEARCH ---
archiveSearchInput.addEventListener('input', (e) => {
  renderArchive(e.target.value);
});

// --- 9. INTERACTIVE VIEWFINDER (DRAG & RESIZE) ---
let isDraggingBox = false;
let isResizing = false;
let activeHandle = null;
let startX = 0, startY = 0;
let initialLeft = 0, initialTop = 0, initialWidth = 0, initialHeight = 0;

function updateHudReadout() {
  if (!viewfinder || !hudCoords) return;
  const stageRect = subjectStage.getBoundingClientRect();
  const vfRect = viewfinder.getBoundingClientRect();
  
  const relX = Math.round(((vfRect.left - stageRect.left) / stageRect.width) * 100);
  const relY = Math.round(((vfRect.top - stageRect.top) / stageRect.height) * 100);
  hudCoords.textContent = `FOC: ${relX}% / ${relY}%`;
}

// Mouse / Touch Dragging & Resizing
viewfinder.addEventListener('mousedown', initDrag);
viewfinder.addEventListener('touchstart', initDrag, { passive: false });

function initDrag(e) {
  const isHandle = e.target.classList.contains('corner-handle');
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;

  startX = clientX;
  startY = clientY;

  const stageRect = subjectStage.getBoundingClientRect();
  const vfRect = viewfinder.getBoundingClientRect();

  initialLeft = vfRect.left - stageRect.left;
  initialTop = vfRect.top - stageRect.top;
  initialWidth = vfRect.width;
  initialHeight = vfRect.height;

  if (isHandle) {
    isResizing = true;
    activeHandle = e.target.dataset.handle;
    e.stopPropagation();
    e.preventDefault();
  } else {
    isDraggingBox = true;
    e.preventDefault();
  }

  playAudioChirp(600, 'triangle', 0.02);

  window.addEventListener('mousemove', onMove);
  window.addEventListener('touchmove', onMove, { passive: false });
  window.addEventListener('mouseup', endDrag);
  window.addEventListener('touchend', endDrag);
}

function onMove(e) {
  if (!isDraggingBox && !isResizing) return;
  e.preventDefault();

  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  const deltaX = clientX - startX;
  const deltaY = clientY - startY;

  const stageRect = subjectStage.getBoundingClientRect();

  if (isDraggingBox) {
    let newLeft = initialLeft + deltaX;
    let newTop = initialTop + deltaY;

    // Boundaries clamp
    newLeft = Math.max(0, Math.min(newLeft, stageRect.width - initialWidth));
    newTop = Math.max(0, Math.min(newTop, stageRect.height - initialHeight));

    viewfinder.style.left = `${(newLeft / stageRect.width) * 100}%`;
    viewfinder.style.top = `${(newTop / stageRect.height) * 100}%`;
  } else if (isResizing) {
    let newW = initialWidth;
    let newH = initialHeight;
    let newL = initialLeft;
    let newT = initialTop;

    if (activeHandle === 'br') {
      newW = Math.max(60, Math.min(initialWidth + deltaX, stageRect.width - initialLeft));
      newH = Math.max(60, Math.min(initialHeight + deltaY, stageRect.height - initialTop));
    } else if (activeHandle === 'bl') {
      newW = Math.max(60, initialWidth - deltaX);
      newL = initialLeft + (initialWidth - newW);
      newH = Math.max(60, Math.min(initialHeight + deltaY, stageRect.height - initialTop));
    } else if (activeHandle === 'tr') {
      newW = Math.max(60, Math.min(initialWidth + deltaX, stageRect.width - initialLeft));
      newH = Math.max(60, initialHeight - deltaY);
      newT = initialTop + (initialHeight - newH);
    } else if (activeHandle === 'tl') {
      newW = Math.max(60, initialWidth - deltaX);
      newL = initialLeft + (initialWidth - newW);
      newH = Math.max(60, initialHeight - deltaY);
      newT = initialTop + (initialHeight - newH);
    }

    viewfinder.style.width = `${(newW / stageRect.width) * 100}%`;
    viewfinder.style.height = `${(newH / stageRect.height) * 100}%`;
    viewfinder.style.left = `${(newL / stageRect.width) * 100}%`;
    viewfinder.style.top = `${(newT / stageRect.height) * 100}%`;
  }

  updateHudReadout();
}

function endDrag() {
  if (isDraggingBox || isResizing) {
    playAudioChirp(520, 'sine', 0.03);
  }
  isDraggingBox = false;
  isResizing = false;
  activeHandle = null;

  window.removeEventListener('mousemove', onMove);
  window.removeEventListener('touchmove', onMove);
  window.removeEventListener('mouseup', endDrag);
  window.removeEventListener('touchend', endDrag);
}

// Reset Viewfinder
btnResetViewfinder.addEventListener('click', () => {
  viewfinder.style.left = '10%';
  viewfinder.style.top = '14%';
  viewfinder.style.width = '80%';
  viewfinder.style.height = '58%';
  updateHudReadout();
  playAudioChirp(700, 'sine', 0.05);
});

// Toggle HUD
btnToggleHud.addEventListener('click', () => {
  const hud = viewfinder.querySelector('.reticle-hud');
  if (hud) {
    hud.style.display = hud.style.display === 'none' ? 'flex' : 'none';
    playAudioChirp(800, 'sine', 0.03);
  }
});

// --- 10. CONTACT DRAWER ---
function openContactDrawer() {
  contactDrawer.classList.add('open');
  document.body.style.overflow = 'hidden';
  playAudioChirp(850, 'sine', 0.04);
}

function closeContactDrawer() {
  contactDrawer.classList.remove('open');
  document.body.style.overflow = '';
}

openContactBtn.addEventListener('click', openContactDrawer);
mobileContactBtn.addEventListener('click', () => {
  closeMobileMenu();
  openContactDrawer();
});
closeContactBtn.addEventListener('click', closeContactDrawer);
contactOverlay.addEventListener('click', closeContactDrawer);

// Copy Email
copyEmailBtn.addEventListener('click', () => {
  const email = copyEmailText.textContent;
  navigator.clipboard.writeText(email).then(() => {
    const originalText = copyEmailBtn.textContent;
    copyEmailBtn.textContent = 'Copied!';
    copyEmailBtn.style.background = '#22c55e';
    copyEmailBtn.style.color = '#fff';
    playAudioChirp(1200, 'sine', 0.06);

    setTimeout(() => {
      copyEmailBtn.textContent = originalText;
      copyEmailBtn.style.background = '';
      copyEmailBtn.style.color = '';
    }, 2000);
  });
});

window.handleContactSubmit = function() {
  const submitBtn = document.getElementById('submitFormBtn');
  const formSuccess = document.getElementById('formSuccess');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  setTimeout(() => {
    playAudioChirp(1400, 'sine', 0.08);
    submitBtn.style.display = 'none';
    formSuccess.classList.add('visible');
  }, 600);
};

// --- 11. AUDIO FEEDBACK TOGGLE ---
soundToggle.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    soundToggle.classList.add('sound-on');
    soundToggle.querySelector('.sound-label').textContent = 'Audio: ON';
    playAudioChirp(880, 'sine', 0.08);
  } else {
    soundToggle.classList.remove('sound-on');
    soundToggle.querySelector('.sound-label').textContent = 'Audio: OFF';
  }
});

// --- 12. SCROLL & ACTIVE NAVIGATION HIGHLIGHT ---
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    siteHeader.classList.add('scrolled');
  } else {
    siteHeader.classList.remove('scrolled');
  }
});

const sections = document.querySelectorAll('main > section');
const observerOptions = {
  root: null,
  rootMargin: '-30% 0px -60% 0px',
  threshold: 0
};

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navItems.forEach(item => {
        if (item.getAttribute('data-nav') === id) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach(sec => navObserver.observe(sec));

// Smooth link clicks with sound
navItems.forEach(item => {
  item.addEventListener('click', () => {
    playAudioChirp(750, 'sine', 0.03);
  });
});

document.getElementById('backToTopBtn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playAudioChirp(900, 'sine', 0.05);
});

// --- 13. MOBILE DRAWER NAVIGATION ---
function openMobileMenu() {
  mobileDrawer.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  mobileDrawer.classList.remove('open');
  document.body.style.overflow = '';
}

mobileMenuToggle.addEventListener('click', openMobileMenu);
closeDrawerBtn.addEventListener('click', closeMobileMenu);
document.querySelectorAll('.mobile-nav-item').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// --- 14. QUICK CUSTOMIZER (PERSONALIZE IN REAL-TIME) ---
customizerToggleBtn.addEventListener('click', () => {
  customizerPanel.classList.toggle('collapsed');
  playAudioChirp(800, 'sine', 0.03);
});

// Realtime Name Change
inputFirstName.addEventListener('input', (e) => {
  const val = e.target.value.trim() || 'KRISTIN';
  displayFirstName.textContent = val.toUpperCase();
  document.title = `${val.toUpperCase()} ${displayLastName.textContent} — Portfolio & Art Direction`;
});

inputLastName.addEventListener('input', (e) => {
  const val = e.target.value.trim() || 'WATSON';
  displayLastName.textContent = val.toUpperCase();
  document.title = `${displayFirstName.textContent} ${val.toUpperCase()} — Portfolio & Art Direction`;
});

// Theme Pills
themePills.forEach(pill => {
  pill.addEventListener('click', () => {
    themePills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    const theme = pill.dataset.theme;
    if (theme === 'cobalt') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
    playAudioChirp(950, 'sine', 0.04);
  });
});

// Photo Choice
btnUseReference.addEventListener('click', () => {
  btnUseReference.classList.add('active');
  btnUseHighRes.classList.remove('active');
  heroPortraitImg.src = 'assets/subject-clean-portrait.png';
  playAudioChirp(800, 'sine', 0.03);
});

btnUseHighRes.addEventListener('click', () => {
  btnUseHighRes.classList.add('active');
  btnUseReference.classList.remove('active');
  // Full-bleed backdrop option
  heroPortraitImg.src = 'assets/subject-clean-backdrop.png';
  playAudioChirp(850, 'sine', 0.03);
});

btnUploadTrigger.addEventListener('click', () => {
  customPhotoInput.click();
});

customPhotoInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    heroPortraitImg.src = event.target.result;
    btnUseReference.classList.remove('active');
    btnUseHighRes.classList.remove('active');
    playAudioChirp(1100, 'sine', 0.05);
  };
  reader.readAsDataURL(file);
});

// --- 15. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  renderProjects('all');
  renderArchive('');
  updateHudReadout();
  console.log('Kristin Watson Portfolio Initialized Successfully.');
});
