(function () {
  var page = document.body.getAttribute("data-page") || "";

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }
  function $all(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function syncHeader() {
    var header = $("header");
    if (!header) return;
    if (window.scrollY > 8 || page !== "home") {
      header.classList.add("border-[var(--border-subtle)]");
      header.style.background = "color-mix(in srgb, var(--cyan-10) 88%, transparent)";
      header.style.backdropFilter = "blur(24px)";
    } else {
      header.style.background = "transparent";
      header.style.backdropFilter = "none";
    }
  }
  syncHeader();
  document.addEventListener("scroll", syncHeader, { passive: true });

  $all('nav[aria-label="Primary"] a').forEach(function (link) {
    var href = link.getAttribute("href") || "";
    if (page && href.indexOf(page + "/index.html") !== -1) {
      link.setAttribute("aria-current", "page");
      link.classList.add("text-[var(--text-primary)]");
    }
  });

  var menuBtn = $('button[aria-controls="mobile-nav"]');
  if (menuBtn) {
    var panel = document.createElement("div");
    panel.id = "mobile-nav";
    panel.hidden = true;
    panel.className = "border-t border-[var(--border-subtle)] bg-[var(--cyan-10)] px-5 py-6 lg:hidden";
    var nav = document.createElement("nav");
    nav.className = "flex flex-col gap-1";
    nav.setAttribute("aria-label", "Mobile");
    $all('nav[aria-label="Primary"] a').forEach(function (link) {
      var a = link.cloneNode(true);
      a.className = "rounded-[var(--br-200)] px-2 py-3 text-lg text-[var(--text-primary)]";
      a.addEventListener("click", closeMenu);
      nav.appendChild(a);
    });
    var talk = document.createElement("a");
    var existingTalk = $('a.btn.btn-primary[href*="contact"]');
    talk.href = existingTalk ? existingTalk.getAttribute("href") : "contact/index.html";
    talk.className = "btn btn-primary mt-4";
    talk.textContent = "Talk to us";
    talk.addEventListener("click", closeMenu);
    nav.appendChild(talk);
    panel.appendChild(nav);
    $("header").appendChild(panel);

    function closeMenu() {
      panel.hidden = true;
      menuBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
    menuBtn.addEventListener("click", function () {
      var open = panel.hidden;
      panel.hidden = !open;
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  var form = $("#contact-form");
  if (form) {
    var params = new URLSearchParams(location.search);
    var preset = params.get("interest") || "";
    var interest = $("#interest");
    if (preset && interest) {
      var match = $all("#interest option").some(function (option) {
        return option.value === preset;
      });
      if (match) interest.value = preset;
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if ($("[role=status]")) return;
      var note = document.createElement("p");
      note.setAttribute("role", "status");
      note.className = "text-[14px] text-[var(--accent)]";
      note.textContent =
        "Thank you. We'll connect you with the right person at Immunovus once this form is linked to the team inbox.";
      form.appendChild(note);
    });
  }

  var subnav = $('nav[aria-label="Applications on this page"]');
  if (subnav) {
    var links = $all("a[href*='#']", subnav);
    var sections = ["discovery", "medicine", "health"]
      .map(function (id) {
        return document.getElementById(id);
      })
      .filter(Boolean);
    function setActive(id) {
      links.forEach(function (link) {
        var current = (link.getAttribute("href") || "").indexOf("#" + id) !== -1;
        link.setAttribute("aria-current", current ? "location" : "false");
        if (current) {
          if (!link.querySelector("[data-active-rule]")) {
            var rule = document.createElement("span");
            rule.setAttribute("data-active-rule", "");
            rule.className = "absolute inset-x-3 bottom-1 h-px bg-[var(--accent)]";
            rule.setAttribute("aria-hidden", "true");
            link.classList.add("relative");
            link.appendChild(rule);
          }
        } else {
          var existing = link.querySelector("[data-active-rule]");
          if (existing) existing.remove();
        }
      });
    }
    if (location.hash) setActive(location.hash.slice(1));
    if ("IntersectionObserver" in window && sections.length) {
      var observer = new IntersectionObserver(
        function (entries) {
          var visible = entries
            .filter(function (entry) {
              return entry.isIntersecting;
            })
            .sort(function (a, b) {
              return b.intersectionRatio - a.intersectionRatio;
            })[0];
          if (visible && visible.target.id) setActive(visible.target.id);
        },
        { rootMargin: "-35% 0px -45% 0px", threshold: [0.15, 0.4, 0.7] },
      );
      sections.forEach(function (node) {
        observer.observe(node);
      });
    }
  }
})();
