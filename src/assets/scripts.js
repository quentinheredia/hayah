      /* ── Mobile menu ─────────────────────────── */
      function openMobileMenu() {
        document.getElementById("mobileMenu").classList.add("open");
        document
          .getElementById("hamburgerBtn")
          .setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
      }
      function closeMobileMenu() {
        document.getElementById("mobileMenu").classList.remove("open");
        document
          .getElementById("hamburgerBtn")
          .setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMobileMenu();
      });

      /* ── Scroll-reveal ───────────────────────── */
      const fadeEls = document.querySelectorAll(".fade-up");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              observer.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      );
      fadeEls.forEach((el) => observer.observe(el));

      /* ── Active nav link on scroll ───────────── */
      const sections = document.querySelectorAll("section[id], header[id]");
      const navLinks = document.querySelectorAll(".nav-links a");
      const scrollSpy = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              navLinks.forEach((a) => {
                a.classList.toggle(
                  "active",
                  a.getAttribute("href") === "#" + entry.target.id,
                );
              });
            }
          });
        },
        { threshold: 0.35 },
      );
      sections.forEach((s) => scrollSpy.observe(s));

      /* ── Contact form ───────────────────────── */
      document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        const btn = this.querySelector(".form-submit");
        const orig = btn.textContent;
        btn.textContent = "Message Sent! ✓";
        btn.style.background = "#2D6A4F";
        setTimeout(() => {
          btn.textContent = orig;
          btn.style.background = "";
        }, 3500);
      });
