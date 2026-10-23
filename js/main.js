/**
 * M. Ilham Mufid — Interactive Cybersecurity Portfolio Core JS
 */

// 1. DATA: Certified Credentials from local repository
const CERTIFICATES = [
  {
    id: "ccep",
    title: "Certified Cybersecurity Educator Professional (CCEP)",
    issuer: "Red Team Leaders",
    instructor: "Founder & Instructor Red Team Leaders",
    date: "17 Oktober 2026",
    certId: "a88e7bcfe3a8824f",
    category: "cybersecurity",
    categoryLabel: "Red Team & InfoSec",
    image: "assets/certificates/ccep.png",
    pdf: "assets/pdf/ccep.pdf",
    verifyUrl: "https://courses.redteamleaders.com/exam-completion/a88e7bcfe3a8824f",
    description: "Sertifikasi resmi CCEP dari Red Team Leaders. Membuktikan kompetensi di bidang edukasi keamanan siber, pemahaman simulasi serangan (ethical red teaming), dan penyampaian materi siber yang terstruktur.",
    tags: ["Red Teaming", "Cybersecurity Educator", "CCEP", "Offensive Security", "Exam Passed"]
  },
  {
    id: "infosec",
    title: "Introduction to Information Security",
    issuer: "Cyber Army Indonesia / Cyber Academy",
    instructor: "Girindro Pringgo Digdo (CEO Cyber Army Indonesia)",
    date: "25 April 2026",
    certId: "PKMI01104260716",
    category: "cybersecurity",
    categoryLabel: "InfoSec Fundamentals",
    image: "assets/certificates/infosec.png",
    pdf: "assets/pdf/infosec.pdf",
    verifyUrl: "https://cyberacademy.id",
    description: "Pelatihan dasar Information Security dari Cyber Army Indonesia / Cyber Academy. Mempelajari prinsip CIA Triad, pemetaan celah sistem, analisis risiko OS, dan dasar-dasar defense-in-depth.",
    tags: ["Information Security", "Cyber Academy", "CIA Triad", "Defense-in-Depth"]
  },
  {
    id: "pentest-vinco",
    title: "Unlocking the Basics: Fundamental Skills Every Pentester Must Know",
    issuer: "VINCO",
    instructor: "Ahmad Danish Putra (Penetration Tester)",
    date: "17 Februari 2026",
    certId: "VINCO-PENTEST-2026-0033-ADP",
    category: "cybersecurity",
    categoryLabel: "Penetration Testing",
    image: "assets/certificates/pentest-vinco.png",
    pdf: "assets/pdf/pentest-vinco.pdf",
    verifyUrl: "assets/pdf/pentest-vinco.pdf",
    description: "Sharing session teknis pentest dari VINCO bersama Ahmad Danish Putra. Bahas alur reconnaissance, network scanning pakai tool praktis, identifikasi celah, dan konsep dasar eksploitasi.",
    tags: ["Penetration Testing", "Ethical Hacking", "Vulnerability Assessment", "Recon"]
  },
  {
    id: "network-aguna",
    title: "Network Fundamental",
    issuer: "Aguna Course",
    instructor: "Ahmad Rosid Komarudin (CEO Aguna Course)",
    date: "27 November 2025",
    certId: "AC-128-56069449-51",
    category: "networking",
    categoryLabel: "Jaringan Komputer",
    image: "assets/certificates/network-aguna.png",
    pdf: "assets/pdf/network-aguna.pdf",
    verifyUrl: "https://agunacourse.com/cek-sertifikat",
    description: "Pemahaman fundamental jaringan komputer dari Aguna Course. Menguasai alur data pada 7 OSI Layer, arsitektur protokol TCP/IP, kalkulasi subnetting (VLSM/CIDR), dan dasar routing paket data.",
    tags: ["TCP/IP", "OSI Model", "Subnetting", "Routing", "Packet Flow"]
  },
  {
    id: "c-dicoding",
    title: "Memulai Pemrograman Dengan C",
    issuer: "Dicoding Indonesia",
    instructor: "Dicoding Academy (Partner Resmi Industri)",
    date: "29 Agustus 2025 (Berlaku s/d 2028)",
    certId: "1OP8J5LEVPQK",
    category: "dev",
    categoryLabel: "Pemrograman Sistem",
    image: "assets/certificates/c-dicoding.png",
    pdf: "assets/pdf/c-dicoding.pdf",
    verifyUrl: "https://www.dicoding.com/certificates/1OP8J5LEVPQK",
    description: "Pelatihan bahasa C resmi dari Dicoding. Fokus pada fondasi manipulasi memori, pointer, alokasi memori dinamis, struktur data, dan logika penulisan kode yang efisien dan aman.",
    tags: ["C Language", "Memory Management", "Pointers", "Algorithms", "Low-Level"]
  },
  {
    id: "bootstrap-skilvul",
    title: "Bootstrap 5 - Membuat Website Landing Page",
    issuer: "Skilvul",
    instructor: "Amanda Simandjuntak (CPO Skilvul)",
    date: "31 Agustus 2025",
    certId: "cmeza88ro0OhvO-pfaii7foyt",
    category: "dev",
    categoryLabel: "Web & UI Frontend",
    image: "assets/certificates/bootstrap-skilvul.png",
    pdf: "assets/pdf/bootstrap-skilvul.pdf",
    verifyUrl: "https://skilvul.com/courses/bootstrap-5-membuat-website-landing-page",
    description: "Kelas praktik pembuatan landing page modern dari Skilvul. Menerapkan grid system Bootstrap 5, layout flexbox responsif, komponen UI interaktif, dan standar tampilan lintas perangkat.",
    tags: ["Bootstrap 5", "Responsive Web", "UI Design", "Frontend", "Landing Page"]
  }
];

