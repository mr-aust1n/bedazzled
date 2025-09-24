// Sticky nav
export const stickyNav = () => {
  if (typeof window === "undefined") return;
  const onScroll = () => {
    const offset = window.scrollY;
    document.querySelectorAll(".header-navigation").forEach((el) => {
      if (!el) return;
      if (offset > 10) el.classList.add("sticky");
      else el.classList.remove("sticky");
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
};

// Scroll-to-top visibility
export const scrollTopActive = () => {
  if (typeof window === "undefined") return;
  const onScroll = () => {
    const offset = window.scrollY;
    document.querySelectorAll(".scroll-top").forEach((el) => {
      if (!el) return;
      if (offset > 10) el.classList.add("active-scroll-top");
      else el.classList.remove("active-scroll-top");
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
};

// WOW.js animation (client-only, robust to different export shapes)
let wowInited = false;
export const animation = async () => {
  if (typeof window === "undefined" || wowInited) return;
  try {
    const mod = await import("wowjs");
    const WOWCtor = mod.WOW || mod.default?.WOW || mod.default || mod;
    if (typeof WOWCtor === "function") {
      new WOWCtor({ live: false }).init();
      wowInited = true;
    }
  } catch {
    // ignore if wowjs is unavailable
  }
};
