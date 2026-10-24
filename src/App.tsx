import React, { useState, useEffect, useCallback } from "react";
import {
  FOLIO_PLATES,
  HERO_PLATES,
  PORTRAIT_IMAGE,
  DEFAULT_LIGHTBOX_IMAGE,
  MASTHEAD_COMMISSIONS,
  PlateItem,
} from "./data/folioData";

type FilterCategory =
  | "all"
  | "church"
  | "studio"
  | "travel"
  | "adventure"
  | "events";

export default function App() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [selectedPlateId, setSelectedPlateId] = useState<string | null>(null);
  const [useMasterPlateView, setUseMasterPlateView] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [commissionModalOpen, setCommissionModalOpen] =
    useState<boolean>(false);
  const [commissionSubject, setCommissionSubject] = useState<string>(
    "Q1–Q2 Field Commission",
  );
  const [activeMasthead, setActiveMasthead] = useState<
    (typeof MASTHEAD_COMMISSIONS)[0] | null
  >(null);

  // Commission form state
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [projectTerritory, setProjectTerritory] = useState(
    "Nairobi / Great Rift Valley",
  );
  const [projectNotes, setProjectNotes] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
  }, []);

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 3500);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const copyToClipboard = useCallback(
    (text: string, label: string) => {
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(text)
          .then(() => {
            showToast(`Copied ${label} to clipboard: ${text}`);
          })
          .catch(() => {
            showToast(`Direct link: ${text}`);
          });
      } else {
        showToast(`Selected: ${text}`);
      }
    },
    [showToast],
  );

  const filteredPlates = FOLIO_PLATES.filter((plate) =>
    activeCategory === "all" ? true : plate.categoryKey === activeCategory,
  );

  const selectedPlate: PlateItem | undefined = selectedPlateId
    ? FOLIO_PLATES.find((p) => p.id === selectedPlateId)
    : undefined;

  const openLightbox = (id: string) => {
    setSelectedPlateId(id);
    setUseMasterPlateView(false);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedPlateId(null);
    document.body.style.overflow = "";
  }, []);

  const navigateLightbox = useCallback(
    (direction: "prev" | "next") => {
      if (!selectedPlateId) return;
      const currentIndex = FOLIO_PLATES.findIndex(
        (p) => p.id === selectedPlateId,
      );
      if (currentIndex === -1) return;
      const nextIndex =
        direction === "next"
          ? (currentIndex + 1) % FOLIO_PLATES.length
          : (currentIndex - 1 + FOLIO_PLATES.length) % FOLIO_PLATES.length;
      setSelectedPlateId(FOLIO_PLATES[nextIndex].id);
      setUseMasterPlateView(false);
    },
    [selectedPlateId],
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedPlateId) closeLightbox();
        if (commissionModalOpen) setCommissionModalOpen(false);
      } else if (selectedPlateId && e.key === "ArrowRight") {
        navigateLightbox("next");
      } else if (selectedPlateId && e.key === "ArrowLeft") {
        navigateLightbox("prev");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPlateId, commissionModalOpen, closeLightbox, navigateLightbox]);

  const handleInquirePlate = (plate: PlateItem) => {
    closeLightbox();
    setCommissionSubject(
      `Archival Print Inquiry: ${plate.plateNumber} — "${plate.title}"`,
    );
    setCommissionModalOpen(true);
    showToast(
      `Plate Inquired: "${plate.title}". Archival folio details ready for dispatch.`,
    );
  };

  const handleSupportPlate = (plate: PlateItem) => {
    closeLightbox();
    setCommissionSubject(
      `Support This Work: ${plate.plateNumber} — "${plate.title}"`,
    );
    setCommissionModalOpen(true);
  };

  const handleOpenCommissionModal = (subject = "Q1–Q2 Field Commission") => {
    setCommissionSubject(subject);
    setCommissionModalOpen(true);
  };

  const handleCommissionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCommissionModalOpen(false);
    showToast(
      `Dispatch logged for ${clientName || "Client"} (${commissionSubject}). 4-hour SLA confirmation sent.`,
    );
    setClientName("");
    setClientEmail("");
    setProjectNotes("");
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-background font-sans text-on-surface antialiased selection:bg-moss-surface selection:text-secondary-fixed relative overflow-x-hidden min-h-screen">
      {/* Ambient Floating Botanical Particles Container (Spore / Leaf drift) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
      >
        <div
          className="absolute w-2 h-2 rounded-full bg-botanical-gold/25 blur-[1px]"
          style={{
            left: "12%",
            bottom: "-20px",
            animation: "botanical-drift 22s linear infinite 1s",
          }}
        />
        <div
          className="absolute w-2.5 h-1.5 rounded-full bg-terracotta/20 blur-[0.5px]"
          style={{
            left: "48%",
            bottom: "-30px",
            animation: "botanical-drift 26s linear infinite 5s",
          }}
        />
        <div
          className="absolute w-1.5 h-3 rounded-full bg-moss-tint/30 blur-[0.5px]"
          style={{
            left: "78%",
            bottom: "-20px",
            animation: "botanical-drift 19s linear infinite 3s",
          }}
        />
        <div
          className="absolute w-2 h-2 rounded-full bg-ochre/25 blur-[1px]"
          style={{
            left: "88%",
            bottom: "-40px",
            animation: "botanical-drift 24s linear infinite 9s",
          }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D1F17]/92 backdrop-blur-md border-b border-white/[0.08] transition-all">
        {/* Subtle Header Botanical Silhouette Filigree */}
        <div className="absolute top-0 right-10 pointer-events-none hidden md:block opacity-20">
          <svg
            className="anim-vine-sway-delayed"
            fill="none"
            height="60"
            viewBox="0 0 160 60"
            width="160"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 C40,15 90,8 140,45"
              stroke="#C49A45"
              strokeDasharray="2 3"
              strokeWidth="1.2"
            />
            <circle cx="55" cy="18" fill="#C49A45" r="2" />
            <path
              d="M55,18 C65,12 70,22 80,19 C75,27 68,26 55,18 Z"
              fill="#C49A45"
            />
            <circle cx="110" cy="28" fill="#a6cfc3" r="2.5" />
            <path
              d="M110,28 C122,22 130,34 138,32 C132,40 120,38 110,28 Z"
              fill="#a6cfc3"
            />
          </svg>
        </div>

        <div className="h-20 w-full px-margin-mobile lg:px-margin flex items-center justify-between">
          <div className="flex items-baseline gap-4">
            <a
              className="text-[17px] font-semibold text-surface tracking-[-0.02em] hover:text-secondary-fixed transition-colors flex items-center gap-2 group whitespace-nowrap shrink-0"
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span className="w-2 h-2 rounded-full bg-ochre group-hover:scale-125 transition-transform" />
              naledi
            </a>
            <span className="text-[11px] font-medium tracking-ultra uppercase text-surface/50 hidden sm:inline border-l border-white/10 pl-3 whitespace-nowrap">
              Botanical Monograph · Vol. 24
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-[12px] uppercase tracking-ultra font-medium">
            <a
              aria-current="page"
              className="text-secondary-fixed font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
              href="#gallery-section"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("gallery-section");
              }}
            >
              <span className="w-1 h-1 rounded-full bg-secondary-fixed" />
              Portfolio
            </a>
            <a
              className="text-surface/70 hover:text-surface transition-colors whitespace-nowrap shrink-0"
              href="#story-section"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("story-section");
              }}
            >
              Philosophy &amp; Ethos
            </a>
            <a
              className="text-surface/70 hover:text-surface transition-colors whitespace-nowrap shrink-0"
              href="#gallery-section"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("gallery-section");
              }}
            >
              Plates &amp; Herbarium
            </a>
            <a
              className="text-surface/70 hover:text-surface transition-colors whitespace-nowrap shrink-0"
              href="#directory-hub"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("directory-hub");
              }}
            >
              Index &amp; Rolodex
            </a>
          </nav>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="https://wa.me/254769768474"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-ultra uppercase font-semibold px-4 py-2 text-[#0D1F17] bg-secondary-fixed hover:bg-ochre hover:text-white transition-all rounded-[2px] shadow-sm flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[14px]">eco</span>
              <span>book here</span>
            </a>
            {/* <button
              type="button"
              aria-label="Direct transmission"
              onClick={() => scrollToSection("directory-hub")}
              className="w-8 h-8 rounded-full border border-white/20 text-surface/80 hover:text-surface hover:border-ochre flex items-center justify-center transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">
                north_east
              </span>
            </button> */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="top" className="w-full pt-20 bg-background min-h-screen">
        <div className="flex flex-col w-full relative">
          {/* Sleek Minimalist Meta Strip with Earthy Botanical Accents */}
          <section className="w-full border-b border-earth px-margin-mobile lg:px-margin py-3.5 flex flex-wrap items-center justify-between gap-3 text-[11px] tracking-ultra uppercase text-on-surface-variant font-medium bg-parchment-low/60">
            <div className="flex items-center gap-3 text-primary">
              <span className="w-2 h-2 rounded-full bg-terracotta anim-leaf-pulse" />
              <span className="tracking-widest font-semibold">
                Nairobi &amp; Great Rift Valley Monograph Repositories
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-on-surface-variant">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-terracotta">
                  filter_vintage
                </span>{" "}
                Coordinates 1° 17&apos; S, 36° 49&apos; E · 1,795m Alt
              </span>
              <span className="text-primary font-semibold px-2 py-0.5 bg-parchment-mid/70 rounded-[2px] border border-earth">
                Live Q1—Q2 Field Schedules Open
              </span>
            </div>
            <div className="text-primary hover:text-terracotta transition-colors inline-flex items-center gap-1.5 font-semibold group cursor-pointer">
              est 2021
            </div>

          </section>

          {/* Hero Section: Clarity Geometric Typographic Cover + Living Botanical Vines */}
          <section className="w-full px-margin-mobile lg:px-margin pt-12 lg:pt-16 pb-20 border-b border-earth relative overflow-hidden bg-gradient-to-b from-[#FAF7F0] to-[#F5F2EB]">
            {/* Corner Botanical Flourish (Top-Left) */}
            <div className="absolute -top-4 -left-4 pointer-events-none opacity-30 sm:opacity-45 z-0">
              <svg
                className="anim-vine-sway"
                fill="none"
                height="180"
                viewBox="0 0 220 220"
                width="220"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10,0 C30,70 95,90 140,160 C170,205 190,215 210,218"
                  stroke="#1F382B"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />
                <path
                  d="M50,45 C75,30 92,42 90,62 C70,72 58,60 50,45 Z"
                  fill="#1F382B"
                  opacity="0.8"
                />
                <path
                  d="M90,85 C120,70 135,88 130,105 C108,115 98,102 90,85 Z"
                  fill="#C49A45"
                  opacity="0.85"
                />
                <path
                  d="M130,135 C165,120 180,140 172,158 C150,165 140,150 130,135 Z"
                  fill="#1F382B"
                  opacity="0.75"
                />
                <path
                  d="M60,55 C80,75 100,60 95,45"
                  stroke="#C86D51"
                  strokeLinecap="round"
                  strokeWidth="1.2"
                />
                <path
                  d="M110,100 C135,125 155,105 150,90"
                  stroke="#C49A45"
                  strokeLinecap="round"
                  strokeWidth="1.2"
                />
              </svg>
            </div>

            {/* Decorative Botanical Branch in Section Margins (Top-Right) */}
            <div className="absolute -top-6 -right-6 pointer-events-none opacity-25 sm:opacity-35 z-0">
              <svg
                className="anim-vine-sway-delayed"
                fill="none"
                height="210"
                viewBox="0 0 230 230"
                width="230"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M220,10 C160,35 130,100 70,145 C25,180 10,210 5,225"
                  stroke="#1F382B"
                  strokeLinecap="round"
                  strokeWidth="2.2"
                />
                <path
                  d="M170,40 C145,25 130,40 135,58 C155,65 168,52 170,40 Z"
                  fill="#1F382B"
                />
                <path
                  d="M125,85 C100,70 85,88 92,105 C112,112 122,100 125,85 Z"
                  fill="#C86D51"
                  opacity="0.85"
                />
                <path
                  d="M80,135 C55,120 40,140 48,158 C68,165 78,150 80,135 Z"
                  fill="#1F382B"
                  opacity="0.7"
                />
                <circle cx="150" cy="50" fill="#D4AF37" r="3" />
                <circle cx="108" cy="95" fill="#D4AF37" r="2.5" />
              </svg>
            </div>

            <div className="max-w-7xl mx-auto space-y-12 relative z-10">
              {/* Clean Asymmetric Title Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-parchment-low rounded-[2px] border border-earth">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                    <p className="text-[11px] uppercase tracking-ultra font-semibold text-terracotta">
                      Equatorial Monograph &amp; Botanical Photographic
                      Direction
                    </p>
                  </div>
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tightest text-primary leading-[1.04]">
                    Sound, Speed &amp; Silence.
                  </h1>
                </div>
                <div className="lg:col-span-4 space-y-5 lg:pb-2">
                  <p className="text-[14px] leading-relaxed text-on-surface-variant font-normal">
                    Autonomous visual storyteller documenting high-decibel arena
                    tours, high-fidelity studio sessions, and extreme equatorial
                    motorsport expeditions across East Africa&apos;s volcanic
                    rift basins.
                  </p>
                  <div className="flex items-center gap-4 pt-1">
                    <a
                      className="px-5 py-2.5 bg-moss-dark text-surface hover:bg-moss-deep transition-all text-[11px] tracking-ultra uppercase font-semibold rounded-[2px] shadow-sm flex items-center gap-2 group whitespace-nowrap"
                      href="#gallery-section"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("gallery-section");
                      }}
                    >
                      <span>Explore Plates (12)</span>
                      <span className="material-symbols-outlined text-[14px] text-ochre group-hover:rotate-45 transition-transform">
                        spa
                      </span>
                    </a>
                    <button
                      type="button"
                      className="text-[11px] tracking-ultra uppercase font-semibold text-primary hover:text-terracotta underline underline-offset-4 transition-colors cursor-pointer whitespace-nowrap"
                      onClick={() => scrollToSection("directory-hub")}
                    >
                      Direct Line →
                    </button>
                  </div>
                </div>
              </div>

              {/* Modern Minimalist Feature Spread with Earthy Moss Tones */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
                {/* Primary Anchor Plate */}
                <div
                  onClick={() => openLightbox(HERO_PLATES.primary.plateId)}
                  className="lg:col-span-8 group relative bg-moss-deep overflow-hidden min-h-[440px] lg:min-h-[580px] flex flex-col justify-between rounded-[2px] border border-[#1F382B]/30 cursor-pointer"
                >
                  <div className="absolute inset-0 z-0">
                    <img
                      className="w-full h-full object-cover opacity-85 group-hover:scale-[1.015] transition-transform duration-700 ease-out"
                      alt={HERO_PLATES.primary.alt}
                      src={HERO_PLATES.primary.imageUrl}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F17] via-[#0D1F17]/35 to-transparent" />
                  </div>
                  <div className="relative z-10 p-6 lg:p-8 flex items-center justify-between text-[11px] uppercase tracking-ultra text-white/80 font-medium">
                    <span className="bg-[#0D1F17]/80 backdrop-blur-md px-3 py-1.5 text-secondary-fixed border border-ochre/30 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-ochre" />
                      {HERO_PLATES.primary.badge}
                    </span>
                    <span className="text-white/70">
                      {HERO_PLATES.primary.location}
                    </span>
                  </div>
                  <div className="relative z-10 p-6 lg:p-8 space-y-2 max-w-xl">
                    <p className="text-[11px] font-medium tracking-ultra uppercase text-secondary-fixed flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[13px] text-terracotta">
                        shutter_speed
                      </span>
                      {HERO_PLATES.primary.gear}
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                      {HERO_PLATES.primary.title}
                    </h2>
                    <p className="text-[13px] text-white/75 font-light leading-relaxed">
                      {HERO_PLATES.primary.desc}
                    </p>
                  </div>
                </div>

                {/* Secondary Stacked Plates */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                  {/* Tile 1 */}
                  <div
                    onClick={() =>
                      openLightbox(HERO_PLATES.secondaryTop.plateId)
                    }
                    className="group relative bg-moss-deep overflow-hidden flex-1 min-h-[260px] flex flex-col justify-end p-6 rounded-[2px] border border-[#1F382B]/30 cursor-pointer"
                  >
                    <div className="absolute inset-0 z-0 ">
                      <img
                        className="w-full h-full object-cover opacity-85 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                        alt={HERO_PLATES.secondaryTop.alt}
                        src={HERO_PLATES.secondaryTop.imageUrl}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F17] via-[#0D1F17]/45 to-transparent" />
                    </div>
                    <div className="relative z-10 space-y-1.5 text-white">
                      <div className="text-[10px] uppercase tracking-ultra text-secondary-fixed font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                        {HERO_PLATES.secondaryTop.badge}
                      </div>
                      <h3 className="text-lg font-semibold tracking-tight leading-tight">
                        {HERO_PLATES.secondaryTop.title}
                      </h3>
                      <p className="text-[11px] text-white/70 font-normal">
                        {HERO_PLATES.secondaryTop.gear}
                      </p>
                    </div>
                  </div>

                  {/* Tile 2 */}
                  <div
                    onClick={() =>
                      openLightbox(HERO_PLATES.secondaryBottom.plateId)
                    }
                    className="group relative bg-moss-deep overflow-hidden flex-1 min-h-[260px] flex flex-col justify-end p-6 rounded-[2px] border border-[#1F382B]/30 cursor-pointer"
                  >
                    <div className="absolute inset-0 z-0">
                      <img
                        className="w-full h-full object-cover opacity-85 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                        alt={HERO_PLATES.secondaryBottom.alt}
                        src={HERO_PLATES.secondaryBottom.imageUrl}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F17] via-[#0D1F17]/45 to-transparent" />
                    </div>
                    <div className="relative z-10 space-y-1.5 text-white">
                      <div className="text-[10px] uppercase tracking-ultra text-secondary-fixed font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                        {HERO_PLATES.secondaryBottom.badge}
                      </div>
                      <h3 className="text-lg font-semibold tracking-tight leading-tight">
                        {HERO_PLATES.secondaryBottom.title}
                      </h3>
                      <p className="text-[11px] text-white/70 font-normal">
                        {HERO_PLATES.secondaryBottom.gear}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Refined Minimal Metrics Row with Earthy Clay Badges */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-earth">
                <div className="space-y-1">
                  <span className="text-3xl lg:text-4xl font-bold tracking-tight text-primary block tabular-nums">
                    5+
                  </span>
                  <span className="text-[11px] font-semibold tracking-ultra uppercase text-on-surface-variant flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-terracotta" /> 
                    camera experince
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-3xl lg:text-4xl font-bold tracking-tight text-primary block tabular-nums">
                    50+
                  </span>
                  <span className="text-[11px] font-semibold tracking-ultra uppercase text-on-surface-variant flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-ochre" /> shoots
                  </span>
                </div>
                {/* <div className="space-y-1">
                  <span className="text-3xl lg:text-4xl font-bold tracking-tight text-primary block tabular-nums">
                    12
                  </span>
                  <span className="text-[11px] font-semibold tracking-ultra uppercase text-on-surface-variant flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-moss-surface" />{" "}
                    Equatorial Expeditions
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-3xl lg:text-4xl font-bold tracking-tight text-primary block tabular-nums">
                    100%
                  </span>
                  <span className="text-[11px] font-semibold tracking-ultra uppercase text-on-surface-variant flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-terracotta" />{" "}
                    Autonomous Field Setup
                  </span>
                </div> */}
              </div>
            </div>
          </section>

          {/* Gallery Section: Clean Sleek Minimalist Portfolio in Warm Linen / Oat Parchment */}
          <section
            className="w-full bg-parchment-low px-margin-mobile lg:px-margin py-20 lg:py-24 relative overflow-hidden"
            id="gallery-section"
          >
            {/* Subtle Botanical Divider Line Motif */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C49A45]/40 to-transparent" />

            <div className="max-w-7xl mx-auto space-y-12 relative z-10">
              {/* Gallery Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-earth">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-ultra font-semibold text-terracotta">
                    <span className="material-symbols-outlined text-[15px]">
                      eco
                    </span>
                    <span>Curated Works 2021 — 2025 · </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
                    Portfolio Archive 
                  </h2>
                </div>
                <p className="text-[13px] text-on-surface-variant font-normal max-w-md">
                  Cross-disciplinary folio...
                </p>
              </div>

              {/* Sleek Filter Pills with Earthy Styling */}
              <div className="flex items-center gap-2.5 overflow-x-auto pb-2 -mx-1 px-1">
                {(
                  [
                    { key: "all", label: "All [12]" },
                    { key: "church", label: "Live church" },
                    { key: "studio", label: "Studio Sessions" },
                    { key: "travel", label: "Rail & Travel" },
                    { key: "adventure", label: "Bikes & Rally" },
                    { key: "events", label: "VIP & Summits" },
                  ] as const
                ).map((tab) => {
                  const isActive = activeCategory === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveCategory(tab.key)}
                      className={`px-4 py-2 text-[11px] tracking-ultra uppercase transition-all whitespace-nowrap rounded-[2px] cursor-pointer ${
                        isActive
                          ? "bg-moss-dark text-white font-semibold shadow-sm flex items-center gap-1.5"
                          : "bg-white text-on-surface hover:bg-parchment font-medium border border-earth"
                      }`}
                    >
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Minimalist 3-Column Image Grid */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                id="folio-grid"
              >
                {filteredPlates.map((plate) => (
                  <article
                    key={plate.id}
                    className="gallery-card group flex flex-col justify-between transition-all duration-300 bg-parchment p-3 rounded-[2px] border border-earth shadow-sm hover:shadow-md"
                  >
                    <div
                      className="relative overflow-hidden aspect-[4/5] bg-black/5 cursor-pointer rounded-[2px]"
                      onClick={() => openLightbox(plate.id)}
                    >
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        alt={plate.alt}
                        src={plate.imageUrl}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-[#0D1F17]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                        <span className="text-[11px] tracking-ultra uppercase font-semibold text-white bg-moss-dark/85 px-3 py-1.5 backdrop-blur-sm border border-ochre/30 flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[13px] text-ochre">
                            visibility
                          </span>{" "}
                          Inspect Plate
                        </span>
                      </div>
                      <span className="absolute top-3 left-3 bg-white/95 text-moss-dark border border-earth px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase">
                        {plate.plateNumber}
                      </span>
                    </div>
                    <div className="pt-4 space-y-1">
                      <div className="flex items-center justify-between text-[11px] uppercase tracking-ultra text-on-surface-variant font-medium">
                        <span className="text-terracotta">
                          {plate.shortCategory}
                        </span>
                        <span>{plate.shortDate}</span>
                      </div>
                      <h3
                        onClick={() => openLightbox(plate.id)}
                        className="text-base font-semibold text-primary tracking-tight leading-snug group-hover:text-terracotta transition-colors cursor-pointer"
                      >
                        {plate.title}
                      </h3>
                      <p className="text-[13px] text-on-surface-variant font-normal line-clamp-2">
                        {plate.shortDesc}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Story & Philosophy Section: Clean Modern Layout + Botanical Ethos */}
          <section
            className="w-full bg-parchment px-margin-mobile lg:px-margin py-20 lg:py-24 border-b border-earth relative"
            id="story-section"
          >
            {/* Subtle Creeping Vine Motif in Section Callout Margin */}
            <div className="absolute bottom-6 right-8 pointer-events-none opacity-20 hidden md:block">
              <svg
                className="anim-vine-sway"
                fill="none"
                height="150"
                viewBox="0 0 160 150"
                width="160"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M150,140 C110,130 90,80 50,70 C20,62 10,25 0,10"
                  stroke="#1F382B"
                  strokeLinecap="round"
                  strokeWidth="1.8"
                />
                <circle cx="80" cy="75" fill="#C86D51" r="3" />
                <path
                  d="M50,70 C35,60 30,75 38,88 C50,90 58,80 50,70 Z"
                  fill="#1F382B"
                />
                <path
                  d="M100,105 C85,95 80,110 88,122 C100,125 108,115 100,105 Z"
                  fill="#C49A45"
                />
              </svg>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Left Column: Portrait & Kit Loadout */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="relative aspect-[4/5] bg-black/5 overflow-hidden rounded-[2px] border border-earth">
                    <img
                      className="w-full h-full object-cover filter contrast-[1.05]"
                      alt={PORTRAIT_IMAGE.alt}
                      src={PORTRAIT_IMAGE.url}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-4 left-4 bg-moss-deep/90 backdrop-blur-md px-3.5 py-2 text-white text-[11px] font-medium tracking-ultra uppercase border border-ochre/30 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                      Samuel Kiplangat · Field Director
                    </div>
                  </div>

                  <div className="p-6 bg-parchment-low space-y-4 rounded-[2px] border border-earth">
                    <div className="flex items-center justify-between border-b border-earth pb-2">
                      <span className="text-[11px] font-semibold tracking-ultra uppercase text-primary block">
                        Field Herbarium &amp; Pelican Loadout
                      </span>
                      <span className="material-symbols-outlined text-[16px] text-terracotta">
                        potted_plant
                      </span>
                    </div>
                    <div className="space-y-2.5 text-[12px] text-on-surface-variant font-medium">
                      <div className="flex justify-between border-b border-earth pb-1.5">
                        <span>Hasselblad X2D 100C</span>
                        <span className="text-primary font-semibold">
                          100MP Medium Format
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-earth pb-1.5">
                        <span>Leica SL2-S System</span>
                        <span className="text-primary font-semibold">
                          Live Low-Light
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-earth pb-1.5">
                        <span>Primes Kit</span>
                        <span className="text-primary font-semibold">
                          35mm / 50mm / 90mm
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Strobes &amp; Mobile Solar Rig</span>
                        <span className="text-primary font-semibold">
                          Profoto B10X / Tentacle Sync
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Monograph Essay */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="space-y-3">
                    <span className="text-[11px] uppercase tracking-ultra font-semibold text-terracotta flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px]">
                        psychology
                      </span>{" "}
                      Ethos &amp; Optical Approach
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-primary leading-tight">
                      The Rhythm of the Stage &amp; The Solitude of the Track.
                    </h2>
                  </div>

                  <div className="space-y-6 text-[15px] sm:text-[16px] text-on-surface leading-relaxed font-normal">
                    <p>
                      There is a shared heartbeat between a vocalist
                      surrendering to thirty thousand voices in Nairobi’s
                      midnight air and an off-road rider carving loose red shale
                      along the spine of the Great Rift Valley. Both are states
                      of total velocity. In neither moment can the camera ask
                      for a second take.
                    </p>
                    <p className="text-on-surface-variant">
                      For a decade, my photographic discipline has refused the
                      safety of studio borders. To capture authentic kinetic
                      presence, one must run alongside the dust plume. When
                      documenting stadium tours, I do not shoot from the
                      cordoned press trench after three songs; I remain behind
                      the drummer’s monitor until the final chord decays into
                      silence.
                    </p>

                    {/* Minimalist Pullquote with Warm Terracotta Border */}
                    <blockquote className="p-6 border-l-3 border-terracotta bg-parchment-low my-6 rounded-r-[2px] border border-l-0 border-earth">
                      <p className="text-lg sm:text-xl font-medium tracking-tight text-primary leading-snug">
                        “Great documentation does not flatter its subject; it
                        honors the heat, the sweat, the decibels, and the
                        silence that follows.”
                      </p>
                      <cite className="block mt-3 text-[11px] font-semibold tracking-ultra uppercase text-terracotta not-italic flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />{" "}
                        Samuel Kiplangat, Monograph Note
                      </cite>
                    </blockquote>

                    <p className="text-on-surface-variant">
                      Whether handling an exclusive commercial campaign in
                      volcanic calderas or capturing analog acoustic sessions
                      for East Africa’s vanguard jazz instrumentalists, my
                      optical setup prioritizes raw truth: tactile natural grain
                      over digital sterility, atmospheric flare over clinical
                      suppression.
                    </p>
                  </div>

                  {/* Refined Editorial Mastheads with Earthy Clay Tiles */}
                  <div className="pt-6 space-y-3">
                    <span className="text-[11px] font-semibold tracking-ultra uppercase text-on-surface-variant block">
                      Selected Monograph Commissions
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                      {MASTHEAD_COMMISSIONS.map((item) => (
                        <button
                          key={item.name}
                          type="button"
                          onClick={() => {
                            setActiveMasthead(
                              activeMasthead?.name === item.name ? null : item,
                            );
                            showToast(
                              `${item.name} — ${item.issue} (${item.year})`,
                            );
                          }}
                          className={`py-3 px-2 bg-parchment-low border text-primary text-[12px] font-semibold uppercase tracking-wider hover:border-terracotta transition-colors cursor-pointer ${
                            activeMasthead?.name === item.name
                              ? "border-terracotta bg-parchment-mid/60"
                              : "border-earth"
                          }`}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                    {activeMasthead && (
                      <div className="p-4 bg-parchment-low border border-earth rounded-[2px] flex items-start justify-between gap-4 text-left transition-all">
                        <div className="space-y-1">
                          <div className="text-[10px] font-semibold uppercase tracking-ultra text-terracotta">
                            {activeMasthead.name} · {activeMasthead.year} —{" "}
                            {activeMasthead.issue}
                          </div>
                          <p className="text-[13px] text-on-surface-variant">
                            {activeMasthead.summary}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setActiveMasthead(null)}
                          className="text-xs text-on-surface-variant hover:text-primary cursor-pointer"
                          aria-label="Close commission preview"
                        >
                          ✕
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Direct Contact & Rolodex Hub: Deep Forest Green (#0D1F17) with Terracotta/Gold Accents */}
          <section
            className="w-full bg-[#0D1F17] text-white px-margin-mobile lg:px-margin py-20 lg:py-24 relative overflow-hidden"
            id="directory-hub"
          >
            {/* Subtle Botanical Vine Accent in Dark Hub Corner */}
            <div className="absolute -bottom-8 -right-8 pointer-events-none opacity-20">
              <svg
                className="anim-vine-sway"
                fill="none"
                height="220"
                viewBox="0 0 240 220"
                width="240"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M230,220 C180,180 140,110 70,80 C30,60 10,20 0,0"
                  stroke="#a6cfc3"
                  strokeWidth="2"
                />
                <circle cx="105" cy="98" fill="#e9c349" r="3.5" />
                <path
                  d="M140,110 C120,95 110,115 118,130 C135,135 145,122 140,110 Z"
                  fill="#a6cfc3"
                />
                <path
                  d="M80,85 C65,70 58,88 65,100 C78,105 88,95 80,85 Z"
                  fill="#C86D51"
                />
              </svg>
            </div>

            <div className="max-w-7xl mx-auto space-y-12 relative z-10">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-white/10">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-secondary-fixed text-[11px] font-semibold tracking-ultra uppercase">
                    <span className="material-symbols-outlined text-[16px] text-ochre">
                      nest_eco_leaf
                    </span>
                    <span>naledi Registry</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    Registry ...
                  </h2>
                </div>
                <p className="text-[13px] text-white/70 max-w-md font-light leading-relaxed">
                  Direct operational channels for commercial productions.
                </p>
              </div>

              {/* 2-Column Clean Monograph Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left: Direct Phone, Email, Studio */}
                <div className="lg:col-span-7 space-y-4">
                  {/* Nairobi Primary Phone */}
                  <div className="p-6 bg-white/[0.03] border border-white/[0.08] hover:border-ochre/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-[2px] transition-all">
                    <div className="space-y-1">
                      <span className="text-[10px] font-semibold tracking-ultra uppercase text-secondary-fixed flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-ochre" />{" "}
                        Expedition &amp; WhatsApp Desk
                      </span>
                      <a
                        className="text-xl sm:text-2xl font-semibold text-white tracking-tight hover:text-secondary-fixed transition-colors block tabular-nums"
                        href="tel:+254769768474"
                      >
                        +254 769 768 474
                      </a>
                      <span className="text-[12px] text-white/50 block">
                        Nairobi HQ · EAT Timezone (UTC+3)
                      </span>
                    </div>
                    <div className="flex items-center gap-2 pt-2 sm:pt-0">
                      <button
                        type="button"
                        className="px-3.5 py-2 bg-secondary-fixed text-moss-deep text-[11px] font-semibold tracking-ultra uppercase rounded-[2px] hover:bg-ochre hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
                        onClick={() =>
                          copyToClipboard("+254769768474", "Phone number")
                        }
                      >
                        <span className="material-symbols-outlined text-[15px]">
                          content_copy
                        </span>{" "}
                        Copy
                      </button>
                      <a
                        className="px-3.5 py-2 border border-white/20 text-white text-[11px] font-semibold tracking-ultra uppercase rounded-[2px] hover:bg-white/10 transition-all flex items-center gap-1.5"
                        href="https://wa.me/254700892144"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="material-symbols-outlined text-[15px]">
                          chat
                        </span>{" "}
                        Chat
                      </a>
                    </div>
                  </div>

                  {/* Secondary Field Satellite Line */}
                  <div className="p-6 bg-white/[0.03] border border-white/[0.08] hover:border-ochre/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-[2px] transition-all">
                    <div className="space-y-1">
                      <span className="text-[10px] font-semibold tracking-ultra uppercase text-secondary-fixed flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />{" "}
                        Field Line 02 (Satellite Dispatch)
                      </span>
                      <a
                        className="text-xl sm:text-2xl font-semibold text-white tracking-tight hover:text-secondary-fixed transition-colors block tabular-nums"
                        href="tel:+254107800696"
                      >
                        +254 107 800 696
                      </a>
                      <span className="text-[12px] text-white/50 block">
                        Rift &amp; Remote Camp Productions
                      </span>
                    </div>
                    <button
                      type="button"
                      className="self-start sm:self-center px-3.5 py-2 bg-secondary-fixed text-moss-deep text-[11px] font-semibold tracking-ultra uppercase rounded-[2px] hover:bg-ochre hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
                      onClick={() =>
                        copyToClipboard("+254107800696", "Satellite field line")
                      }
                    >
                      <span className="material-symbols-outlined text-[15px]">
                        content_copy
                      </span>{" "}
                      Copy
                    </button>
                  </div>

                  {/* Commissions Email */}
                  <div className="p-6 bg-white/[0.03] border border-white/[0.08] hover:border-ochre/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-[2px] transition-all">
                    <div className="space-y-1">
                      <span className="text-[10px] font-semibold tracking-ultra uppercase text-secondary-fixed flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />{" "}
                        Commissions &amp; Press Desk
                      </span>
                      <a
                        className="text-lg sm:text-xl font-semibold text-white tracking-tight hover:text-secondary-fixed transition-colors block"
                        href="mailto:bookings@naledi.com"
                      >
                        bookings@naledi.com
                      </a>
                      <span className="text-[12px] text-white/50 block">
                        4-hour response SLA on production requests
                      </span>
                    </div>
                    <button
                      type="button"
                      className="self-start sm:self-center px-3.5 py-2 bg-secondary-fixed text-moss-deep text-[11px] font-semibold tracking-ultra uppercase rounded-[2px] hover:bg-ochre hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
                      onClick={() =>
                        copyToClipboard(
                          "bookings@samuelkiplangat.com",
                          "Booking email",
                        )
                      }
                    >
                      <span className="material-symbols-outlined text-[15px]">
                        content_copy
                      </span>{" "}
                      Copy
                    </button>
                  </div>

                  {/* Darkroom Bureau Address */}
                  <div className="p-6 bg-white/[0.03] border border-white/[0.08] space-y-2 rounded-[2px]">
                    <span className="text-[10px] font-semibold tracking-ultra uppercase text-secondary-fixed flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[13px] text-ochre">
                        home_pin
                      </span>{" "}
                      Physical Print Archive &amp; Darkroom
                    </span>
                    <p className="text-[14px] text-white font-medium">
                      karen road, off Ngong Road, Nairobi, Kenya
                    </p>
                    <p className="text-[13px] text-white/60">
                      Nairobi, Kenya
                    </p>
                    <span className="text-[11px] text-white/40 uppercase tracking-ultra block pt-1">
                      Visitations strictly by advance schedule
                    </span>
                  </div>
                </div>

                {/* Right: Link Directory Minimal Tiles */}
                <div className="lg:col-span-5 space-y-3">
                  <span className="text-[11px] font-semibold tracking-ultra uppercase text-secondary-fixed block pb-1">
                    contact us
                  </span>

                   {/* Instant WhatsApp */}
                  <a
                    className="p-4 bg-secondary-fixed text-moss-deep flex items-center justify-between hover:bg-ochre hover:text-white transition-all rounded-[2px] shadow-sm group"
                    href="https://wa.me/254769768474"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div>
                      <h4 className="text-[14px] font-bold tracking-tight">
                        Direct WhatsApp Line
                      </h4>
                      <p className="text-[12px] text-moss-deep/80 group-hover:text-white/80">
                        Immediate response for urgent production queries
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-[20px]">
                      chat
                    </span>
                  </a>

                  {/* Instagram */}
                  <a
                    className="p-4 bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-ochre/30 flex items-center justify-between group transition-all rounded-[2px]"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div>
                      <h4 className="text-[14px] font-semibold text-white tracking-tight group-hover:text-secondary-fixed transition-colors">
                        Instagram @samuel.kiplangat.lens
                      </h4>
                      <p className="text-[12px] text-white/50">
                        Raw darkroom scans, daily field rolls &amp; stories
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-white/40 group-hover:text-secondary-fixed group-hover:translate-x-1 transition-all text-[18px]">
                      open_in_new
                    </span>
                  </a>

                  {/* Pitch Deck */}
                  {/* <a
                    className="p-4 bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-ochre/30 flex items-center justify-between group transition-all rounded-[2px]"
                    href="#deck"
                    onClick={(e) => {
                      e.preventDefault();
                      showToast(
                        "Commercial Pitch Deck (PDF, 42MB) download initiated.",
                      );
                    }}
                  >
                    <div>
                      <h4 className="text-[14px] font-semibold text-white tracking-tight group-hover:text-secondary-fixed transition-colors">
                        Commercial Deck 2025 (PDF)
                      </h4>
                      <p className="text-[12px] text-white/50">
                        Capabilities, Gear manifests &amp; Global carnet
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-white/40 group-hover:text-secondary-fixed group-hover:translate-x-1 transition-all text-[18px]">
                      arrow_forward
                    </span>
                  </a> */}

                  {/* Rate Card */}
                  {/* <a
                    className="p-4 bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-ochre/30 flex items-center justify-between group transition-all rounded-[2px]"
                    href="#rate-card"
                    onClick={(e) => {
                      e.preventDefault();
                      handleOpenCommissionModal(
                        "Rate Card & Q1–Q2 Season Calendar Request",
                      );
                      showToast(
                        "Rate card & seasonal schedule dispatch form opened.",
                      );
                    }}
                  >
                    <div>
                      <h4 className="text-[14px] font-semibold text-white tracking-tight group-hover:text-secondary-fixed transition-colors">
                        Rate Card &amp; Season Calendar
                      </h4>
                      <p className="text-[12px] text-white/50">
                        Day rates, Drone licenses &amp; Carnet handling
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-white/40 group-hover:text-secondary-fixed group-hover:translate-x-1 transition-all text-[18px]">
                      arrow_forward
                    </span>
                  </a> */}

                  

                  {/* Fine Art Prints */}
                  {/* <a
                    className="p-4 bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-ochre/30 flex items-center justify-between group transition-all rounded-[2px]"
                    href="#prints"
                    onClick={(e) => {
                      e.preventDefault();
                      handleOpenCommissionModal(
                        "Limited Folio Print Editions Catalog",
                      );
                      showToast(
                        "Fine-Art Collector Archive catalog requested.",
                      );
                    }}
                  >
                    <div>
                      <h4 className="text-[14px] font-semibold text-white tracking-tight group-hover:text-secondary-fixed transition-colors">
                        Limited Folio Print Editions
                      </h4>
                      <p className="text-[12px] text-white/50">
                        Hahnemühle Photo Rag Archival Prints (15 Editions)
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-white/40 group-hover:text-secondary-fixed group-hover:translate-x-1 transition-all text-[18px]">
                      arrow_forward
                    </span>
                  </a> */}

                  
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#0D1F17] text-white/80 py-16 border-t border-white/10 relative overflow-hidden">
        <div className="w-full px-margin-mobile lg:px-margin mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            <div className="space-y-3">
              <span className="text-[10px] font-semibold tracking-ultra uppercase text-secondary-fixed flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[13px] text-ochre">
                  potted_plant
                </span>{" "}
                Botanical Direction
              </span>
              <h3 className="text-base font-semibold text-white tracking-tight uppercase">
                naledi
              </h3>
              <p className="text-[13px] text-white/60 leading-relaxed font-light">
                Documentary monograph and botanical photographic direction
                spanning arenas, rally expeditions, and tactile acoustic spaces
                across the East African Rift.
              </p>
            </div>
            <div className="space-y-3">
              <span className="text-[10px] font-semibold tracking-ultra uppercase text-secondary-fixed block">
                Field Bureaus
              </span>
              <p className="text-[13px] text-white/70 leading-relaxed font-light">
                Karen Botanical Studio, Nairobi
                <br />
                Great Rift Field Camp &amp; Mobile Lab
                <br />
                European Operations: London
              </p>
            </div>
            <div className="space-y-3">
              <span className="text-[10px] font-semibold tracking-ultra uppercase text-secondary-fixed block">
                Monograph Index
              </span>
              <ul className="space-y-2 text-[12px] uppercase tracking-ultra font-medium text-white/70">
                <li className="hover:text-secondary-fixed transition-colors">
                  <a
                    href="#gallery-section"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("gallery-section");
                    }}
                  >
                    Portfolio Archive
                  </a>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <a
                    href="#gallery-section"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("gallery-section");
                    }}
                  >
                    Plates &amp; Herbarium
                  </a>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <a
                    href="#story-section"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("story-section");
                    }}
                  >
                    Optical Philosophy
                  </a>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <a
                    href="#directory-hub"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("directory-hub");
                    }}
                  >
                    Registry
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <span className="text-[10px] font-semibold tracking-ultra uppercase text-secondary-fixed block">
                Seasonal Scheduling
              </span>
              <p className="text-[13px] text-white/60 leading-relaxed font-light">
                Commercial bookings and archival Hahnemühle prints reserved
                strictly on advance seasonal schedules.
              </p>
              <button
                type="button"
                onClick={() =>
                  handleOpenCommissionModal(
                    "Seasonal Field Schedule Reservation",
                  )
                }
                className="text-[11px] font-semibold tracking-ultra uppercase text-secondary-fixed hover:text-white transition-colors underline underline-offset-4 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Reserve Schedule</span>
                <span className="material-symbols-outlined text-[14px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-ultra text-white/40 font-medium">
            <p>
              © 2025 naledi. All Rights Reserved. Botanical Monograph Vol. 24.
            </p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-ochre" /> Nairobi
                HQ
              </span>
              <span>naledi</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal: Minimalist Inspection Window with Earthy Botanical Framing */}
      {selectedPlate && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 lg:p-10 transition-opacity duration-300"
          id="lightbox-modal"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          <div className="relative w-full max-w-5xl bg-parchment text-primary shadow-2xl flex flex-col lg:flex-row overflow-hidden rounded-[2px] max-h-[120vh] border border-earth">
            {/* Close */}
            <button
              type="button"
              aria-label="Close modal"
              className="absolute top-4 right-4 z-20 w-8 h-8 bg-moss-dark text-white hover:bg-terracotta hover:text-white transition-colors flex items-center justify-center rounded-[2px] cursor-pointer"
              onClick={closeLightbox}
            >
              <span className="material-symbols-outlined text-[18px]">
                close
              </span>
            </button>

            {/* Left: Image Viewer */}
            <div className="lg:w-7/12 bg-moss-deep flex items-center justify-center p-6 min-h-[300px] lg:min-h-[520px] relative">
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  className="w-full h-full max-h-[75vh] w-auto max-w-full object-contain object-center transition-all duration-300"
                  alt={selectedPlate.alt}
                  src={
                    useMasterPlateView
                      ? DEFAULT_LIGHTBOX_IMAGE
                      : selectedPlate.imageUrl
                  }
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-2 left-2 bg-moss-deep/90 text-secondary-fixed px-2.5 py-1 text-[10px] uppercase font-semibold tracking-ultra border border-ochre/30">
                  {selectedPlate.plateTag}
                </span>

                {/* Prev / Next Plate Controls */}
                <div className="absolute bottom-2 right-2 flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setUseMasterPlateView(!useMasterPlateView)}
                    className="px-2.5 py-1 bg-moss-deep/90 text-white/80 hover:text-secondary-fixed text-[10px] uppercase tracking-wider border border-white/15 cursor-pointer"
                    title="Toggle Darkroom Contact Sheet Proof"
                  >
                    {useMasterPlateView ? "Plate Scan" : "Darkroom Proof"}
                  </button>
                  <button
                    type="button"
                    onClick={() => navigateLightbox("prev")}
                    aria-label="Previous plate"
                    className="w-7 h-7 bg-moss-deep/90 text-white hover:text-secondary-fixed border border-white/15 flex items-center justify-center cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[15px]">
                      chevron_left
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => navigateLightbox("next")}
                    aria-label="Next plate"
                    className="w-7 h-7 bg-moss-deep/90 text-white hover:text-secondary-fixed border border-white/15 flex items-center justify-center cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[15px]">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Details & Metadata */}
            <div className="lg:w-5/12 p-6 lg:p-8 flex flex-col justify-between overflow-y-auto space-y-6 bg-parchment">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-ultra text-on-surface-variant font-medium pr-8">
                  <span className="text-terracotta font-semibold">
                    {selectedPlate.fullCategory}
                  </span>
                  <span>{selectedPlate.fullDate}</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-primary leading-tight">
                  {selectedPlate.title}
                </h3>
                <p className="text-[12px] uppercase tracking-wider text-on-surface-variant/80 font-medium">
                  {selectedPlate.location}
                </p>
                <p className="text-[14px] text-on-surface leading-relaxed pt-2 font-normal">
                  {selectedPlate.fullDesc}
                </p>
              </div>

              {/* Optical Exposure Minimalist Specs in Warm Linen Card */}
              <div className="p-4 bg-parchment-low space-y-2 text-[12px] rounded-[2px] border border-earth">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-ultra font-semibold text-terracotta flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[12px]">
                      camera
                    </span>{" "}
                    Optical &amp; Herbarium Index
                  </span>
                  <span className="text-[10px] font-medium text-on-surface-variant">
                    {selectedPlate.editionStatus}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-on-surface-variant font-medium pt-1">
                  <div>
                    Camera:{" "}
                    <span className="text-primary font-semibold block">
                      {selectedPlate.body}
                    </span>
                  </div>
                  <div>
                    Optic:{" "}
                    <span className="text-primary font-semibold block">
                      {selectedPlate.lens}
                    </span>
                  </div>
                  <div>
                    Exposure:{" "}
                    <span className="text-primary font-semibold block">
                      {selectedPlate.exp}
                    </span>
                  </div>
                  <div>
                    ISO:{" "}
                    <span className="text-primary font-semibold block">
                      {selectedPlate.iso}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  className="flex-1 px-4 py-2.5 bg-moss-dark text-white text-[11px] uppercase tracking-ultra font-semibold hover:bg-moss-deep hover:text-secondary-fixed transition-colors rounded-[2px] flex items-center justify-center gap-2 cursor-pointer"
                  // onClick={() => handleSupportPlate(selectedPlate)}
                >
                  <span className="material-symbols-outlined text-[14px]">
                    volunteer_activism
                  </span>{" "}
                  Support This Work
                </button>
                <button
                  type="button"
                  className="px-3 py-2.5 border border-on-surface/20 text-primary text-[11px] uppercase tracking-ultra font-semibold hover:bg-parchment-low transition-colors rounded-[2px] flex items-center gap-1 cursor-pointer"
                  onClick={() =>
                    copyToClipboard(
                      `${window.location.origin}/#plate-${selectedPlate.id}`,
                      `${selectedPlate.plateNumber} URL`,
                    )
                  }
                >
                  <span className="material-symbols-outlined text-[16px]">
                    share
                  </span>{" "}
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Commission / Print Dispatch Modal */}
      {commissionModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setCommissionModalOpen(false);
          }}
        >
          <div className="relative w-full max-w-lg bg-parchment text-primary border border-earth rounded-[2px] shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between gap-4 border-b border-earth pb-4">
              <div className="space-y-1">
                <span className="text-[16px] font-semibold tracking-ultra text-terracotta flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[13px]">
                    eco
                  </span>{" "}
                  naledi
                </span>
                <h3 className="text-xl font-bold tracking-tight text-primary">
                  Reservation
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setCommissionModalOpen(false)}
                className="w-8 h-8 bg-moss-dark text-white hover:bg-terracotta flex items-center justify-center rounded-[2px] cursor-pointer"
                aria-label="Close reservation modal"
              >
                <span className="material-symbols-outlined text-[16px]">
                  close
                </span>
              </button>
            </div>

            <form onSubmit={handleCommissionSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-semibold uppercase tracking-ultra text-on-surface-variant block">
                  Subject
                </label>
                <input
                  type="text"
                  value={commissionSubject}
                  onChange={(e) => setCommissionSubject(e.target.value)}
                  className="w-full px-3 py-2 bg-parchment-low border border-earth text-[13px] text-primary font-medium focus:outline-none focus:border-terracotta"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-semibold uppercase tracking-ultra text-on-surface-variant block">
                    Your Name / Agency
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Elena Rostova · Vogue"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-earth text-[13px] text-primary focus:outline-none focus:border-terracotta"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-semibold uppercase tracking-ultra text-on-surface-variant block">
                    Direct Email
                  </label>
                  <input
                    type="email"
                    placeholder="producer@publication.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-earth text-[13px] text-primary focus:outline-none focus:border-terracotta"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-semibold uppercase tracking-ultra text-on-surface-variant block">
                  Delivery Destination
                </label>
                <input
                  type="text"
                  value={projectTerritory}
                  onChange={(e) => setProjectTerritory(e.target.value)}
                  placeholder="Enter delivery destination"
                  className="w-full px-3 py-2 bg-white border border-earth text-[13px] text-primary placeholder:text-on-surface-variant/50 focus:outline-none focus:border-terracotta"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-semibold uppercase tracking-ultra text-on-surface-variant block">
                  date
                </label>
                <input
                  type="date"
                  value={projectNotes}
                  onChange={(e) => setProjectNotes(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-earth text-[13px] text-primary focus:outline-none focus:border-terracotta"
                />
              </div>

              <div className="flex items-center justify-between pt-2 gap-3">
                <span className="text-[9px] text-on-surface-variant">
                  naledi will respond within 24 hours to confirm your
                  reservation.
                </span>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-moss-dark text-white hover:bg-moss-deep hover:text-secondary-fixed text-[11px] font-semibold uppercase tracking-ultra rounded-[2px] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>submit</span>
                  <span className="material-symbols-outlined text-[14px]">
                    north_east
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Minimal Toast Notification */}
      <div
        className={`fixed bottom-6 right-6 z-50 bg-moss-deep text-white px-4 py-3 shadow-xl flex items-center gap-2.5 transform transition-all duration-300 text-[12px] font-medium tracking-wide rounded-[2px] border border-ochre/30 ${
          toastMessage
            ? "translate-y-0 opacity-100"
            : "translate-y-24 opacity-0 pointer-events-none"
        }`}
        id="toast-notify"
      >
        <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
          spa
        </span>
        <span id="toast-message">{toastMessage || "Copied to clipboard."}</span>
      </div>
    </div>
  );
}
