const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuToggle.textContent = navLinks.classList.contains("open") ? "×" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.textContent = "☰";
    });
});

const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");

filters.forEach(filter => {
    filter.addEventListener("click", () => {
        filters.forEach(item => item.classList.remove("active"));
        filter.classList.add("active");

        const category = filter.dataset.filter;

        projects.forEach(project => {
            const matches = category === "all" || project.dataset.category === category;
            project.classList.toggle("hidden", !matches);
        });
    });
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

const copyButton = document.getElementById("copyEmail");
const toast = document.getElementById("toast");

copyButton.addEventListener("click", async () => {
    const email = copyButton.dataset.email;

    try {
        await navigator.clipboard.writeText(email);
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 2200);
    } catch {
        toast.textContent = "عدّل البريد في الملف ثم استخدمه للتواصل";
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 2500);
    }
});


function downloadCompleteCode() {
    const files = {
        "index.html": `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Azmmahtech - Portfolio احترافي للبرمجة والتقنية">
    <title>Azmmahtech | Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="page-glow glow-one"></div>
    <div class="page-glow glow-two"></div>

    <header class="header" id="home">
        <nav class="navbar container">
            <a href="#home" class="brand">
                <span class="brand-mark">&lt;/&gt;</span>
                <span>Azmmah<span>tech</span></span>
            </a>

            <button class="menu-toggle" id="menuToggle" aria-label="فتح القائمة">☰</button>

            <div class="nav-links" id="navLinks">
                <a href="#home">الرئيسية</a>
                <a href="#services">خدماتي</a>
                <a href="#projects">أعمالي</a>
                <a href="#about">من أنا</a>
                <a href="#contact">تواصل معي</a>
            </div>

            <a class="nav-cta" href="#contact">ابدأ مشروعك</a>
        </nav>
    </header>

    <main>
        <section class="hero container">
            <div class="hero-content reveal">
                <div class="status-badge">
                    <span class="status-dot"></span>
                    متاح لمشاريع جديدة
                </div>
                <p class="eyebrow">AZMMAHTECH • DIGITAL SOLUTIONS</p>
                <h1>أحوّل أفكارك إلى <span>حلول رقمية</span> احترافية.</h1>
                <p class="hero-text">
                    Portfolio احترافي يضم خدمات تطوير مواقع الإنترنت، التطبيقات، برمجة الهواتف
                    والأجهزة، وحلول الصيانة والبرمجة التقنية.
                </p>

                <div class="hero-actions">
                    <a class="btn btn-primary" href="#projects">استكشف أعمالي <span>←</span></a>
                    <a class="btn btn-outline" href="#contact">تواصل معي</a>
                    <button class="btn btn-download" id="downloadCode">تحميل الكود كاملاً ↓</button>
                </div>

                <div class="quick-stats">
                    <div><strong>Web</strong><span>تطوير مواقع</span></div>
                    <div><strong>Apps</strong><span>تطبيقات</span></div>
                    <div><strong>Mobile</strong><span>هواتف ذكية</span></div>
                    <div><strong>PC</strong><span>أجهزة وحواسيب</span></div>
                </div>
            </div>

            <div class="hero-card reveal">
                <div class="code-window">
                    <div class="window-bar">
                        <div class="window-dots"><i></i><i></i><i></i></div>
                        <span>azmmahtech.js</span>
                    </div>
                    <pre><code><span class="code-purple">const</span> <span class="code-blue">developer</span> = {
  name: <span class="code-green">"Azmmahtech"</span>,
  skills: [
    <span class="code-green">"Web Development"</span>,
    <span class="code-green">"App Development"</span>,
    <span class="code-green">"Mobile Solutions"</span>,
    <span class="code-green">"PC & Laptop"</span>
  ],
  passion: <span class="code-green">"Build. Solve. Innovate."</span>
};</code></pre>
                    <div class="code-footer">
                        <span>●</span> Ready to build
                    </div>
                </div>
            </div>
        </section>

        <section class="section container" id="services">
            <div class="section-heading reveal">
                <div>
                    <p class="eyebrow">MY SERVICES</p>
                    <h2>خدمات تقنية <span>متكاملة</span></h2>
                </div>
                <p>حلول عملية وعصرية للأفراد، الشركات والمشاريع الرقمية.</p>
            </div>

            <div class="services-grid">
                <article class="service-card reveal">
                    <div class="icon">⌘</div>
                    <h3>برمجة مواقع الإنترنت</h3>
                    <p>تصميم وتطوير مواقع سريعة، متجاوبة واحترافية باستخدام HTML وCSS وJavaScript.</p>
                    <span class="service-tag">HTML • CSS • JS</span>
                </article>

                <article class="service-card reveal">
                    <div class="icon">▣</div>
                    <h3>برمجة التطبيقات</h3>
                    <p>بناء واجهات وتجارب تطبيقات عصرية مع التركيز على سهولة الاستخدام والأداء.</p>
                    <span class="service-tag">UI • UX • Apps</span>
                </article>

                <article class="service-card reveal">
                    <div class="icon">⌁</div>
                    <h3>برمجة الهواتف الذكية</h3>
                    <p>حلول وبرمجة وصيانة للهواتف الذكية، مع خدمات السوفتوير والتعامل مع الأنظمة.</p>
                    <span class="service-tag">Mobile • Software</span>
                </article>

                <article class="service-card reveal">
                    <div class="icon">⌘</div>
                    <h3>تفليش وفك شفرات</h3>
                    <p>خدمات برمجية للهواتف تشمل السوفتوير، التفليش، معالجة الأعطال البرمجية وفك القيود المدعومة.</p>
                    <span class="service-tag">Firmware • Repair</span>
                </article>

                <article class="service-card reveal">
                    <div class="icon">▤</div>
                    <h3>برمجة الحواسيب واللابتوبات</h3>
                    <p>إعداد الأنظمة والبرامج، معالجة المشاكل البرمجية وتحسين جاهزية أجهزة الكمبيوتر.</p>
                    <span class="service-tag">PC • Laptop</span>
                </article>

                <article class="service-card reveal">
                    <div class="icon">✦</div>
                    <h3>حلول تقنية مخصصة</h3>
                    <p>تحويل الفكرة إلى مشروع رقمي واضح وقابل للتطوير، من التخطيط حتى الواجهة النهائية.</p>
                    <span class="service-tag">Custom Solutions</span>
                </article>
            </div>
        </section>

        <section class="section projects-section" id="projects">
            <div class="section-heading reveal">
                <div>
                    <p class="eyebrow">SELECTED WORK</p>
                    <h2>أعمالي <span>البرمجية</span></h2>
                </div>
                <p>نماذج من المجالات التي يمكن عرض مشاريعك فيها.</p>
            </div>

            <div class="project-toolbar">
                <div class="project-filter reveal">
                <button class="filter active" data-filter="all">الكل</button>
                <button class="filter" data-filter="web">مواقع</button>
                <button class="filter" data-filter="apps">تطبيقات</button>
                <button class="filter" data-filter="mobile">هواتف</button>
                <button class="filter" data-filter="pc">حاسوب</button>
                </div>
                <button class="btn btn-download small-download" id="downloadCodeProjects">تحميل الكود كاملاً ↓</button>
            </div>

            <div class="projects-grid">
                <article class="project-card reveal" data-category="web">
                    <div class="project-visual web-visual"><span>&lt;WEB /&gt;</span></div>
                    <div class="project-info">
                        <span class="project-type">Web Development</span>
                        <h3>مواقع ومنصات احترافية</h3>
                        <p>واجهات حديثة ومتجاوبة للمشاريع والخدمات الرقمية.</p>
                        <a href="#contact">اطلب مشروعاً مشابهاً ↗</a>
                    </div>
                </article>

                <article class="project-card reveal" data-category="apps">
                    <div class="project-visual app-visual"><span>APP<span class="accent">+</span></span></div>
                    <div class="project-info">
                        <span class="project-type">App Development</span>
                        <h3>تطبيقات مخصصة</h3>
                        <p>تطبيقات عملية بواجهات واضحة وتجربة استخدام عصرية.</p>
                        <a href="#contact">اطلب مشروعاً مشابهاً ↗</a>
                    </div>
                </article>

                <article class="project-card reveal" data-category="mobile">
                    <div class="project-visual mobile-visual"><span>SMART<br>PHONE</span></div>
                    <div class="project-info">
                        <span class="project-type">Mobile Solutions</span>
                        <h3>سوفتوير الهواتف</h3>
                        <p>تفليش وصيانة برمجية ومعالجة مشاكل الأنظمة المدعومة.</p>
                        <a href="#contact">استفسر عن الخدمة ↗</a>
                    </div>
                </article>

                <article class="project-card reveal" data-category="pc">
                    <div class="project-visual pc-visual"><span>PC<br>LAB</span></div>
                    <div class="project-info">
                        <span class="project-type">PC & Laptop</span>
                        <h3>حلول الحاسوب واللابتوب</h3>
                        <p>تهيئة الأنظمة والبرامج ومعالجة المشاكل البرمجية.</p>
                        <a href="#contact">استفسر عن الخدمة ↗</a>
                    </div>
                </article>
            </div>
        </section>

        <section class="about section container" id="about">
            <div class="about-panel reveal">
                <div class="about-badge">AZ</div>
                <div>
                    <p class="eyebrow">ABOUT AZMMAHTECH</p>
                    <h2>شغف بالتقنية، وتركيز على <span>النتيجة.</span></h2>
                    <p>
                        Azmmahtech هو ملف أعمال رقمي لعرض المشاريع والخدمات التقنية بصورة احترافية،
                        مع التركيز على التصميم العصري، الأداء، سهولة الاستخدام والحلول البرمجية العملية.
                    </p>
                    <div class="skill-list">
                        <span>HTML5</span><span>CSS3</span><span>JavaScript</span>
                        <span>Responsive Design</span><span>UI/UX</span><span>Software Solutions</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="contact section container" id="contact">
            <div class="contact-box reveal">
                <div>
                    <p class="eyebrow">LET'S WORK TOGETHER</p>
                    <h2>لديك فكرة؟ <span>لنحوّلها إلى مشروع.</span></h2>
                    <p>تواصل معي لمناقشة فكرتك والخدمة المناسبة لمشروعك.</p>
                </div>
                <div class="contact-actions">
                    <a class="btn btn-primary" href="mailto:your@email.com">راسلني بالبريد</a>
                    <button class="copy-btn" id="copyEmail" data-email="your@email.com">نسخ البريد</button>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container footer-inner">
            <a href="#home" class="brand">
                <span class="brand-mark">&lt;/&gt;</span>
                <span>Azmmah<span>tech</span></span>
            </a>
            <p>© <span id="year"></span> Azmmahtech — جميع الحقوق محفوظة.</p>
            <a href="#home">العودة للأعلى ↑</a>
        </div>
    </footer>

    <div class="toast" id="toast">تم نسخ البريد الإلكتروني ✓</div>
    <script src="script.js"></script>
</body>
</html>
`,
        "style.css": `@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap');

:root {
    --bg: #07110d;
    --bg-soft: #0b1812;
    --card: rgba(14, 31, 22, 0.78);
    --card-solid: #0e2017;
    --green: #39e58c;
    --green-dark: #16a765;
    --green-light: #8fffc1;
    --text: #f3fff8;
    --muted: #9bb4a6;
    --border: rgba(93, 255, 162, 0.14);
    --shadow: 0 24px 70px rgba(0, 0, 0, 0.32);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Cairo", Tahoma, Arial, sans-serif;
    background:
        radial-gradient(circle at 10% 10%, rgba(57, 229, 140, 0.10), transparent 28%),
        radial-gradient(circle at 90% 30%, rgba(22, 167, 101, 0.08), transparent 30%),
        var(--bg);
    color: var(--text);
    line-height: 1.8;
    overflow-x: hidden;
}

body::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background-image: linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px);
    background-size: 45px 45px;
    mask-image: linear-gradient(to bottom, black, transparent 75%);
    z-index: -2;
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    font: inherit;
}

.container {
    width: min(1160px, calc(100% - 40px));
    margin-inline: auto;
}

.page-glow {
    position: fixed;
    width: 360px;
    height: 360px;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.12;
    pointer-events: none;
    z-index: -1;
}

.glow-one {
    background: var(--green);
    top: 10%;
    right: -180px;
}

.glow-two {
    background: #0fa96a;
    bottom: 0;
    left: -180px;
}

.header {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(7, 17, 13, 0.78);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid rgba(255,255,255,0.06);
}

.navbar {
    min-height: 76px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
}

.brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 1.25rem;
    font-weight: 800;
    letter-spacing: -0.5px;
}

.brand > span:last-child span {
    color: var(--green);
}

.brand-mark {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(57,229,140,0.4);
    border-radius: 10px;
    color: var(--green);
    background: rgba(57,229,140,0.08);
    font-size: 0.82rem;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 27px;
}

.nav-links a {
    color: #b5c9bd;
    font-size: 0.92rem;
    transition: 0.25s;
}

.nav-links a:hover {
    color: var(--green);
}

.nav-cta,
.btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    min-height: 46px;
    padding: 0 22px;
    border-radius: 12px;
    transition: transform 0.25s, background 0.25s, border-color 0.25s;
    cursor: pointer;
}

.nav-cta {
    background: var(--green);
    color: #04150c;
    font-weight: 800;
    font-size: 0.88rem;
}

.nav-cta:hover,
.btn:hover {
    transform: translateY(-3px);
}

.menu-toggle {
    display: none;
    border: 1px solid var(--border);
    background: var(--card);
    color: var(--text);
    width: 42px;
    height: 42px;
    border-radius: 10px;
    cursor: pointer;
}

.hero {
    min-height: 720px;
    display: grid;
    grid-template-columns: 1.06fr 0.94fr;
    align-items: center;
    gap: 70px;
    padding-top: 70px;
    padding-bottom: 90px;
}

.status-badge {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 6px 13px;
    border: 1px solid rgba(57,229,140,0.2);
    background: rgba(57,229,140,0.07);
    border-radius: 999px;
    color: var(--green-light);
    font-size: 0.82rem;
    margin-bottom: 22px;
}

.status-dot {
    width: 8px;
    height: 8px;
    background: var(--green);
    border-radius: 50%;
    box-shadow: 0 0 14px var(--green);
}

.eyebrow {
    color: var(--green);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 2px;
    margin-bottom: 10px;
}

.hero h1 {
    max-width: 700px;
    font-size: clamp(2.7rem, 5.5vw, 5.3rem);
    line-height: 1.15;
    letter-spacing: -2.4px;
    margin-bottom: 22px;
}

.hero h1 span,
.section-heading h2 span,
.about h2 span,
.contact h2 span {
    color: var(--green);
}

.hero-text {
    color: var(--muted);
    max-width: 640px;
    font-size: 1.04rem;
}

.hero-actions {
    display: flex;
    gap: 12px;
    margin-top: 32px;
}

.btn-primary {
    background: var(--green);
    color: #04150c;
    font-weight: 800;
    border: 1px solid var(--green);
}

.btn-outline {
    border: 1px solid rgba(255,255,255,0.13);
    color: var(--text);
    background: rgba(255,255,255,0.025);
}

.quick-stats {
    display: flex;
    gap: 28px;
    margin-top: 48px;
    flex-wrap: wrap;
}

.quick-stats div {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.quick-stats strong {
    color: var(--text);
    font-size: 0.92rem;
}

.quick-stats span {
    color: #718b7b;
    font-size: 0.76rem;
}

.code-window {
    background: #09150f;
    border: 1px solid var(--border);
    border-radius: 20px;
    box-shadow: var(--shadow);
    overflow: hidden;
    transform: rotate(1.5deg);
}

.window-bar {
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 17px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
    color: #668072;
    font-family: monospace;
    font-size: 0.78rem;
}

.window-dots {
    display: flex;
    gap: 6px;
}

.window-dots i {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #284237;
}

.code-window pre {
    padding: 34px 30px;
    overflow: auto;
    direction: ltr;
    text-align: left;
    font: 500 0.88rem/2 "Courier New", monospace;
    color: #c9ddd2;
}

.code-purple { color: #c99cff; }
.code-blue { color: #75c9ff; }
.code-green { color: var(--green); }

.code-footer {
    padding: 13px 20px;
    border-top: 1px solid rgba(255,255,255,0.06);
    color: #6c8979;
    font-size: 0.76rem;
}

.code-footer span {
    color: var(--green);
    margin-left: 6px;
}

.section {
    padding: 100px 0;
}

.section-heading {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 30px;
    margin-bottom: 38px;
}

.section-heading h2,
.about h2,
.contact h2 {
    font-size: clamp(2rem, 4vw, 3.4rem);
    line-height: 1.2;
    letter-spacing: -1.2px;
}

.section-heading > p {
    max-width: 390px;
    color: var(--muted);
    font-size: 0.9rem;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}

.service-card {
    position: relative;
    min-height: 250px;
    padding: 27px;
    background: linear-gradient(145deg, rgba(19, 42, 29, 0.8), rgba(8, 22, 15, 0.85));
    border: 1px solid var(--border);
    border-radius: 18px;
    overflow: hidden;
    transition: 0.3s;
}

.service-card::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgba(57,229,140,0.07);
    filter: blur(15px);
    top: -50px;
    left: -50px;
}

.service-card:hover {
    transform: translateY(-7px);
    border-color: rgba(57,229,140,0.34);
    box-shadow: 0 20px 45px rgba(0,0,0,0.25);
}

.icon {
    width: 47px;
    height: 47px;
    display: grid;
    place-items: center;
    border-radius: 13px;
    background: rgba(57,229,140,0.09);
    color: var(--green);
    border: 1px solid rgba(57,229,140,0.15);
    font-size: 1.35rem;
    margin-bottom: 23px;
}

.service-card h3 {
    font-size: 1.05rem;
    margin-bottom: 9px;
}

.service-card p {
    color: var(--muted);
    font-size: 0.83rem;
    line-height: 1.9;
}

.service-tag,
.project-type {
    display: inline-block;
    margin-top: 17px;
    color: #72ad8c;
    font-size: 0.7rem;
    font-weight: 700;
}

.projects-section {
    background: rgba(3, 10, 7, 0.28);
}

.project-filter {
    display: flex;
    gap: 9px;
    flex-wrap: wrap;
    margin-bottom: 25px;
}

.filter {
    border: 1px solid rgba(255,255,255,0.09);
    background: rgba(255,255,255,0.025);
    color: #8ea899;
    border-radius: 10px;
    padding: 8px 15px;
    cursor: pointer;
    transition: 0.25s;
}

.filter:hover,
.filter.active {
    background: rgba(57,229,140,0.12);
    border-color: rgba(57,229,140,0.3);
    color: var(--green);
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
}

.project-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 20px;
    overflow: hidden;
    transition: 0.3s;
}

.project-card:hover {
    transform: translateY(-5px);
    border-color: rgba(57,229,140,0.3);
}

.project-card.hidden {
    display: none;
}

.project-visual {
    height: 220px;
    display: grid;
    place-items: center;
    font: 800 2.4rem/1.2 monospace;
    letter-spacing: 4px;
    color: rgba(221,255,235,0.92);
    position: relative;
    overflow: hidden;
}

.project-visual::before,
.project-visual::after {
    content: "";
    position: absolute;
    border: 1px solid rgba(57,229,140,0.16);
    border-radius: 50%;
}

.project-visual::before {
    width: 250px;
    height: 250px;
}

.project-visual::after {
    width: 430px;
    height: 430px;
}

.web-visual {
    background: radial-gradient(circle, #123c29, #081710 65%);
}

.app-visual {
    background: radial-gradient(circle, #164b32, #07140e 65%);
}

.mobile-visual {
    background: radial-gradient(circle, #0f3b29, #07130d 65%);
}

.pc-visual {
    background: radial-gradient(circle, #153626, #07120c 65%);
}

.project-visual > span {
    z-index: 1;
    text-align: center;
}

.accent {
    color: var(--green);
}

.project-info {
    padding: 22px 24px 25px;
}

.project-type {
    margin: 0 0 5px;
    color: var(--green);
}

.project-info h3 {
    font-size: 1.12rem;
}

.project-info p {
    color: var(--muted);
    font-size: 0.82rem;
    margin-top: 7px;
}

.project-info a {
    display: inline-block;
    margin-top: 15px;
    color: var(--green-light);
    font-size: 0.8rem;
    font-weight: 700;
}

.about-panel {
    display: grid;
    grid-template-columns: 170px 1fr;
    gap: 45px;
    align-items: center;
    padding: 55px;
    background: linear-gradient(135deg, rgba(17, 45, 30, 0.75), rgba(7, 20, 13, 0.85));
    border: 1px solid var(--border);
    border-radius: 25px;
}

.about-badge {
    width: 145px;
    height: 145px;
    display: grid;
    place-items: center;
    border-radius: 35px;
    background: linear-gradient(135deg, var(--green), #0e8c56);
    color: #04150c;
    font-size: 3rem;
    font-weight: 900;
    box-shadow: 0 0 60px rgba(57,229,140,0.18);
}

.about h2 {
    margin-bottom: 17px;
}

.about-panel p:not(.eyebrow) {
    color: var(--muted);
    max-width: 750px;
    font-size: 0.92rem;
}

.skill-list {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 22px;
}

.skill-list span {
    padding: 6px 11px;
    border: 1px solid rgba(57,229,140,0.15);
    border-radius: 8px;
    color: #a4c3b1;
    background: rgba(57,229,140,0.045);
    font-size: 0.7rem;
}

.contact {
    padding-top: 20px;
    padding-bottom: 110px;
}

.contact-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    padding: 45px;
    border: 1px solid rgba(57,229,140,0.2);
    border-radius: 23px;
    background:
        radial-gradient(circle at 100% 50%, rgba(57,229,140,0.12), transparent 35%),
        #0b1d14;
}

.contact h2 {
    margin-bottom: 12px;
}

.contact-box > div:first-child p:last-child {
    color: var(--muted);
    font-size: 0.9rem;
}

.contact-actions {
    display: flex;
    gap: 10px;
    flex-shrink: 0;
}

.copy-btn {
    min-height: 46px;
    padding: 0 18px;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.1);
    background: rgba(255,255,255,0.04);
    color: var(--text);
    cursor: pointer;
}

.footer {
    border-top: 1px solid rgba(255,255,255,0.07);
    padding: 24px 0;
    color: #718b7b;
    font-size: 0.75rem;
}

.footer-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.footer .brand {
    color: var(--text);
    font-size: 1rem;
}

.footer a:last-child {
    color: var(--green);
}

.toast {
    position: fixed;
    bottom: 25px;
    left: 50%;
    transform: translate(-50%, 100px);
    padding: 10px 17px;
    background: #102d1e;
    border: 1px solid rgba(57,229,140,0.25);
    color: var(--green-light);
    border-radius: 10px;
    font-size: 0.8rem;
    opacity: 0;
    transition: 0.3s;
    z-index: 100;
}

.toast.show {
    transform: translate(-50%, 0);
    opacity: 1;
}

.reveal {
    opacity: 0;
    transform: translateY(25px);
    transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

@media (max-width: 900px) {
    .hero {
        grid-template-columns: 1fr;
        gap: 45px;
        min-height: auto;
        padding-top: 65px;
    }

    .hero-card {
        max-width: 700px;
        width: 100%;
        margin-inline: auto;
    }

    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .nav-links {
        position: absolute;
        top: 76px;
        right: 20px;
        left: 20px;
        display: none;
        flex-direction: column;
        align-items: stretch;
        padding: 15px;
        border: 1px solid var(--border);
        background: rgba(7, 18, 13, 0.97);
        border-radius: 15px;
    }

    .nav-links.open {
        display: flex;
    }

    .nav-links a {
        padding: 10px;
    }

    .menu-toggle {
        display: block;
        margin-right: auto;
    }

    .navbar .nav-cta {
        display: none;
    }

    .about-panel {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .about-badge {
        margin-inline: auto;
    }

    .skill-list {
        justify-content: center;
    }

    .contact-box {
        flex-direction: column;
        align-items: flex-start;
    }
}

@media (max-width: 650px) {
    .container {
        width: min(100% - 28px, 1160px);
    }

    .navbar {
        min-height: 68px;
    }

    .nav-links {
        top: 68px;
        right: 14px;
        left: 14px;
    }

    .hero {
        padding-top: 45px;
        padding-bottom: 60px;
    }

    .hero h1 {
        font-size: 2.45rem;
        letter-spacing: -1.3px;
    }

    .hero-actions {
        flex-direction: column;
    }

    .btn {
        width: 100%;
    }

    .quick-stats {
        gap: 17px;
        justify-content: space-between;
    }

    .code-window {
        transform: none;
    }

    .code-window pre {
        padding: 25px 18px;
        font-size: 0.7rem;
    }

    .section {
        padding: 72px 0;
    }

    .section-heading {
        display: block;
    }

    .section-heading > p {
        margin-top: 12px;
    }

    .services-grid,
    .projects-grid {
        grid-template-columns: 1fr;
    }

    .service-card {
        min-height: auto;
    }

    .project-visual {
        height: 185px;
    }

    .about-panel,
    .contact-box {
        padding: 28px 22px;
    }

    .contact-actions {
        width: 100%;
        flex-direction: column;
    }

    .contact-actions .btn,
    .copy-btn {
        width: 100%;
    }

    .footer-inner {
        flex-direction: column;
        text-align: center;
    }
}
`,
        "script.js": `const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuToggle.textContent = navLinks.classList.contains("open") ? "×" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.textContent = "☰";
    });
});

const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");

filters.forEach(filter => {
    filter.addEventListener("click", () => {
        filters.forEach(item => item.classList.remove("active"));
        filter.classList.add("active");

        const category = filter.dataset.filter;

        projects.forEach(project => {
            const matches = category === "all" || project.dataset.category === category;
            project.classList.toggle("hidden", !matches);
        });
    });
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

const copyButton = document.getElementById("copyEmail");
const toast = document.getElementById("toast");

copyButton.addEventListener("click", async () => {
    const email = copyButton.dataset.email;

    try {
        await navigator.clipboard.writeText(email);
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 2200);
    } catch {
        toast.textContent = "عدّل البريد في الملف ثم استخدمه للتواصل";
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 2500);
    }
});

document.getElementById("year").textContent = new Date().getFullYear();
`
    };

    const zip = new JSZip();
    Object.entries(files).forEach(([name, content]) => {
        zip.file(name, content);
    });

    zip.generateAsync({ type: "blob" }).then(blob => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Azmmahtech_Portfolio.zip";
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);

        toast.textContent = "تم تحميل الكود كاملاً ✓";
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 2500);
    });
}

document.getElementById("downloadCode")?.addEventListener("click", downloadCompleteCode);
document.getElementById("downloadCodeProjects")?.addEventListener("click", downloadCompleteCode);

document.getElementById("year").textContent = new Date().getFullYear();
