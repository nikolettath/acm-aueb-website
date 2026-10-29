// --- MULTILINGUAL DICTIONARY ---
const translations = {
  el: {
    nav_about: "ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ",
    nav_events: "ΧΡΟΝΟΛΟΓΙΟ",
    nav_actions: "ΔΡΑΣΕΙΣ",
    nav_contact: "ΕΠΙΚΟΙΝΩΝΙΑ",
    nav_join: "ΓΙΝΕ ΜΕΛΟΣ",
    hero_title: "ACM AUEB Student Chapter",
    hero_sub: "Dream it. Code it. Shape it.",
    about_h2: "ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ",
    about_p1: "Είμαστε το επίσημο φοιτητικό Chapter του Association for Computing Machinery στο Οικονομικό Πανεπιστήμιο Αθηνών!",
    about_p2: "Σκοπός μας είναι η δημιουργία ενός δυναμικού περιβάλλοντος ανταλλαγής γνώσης και συνεργασίας, μέσα από τεχνολογικές δράσεις, βιωματικά εργαστήρια και ουσιαστική δικτύωση, με στόχο την ανάδειξη της καινοτομίας.",
    about_p3: "Αν είσαι φοιτητ@ στο ΟΠΑ και αγαπάς την Πληροφορική και την Τεχνολογία, γίνε μέλος της νέας, ενεργής κοινότητας και ακολούθησέ μας στο ταξίδι καινοτομίας και γνώσης.",
    about_p4: "Για περισσότερες πληροφορίες σχετικά με την ACM πάτα ",
    about_link: "εδώ",
    events_label: "History & Commits",
    events_title: "What's been <span class='accent glow-text'>happening.</span>",
    actions_label: "ΟΙ ΕΠΕΡΧΟΜΕΝΕΣ ΔΡΑΣΕΙΣ ΤΗΣ ΟΜΑΔΑΣ ΜΑΣ",
    actions_title: "ΟΙ <span class='accent glow-text'>ΔΡΑΣΕΙΣ</span> ΜΑΣ",
    card_soon: "Coming soon...",
    card_more: "ΜΑΘΕ ΠΕΡΙΣΣΟΤΕΡΑ<div class='link-line'></div>",
    join_h2: "ΓΙΝΕ ΜΕΛΟΣ",
    join_p: "Θες να γίνεις μέλος του ACM AUEB Student Chapter και να συμμετέχεις ενεργά στις δράσεις μας; Κάνε την αίτησή σου εδώ!",
    join_btn: "ΑΙΤΗΣΗ ΜΕΛΟΥΣ <span class='arrow'>↗</span>",
    nl_h3: "Εγγραφή στο Newsletter",
    nl_placeholder: "Email Address",
    nl_btn: "ΕΓΓΡΑΦΗ",
    nl_terms_text: "Αποδέχομαι την ",
    nl_terms_link: "Πολιτική Απορρήτου",
    nl_success: "Σε ευχαριστούμε για την εγγραφή σου! Παρακαλώ έλεγξε το email σου για να επιβεβαιώσεις την εγγραφή σου.",
    //policy//
    policy_nav_back: "ΠΙΣΩ ΣΤΗΝ ΑΡΧΙΚΗ",
    policy_title: "Πολιτική Απορρήτου & Προστασίας Προσωπικών Δεδομένων",
    policy_intro: "Καλώς ήρθατε στον επίσημο ιστότοπο του ACM AUEB Student Chapter. Η προστασία των προσωπικών σας δεδομένων είναι πολύ σημαντική για εμάς. Στην παρούσα πολιτική εξηγούμε με σαφήνεια τι πληροφορίες συλλέγουμε, πώς τις χρησιμοποιούμε και ποια είναι τα δικαιώματά σας σύμφωνα με τον Γενικό Κανονισμό για την Προστασία Δεδομένων (GDPR).",
    policy_toc: "Περιεχόμενα",
    policy_toc_1: "1. Ποια προσωπικά δεδομένα συλλέγουμε;",
    policy_toc_2: "2. Γιατί επεξεργαζόμαστε τα δεδομένα σας;",
    policy_toc_3: "3. Με ποιους μοιραζόμαστε τα δεδομένα σας;",
    policy_toc_4: "4. Πόσο καιρό κρατάμε τα δεδομένα σας;",
    policy_toc_5: "5. Τα δικαιώματά σας",
    policy_toc_6: "6. Επικοινωνία & Δικαίωμα Καταγγελίας",
    policy_s1_p: "Τα προσωπικά δεδομένα που ενδέχεται να συλλέξουμε εξαρτώνται από την αλληλεπίδρασή σας με τον ιστότοπό μας:",
    policy_s1_li1: "<strong>Κατά την εγγραφή σας στο Newsletter:</strong> Συλλέγουμε μόνο τη διεύθυνση email σας μέσω της σχετικής φόρμας.",
    policy_s1_li2: "<strong>Κατά την συμπλήρωση της Αίτησης Μέλους:</strong> Αν επιθυμείτε να γίνετε μέλος της ομάδας μας, συλλέγουμε πληροφορίες μέσω της φόρμας εγγραφής, όπως το όνομα, το επώνυμο, το email, το τμήμα και έτος σπουδών σας.",
    policy_s1_li3: "<strong>Αυτόματη συλλογή δεδομένων:</strong> Κατά την περιήγησή σας, ενδέχεται να συλλέγονται αυτόματα πληροφορίες συσκευής και χρήσης (π.χ. διεύθυνση IP, τύπος browser), τα οποία είναι απαραίτητα για την ασφάλεια και την ανάλυση της επισκεψιμότητας.",
    policy_s2_p: "Η επεξεργασία των δεδομένων σας γίνεται βάσει των παρακάτω νομικών βάσεων:",
    policy_s2_li1: "<strong>Συγκατάθεση (Άρθρο 6, παρ. 1α GDPR):</strong> Όταν εγγράφεστε στο newsletter μας, μας δίνετε τη συγκατάθεσή σας για να επεξεργαστούμε το email σας με σκοπό την ενημέρωσή σας για τις δράσεις και τα νέα μας.",
    policy_s2_li2: "<strong>Σύμβαση / Εγγραφή (Άρθρο 6, παρ. 1β GDPR):</strong> Συλλέγουμε τα δεδομένα σας στη φόρμα μελών, καθώς είναι απαραίτητα για την εγγραφή σας στην κοινότητά μας.",
    policy_s2_li3: "<strong>Έννομο Συμφέρον (Άρθρο 6, παρ. 1στ GDPR):</strong> Ενδέχεται να επεξεργαστούμε δεδομένα για την προστασία των δικαιωμάτων μας, τη διασφάλιση της ασφάλειας του ιστότοπου ή για την ανάλυση τάσεων.",
    policy_s3_p: "Δεν πουλάμε ούτε ενοικιάζουμε τα δεδομένα σας σε τρίτους. Μοιραζόμαστε τα δεδομένα σας μόνο με επιλεγμένους τρίτους παρόχους υπηρεσιών, όπως την πλατφόρμα αποστολής email Brevo, οι οποίοι δεσμεύονται με συμβάσεις να προστατεύουν τα δεδομένα σας και να τα χρησιμοποιούν αποκλειστικά για τους σκοπούς που τους υποδεικνύουμε.",
    policy_s4_p: "Διατηρούμε τα προσωπικά σας δεδομένα μόνο για όσο χρονικό διάστημα είναι απαραίτητο για την εκπλήρωση των σκοπών που αναφέρονται στην παρούσα πολιτική. Ειδικά για το newsletter, τα στοιχεία σας διατηρούνται μέχρι να διαγραφείτε (unsubscribe) ή να ανακαλέσετε τη συγκατάθεσή σας.",
    policy_s5_p: "Σύμφωνα με την ισχύουσα νομοθεσία περί προστασίας δεδομένων, έχετε τα εξής δικαιώματα:",
    policy_s5_li1: "Δικαίωμα πρόσβασης στα δεδομένα που διατηρούμε για εσάς.",
    policy_s5_li2: "Δικαίωμα διόρθωσης ανακριβών ή ελλιπών δεδομένων.",
    policy_s5_li3: "Δικαίωμα διαγραφής («δικαίωμα στη λήθη»).",
    policy_s5_li4: "Δικαίωμα περιορισμού της επεξεργασίας.",
    policy_s5_li5: "Δικαίωμα στη φορητότητα των δεδομένων σε δομημένη, κοινώς χρησιμοποιούμενη μορφή.",
    policy_s5_li6: "Δικαίωμα εναντίωσης στην επεξεργασία.",
    policy_s5_li7: "Δικαίωμα ανάκλησης της συγκατάθεσής σας ανά πάσα στιγμή (η ανάκληση δεν επηρεάζει τη νομιμότητα της επεξεργασίας που βασίστηκε στη συγκατάθεση πριν από αυτήν).",
    policy_s6_p1: "Εάν έχετε ερωτήσεις σχετικά με την παρούσα πολιτική ή επιθυμείτε να ασκήσετε τα δικαιώματά σας, παρακαλούμε επικοινωνήστε μαζί μας στο email: <strong>acmchapter@aueb.gr</strong>.",
    policy_s6_p2: "Εάν θεωρείτε ότι η προστασία των προσωπικών σας δεδομένων παραβιάζεται, έχετε το δικαίωμα να υποβάλετε καταγγελία στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα (Λεωφ. Κηφισίας 1-3, 115 23 Αθήνα | Τηλ: +30 210 6475600 | Web: <a href='http://www.dpa.gr' class='accent-link' target='_blank'>www.dpa.gr</a>)."
  },
  en: {
    nav_about: "ABOUT US",
    nav_events: "EVENTS",
    nav_actions: "ACTIONS",
    nav_contact: "CONTACT",
    nav_join: "JOIN US",
    hero_title: "ACM AUEB Student Chapter",
    hero_sub: "Dream it. Code it. Shape it.",
    about_h2: "ABOUT US",
    about_p1: "We are the official Student Chapter of the Association for Computing Machinery at the Athens University of Economics and Business!",
    about_p2: "Our goal is to create a dynamic environment for knowledge exchange and collaboration, through technological initiatives, hands-on workshops, and meaningful networking, with the aim of showcasing innovation.",
    about_p3: "If you are a student at AUEB and love Computer Science and Technology, become a member of our new, active community and follow us on our journey of innovation and knowledge.",
    about_p4: "For more information about ACM, click ",
    about_link: "here",
    events_label: "History & Commits",
    events_title: "What's been <span class='accent glow-text'>happening.</span>",
    actions_label: "Our Upcoming Events",
    actions_title: "<span class='accent glow-text'>OUR ACTIONS</span>",
    card_soon: "Coming soon...",
    card_more: "LEARN MORE<div class='link-line'></div>",
    join_h2: "JOIN US",
    join_p: "Want to become a member of the ACM AUEB Student Chapter and actively participate in our initiatives? Submit your application here!",
    join_btn: "MEMBERSHIP APPLICATION <span class='arrow'>↗</span>",
    nl_h3: "Subscribe to our Newsletter",
    nl_placeholder: "Email Address",
    nl_btn: "SUBSCRIBE",
    nl_terms_text: "I agree to the ",
    nl_terms_link: "Privacy Policy",
    nl_success: "Thank you for subscribing! Please check your email to confirm your subscription.",
    //policy//
    policy_nav_back: "BACK TO HOME",
    policy_title: "Privacy Policy & Personal Data Protection",
    policy_intro: "Welcome to the official ACM AUEB Student Chapter website. The protection of your personal data is very important to us. In this policy, we explain clearly what information we collect, how we use it, and what rights you have according to the General Data Protection Regulation (GDPR).",
    policy_toc: "Contents",
    policy_toc_1: "1. What personal data do we collect?",
    policy_toc_2: "2. Why do we process your data?",
    policy_toc_3: "3. Who do we share your data with?",
    policy_toc_4: "4. How long do we keep your data?",
    policy_toc_5: "5. Your rights",
    policy_toc_6: "6. Contact & Right to Lodge a Complaint",
    policy_s1_p: "The personal data we may collect depends on your interaction with our website:",
    policy_s1_li1: "<strong>When subscribing to our Newsletter:</strong> We only collect your email address through the respective form.",
    policy_s1_li2: "<strong>When filling out the Membership Application:</strong> If you wish to become a member of our chapter, we collect information through the registration form, such as your first name, last name, email, your department and year of study.",
    policy_s1_li3: "<strong>Automatic data collection:</strong> During your browsing, device and usage information (e.g., IP address, browser type) may be automatically collected, which is necessary for the security and analysis of website traffic.",
    policy_s2_p: "The processing of your data is based on the following legal bases:",
    policy_s2_li1: "<strong>Consent (Article 6(1)(a) GDPR):</strong> When you subscribe to our newsletter, you give us your consent to process your email in order to inform you about our actions and news.",
    policy_s2_li2: "<strong>Contract / Registration (Article 6(1)(b) GDPR):</strong> We collect your data in the membership form, as it is necessary for your registration in our community.",
    policy_s2_li3: "<strong>Legitimate Interest (Article 6(1)(f) GDPR):</strong> We may process data to protect our rights, ensure the security of the website, or analyze trends.",
    policy_s3_p: "We do not sell or rent your data to third parties. We share your data only with selected third-party service providers, such as the email delivery platform Brevo, who are contractually bound to protect your data and use it exclusively for the purposes we specify.",
    policy_s4_p: "We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy. Specifically for the newsletter, your details are retained until you unsubscribe or withdraw your consent.",
    policy_s5_p: "According to applicable data protection legislation, you have the following rights:",
    policy_s5_li1: "Right of access to the data we hold about you.",
    policy_s5_li2: "Right to rectification of inaccurate or incomplete data.",
    policy_s5_li3: "Right to erasure (\"right to be forgotten\").",
    policy_s5_li4: "Right to restriction of processing.",
    policy_s5_li5: "Right to data portability in a structured, commonly used format.",
    policy_s5_li6: "Right to object to processing.",
    policy_s5_li7: "Right to withdraw your consent at any time (withdrawal does not affect the lawfulness of processing based on consent before its withdrawal).",
    policy_s6_p1: "If you have any questions regarding this policy or wish to exercise your rights, please contact us via email at: <strong>acmchapter@aueb.gr</strong>.",
    policy_s6_p2: "If you believe that the protection of your personal data has been violated, you have the right to lodge a complaint with the Hellenic Data Protection Authority (Kifisias Ave. 1-3, 115 23 Athens | Tel: +30 210 6475600 | Web: <a href='http://www.dpa.gr' class='accent-link' target='_blank'>www.dpa.gr</a>)."
  }
};

