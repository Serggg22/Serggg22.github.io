(() => {
  const dictionary = {
    en: {
      title: "Sergio Herrera | Network Admin Portfolio",
      nav_about: "about",
      nav_skills: "skills",
      nav_work: "work",
      nav_projects: "projects",
      nav_education: "education",
      nav_contact: "contact",
      hero_lead:
        "Network administration student focused on Cisco networking and cybersecurity. Hands-on with Cisco Packet Tracer, Windows Server and Active Directory.",
      hero_btn1: "View my projects",
      hero_btn2: "Get in touch",
      c_about: "// about",
      h_about: "About",
      about_p1:
        "I’m a second-year ASIR student in the Madrid region, focused on networking and interested in cybersecurity. I’m currently preparing for the Cisco CCNA certification and have a solid base in Windows Server and Linux administration.",
      about_p2:
        "I’m resourceful and analytical: when something fails, I try to understand why until I find the fix.",
      about_p3:
        "I’m looking for an environment where I can keep growing in networking and take my first steps in IT security.",
      mascot_alt:
        "ASCII drawing of Sergio's mascot: a cartoon head with spiky brown hair and big round eyes",
      c_skills: "// skills",
      h_skills: "Skills",
      sk_net: "Networking",
      sk_sys: "Systems",
      sk_sec: "Cybersecurity",
      sk_db: "Databases & Hardware",
      net1: "Cisco routers and switches",
      net4: "Static routing, RIP, OSPF",
      net7: "SSH remote access",
      sys4: "Virtual machines",
      sec1: "Cisco ASA firewalls",
      sec3: "Man-in-the-Middle labs",
      sec4: "Cryptography basics",
      db3: "PC assembly and repair",
      c_work: "// work experience",
      h_work: "Work",
      job_title: "IT Support Technician (intern), Academia Butarque",
      job_desc:
        "Work placement for the SMR intermediate degree, in IT support.",
      c_lab: "// lab tools",
      cli: `Router# show tools brief
Tool                  Status    Level
Cisco Packet Tracer   <span class="up">up/up</span>     daily
Windows Server        <span class="up">up/up</span>     lab
Active Directory      <span class="up">up/up</span>     lab
Wireshark             up/down   learning`,
      c_proj: "// projects",
      h_proj: "Projects",
      proj_lead:
        "Drag the disks around. Click one to open or download the project.",
      pile_alt: "Project floppy disks",
      open_fmt: "Open {n} on GitHub",
      dl_fmt: "Download {n}",
      c_edu: "// education",
      h_edu: "Education",
      c_gen: "// general education",
      asir_t: "ASIR, Higher Vocational Degree",
      asir_p:
        "Administración de Sistemas Informáticos en Red. Digitech FP. In progress.",
      asir_y: "2025 – now",
      smr_t: "SMR, Intermediate Vocational Degree",
      c_badges: "// badges, Cisco Networking Academy",
      badge2: "Introduction to Cybersecurity",
      c_langs: "// languages",
      lang_en: "English B2",
      c_contact: "// contact",
      h_contact: "Contact",
      contact_lead:
        "Open to internships and junior network and systems roles, with full availability. The fastest way to reach me is email.",
    },
    es: {
      title: "Sergio Herrera | Portfolio de administración de redes",
      nav_about: "sobre mí",
      nav_skills: "habilidades",
      nav_work: "experiencia",
      nav_projects: "proyectos",
      nav_education: "formación",
      nav_contact: "contacto",
      hero_lead:
        "Estudiante de administración de redes orientado a las redes Cisco y la ciberseguridad. Con experiencia práctica en Cisco Packet Tracer, Windows Server y Active Directory.",
      hero_btn1: "Ver mis proyectos",
      hero_btn2: "Contacto",
      c_about: "// sobre mí",
      h_about: "Sobre mí",
      about_p1:
        "Soy estudiante de 2.º de ASIR en la Comunidad de Madrid, orientado a las redes e interesado en la ciberseguridad. Actualmente preparo la certificación CCNA de Cisco y cuento con una base sólida en administración de sistemas Windows Server y Linux.",
      about_p2:
        "Soy una persona resolutiva y analítica: cuando algo falla, intento entender por qué hasta dar con la solución.",
      about_p3:
        "Busco un entorno donde seguir creciendo en redes y dar mis primeros pasos en la seguridad informática.",
      mascot_alt:
        "Dibujo en ASCII de la mascota de Sergio: una cabeza de dibujos animados con pelo castaño de punta y ojos grandes y redondos",
      c_skills: "// habilidades",
      h_skills: "Habilidades",
      sk_net: "Redes",
      sk_sys: "Sistemas",
      sk_sec: "Ciberseguridad",
      sk_db: "Bases de datos y hardware",
      net1: "Routers y switches Cisco",
      net4: "Enrutamiento estático, RIP, OSPF",
      net7: "Acceso remoto por SSH",
      sys4: "Máquinas virtuales",
      sec1: "Firewalls Cisco ASA",
      sec3: "Prácticas de Man-in-the-Middle",
      sec4: "Fundamentos de criptografía",
      db3: "Montaje y reparación de equipos",
      c_work: "// experiencia laboral",
      h_work: "Experiencia",
      job_title:
        "Técnico de soporte informático (prácticas), Academia Butarque",
      job_desc:
        "Prácticas en empresa del Grado Medio (SMR), en soporte informático.",
      c_lab: "// herramientas de laboratorio",
      cli: `Router# show tools brief
Herramienta           Estado    Nivel
Cisco Packet Tracer   <span class="up">up/up</span>     diario
Windows Server        <span class="up">up/up</span>     lab
Active Directory      <span class="up">up/up</span>     lab
Wireshark             up/down   aprendiendo`,
      c_proj: "// proyectos",
      h_proj: "Proyectos",
      proj_lead:
        "Arrastra los disquetes. Haz clic en uno para abrir o descargar el proyecto.",
      pile_alt: "Disquetes de proyectos",
      open_fmt: "Abrir {n} en GitHub",
      dl_fmt: "Descargar {n}",
      c_edu: "// formación",
      h_edu: "Formación",
      c_gen: "// formación reglada",
      asir_t: "ASIR, Grado Superior",
      asir_p:
        "Administración de Sistemas Informáticos en Red. Digitech FP. En curso.",
      asir_y: "2025 – actualidad",
      smr_t: "SMR, Grado Medio",
      c_badges: "// insignias, Cisco Networking Academy",
      badge2: "Introducción a la Ciberseguridad",
      c_langs: "// idiomas",
      lang_en: "Inglés B2",
      c_contact: "// contacto",
      h_contact: "Contacto",
      contact_lead:
        "Abierto a prácticas y puestos junior de redes y sistemas, con disponibilidad total. La forma más rápida de contactarme es el correo electrónico.",
    },
  };

  const projects = [
    {
      name: {
        en: "Final web project 1º ASIR",
        es: "Proyecto web final 1º ASIR",
      },
      desc: {
        en: "Preview of a personal portfolio site in HTML, CSS and JavaScript, with a photo gallery and a feedback page.",
        es: "Vista previa de un portfolio personal en HTML, CSS y JavaScript, con una galería de fotos y una página de feedback.",
      },
      href: "https://github.com/Serggg22/Pr-ctica-LM",
      color: "#c792ea",
    },
    {
      name: { en: "OCULAR", es: "OCULAR" },
      desc: {
        en: "Gallery website I built for a design student, showing her projects.",
        es: "Página web de galería que hice para una estudiante de diseño, donde se muestran sus proyectos.",
      },
      href: "https://github.com/Serggg22/ocular",
      color: "#4ee08a",
    },
    {
      name: { en: "VPN Project", es: "Proyecto VPN" },
      desc: {
        en: "Cisco ASA VPN exercise built in Packet Tracer.",
        es: "Ejercicio de VPN con Cisco ASA hecho en Packet Tracer.",
      },
      file: "vpn-project.zip",
      url: "downloads/vpn-project.zip",
      color: "#5aa9ff",
    },
    {
      name: { en: "Networking Project", es: "Proyecto de redes" },
      desc: {
        en: "Network for a 100-employee company: VLANs, VLSM, routing, DHCP and voice in Packet Tracer.",
        es: "Red para una empresa de 100 empleados: VLAN, VLSM, enrutamiento, DHCP y voz en Packet Tracer.",
      },
      file: "networking-project.zip",
      url: "downloads/networking-project.zip",
      color: "#ffb454",
    },
  ];

  const FULL_NAME = "SERGIO HERRERA";
  const DISK_SIZE = 140;
  const FRICTION = 2.2;
  const WALL_BOUNCE = 0.75;
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const chooser = document.getElementById("lang");
  const pile = document.getElementById("pile");
  const projectList = document.getElementById("plist");
  const nav = document.getElementById("nav");

  let currentLang = "en";
  let typingStarted = false;

  function readStoredLang() {
    try {
      return localStorage.getItem("lang");
    } catch (error) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      localStorage.setItem("lang", lang);
    } catch (error) {}
  }

  function t(key) {
    return dictionary[currentLang][key];
  }

  function projectLabel(project) {
    const template = project.href ? t("open_fmt") : t("dl_fmt");
    return template.replace("{n}", project.name[currentLang]);
  }

  function applyLanguage(lang) {
    currentLang = lang;
    const strings = dictionary[lang];
    document.documentElement.lang = lang;
    document.title = strings.title;
    document.querySelectorAll("[data-i]").forEach((el) => {
      el.textContent = strings[el.dataset.i];
    });
    document.querySelectorAll("[data-ih]").forEach((el) => {
      el.innerHTML = strings[el.dataset.ih];
    });
    document.querySelectorAll("[data-i-aria]").forEach((el) => {
      el.setAttribute("aria-label", strings[el.dataset.iAria]);
    });
    document.querySelectorAll(".switch button").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    });
    refreshProjects();
  }

  function startTyping() {
    if (typingStarted) return;
    typingStarted = true;
    const target = document.getElementById("type");
    if (reduceMotion) {
      target.textContent = FULL_NAME;
      return;
    }
    let count = 0;
    (function tick() {
      target.textContent = FULL_NAME.slice(0, count++);
      if (count <= FULL_NAME.length) setTimeout(tick, 90);
    })();
  }

  function setPageInert(value) {
    document.querySelectorAll("nav, main, footer").forEach((el) => {
      el.inert = value;
    });
  }

  function closeChooser() {
    chooser.classList.add("done");
    chooser.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("locked");
    setPageInert(false);
    startTyping();
  }

  chooser.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.lang);
      storeLang(button.dataset.lang);
      closeChooser();
    });
  });

  document.querySelectorAll(".switch button").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.lang);
      storeLang(button.dataset.lang);
    });
  });

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        document.querySelectorAll(".links a").forEach((link) => {
          link.classList.toggle(
            "on",
            link.getAttribute("href") === "#" + entry.target.id,
          );
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  document
    .querySelectorAll("section")
    .forEach((section) => sectionObserver.observe(section));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );
  document
    .querySelectorAll(".rv")
    .forEach((element) => revealObserver.observe(element));

  let navTimer;
  addEventListener(
    "scroll",
    () => {
      if (scrollY > 80 && innerWidth > 700) nav.classList.add("hide");
      clearTimeout(navTimer);
      navTimer = setTimeout(() => nav.classList.remove("hide"), 250);
    },
    { passive: true },
  );

  const disks = [];
  let topZ = 1;
  let frameId = 0;
  let lastTime = 0;

  function bounds() {
    return {
      x: Math.max(pile.clientWidth - DISK_SIZE, 0),
      y: Math.max(pile.clientHeight - DISK_SIZE, 0),
    };
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function render(disk) {
    disk.el.style.left = disk.x + "px";
    disk.el.style.top = disk.y + "px";
    disk.el.style.transform = "rotate(" + disk.angle.toFixed(1) + "deg)";
  }

  function openLink(href) {
    const link = document.createElement("a");
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  function downloadFile(file, url) {
    const link = document.createElement("a");
    link.href = url;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  function openProject(project) {
    if (project.href) openLink(project.href);
    else downloadFile(project.file, project.url);
  }

  function step(now) {
    const dt = Math.min((now - lastTime) / 1000, 0.033);
    const limit = bounds();
    const decay = Math.exp(-FRICTION * dt);
    let moving = false;
    lastTime = now;

    disks.forEach((disk) => {
      if (disk.held || disk.asleep) return;
      disk.vx *= decay;
      disk.vy *= decay;
      disk.spin *= Math.exp(-1.6 * dt);
      disk.x += disk.vx * dt;
      disk.y += disk.vy * dt;
      disk.angle += disk.spin * dt;

      if (disk.x < 0) {
        disk.x = 0;
        disk.vx = Math.abs(disk.vx) * WALL_BOUNCE;
        disk.spin = -disk.spin * 0.6;
      } else if (disk.x > limit.x) {
        disk.x = limit.x;
        disk.vx = -Math.abs(disk.vx) * WALL_BOUNCE;
        disk.spin = -disk.spin * 0.6;
      }
      if (disk.y < 0) {
        disk.y = 0;
        disk.vy = Math.abs(disk.vy) * WALL_BOUNCE;
        disk.spin = -disk.spin * 0.6;
      } else if (disk.y > limit.y) {
        disk.y = limit.y;
        disk.vy = -Math.abs(disk.vy) * WALL_BOUNCE;
        disk.spin = -disk.spin * 0.6;
      }

      if (Math.hypot(disk.vx, disk.vy) < 8 && Math.abs(disk.spin) < 6) {
        disk.vx = disk.vy = disk.spin = 0;
        disk.asleep = true;
      }
      render(disk);
      if (!disk.asleep) moving = true;
    });

    frameId = moving ? requestAnimationFrame(step) : 0;
  }

  function wake() {
    if (frameId) return;
    lastTime = performance.now();
    frameId = requestAnimationFrame(step);
  }

  function createDisk(project, index) {
    const el = document.createElement("div");
    el.className = "fl";
    el.tabIndex = 0;
    el.setAttribute("role", "button");
    el.style.setProperty("--c", project.color);
    el.innerHTML = '<i class="sh"></i><span class="lbl"></span>';

    const limit = bounds();
    const offset = (index - (projects.length - 1) / 2) * 75;
    const disk = {
      el,
      project,
      label: el.querySelector(".lbl"),
      x: clamp(limit.x / 2 + offset + Math.random() * 30 - 15, 0, limit.x),
      y: clamp(limit.y / 2 + Math.random() * 60 - 30, 0, limit.y),
      vx: 0,
      vy: 0,
      angle: Math.random() * 16 - 8,
      spin: 0,
      held: false,
      asleep: true,
    };
    render(disk);

    let startX = 0;
    let startY = 0;
    let originX = 0;
    let originY = 0;
    let dragged = false;
    let samples = [];

    el.addEventListener("pointerdown", (event) => {
      el.setPointerCapture(event.pointerId);
      startX = event.clientX;
      startY = event.clientY;
      originX = disk.x;
      originY = disk.y;
      dragged = false;
      samples = [];
      disk.held = true;
      disk.vx = disk.vy = disk.spin = 0;
      el.style.zIndex = ++topZ;
    });

    el.addEventListener("pointermove", (event) => {
      if (!el.hasPointerCapture(event.pointerId)) return;
      const dx = event.clientX - startX;
      const dy = event.clientY - startY;
      const limit = bounds();
      if (!dragged && Math.hypot(dx, dy) > 5) {
        dragged = true;
        el.classList.add("drag");
        disk.asleep = false;
      }
      if (dragged) {
        disk.x = clamp(originX + dx, 0, limit.x);
        disk.y = clamp(originY + dy, 0, limit.y);
        render(disk);
        samples.push({ time: performance.now(), x: disk.x, y: disk.y });
        if (samples.length > 6) samples.shift();
      }
    });

    function release(event, cancelled) {
      if (!el.hasPointerCapture(event.pointerId)) return;
      el.classList.remove("drag");
      disk.held = false;

      if (!dragged) {
        if (!cancelled) openProject(project);
        if (!disk.asleep) wake();
        return;
      }

      const now = performance.now();
      const recent = samples.filter((sample) => now - sample.time < 90);
      let vx = 0;
      let vy = 0;
      if (recent.length > 1) {
        const first = recent[0];
        const last = recent[recent.length - 1];
        const seconds = (last.time - first.time) / 1000;
        if (seconds > 0) {
          vx = (last.x - first.x) / seconds;
          vy = (last.y - first.y) / seconds;
        }
      }
      const speed = Math.hypot(vx, vy);
      if (speed > 3000) {
        vx *= 3000 / speed;
        vy *= 3000 / speed;
      }
      if (reduceMotion) {
        disk.asleep = true;
        return;
      }
      disk.vx = vx;
      disk.vy = vy;
      disk.spin = (vx - vy) * 0.08;
      wake();
    }

    el.addEventListener("pointerup", (event) => release(event, false));
    el.addEventListener("pointercancel", (event) => release(event, true));
    el.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProject(project);
      }
    });

    pile.appendChild(el);
    disks.push(disk);

    const item = document.createElement("li");
    const button = document.createElement("a");
    const description = document.createElement("span");
    button.className = "btn";
    button.href = "#projects";
    description.className = "pd";
    button.addEventListener("click", (event) => {
      event.preventDefault();
      openProject(project);
    });
    item.append(button, description);
    projectList.appendChild(item);

    disk.button = button;
    disk.description = description;
  }

  function refreshProjects() {
    disks.forEach((disk) => {
      const label = projectLabel(disk.project);
      disk.label.textContent = disk.project.name[currentLang];
      disk.el.setAttribute("aria-label", label);
      disk.button.textContent = label;
      disk.description.textContent = disk.project.desc[currentLang];
    });
  }

  projects.forEach(createDisk);

  addEventListener("resize", () => {
    const limit = bounds();
    disks.forEach((disk) => {
      disk.x = clamp(disk.x, 0, limit.x);
      disk.y = clamp(disk.y, 0, limit.y);
      if (!reduceMotion) disk.asleep = false;
    });
    wake();
  });

  if (
    matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !reduceMotion
  ) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const glow = document.createElement("canvas");
    const color = "78,224,138";
    const LIFE = 1800;
    let width = 0;
    let height = 0;
    let lastX = null;
    let lastY = null;
    let trailFrame = 0;
    let marks = [];

    canvas.setAttribute("aria-hidden", "true");
    canvas.style.cssText =
      "position:fixed;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:49;mix-blend-mode:screen";
    document.body.appendChild(canvas);

    glow.width = glow.height = 112;
    const glowCtx = glow.getContext("2d");
    const gradient = glowCtx.createRadialGradient(56, 56, 0, 56, 56, 56);
    gradient.addColorStop(0, "rgba(" + color + ",.065)");
    gradient.addColorStop(1, "rgba(" + color + ",0)");
    glowCtx.fillStyle = gradient;
    glowCtx.fillRect(0, 0, 112, 112);

    function resizeCanvas() {
      width = canvas.width = innerWidth;
      height = canvas.height = innerHeight;
    }
    resizeCanvas();
    addEventListener("resize", resizeCanvas);

    function addGlow(x, y, strength, time) {
      marks.push({ time, x, y, strength });
    }

    function addStreaks(x, y, time) {
      for (let i = 0; i < 3; i++) {
        if (Math.random() > 0.6) continue;
        const length = 30 + Math.random() * 90;
        marks.push({
          time,
          x: x - length / 2 + (Math.random() * 30 - 15),
          y: Math.round(y + (Math.random() * 90 - 45)),
          w: length,
          h: Math.random() < 0.3 ? 2 : 1,
          alpha: 0.07 + Math.random() * 0.09,
        });
      }
    }

    function drawTrail(now) {
      ctx.clearRect(0, 0, width, height);
      const alive = [];
      marks.forEach((mark) => {
        const age = now - mark.time;
        if (age >= LIFE) return;
        const fade = Math.pow(1 - age / LIFE, 2);
        alive.push(mark);
        if (mark.w) {
          ctx.globalAlpha = 1;
          ctx.fillStyle =
            "rgba(" + color + "," + (mark.alpha * fade).toFixed(3) + ")";
          ctx.fillRect(mark.x, mark.y, mark.w, mark.h);
        } else {
          ctx.globalAlpha = Math.min(1, mark.strength) * fade;
          ctx.drawImage(glow, mark.x - 56, mark.y - 56);
        }
      });
      ctx.globalAlpha = 1;
      marks = alive;
      trailFrame = marks.length ? requestAnimationFrame(drawTrail) : 0;
    }

    addEventListener(
      "pointermove",
      (event) => {
        if (event.pointerType === "touch") return;
        const x = event.clientX;
        const y = event.clientY;
        const time = performance.now();
        if (lastX !== null) {
          const distance = Math.hypot(x - lastX, y - lastY);
          const steps = Math.max(1, Math.ceil(distance / 16));
          for (let i = 1; i <= steps; i++) {
            addGlow(
              lastX + ((x - lastX) * i) / steps,
              lastY + ((y - lastY) * i) / steps,
              Math.min(1, 0.4 + distance / 80),
              time,
            );
          }
        } else {
          addGlow(x, y, 0.6, time);
        }
        addStreaks(x, y, time);
        lastX = x;
        lastY = y;
        if (!trailFrame) trailFrame = requestAnimationFrame(drawTrail);
      },
      { passive: true },
    );

    document.documentElement.addEventListener("mouseleave", () => {
      lastX = null;
    });
  }

  const stored = readStoredLang();
  if (stored && dictionary[stored]) {
    applyLanguage(stored);
    closeChooser();
  } else {
    applyLanguage("en");
    document.documentElement.classList.add("locked");
    setPageInert(true);
    chooser.querySelector("button").focus();
  }
})();
