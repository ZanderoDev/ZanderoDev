/**
 * M. Ilham Mufid - Portfolio Core JS
 * Anti-slop verified, clean architecture, no em dashes (R-02 compliant)
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
    description: "Sesi teknis penetration testing dari VINCO bersama Ahmad Danish Putra. Membahas alur reconnaissance, network scanning, identifikasi celah, dan konsep dasar eksploitasi terarah.",
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
    description: "Pelatihan bahasa C resmi dari Dicoding. Fokus pada manipulasi memori, pointer, alokasi memori dinamis, struktur data, dan logika penulisan kode yang efisien serta aman.",
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

// 2. RENDER CERTIFICATES & FILTER/SEARCH
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
      <div style="grid-column: 1/-1; text-align: center; padding: 3.5rem 1.5rem; background: rgba(255, 255, 255, 0.02); border: 1px dashed var(--border-subtle); border-radius: var(--radius-lg);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 1.75rem; color: var(--text-subtle); margin-bottom: 0.85rem; display: block;" aria-hidden="true"></i>
        <p style="color: var(--text-main); font-weight: 500; margin-bottom: 0.35rem;">Tidak ditemukan sertifikat yang cocok.</p>
        <p style="color: var(--text-muted); font-size: 0.875rem;">Kata kunci "${escapeHtml(searchQuery)}" tidak menghasilkan dokumen apa pun. Coba reset pencarian.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(c => `
    <article class="cert-card" data-id="${c.id}" tabindex="0" role="button" aria-label="Buka detail ${escapeHtml(c.title)}">
      <div class="cert-preview-wrap">
        <img src="${c.image}" alt="${escapeHtml(c.title)}" class="cert-img" loading="lazy">
        <div class="cert-overlay">
          <span class="overlay-btn"><i class="fa-solid fa-eye" aria-hidden="true"></i> Pratinjau Dokumen</span>
        </div>
      </div>
      <div class="cert-body">
        <div class="cert-meta-row">
          <span class="cert-cat-pill">${c.categoryLabel}</span>
          <span class="cert-badge-valid"><i class="fa-solid fa-circle-check" aria-hidden="true"></i> Terverifikasi</span>
        </div>
        <h3 class="cert-title">${c.title}</h3>
        <div class="cert-issuer"><i class="fa-solid fa-building-shield" aria-hidden="true"></i> ${c.issuer}</div>
        <div class="cert-info-row">
          <span><i class="fa-regular fa-calendar" aria-hidden="true"></i> ${c.date}</span>
          <span class="cert-id-copy" data-id-val="${c.certId}" title="Klik untuk menyalin nomor ID" role="button" tabindex="0">
            <i class="fa-solid fa-fingerprint" aria-hidden="true"></i> ${c.certId.length > 14 ? c.certId.substring(0, 12) + '...' : c.certId}
          </span>
        </div>
        <div class="cert-actions">
          <button type="button" class="btn btn-primary btn-sm inspect-btn" style="flex: 1;" data-id="${c.id}">
            Detail &amp; Bukti
          </button>
          <a href="${c.pdf}" download class="btn btn-secondary btn-sm" title="Unduh berkas PDF resmi" aria-label="Unduh PDF ${escapeHtml(c.title)}">
            <i class="fa-solid fa-download" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </article>
  `).join('');

  // Attach card event listeners
  grid.querySelectorAll('.cert-card').forEach(card => {
    const openCard = (e) => {
      if (e.target.closest('.cert-id-copy')) {
        const copyEl = e.target.closest('.cert-id-copy');
        copyToClipboard(copyEl.getAttribute('data-id-val'));
        return;
      }
      if (e.target.closest('a[download]')) {
        return; // Let browser download file directly
      }
      const certId = card.getAttribute('data-id');
      openModal(certId);
    };

    card.addEventListener('click', openCard);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCard(e);
      }
    });
  });
}

function initCertControls() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
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

// 3. MODAL LIGHTBOX
function openModal(certId) {
  const cert = CERTIFICATES.find(c => c.id === certId);
  if (!cert) return;

  const modal = document.getElementById('certModal');
  document.getElementById('modalCertImg').src = cert.image;
  document.getElementById('modalCertImg').alt = cert.title;
  document.getElementById('modalCategoryBadge').textContent = cert.categoryLabel;
  document.getElementById('modalCertTitle').textContent = cert.title;
  document.getElementById('modalCertIssuer').textContent = `${cert.issuer} (${cert.instructor})`;
  document.getElementById('modalCertDate').textContent = cert.date;

  const idEl = document.getElementById('modalCertId');
  idEl.textContent = cert.certId;
  idEl.onclick = () => copyToClipboard(cert.certId);

  document.getElementById('modalCertDesc').textContent = cert.description;

  const tagsWrap = document.getElementById('modalCertTags');
  tagsWrap.innerHTML = cert.tags.map(t => `<span class="chip">${t}</span>`).join('');

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
  document.getElementById('modalCloseBtn').focus();
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

// 4. VERIFICATION LOOKUP ENGINE
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
      resultPanel.className = 'verify-result-panel valid';
      resultPanel.innerHTML = `
        <div class="result-status-header valid">
          <i class="fa-solid fa-circle-check" aria-hidden="true"></i> KREDENSIAL TERVERIFIKASI &amp; RESMI
        </div>
        <div class="result-cert-title">${found.title}</div>
        <p style="color: var(--text-muted); font-size: 0.88rem;">Diterbitkan atas nama: <strong style="color: var(--text-main);">M. Ilham Mufid</strong></p>
        <div class="result-grid">
          <div class="result-item"><span>Lembaga Penerbit:</span> <strong>${found.issuer}</strong></div>
          <div class="result-item"><span>Tanggal Kelulusan:</span> <strong>${found.date}</strong></div>
          <div class="result-item"><span>Nomor Registrasi ID:</span> <code>${found.certId}</code></div>
          <div class="result-item"><span>Status Berkas:</span> <span style="color: var(--accent-emerald);">Dokumen PDF Tersedia</span></div>
        </div>
        <div class="modal-action-row" style="margin-top: 1rem;">
          <a href="${found.verifyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Tautan Penerbit
          </a>
          <button type="button" class="btn btn-secondary btn-sm" onclick="openModal('${found.id}')">
            Lihat Pratinjau
          </button>
        </div>
      `;
    } else {
      resultPanel.className = 'verify-result-panel invalid';
      resultPanel.innerHTML = `
        <div class="result-status-header invalid">
          <i class="fa-solid fa-circle-xmark" aria-hidden="true"></i> ID Tidak Ditemukan
        </div>
        <p style="color: var(--text-muted); font-size: 0.88rem;">
          ID "<code>${escapeHtml(query)}</code>" belum tercatat di repositori ini. Pastikan penulisan ID tepat atau gunakan tombol contoh di atas.
        </p>
      `;
    }
  }

  if (btn && input) {
    btn.addEventListener('click', () => runVerify(input.value));
    input.addEventListener('keydown', (e) => {
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

// 5. INTERACTIVE TERMINAL SHELL
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
        setTimeout(() => input.focus(), 400);
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      screen.innerHTML = `
        <div class="term-line output-line" style="color: var(--text-subtle);">
          Konsol telah dibersihkan. Ketik <span class="term-highlight">help</span> untuk panduan.
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

    printLine(`<span class="term-prompt">guest@sec-ops:~$</span> ${escapeHtml(cmdRaw)}`, true);

    switch (main) {
      case '':
        break;
      case 'help':
        printLine(`
          <div style="color: var(--text-main); font-weight: 600; margin-bottom: 0.35rem;">Daftar Perintah Shell:</div>
          <div>  <span class="term-highlight">whoami</span>       : Profil teknis dan peran spesialisasi</div>
          <div>  <span class="term-highlight">certs</span> / <span class="term-highlight">ls</span>  : Tampilkan 6 sertifikasi resmi</div>
          <div>  <span class="term-highlight">skills</span>      : Matriks keahlian dan perkakas keamanan</div>
          <div>  <span class="term-highlight">verify [id]</span>  : Periksa validitas nomor ID sertifikat</div>
          <div>  <span class="term-highlight">cat [slug]</span>   : Baca detail kredensial (contoh: cat ccep)</div>
          <div>  <span class="term-highlight">contact</span>     : Informasi kontak dan email resmi</div>
          <div>  <span class="term-highlight">clear</span>       : Bersihkan layar konsol</div>
        `);
        break;

      case 'whoami':
        printLine(`
          <div style="color: var(--text-main); font-weight: 600;">M. Ilham Mufid</div>
          <div>Gelar &amp; Kredensial: Certified Cybersecurity Educator Professional (CCEP)</div>
          <div>Bidang: Offensive Security, Network Protocols (TCP/IP), C Systems Development, Responsive Web</div>
          <div>Fokus: Riset keamanan siber, simulasi red teaming, dan edukasi teknis terstruktur.</div>
        `);
        break;

      case 'certs':
      case 'ls':
        printLine(`
          <div style="color: var(--text-main); font-weight: 600; margin-bottom: 0.35rem;">Total 6 Kredensial Resmi Terdaftar:</div>
          ${CERTIFICATES.map((c, i) => `
            <div>[${i + 1}] <strong style="color: var(--text-main);">${c.title}</strong></div>
            <div style="color: var(--text-muted); margin-left: 1.5rem; margin-bottom: 0.3rem;">
              Penerbit: ${c.issuer} | ID: <code>${c.certId}</code> | Slug: <span style="color: var(--accent-cyan);">${c.id}</span>
            </div>
          `).join('')}
          <div style="color: var(--text-subtle); margin-top: 0.4rem;">Ketik <code>cat [slug]</code> untuk membaca deskripsi lengkap.</div>
        `);
        break;

      case 'skills':
        printLine(`
          <div style="color: var(--text-main); font-weight: 600; margin-bottom: 0.3rem;">Keahlian Teknis &amp; Tooling:</div>
          <div>- <strong>Offensive &amp; Pentest:</strong> Vulnerability Assessment, Reconnaissance, Nmap, Burp Suite, Metasploit</div>
          <div>- <strong>Defensive &amp; InfoSec:</strong> CCEP Educator, CIA Triad, Threat Modeling, Hardening Linux</div>
          <div>- <strong>Jaringan &amp; Protokol:</strong> Model 7 OSI, TCP/IP, Subnetting CIDR/VLSM, Wireshark Packet Analysis</div>
          <div>- <strong>Rekayasa Perangkat Lunak:</strong> Bahasa C (Pointer &amp; Memori), Bash Shell, Bootstrap 5, Git</div>
        `);
        break;

      case 'cat':
        if (!arg) {
          printLine(`Format penggunaan: <code>cat [slug]</code>. Contoh: <code>cat ccep</code> atau <code>cat network-aguna</code>`);
        } else {
          const found = CERTIFICATES.find(c => c.id === arg || c.certId.toLowerCase() === arg);
          if (found) {
            printLine(`
              <div style="color: var(--text-main); font-weight: 600;">${found.title}</div>
              <div>Penerbit: ${found.issuer}</div>
              <div>Tanggal: ${found.date}</div>
              <div>Credential ID: <code>${found.certId}</code></div>
              <div>Rincian: ${found.description}</div>
              <div>Kategori: ${found.categoryLabel}</div>
            `);
          } else {
            printLine(`<span style="color: var(--accent-red);">Slug atau ID "${escapeHtml(arg)}" tidak ditemukan. Ketik <code>ls</code> untuk melihat daftar.</span>`);
          }
        }
        break;

      case 'verify':
        if (!arg) {
          printLine(`Format penggunaan: <code>verify [nomor_id]</code>. Contoh: <code>verify a88e7bcfe3a8824f</code>`);
        } else {
          const found = CERTIFICATES.find(c => c.certId.toLowerCase().includes(arg) || c.id === arg);
          if (found) {
            printLine(`
              <div style="color: var(--accent-emerald); font-weight: 600;"><i class="fa-solid fa-check" aria-hidden="true"></i> VALID &amp; RESMI</div>
              <div>Judul: <strong>${found.title}</strong></div>
              <div>Penerbit: ${found.issuer} | Tanggal: ${found.date}</div>
              <div>Tautan Verifikasi: <a href="${found.verifyUrl}" target="_blank" style="color: var(--accent-cyan);">${found.verifyUrl}</a></div>
            `);
          } else {
            printLine(`<span style="color: var(--accent-red);"><i class="fa-solid fa-xmark" aria-hidden="true"></i> ID "${escapeHtml(arg)}" tidak terdaftar dalam repositori.</span>`);
          }
        }
        break;

      case 'contact':
        printLine(`
          <div style="color: var(--text-main); font-weight: 600;">Kontak M. Ilham Mufid:</div>
          <div>Email: <a href="mailto:xzvdeveloper@gmail.com" style="color: var(--accent-cyan);">xzvdeveloper@gmail.com</a></div>
          <div>GitHub: <a href="https://github.com/ZanderoDev" target="_blank" style="color: var(--accent-cyan);">github.com/ZanderoDev</a></div>
          <div>LinkedIn: <a href="https://linkedin.com/in/m-ilham-mufid" target="_blank" style="color: var(--accent-cyan);">linkedin.com/in/m-ilham-mufid</a></div>
        `);
        break;

      case 'clear':
        screen.innerHTML = '';
        break;

      default:
        printLine(`Perintah tidak dikenal: "<code>${escapeHtml(cmdRaw)}</code>". Ketik <span class="term-highlight">help</span> untuk panduan.`);
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

// 6. UTILITIES
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`ID disalin: ${text}`);
  }).catch(() => {
    showToast(`Gagal menyalin ID.`);
  });
}

function showToast(msg) {
  const existing = document.getElementById('portfolioToast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'portfolioToast';
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.textContent = msg;
  toast.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: #f4f4f6;
    color: #08090d;
    padding: 0.65rem 1.25rem;
    border-radius: 9999px;
    font-family: var(--font-sans);
    font-size: 0.85rem;
    font-weight: 600;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    z-index: 9999;
    animation: fadeIn 0.2s ease;
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 2000);
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

// 7. MOBILE MENU TOGGLE
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const links = document.getElementById('navLinks');
  if (btn && links) {
    btn.addEventListener('click', () => {
      const isOpen = links.classList.toggle('active');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    links.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        links.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  renderCertificates();
  initCertControls();
  initModal();
  initVerifier();
  initTerminal();
  initMobileMenu();
});