let currentLang = localStorage.getItem('acm_lang') || 'el';

// --- MAIN INIT ---
document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitcher();
  initNavigation();
  initTimeline();     
  initStackedCards(); 
  initScrollReveal(); 
});

// --- LANGUAGE SWITCHER LOGIC ---
function initLanguageSwitcher() {
  const langBtns = document.querySelectorAll('.lang-toggle-btn');
  
  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('acm_lang', lang);
    currentLang = lang;

    // Ενημέρωση των κειμένων
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
          el.placeholder = translations[lang][key];
        } else {
          el.innerHTML = translations[lang][key];
        }
      }
    });

    // Ενημέρωση του κουμπιού (να δείχνει την άλλη γλώσσα)
    langBtns.forEach(btn => {
      btn.textContent = lang === 'el' ? 'EN' : 'EL';
    });

    // Ανανέωση του Timeline επειδή φτιάχνεται δυναμικά
    initTimeline();

    //Τρέχουμε ξανά τα animations για να εμφανιστούν τα νέα στοιχεία του Timeline
    initScrollReveal();
  }

  // Αρχική εφαρμογή γλώσσας
  applyLanguage(currentLang);

  // Όταν πατιέται το κουμπί γλώσσας
  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const newLang = currentLang === 'el' ? 'en' : 'el';
      applyLanguage(newLang);
    });
  });
}

