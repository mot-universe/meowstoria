const DEFAULT_TRAILER_YOUTUBE_URL = "https://www.youtube.com/watch?v=srcEO_vhoco"; // Replace with any YouTube URL.

const header = document.querySelector(".site-header");
const progress = document.querySelector(".page-progress");
const openTrailerButtons = document.querySelectorAll("[data-open-trailer]");
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelectorAll(".main-nav a");

function onScroll() {
  const y = window.scrollY || document.documentElement.scrollTop;
  header?.classList.toggle("scrolled", y > 80);
  const h = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  if (progress) progress.style.height = `${Math.max(0, Math.min(1, y / h)) * 100}%`;

  const fromTop = y + 140;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (!section) return;
    const active = section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop;
    link.classList.toggle("active", active);
  });
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

function getYouTubeId(url) {
  if (!url) return "";

  const value = url.trim();

  // Allows plain YouTube video ID too.
  if (/^[a-zA-Z0-9_-]{11}$/.test(value)) return value;

  try {
    const parsed = new URL(value);

    // youtube.com/watch?v=VIDEO_ID
    const watchId = parsed.searchParams.get("v");
    if (watchId) return watchId;

    // youtu.be/VIDEO_ID
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.split("/").filter(Boolean)[0] || "";
    }

    // youtube.com/embed/VIDEO_ID, /shorts/VIDEO_ID, /live/VIDEO_ID
    const parts = parsed.pathname.split("/").filter(Boolean);
    const marker = parts.findIndex(part => ["embed", "shorts", "live"].includes(part));
    if (marker >= 0 && parts[marker + 1]) return parts[marker + 1];

    return "";
  } catch {
    return "";
  }
}

function toYouTubeEmbedUrl(url) {
  const id = getYouTubeId(url);
  if (!id) return "";

  const params = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    modestbranding: "1",
    playsinline: "1"
  });

  // YouTube embed can reject players without a valid web origin/referrer.
  // Do not add origin for file:// because file pages have no usable HTTP origin.
  if (window.location.origin && /^https?:\/\//.test(window.location.origin)) {
    params.set("origin", window.location.origin);
  }

  // youtube-nocookie is more reliable for privacy/referrer setups.
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

function makeFallbackLink(url) {
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener";
  link.className = "youtube-fallback-link";
  link.textContent = "Watch on YouTube";
  return link;
}

function playTrailerInline(event) {
  event.preventDefault();

  const frame = event.currentTarget;
  if (!frame) return;

  const youtubeUrl = frame.dataset.youtubeUrl || DEFAULT_TRAILER_YOUTUBE_URL;
  const embedUrl = toYouTubeEmbedUrl(youtubeUrl);

  if (!embedUrl) {
    console.warn("Invalid YouTube URL:", youtubeUrl);
    return;
  }

  frame.classList.add("is-playing");
  frame.innerHTML = "";

  const iframe = document.createElement("iframe");
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.src = embedUrl;
  iframe.title = "Meowstoria Trailer";
  iframe.frameBorder = "0";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen";
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = "strict-origin-when-cross-origin";

  frame.appendChild(iframe);
  frame.appendChild(makeFallbackLink(youtubeUrl));
}

openTrailerButtons.forEach(btn => btn.addEventListener("click", playTrailerInline));

mobileMenu?.addEventListener("click", () => {
  const open = header.classList.toggle("menu-open");
  mobileMenu.setAttribute("aria-expanded", open ? "true" : "false");
});

function setupTeamCarousel() {
  const carousel = document.querySelector(".team-carousel");
  const track = document.querySelector(".team-track");
  if (!carousel || !track) return;

  const originals = Array.from(track.children);
  if (!originals.length) return;
  originals.forEach(card => {
    card.dataset.original = "true";
    card.querySelectorAll("img").forEach(img => img.setAttribute("draggable", "false"));
  });

  // Build enough repeated content for seamless movement on very wide screens.
  for (let i = 0; i < 4; i++) {
    originals.forEach(card => {
      const clone = card.cloneNode(true);
      clone.dataset.clone = "true";
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    });
  }

  let loopWidth = 1;
  let offset = 0;
  let pausedUntil = 0;
  let dragging = false;
  let startX = 0;
  let startOffset = 0;
  let lastTime = performance.now();
  const speed = 0.026;

  function measure() {
    const firstClone = track.children[originals.length];
    loopWidth = Math.max(1, firstClone ? firstClone.offsetLeft : track.scrollWidth / 2);
    offset = wrap(offset);
    apply();
  }

  function wrap(value) {
    if (!Number.isFinite(value)) return 0;
    while (value >= loopWidth) value -= loopWidth;
    while (value < 0) value += loopWidth;
    return value;
  }

  function apply() {
    track.style.transform = `translate3d(${-offset}px,0,0)`;
  }

  function tick(now) {
    const dt = Math.min(48, now - lastTime);
    lastTime = now;
    if (!dragging && now >= pausedUntil) {
      offset = wrap(offset + dt * speed);
      apply();
    }
    requestAnimationFrame(tick);
  }

  function clientX(event) {
    return event.touches ? event.touches[0].clientX : event.clientX;
  }

  function startDrag(event) {
    dragging = true;
    carousel.classList.add("is-dragging");
    startX = clientX(event);
    startOffset = offset;
    pausedUntil = performance.now() + 999999;
    if (event.pointerId != null) carousel.setPointerCapture?.(event.pointerId);
  }

  function moveDrag(event) {
    if (!dragging) return;
    const dx = clientX(event) - startX;
    offset = wrap(startOffset - dx);
    apply();
    event.preventDefault?.();
  }

  function endDrag(event) {
    if (!dragging) return;
    dragging = false;
    carousel.classList.remove("is-dragging");
    pausedUntil = performance.now() + 950;
    if (event?.pointerId != null) carousel.releasePointerCapture?.(event.pointerId);
  }

  carousel.addEventListener("pointerdown", startDrag);
  carousel.addEventListener("pointermove", moveDrag);
  carousel.addEventListener("pointerup", endDrag);
  carousel.addEventListener("pointercancel", endDrag);
  carousel.addEventListener("pointerleave", endDrag);
  carousel.addEventListener("mouseenter", () => { pausedUntil = performance.now() + 350; });

  window.addEventListener("resize", () => requestAnimationFrame(measure), { passive: true });
  requestAnimationFrame(() => {
    measure();
    requestAnimationFrame(tick);
  });
}

setupTeamCarousel();