// 2. MATRIX CANVAS ANIMATION
function initMatrixCanvas() {
  const canvas = document.getElementById('matrixCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノ';
  const fontSize = 14;
  const columns = Math.floor(width / fontSize);
  const drops = Array(columns).fill(1);

  let speedMultiplier = 1;
  window.setMatrixSpeed = (multiplier) => { speedMultiplier = multiplier; };

  function draw() {
    ctx.fillStyle = 'rgba(7, 10, 18, 0.08)';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#00f0ff';
    ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = chars.charAt(Math.floor(Math.random() * chars.length));
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      // Glow effect for lead character
      if (Math.random() > 0.95) {
        ctx.fillStyle = '#ffffff';
      } else if (Math.random() > 0.8) {
        ctx.fillStyle = '#00ff9d';
      } else {
        ctx.fillStyle = 'rgba(0, 240, 255, 0.65)';
      }

      ctx.fillText(text, x, y);

      if (y > height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i] += speedMultiplier;
    }
    requestAnimationFrame(draw);
  }

  draw();
}

// 3. HERO TYPING EFFECT
function initTypewriter() {
  const target = document.getElementById('typedText');
  if (!target) return;

  const roles = [
    "Certified Cybersecurity Educator Professional (CCEP)",
    "Penetration Testing & Red Teaming Enthusiast",
    "Network Infrastructure & TCP/IP Protocol Analyst",
    "C Systems & Modern Responsive Web Developer"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeSpeed = 70;

  function type() {
    const current = roles[roleIdx];
    if (isDeleting) {
      target.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      typeSpeed = 35;
    } else {
      target.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      typeSpeed = 75;
    }

    if (!isDeleting && charIdx === current.length) {
      typeSpeed = 1800; // pause at end
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typeSpeed = 400;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

// 4. STATS COUNTER ON SCROLL
function initCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        let count = 0;
        const step = Math.max(1, Math.floor(target / 40));
        const duration = 1200;
        const interval = duration / (target / step);

        const timer = setInterval(() => {
          count += step;
          if (count >= target) {
            el.textContent = target;
            clearInterval(timer);
          } else {
            el.textContent = count;
          }
        }, interval);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(num => observer.observe(num));
}

// 5. RENDER CERTIFICATES & FILTER/SEARCH
let currentFilter = 'all';
let searchQuery = '';

function renderCertificates() {
  const grid = document.getElementById('certificatesGrid');
  if (!grid) return;

  const filtered = CERTIFICATES.filter(c => {
    const matchesFilter = (currentFilter === 'all') || (c.category === currentFilter);
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || (
      c.title.toLowerCase().includes(q) ||
      c.issuer.toLowerCase().includes(q) ||
      c.certId.toLowerCase().includes(q) ||
      c.tags.some(t => t.toLowerCase().includes(q))
    );
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--text-dim); font-family: var(--font-mono);">
        <i class="fa-solid fa-triangle-exclamation" style="font-size: 2rem; color: var(--accent-yellow); margin-bottom: 1rem; display: block;"></i>
        Tidak ditemukan sertifikat yang cocok dengan pencarian "<strong>${searchQuery}</strong>".
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(c => `
    <div class="cert-card" data-id="${c.id}">
      <div class="cert-preview-wrap">
        <div class="cert-header-meta">
          <span class="cert-category-badge">${c.categoryLabel}</span>
          <span class="cert-verified-pill"><i class="fa-solid fa-check"></i> Verified</span>
        </div>
        <img src="${c.image}" alt="${c.title}" class="cert-img" loading="lazy">
        <div class="cert-overlay">
          <button class="overlay-btn"><i class="fa-solid fa-eye"></i> Pratinjau Dokumen</button>
        </div>
      </div>
      <div class="cert-body">
        <h3 class="cert-title">${c.title}</h3>
        <div class="cert-issuer"><i class="fa-solid fa-building-shield"></i> ${c.issuer}</div>
        <div class="cert-info-row">
          <span><i class="fa-regular fa-calendar"></i> ${c.date}</span>
          <span class="cert-id-copy" data-id-val="${c.certId}" title="Klik salin ID">
            <i class="fa-solid fa-fingerprint"></i> ${c.certId.length > 14 ? c.certId.substring(0, 12) + '...' : c.certId}
          </span>
        </div>
        <div class="cert-tags">
          ${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="cert-actions">
          <button class="btn btn-primary btn-sm inspect-btn" style="flex: 1;" data-id="${c.id}">
            <i class="fa-solid fa-magnifying-glass-plus"></i> Detail & Bukti
          </button>
          <a href="${c.pdf}" download class="btn btn-secondary btn-sm" title="Unduh PDF Resmi">
            <i class="fa-solid fa-download"></i>
          </a>
        </div>
      </div>
    </div>
  `).join('');

  // Attach card event listeners
  grid.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.cert-id-copy')) {
        const copyEl = e.target.closest('.cert-id-copy');
        copyToClipboard(copyEl.getAttribute('data-id-val'));
        return;
      }
      const certId = card.getAttribute('data-id');
      openModal(certId);
    });
  });
}