// --- NAVIGATION & ACCESSIBILITY ---
function initNavigation() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-menu a");
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section");

  const toggleMenu = () => {
    if (!hamburger || !mobileMenu) return; 
    const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !isExpanded);
    mobileMenu.setAttribute("aria-hidden", String(isExpanded));
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  };

  if (hamburger) hamburger.addEventListener("click", toggleMenu);
  
  mobileLinks.forEach(link => {
    link.addEventListener("click", toggleMenu);
  });

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const navHeight = navbar ? navbar.offsetHeight : 80;
      if (window.scrollY >= section.offsetTop - navHeight - 150) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
}

// --- SCROLL REVEAL ---
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if (revealElements.length === 0) return;

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach((el) => revealObserver.observe(el));
}

// --- TIMELINE ---
function initTimeline() {
  const eventsEL = [
    { date: 'Νοέμβριος 2025', cmd: 'Chapter Re-Chartered', title: 'ACM Chapter Renewal', desc: 'H επανίδρυση του ACM AUEB Student Chapter, μετα απο 10 χρόνια που ήταν ανενεργό.' },
    { date: 'Μάιος 2026', cmd: 'Our First Event', title: 'Hack The Job Market', desc: 'Ένα διαδραστικό panel για τις προκλήσεις της αγοράς εργασίας και tips για τα βήματα μετά το πτυχίο, από επαγγελματίες του κλάδου της Πληροφορικής!' },
    { date: 'Οκτώβριος 2026', cmd: 'GRCPC 2026', title: 'GRCPC HOSTED AT AUEB', desc: 'Συνεργαστήκαμε με όλα τα παραρτήματα της ACM στην Ελλάδα για τη διοργάνωση του Πανελληνικού Διαγωνισμού Προγραμματισμού για Φοιτητές 2026 (GRCPC), συγκεντρώνοντας εξαιρετικές ομάδες φοιτητών που κλήθηκαν να αντιμετωπίσουν σύνθετες αλγοριθμικές προκλήσεις.' }
  ];

  const eventsEN = [
    { date: 'November 2025', cmd: 'Chapter Re-Chartered', title: 'ACM Chapter Renewal', desc: 'The re-establishment of the ACM AUEB Student Chapter, after 10 years of inactivity.' },
    { date: 'May 2026', cmd: 'Our First Event', title: 'Hack The Job Market', desc: 'An interactive panel discussing the challenges of the job market and providing tips for post-graduation steps, featuring IT industry professionals!' },
    { date: 'October 2026', cmd: 'GRCPC 2026', title: 'GRCPC HOSTED AT AUEB', desc: 'We partnered with all ACM chapters across Greece to host the Panhellenic 2026 Greek Collegiate Programming Contest (GRCPC), bringing together brilliant student teams to tackle complex algorithmic challenges.' }
  ];

  const events = currentLang === 'en' ? eventsEN : eventsEL;
  const container = document.getElementById('timeline-events');
  if (!container) return; 

  container.innerHTML = ''; 

  events.forEach((event, index) => {
    const el = document.createElement('article');
    el.className = `timeline-event reveal ${index === 0 ? 'active' : ''}`;
    el.innerHTML = `
      <div class="timeline-node"></div>
      <div class="event-content">
        <div class="event-date">${event.date}</div>
        <div class="command-box">
          <span class="command-text">git commit -m "${event.cmd}"</span>
          <div class="command-status">
            <span class="status-check">✓</span>
            <span class="status-tag">[PUSH OK]</span>
          </div>
        </div>
        <h1 class="event-title">${event.title}</h1>
        <p class="event-description">${event.desc}</p>
      </div>
    `;
    container.appendChild(el);
  });
}