function initCertControls() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.getAttribute('data-filter');
      renderCertificates();
    });
  });

  const searchInput = document.getElementById('certSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearBtn) clearBtn.style.display = searchQuery ? 'block' : 'none';
      renderCertificates();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearBtn.style.display = 'none';
      renderCertificates();
      searchInput.focus();
    });
  }
}

// 6. MODAL LIGHTBOX
function openModal(certId) {
  const cert = CERTIFICATES.find(c => c.id === certId);
  if (!cert) return;

  const modal = document.getElementById('certModal');
  document.getElementById('modalCertImg').src = cert.image;
  document.getElementById('modalCertImg').alt = cert.title;
  document.getElementById('modalCategoryBadge').textContent = cert.categoryLabel;
  document.getElementById('modalCertTitle').textContent = cert.title;
  document.getElementById('modalCertIssuer').textContent = `${cert.issuer} — ${cert.instructor}`;
  document.getElementById('modalCertDate').textContent = cert.date;

  const idEl = document.getElementById('modalCertId');
  idEl.textContent = cert.certId;
  idEl.onclick = () => copyToClipboard(cert.certId);

  document.getElementById('modalCertDesc').textContent = cert.description;

  const tagsWrap = document.getElementById('modalCertTags');
  tagsWrap.innerHTML = cert.tags.map(t => `<span class="tag">${t}</span>`).join('');

  const verifyBtn = document.getElementById('modalVerifyBtn');
  if (cert.verifyUrl && cert.verifyUrl !== '#') {
    verifyBtn.href = cert.verifyUrl;
    verifyBtn.style.display = 'inline-flex';
  } else {
    verifyBtn.style.display = 'none';
  }

  const downloadBtn = document.getElementById('modalDownloadPdfBtn');
  downloadBtn.href = cert.pdf;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('certModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function initModal() {
  const closeBtn = document.getElementById('modalCloseBtn');
  const modal = document.getElementById('certModal');

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// 7. VERIFICATION LOOKUP ENGINE
function initVerifier() {
  const input = document.getElementById('verifyInput');
  const btn = document.getElementById('verifySubmitBtn');
  const resultPanel = document.getElementById('verifyResult');
  const quickBtns = document.querySelectorAll('.quick-id-btn');

  function runVerify(query) {
    if (!query) return;
    const clean = query.trim().toLowerCase();
    const found = CERTIFICATES.find(c => 
      c.certId.toLowerCase().includes(clean) || 
      c.id.toLowerCase().includes(clean)
    );

    resultPanel.classList.remove('hidden');

    if (found) {
      resultPanel.className = 'verify-result-panel';
      resultPanel.innerHTML = `
        <div class="result-status-header valid">
          <i class="fa-solid fa-circle-check"></i> KREDENSIAL TERVERIFIKASI & VALID (AUTHENTIC)
        </div>
        <div class="result-cert-title">${found.title}</div>
        <p style="color: var(--text-muted); font-size: 0.88rem;">Diterbitkan atas nama: <strong style="color: var(--accent-emerald);">M. Ilham Mufid</strong></p>
        <div class="result-grid">
          <div class="result-item"><span>Penerbit Terakreditasi:</span> <strong>${found.issuer}</strong></div>
          <div class="result-item"><span>Tanggal Kelulusan:</span> <strong>${found.date}</strong></div>
          <div class="result-item"><span>Nomor Registrasi ID:</span> <code>${found.certId}</code></div>
          <div class="result-item"><span>Status Repositori:</span> <span style="color: var(--accent-emerald);">File PDF & Hash Terkonfirmasi</span></div>
        </div>
        <div class="result-actions">
          <a href="${found.verifyUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
            <i class="fa-solid fa-external-link"></i> Portal Verifikasi Penerbit
          </a>
          <button class="btn btn-secondary btn-sm" onclick="openModal('${found.id}')">
            <i class="fa-solid fa-file-invoice"></i> Buka Pratinjau
          </button>
        </div>
      `;
    } else {
      resultPanel.className = 'verify-result-panel not-found';
      resultPanel.innerHTML = `
        <div class="result-status-header invalid">
          <i class="fa-solid fa-circle-xmark"></i> ID Kredensial Tidak Ditemukan Dalam Basis Data
        </div>
        <p style="color: var(--text-muted); font-size: 0.88rem;">
          ID "<code>${escapeHtml(query)}</code>" belum tercatat. Pastikan penulisan ID tepat atau gunakan tombol pill contoh di atas.
        </p>
      `;
    }
  }

  if (btn && input) {
    btn.addEventListener('click', () => runVerify(input.value));
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') runVerify(input.value);
    });
  }

  quickBtns.forEach(qBtn => {
    qBtn.addEventListener('click', () => {
      const idVal = qBtn.getAttribute('data-id');
      if (input) input.value = idVal;
      runVerify(idVal);
    });
  });
}