// --- STACKED CARDS ---
function initStackedCards() {
  const cards = document.querySelectorAll('.stacked-card');
  if (cards.length === 0) return;

  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const indicators = document.querySelectorAll('.indicator');
  let activeIndex = 0;

  function updateCards() {
    cards.forEach((card, index) => {
      card.classList.remove('card-active', 'card-left', 'card-right');
      let position = index - activeIndex;
      if (position < -1) position += cards.length;
      if (position > 1) position -= cards.length;
      if (position === 0) {
        card.classList.add('card-active');
      } else if (position === -1) {
        card.classList.add('card-left');
      } else if (position === 1) {
        card.classList.add('card-right');
      }
    });

    indicators.forEach((ind, index) => {
      ind.classList.toggle('active', index === activeIndex);
    });
  }

  function nextCard() { activeIndex = (activeIndex + 1) % cards.length; updateCards(); }
  function prevCard() { activeIndex = (activeIndex - 1 + cards.length) % cards.length; updateCards(); }

  if (nextBtn) nextBtn.addEventListener('click', nextCard);
  if (prevBtn) prevBtn.addEventListener('click', prevCard);

  indicators.forEach((ind, index) => {
    ind.addEventListener('click', () => { activeIndex = index; updateCards(); });
  });

  let touchStartX = 0, touchEndX = 0;
  const slider = document.querySelector('.stacked-cards-container');
  
  if (slider) {
    slider.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    slider.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) nextCard(); 
      if (touchEndX - touchStartX > 50) prevCard(); 
    }, { passive: true });
  }
  updateCards(); 
}