// 8. INTERACTIVE TERMINAL SHELL
function initTerminal() {
  const screen = document.getElementById('terminalScreen');
  const input = document.getElementById('terminalInput');
  const clearBtn = document.getElementById('clearTerminalBtn');
  const toggleBtn = document.getElementById('terminalToggleBtn');

  if (!screen || !input) return;

  const history = [];
  let historyIdx = -1;

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const termSection = document.getElementById('terminal-section');
      if (termSection) {
        termSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => input.focus(), 600);
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      screen.innerHTML = `
        <div class="term-line output-line text-muted">
          Konsol telah dibersihkan. Ketik <span class="term-cmd-highlight">help</span> untuk panduan.
        </div>
      `;
    });
  }

  function printLine(html, isCmd = false) {
    const line = document.createElement('div');
    line.className = isCmd ? 'term-line cmd-echo' : 'term-line output-line';
    line.innerHTML = html;
    screen.appendChild(line);
    screen.scrollTop = screen.scrollHeight;
  }

  function handleCommand(cmdRaw) {
    const cmd = cmdRaw.trim().toLowerCase();
    const parts = cmd.split(' ');
    const main = parts[0];
    const arg = parts.slice(1).join(' ');

    printLine(`guest@ilham-sec:~$ ${escapeHtml(cmdRaw)}`, true);

    switch (main) {
      case '':
        break;
      case 'help':
        printLine(`
          <div style="color: var(--accent-cyan); font-weight: bold; margin-bottom: 0.3rem;">Perintah Shell yang Tersedia:</div>
          <div>  <span class="term-cmd-highlight">whoami</span>       - Informasi profil, orientasi & gelar</div>
          <div>  <span class="term-cmd-highlight">certs</span> / <span class="term-cmd-highlight">ls</span>  - Daftar seluruh 6 sertifikat resmi</div>
          <div>  <span class="term-cmd-highlight">skills</span>      - Matriks keahlian & alat keamanan siber</div>
          <div>  <span class="term-cmd-highlight">verify [id]</span>  - Validasi keaslian ID sertifikat</div>
          <div>  <span class="term-cmd-highlight">cat [id]</span>     - Baca detail lengkap sertifikat (misal: cat ccep)</div>
          <div>  <span class="term-cmd-highlight">matrix</span>      - Akselerasi efek digital rain</div>
          <div>  <span class="term-cmd-highlight">contact</span>     - Jalur komunikasi & email</div>
          <div>  <span class="term-cmd-highlight">clear</span>       - Bersihkan layar terminal</div>
        `);
        break;

      case 'whoami':
        printLine(`
          <div style="color: var(--accent-emerald);">M. Ilham Mufid</div>
          <div>Credential: Certified Cybersecurity Educator Professional (CCEP)</div>
          <div>Focus: Offensive & Defensive Security, Network Protocols (TCP/IP), C Systems, Responsive Web</div>
          <div>Status: Siap untuk kolaborasi proyek keamanan siber, audit pentest, dan riset bareng.</div>
        `);
        break;

      case 'certs':
      case 'ls':
        printLine(`
          <div style="color: var(--accent-cyan); margin-bottom: 0.4rem;">Total 6 Kredensial Terakreditasi:</div>
          ${CERTIFICATES.map((c, i) => `
            <div>[${i + 1}] <strong style="color: var(--text-main);">${c.title}</strong></div>
            <div style="color: var(--text-dim); margin-left: 1.5rem; margin-bottom: 0.3rem;">
              Issuer: ${c.issuer} | ID: <code>${c.certId}</code> | Slug: <span style="color: var(--accent-emerald);">${c.id}</span>
            </div>
          `).join('')}
          <div class="text-muted" style="margin-top: 0.5rem;">Ketik <code>cat [slug]</code> untuk membaca rincian.</div>
        `);
        break;

      case 'skills':
        printLine(`
          <div style="color: var(--accent-cyan);">=== SECURITY & DEVELOPMENT MATRIX ===</div>
          <div>• <strong>Offensive & Pentest:</strong> Vulnerability Assessment, Recon, Red Teaming, Nmap, Burp Suite</div>
          <div>• <strong>Defensive & InfoSec:</strong> CCEP Educator, CIA Triad, Threat Modeling, Hardening</div>
          <div>• <strong>Networking:</strong> 7-Layer OSI, TCP/IP, CIDR/VLSM Subnetting, Wireshark Packet Analysis</div>
          <div>• <strong>Development:</strong> C Language (Memory/Pointers), Bash Scripting, HTML5/CSS3, Bootstrap 5</div>
        `);
        break;

      case 'cat':
        if (!arg) {
          printLine(`Gunakan format: <code>cat [slug_sertifikat]</code>. Contoh: <code>cat ccep</code>`);
        } else {
          const found = CERTIFICATES.find(c => c.id === arg || c.certId.toLowerCase() === arg);
          if (found) {
            printLine(`
              <div style="color: var(--accent-cyan); font-weight: bold;">${found.title}</div>
              <div>Issuer: ${found.issuer}</div>
              <div>Tanggal: ${found.date}</div>
              <div>Credential ID: ${found.certId}</div>
              <div>Deskripsi: ${found.description}</div>
              <div>Tags: ${found.tags.join(', ')}</div>
            `);
          } else {
            printLine(`<span style="color: var(--accent-red);">File "${escapeHtml(arg)}" tidak ditemukan. Ketik <code>ls</code> untuk melihat daftar slug.</span>`);
          }
        }
        break;

      case 'verify':
        if (!arg) {
          printLine(`Gunakan: <code>verify [credential_id]</code>. Contoh: <code>verify PKMI01104260716</code>`);
        } else {
          const found = CERTIFICATES.find(c => c.certId.toLowerCase().includes(arg) || c.id === arg);
          if (found) {
            printLine(`
              <div style="color: var(--accent-emerald);"><i class="fa-solid fa-check"></i> VALID & AUTHENTIC</div>
              <div>Kredensial: <strong>${found.title}</strong></div>
              <div>Penerbit: ${found.issuer} | Tanggal: ${found.date}</div>
              <div>Link Verifikasi: <a href="${found.verifyUrl}" target="_blank" style="color: var(--accent-cyan);">${found.verifyUrl}</a></div>
            `);
          } else {
            printLine(`<span style="color: var(--accent-red);"><i class="fa-solid fa-xmark"></i> ID "${escapeHtml(arg)}" tidak valid dalam sistem database.</span>`);
          }
        }
        break;

      case 'matrix':
        if (window.setMatrixSpeed) {
          window.setMatrixSpeed(3);
          printLine(`<span style="color: var(--accent-emerald);">Matrix rain speed ditingkatkan (3x)!</span>`);
          setTimeout(() => {
            window.setMatrixSpeed(1);
            printLine(`<span style="color: var(--text-dim);">Matrix rain dinormalkan kembali ke 1x.</span>`);
          }, 6000);
        }
        break;

      case 'contact':
        printLine(`
          <div style="color: var(--accent-cyan);">Hubungi M. Ilham Mufid:</div>
          <div>Email: <a href="mailto:xzvdeveloper@gmail.com" style="color: var(--accent-emerald);">xzvdeveloper@gmail.com</a></div>
          <div>GitHub: <a href="https://github.com" target="_blank" style="color: var(--accent-cyan);">github.com/zandero</a></div>
          <div>LinkedIn: <a href="https://linkedin.com" target="_blank" style="color: var(--accent-cyan);">linkedin.com/in/m-ilham-mufid</a></div>
        `);
        break;

      case 'clear':
        screen.innerHTML = '';
        break;

      default:
        printLine(`Perintah tidak dikenal: "<code>${escapeHtml(cmdRaw)}</code>". Ketik <span class="term-cmd-highlight">help</span> untuk panduan.`);
        break;
    }
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = input.value;
      if (val.trim()) {
        history.push(val);
        historyIdx = history.length;
      }
      handleCommand(val);
      input.value = '';
    } else if (e.key === 'ArrowUp') {
      if (history.length && historyIdx > 0) {
        historyIdx--;
        input.value = history[historyIdx];
      }
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      if (historyIdx < history.length - 1) {
        historyIdx++;
        input.value = history[historyIdx];
      } else {
        historyIdx = history.length;
        input.value = '';
      }
      e.preventDefault();
    }
  });
}

// 9. UTILITIES
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Disalin: ${text}`);
  }).catch(() => {
    showToast(`Gagal menyalin.`);
  });
}

function showToast(msg) {
  const existing = document.getElementById('cyberToast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'cyberToast';
  toast.textContent = msg;
  toast.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: rgba(0, 240, 255, 0.9);
    color: #030816;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-family: var(--font-mono);
    font-size: 0.85rem;
    font-weight: 700;
    box-shadow: 0 10px 25px rgba(0, 240, 255, 0.4);
    z-index: 9999;
    animation: fadeIn 0.2s ease;
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 2200);
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m];
  });
}

// 10. MOBILE MENU TOGGLE
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const links = document.getElementById('navLinks');
  if (btn && links) {
    btn.addEventListener('click', () => {
      links.classList.toggle('active');
    });
    links.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        links.classList.remove('active');
      });
    });
  }
}

// BOOTSTRAP INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  initMatrixCanvas();
  initTypewriter();
  initCounters();
  renderCertificates();
  initCertControls();
  initModal();
  initVerifier();
  initTerminal();
  initMobileMenu();
});
