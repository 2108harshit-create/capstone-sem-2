"use client";
import { useState } from "react";

const properties = [
  {
    id: 1,
    title: "The Obsidian Penthouse",
    location: "Lower Parel, Mumbai",
    price: "₹12.5 Cr",
    beds: 4,
    baths: 5,
    sqft: "6,200",
    type: "Penthouse",
    tag: "Featured",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    ],
  },
  {
    id: 2,
    title: "Elara Sky Villa",
    location: "Bandra West, Mumbai",
    price: "₹8.9 Cr",
    beds: 3,
    baths: 4,
    sqft: "4,800",
    type: "Villa",
    tag: "New",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
    ],
  },
  {
    id: 3,
    title: "Harshit Residences 04",
    location: "Worli, Mumbai",
    price: "₹5.2 Cr",
    beds: 2,
    baths: 3,
    sqft: "2,900",
    type: "Apartment",
    tag: "Hot Deal",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    ],
  },
  {
    id: 4,
    title: "The Aurelius Estate",
    location: "Juhu, Mumbai",
    price: "₹22.0 Cr",
    beds: 6,
    baths: 7,
    sqft: "11,500",
    type: "Estate",
    tag: "Ultra Luxury",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80",
    ],
  },
  {
    id: 5,
    title: "Velvet Loft 12B",
    location: "Powai, Mumbai",
    price: "₹3.8 Cr",
    beds: 2,
    baths: 2,
    sqft: "1,950",
    type: "Apartment",
    tag: "New",
    img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80",
      "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    ],
  },
  {
    id: 6,
    title: "Meridian Tower 33F",
    location: "Andheri West, Mumbai",
    price: "₹6.1 Cr",
    beds: 3,
    baths: 3,
    sqft: "3,400",
    type: "Apartment",
    tag: "Featured",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    ],
  },
];

const tagColors = {
  Featured: "#c9a96e",
  New: "#7eb8a4",
  "Hot Deal": "#e07070",
  "Ultra Luxury": "#a78bfa",
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [tourProp, setTourProp] = useState(null);
  const [tourIdx, setTourIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const types = ["All", "Penthouse", "Villa", "Apartment", "Estate"];

  const filtered = properties.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === "All" || p.type === typeFilter;
    return matchSearch && matchType;
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Outfit:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0a0a0a;
          --bg2: #111111;
          --bg3: #161616;
          --card: #131313;
          --gold: #c9a96e;
          --gold2: #e8c98a;
          --text: #f0ece4;
          --muted: #7a7570;
          --border: rgba(201,169,110,0.15);
          --serif: 'Cormorant Garamond', serif;
          --sans: 'Outfit', sans-serif;
        }

        html { scroll-behavior: smooth; }
        body { background: var(--bg); color: var(--text); font-family: var(--sans); overflow-x: hidden; }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 2px; }

        /* NAV */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 5vw;
          height: 72px;
          background: rgba(10,10,10,0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }
        .nav-logo {
          font-family: var(--serif);
          font-size: 1.6rem;
          font-weight: 300;
          letter-spacing: 0.12em;
          color: var(--gold);
        }
        .nav-logo span { color: var(--text); font-style: italic; }
        .nav-links { display: flex; gap: 2.5rem; list-style: none; }
        .nav-links a {
          text-decoration: none; color: var(--muted);
          font-size: 0.82rem; letter-spacing: 0.12em; text-transform: uppercase;
          transition: color 0.25s;
        }
        .nav-links a:hover { color: var(--gold); }
        .nav-cta {
          background: transparent; border: 1px solid var(--gold);
          color: var(--gold); padding: 0.55rem 1.4rem;
          font-family: var(--sans); font-size: 0.78rem;
          letter-spacing: 0.15em; text-transform: uppercase;
          cursor: pointer; transition: all 0.25s;
        }
        .nav-cta:hover { background: var(--gold); color: #0a0a0a; }

        /* HERO */
        .hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute; inset: 0;
          background-image: url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80');
          background-size: cover; background-position: center;
          filter: brightness(0.28);
        }
        .hero-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.4; pointer-events: none;
        }
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(10,10,10,0.6) 0%, transparent 60%, rgba(10,10,10,0.4) 100%);
        }
        .hero-content {
          position: relative; z-index: 2;
          padding: 0 8vw; max-width: 780px;
          animation: fadeUp 1s ease both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 0.75rem;
          font-size: 0.72rem; letter-spacing: 0.3em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 1.5rem;
        }
        .hero-eyebrow::before {
          content: ''; display: block; width: 40px; height: 1px; background: var(--gold);
        }
        .hero-title {
          font-family: var(--serif); font-size: clamp(3.2rem, 6vw, 5.5rem);
          font-weight: 300; line-height: 1.1; margin-bottom: 1.5rem;
        }
        .hero-title em { font-style: italic; color: var(--gold); }
        .hero-sub {
          font-size: 1rem; color: rgba(240,236,228,0.65); line-height: 1.7;
          max-width: 480px; margin-bottom: 3rem; font-weight: 300;
        }
        .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-primary {
          background: var(--gold); color: #0a0a0a;
          border: none; padding: 0.9rem 2.2rem;
          font-family: var(--sans); font-size: 0.82rem;
          letter-spacing: 0.15em; text-transform: uppercase;
          cursor: pointer; transition: all 0.25s; font-weight: 500;
        }
        .btn-primary:hover { background: var(--gold2); transform: translateY(-1px); }
        .btn-outline {
          background: transparent; border: 1px solid rgba(240,236,228,0.3);
          color: var(--text); padding: 0.9rem 2.2rem;
          font-family: var(--sans); font-size: 0.82rem;
          letter-spacing: 0.15em; text-transform: uppercase;
          cursor: pointer; transition: all 0.25s;
        }
        .btn-outline:hover { border-color: var(--gold); color: var(--gold); }
        .hero-stats {
          position: absolute; bottom: 3rem; right: 8vw; z-index: 2;
          display: flex; gap: 3rem;
          animation: fadeUp 1s ease 0.3s both;
        }
        .stat-item { text-align: right; }
        .stat-num {
          font-family: var(--serif); font-size: 2.4rem; font-weight: 300;
          color: var(--gold); line-height: 1;
        }
        .stat-label {
          font-size: 0.68rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--muted); margin-top: 0.3rem;
        }
        .hero-scroll {
          position: absolute; bottom: 3rem; left: 50%; transform: translateX(-50%);
          z-index: 2; display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
          font-size: 0.65rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--muted);
        }
        .scroll-line {
          width: 1px; height: 50px; background: linear-gradient(to bottom, var(--gold), transparent);
          animation: scrollPulse 2s ease infinite;
        }
        @keyframes scrollPulse {
          0%,100% { opacity: 0.4; } 50% { opacity: 1; }
        }

        /* SEARCH */
        .search-section {
          background: var(--bg2);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 2.5rem 8vw;
        }
        .search-bar {
          display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;
        }
        .search-input-wrap {
          flex: 1; min-width: 240px; position: relative;
        }
        .search-input-wrap svg {
          position: absolute; left: 1rem; top: 50%; transform: translateY(-50%);
          color: var(--muted);
        }
        .search-input {
          width: 100%; background: var(--bg3);
          border: 1px solid var(--border); color: var(--text);
          padding: 0.85rem 1rem 0.85rem 2.8rem;
          font-family: var(--sans); font-size: 0.9rem;
          outline: none; transition: border-color 0.25s;
        }
        .search-input:focus { border-color: var(--gold); }
        .search-input::placeholder { color: var(--muted); }
        .filter-pills { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .pill {
          padding: 0.6rem 1.2rem; background: var(--bg3);
          border: 1px solid var(--border); color: var(--muted);
          font-size: 0.78rem; letter-spacing: 0.1em; cursor: pointer;
          transition: all 0.2s; font-family: var(--sans);
        }
        .pill.active, .pill:hover { border-color: var(--gold); color: var(--gold); background: rgba(201,169,110,0.08); }

        /* SECTION HEADER */
        .section-header {
          text-align: center; padding: 5rem 8vw 3rem;
        }
        .section-eyebrow {
          font-size: 0.7rem; letter-spacing: 0.3em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 1rem;
          display: flex; align-items: center; justify-content: center; gap: 1rem;
        }
        .section-eyebrow::before, .section-eyebrow::after {
          content: ''; display: block; width: 30px; height: 1px; background: var(--gold); opacity: 0.5;
        }
        .section-title {
          font-family: var(--serif); font-size: clamp(2.2rem, 4vw, 3.4rem);
          font-weight: 300; line-height: 1.2;
        }
        .section-title em { font-style: italic; color: var(--gold); }

        /* LISTINGS GRID */
        .listings-section { padding: 1rem 8vw 6rem; }
        .listings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1.5px;
        }
        .prop-card {
          background: var(--card); cursor: pointer;
          border: 1px solid transparent;
          transition: border-color 0.3s, transform 0.3s;
          overflow: hidden; position: relative;
        }
        .prop-card:hover { border-color: var(--border); transform: translateY(-3px); }
        .prop-card:hover .prop-img { transform: scale(1.04); }
        .prop-img-wrap { overflow: hidden; height: 240px; position: relative; }
        .prop-img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.6s ease;
        }
        .prop-tag {
          position: absolute; top: 1rem; left: 1rem;
          padding: 0.25rem 0.75rem;
          font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase;
          font-weight: 500; font-family: var(--sans);
        }
        .prop-tour-btn {
          position: absolute; bottom: 1rem; right: 1rem;
          background: rgba(10,10,10,0.8); border: 1px solid var(--gold);
          color: var(--gold); padding: 0.4rem 0.9rem;
          font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase;
          cursor: pointer; transition: all 0.2s; font-family: var(--sans);
          backdrop-filter: blur(8px);
        }
        .prop-tour-btn:hover { background: var(--gold); color: #0a0a0a; }
        .prop-body { padding: 1.5rem; }
        .prop-type {
          font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--muted); margin-bottom: 0.5rem;
        }
        .prop-title {
          font-family: var(--serif); font-size: 1.4rem; font-weight: 400;
          margin-bottom: 0.4rem; color: var(--text);
        }
        .prop-location {
          font-size: 0.8rem; color: var(--muted); margin-bottom: 1.2rem;
          display: flex; align-items: center; gap: 0.4rem;
        }
        .prop-meta {
          display: flex; gap: 1.5rem;
          font-size: 0.78rem; color: var(--muted);
          border-top: 1px solid var(--border); padding-top: 1rem;
          margin-bottom: 1rem;
        }
        .meta-item { display: flex; align-items: center; gap: 0.35rem; }
        .prop-footer {
          display: flex; align-items: center; justify-content: space-between;
        }
        .prop-price {
          font-family: var(--serif); font-size: 1.5rem; font-weight: 400; color: var(--gold);
        }
        .prop-cta {
          background: transparent; border: 1px solid var(--border);
          color: var(--muted); padding: 0.45rem 1rem;
          font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase;
          cursor: pointer; transition: all 0.2s; font-family: var(--sans);
        }
        .prop-cta:hover { border-color: var(--gold); color: var(--gold); }
        .no-results {
          text-align: center; padding: 4rem; color: var(--muted);
          font-family: var(--serif); font-size: 1.4rem; font-style: italic;
          grid-column: 1/-1;
        }

        /* MAP SECTION */
        .map-section {
          padding: 2rem 8vw 6rem;
          background: var(--bg2);
          border-top: 1px solid var(--border);
        }
        .map-container {
          display: grid; grid-template-columns: 1fr 1.5fr; gap: 2px;
          min-height: 500px;
        }
        .map-sidebar { background: var(--bg3); padding: 2rem; overflow-y: auto; max-height: 500px; }
        .map-sidebar h3 {
          font-family: var(--serif); font-size: 1.1rem; font-weight: 400;
          color: var(--gold); margin-bottom: 1.5rem;
        }
        .map-prop-item {
          padding: 1rem; border: 1px solid var(--border);
          margin-bottom: 0.75rem; cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
        }
        .map-prop-item:hover, .map-prop-item.active {
          border-color: var(--gold); background: rgba(201,169,110,0.05);
        }
        .map-prop-name {
          font-family: var(--serif); font-size: 1rem; margin-bottom: 0.25rem;
        }
        .map-prop-loc { font-size: 0.75rem; color: var(--muted); }
        .map-prop-price { font-size: 0.85rem; color: var(--gold); margin-top: 0.4rem; }
        .map-visual {
          background: var(--bg3); position: relative; overflow: hidden;
          border: 1px solid var(--border);
        }
        .map-embed {
          width: 100%; height: 100%; border: none; filter: invert(0.85) hue-rotate(180deg) saturate(0.7) brightness(0.7);
          min-height: 500px;
        }
        .map-overlay-badge {
          position: absolute; top: 1rem; left: 1rem;
          background: rgba(10,10,10,0.9); border: 1px solid var(--gold);
          padding: 0.5rem 1rem; backdrop-filter: blur(8px);
        }
        .map-overlay-badge p { font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); }
        .map-overlay-badge h4 { font-family: var(--serif); font-size: 1rem; font-weight: 400; }

        /* VIRTUAL TOUR MODAL */
        .modal-overlay {
          position: fixed; inset: 0; z-index: 200;
          background: rgba(0,0,0,0.92); backdrop-filter: blur(10px);
          display: flex; align-items: center; justify-content: center;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .modal {
          background: var(--bg3); border: 1px solid var(--border);
          max-width: 900px; width: 90vw; position: relative;
          animation: scaleIn 0.3s ease;
        }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .modal-close {
          position: absolute; top: 1rem; right: 1rem; z-index: 10;
          background: rgba(10,10,10,0.8); border: 1px solid var(--border);
          color: var(--muted); width: 36px; height: 36px;
          cursor: pointer; font-size: 1rem; transition: all 0.2s;
          display: flex; align-items: center; justify-content: center;
          backdrop-filter: blur(8px);
        }
        .modal-close:hover { border-color: var(--gold); color: var(--gold); }
        .tour-img-wrap { position: relative; height: 420px; overflow: hidden; }
        .tour-img { width: 100%; height: 100%; object-fit: cover; }
        .tour-nav {
          position: absolute; top: 50%; transform: translateY(-50%);
          display: flex; justify-content: space-between; width: 100%; padding: 0 1rem;
        }
        .tour-nav-btn {
          background: rgba(10,10,10,0.8); border: 1px solid var(--gold);
          color: var(--gold); width: 44px; height: 44px;
          cursor: pointer; font-size: 1.1rem; transition: all 0.2s;
          display: flex; align-items: center; justify-content: center;
          backdrop-filter: blur(8px);
        }
        .tour-nav-btn:hover { background: var(--gold); color: #0a0a0a; }
        .tour-thumbs {
          display: flex; gap: 2px; padding: 2px;
          background: var(--bg);
        }
        .tour-thumb {
          flex: 1; height: 70px; cursor: pointer; overflow: hidden;
          border: 2px solid transparent; transition: border-color 0.2s;
        }
        .tour-thumb.active { border-color: var(--gold); }
        .tour-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .tour-info { padding: 1.5rem 2rem; }
        .tour-info h3 { font-family: var(--serif); font-size: 1.5rem; font-weight: 400; }
        .tour-info p { font-size: 0.8rem; color: var(--muted); margin-top: 0.25rem; }
        .tour-counter {
          position: absolute; bottom: 7rem; right: 1.5rem;
          background: rgba(10,10,10,0.8); border: 1px solid var(--border);
          padding: 0.3rem 0.8rem; font-size: 0.7rem; letter-spacing: 0.15em;
          color: var(--gold); backdrop-filter: blur(8px);
        }

        /* CONTACT MODAL */
        .contact-modal {
          background: var(--bg3); border: 1px solid var(--border);
          max-width: 500px; width: 90vw; padding: 3rem; position: relative;
          animation: scaleIn 0.3s ease;
        }
        .contact-title {
          font-family: var(--serif); font-size: 2rem; font-weight: 300;
          margin-bottom: 0.5rem;
        }
        .contact-sub { font-size: 0.82rem; color: var(--muted); margin-bottom: 2rem; }
        .form-group { margin-bottom: 1.2rem; }
        .form-label {
          display: block; font-size: 0.7rem; letter-spacing: 0.15em;
          text-transform: uppercase; color: var(--muted); margin-bottom: 0.5rem;
        }
        .form-input {
          width: 100%; background: var(--bg2); border: 1px solid var(--border);
          color: var(--text); padding: 0.8rem 1rem;
          font-family: var(--sans); font-size: 0.9rem; outline: none;
          transition: border-color 0.25s;
        }
        .form-input:focus { border-color: var(--gold); }
        .form-textarea {
          width: 100%; background: var(--bg2); border: 1px solid var(--border);
          color: var(--text); padding: 0.8rem 1rem;
          font-family: var(--sans); font-size: 0.9rem; outline: none;
          resize: vertical; min-height: 100px; transition: border-color 0.25s;
        }
        .form-textarea:focus { border-color: var(--gold); }

        /* FOOTER */
        footer {
          background: var(--bg2); border-top: 1px solid var(--border);
          padding: 4rem 8vw 2rem;
        }
        .footer-top {
          display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 3rem; margin-bottom: 3rem;
        }
        .footer-brand p {
          font-size: 0.82rem; color: var(--muted); line-height: 1.7; margin-top: 1rem; max-width: 280px;
        }
        .footer-col h4 {
          font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 1.2rem;
        }
        .footer-col ul { list-style: none; }
        .footer-col ul li {
          font-size: 0.83rem; color: var(--muted); margin-bottom: 0.6rem; cursor: pointer;
          transition: color 0.2s;
        }
        .footer-col ul li:hover { color: var(--text); }
        .footer-bottom {
          border-top: 1px solid var(--border); padding-top: 2rem;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 1rem;
        }
        .footer-copy { font-size: 0.75rem; color: var(--muted); }
        .gold-divider {
          width: 60px; height: 1px; background: var(--gold); opacity: 0.4;
          margin: 1.2rem auto;
        }

        @media (max-width: 900px) {
          .nav-links { display: none; }
          .hero-stats { display: none; }
          .map-container { grid-template-columns: 1fr; }
          .footer-top { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .footer-top { grid-template-columns: 1fr; }
          .listings-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">Harshit's<span>estate</span></div>
        <ul className="nav-links">
          <li><a href="#listings">Properties</a></li>
          <li><a href="#map">Locations</a></li>
          <li><a href="#tour">Virtual Tours</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="nav-cta" onClick={() => setContactOpen(true)}>Book Viewing</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grain" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-eyebrow">Luxury Real Estate</div>
          <h1 className="hero-title">
            Where <em>Prestige</em><br />Meets Architecture
          </h1>
          <p className="hero-sub">
            Discover Mumbai's most exclusive properties — curated for those who demand nothing less than extraordinary.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => document.getElementById('listings').scrollIntoView({behavior:'smooth'})}>
              Explore Properties
            </button>
            <button className="btn-outline" onClick={() => setContactOpen(true)}>
              Private Consultation
            </button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-num">240+</div>
            <div className="stat-label">Properties Sold</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">₹2,400Cr</div>
            <div className="stat-label">Total Value</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">18+</div>
            <div className="stat-label">Years in Market</div>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          Scroll
        </div>
      </section>

      {/* SEARCH */}
      <section className="search-section">
        <div className="search-bar">
          <div className="search-input-wrap">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              className="search-input"
              placeholder="Search by name or location…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="filter-pills">
            {types.map(t => (
              <button
                key={t}
                className={`pill${typeFilter === t ? ' active' : ''}`}
                onClick={() => setTypeFilter(t)}
              >{t}</button>
            ))}
          </div>
        </div>
      </section>

      {/* LISTINGS */}
      <section id="listings" className="listings-section">
        <div className="section-header">
          <div className="section-eyebrow">Curated Selection</div>
          <h2 className="section-title">Our <em>Finest</em> Properties</h2>
          <div className="gold-divider" />
        </div>
        <div className="listings-grid">
          {filtered.length === 0 && (
            <p className="no-results">No properties match your search.</p>
          )}
          {filtered.map(p => (
            <div key={p.id} className="prop-card">
              <div className="prop-img-wrap">
                <img className="prop-img" src={p.img} alt={p.title} />
                <div
                  className="prop-tag"
                  style={{ background: tagColors[p.tag] + '22', color: tagColors[p.tag], border: `1px solid ${tagColors[p.tag]}55` }}
                >{p.tag}</div>
                <button className="prop-tour-btn" onClick={() => { setTourProp(p); setTourIdx(0); }}>
                  ▶ Virtual Tour
                </button>
              </div>
              <div className="prop-body">
                <div className="prop-type">{p.type}</div>
                <div className="prop-title">{p.title}</div>
                <div className="prop-location">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  {p.location}
                </div>
                <div className="prop-meta">
                  <div className="meta-item">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/>
                    </svg>
                    {p.beds} Beds
                  </div>
                  <div className="meta-item">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 6l2 2 4-4"/><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                    </svg>
                    {p.baths} Baths
                  </div>
                  <div className="meta-item">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                    </svg>
                    {p.sqft} sq.ft
                  </div>
                </div>
                <div className="prop-footer">
                  <div className="prop-price">{p.price}</div>
                  <button className="prop-cta" onClick={() => setContactOpen(true)}>Enquire</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section id="map" className="map-section">
        <div className="section-header">
          <div className="section-eyebrow">Prime Locations</div>
          <h2 className="section-title">Explore the <em>Map</em></h2>
          <div className="gold-divider" />
        </div>
        <div className="map-container">
          <div className="map-sidebar">
            <h3>All Listings</h3>
            {properties.map(p => (
              <div key={p.id} className="map-prop-item">
                <div className="map-prop-name">{p.title}</div>
                <div className="map-prop-loc">{p.location}</div>
                <div className="map-prop-price">{p.price}</div>
              </div>
            ))}
          </div>
          <div className="map-visual">
            <iframe
              className="map-embed"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d120943.64889009485!2d72.87770!3d19.07283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              title="Mumbai Properties Map"
            />
            <div className="map-overlay-badge">
              <p>Viewing Area</p>
              <h4>Mumbai, Maharashtra</h4>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <div className="nav-logo" style={{fontSize:'1.4rem'}}>Harshit<span style={{color:'var(--text)',fontStyle:'italic'}}>estate</span></div>
            <p>Mumbai's premier luxury real estate agency. We specialise in ultra-premium residential properties for discerning buyers.</p>
          </div>
          <div className="footer-col">
            <h4>Properties</h4>
            <ul>
              <li>Penthouses</li>
              <li>Villas</li>
              <li>Apartments</li>
              <li>Estates</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Our Agents</li>
              <li>Press</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>+91 99717771019</li>
              <li>harshit@bca.in</li>
              <li>Lower Parel, Mumbai</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Harshitestate. All rights reserved.</p>
          <p className="footer-copy" style={{color:'var(--border)'}}>Privacy · Terms · Sitemap</p>
        </div>
      </footer>

      {/* VIRTUAL TOUR MODAL */}
      {tourProp && (
        <div className="modal-overlay" onClick={() => setTourProp(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setTourProp(null)}>✕</button>
            <div className="tour-img-wrap">
              <img className="tour-img" src={tourProp.gallery[tourIdx]} alt="Tour" />
              <div className="tour-nav">
                <button className="tour-nav-btn" onClick={() => setTourIdx(i => (i - 1 + tourProp.gallery.length) % tourProp.gallery.length)}>‹</button>
                <button className="tour-nav-btn" onClick={() => setTourIdx(i => (i + 1) % tourProp.gallery.length)}>›</button>
              </div>
              <div className="tour-counter">{tourIdx + 1} / {tourProp.gallery.length}</div>
            </div>
            <div className="tour-thumbs">
              {tourProp.gallery.map((img, i) => (
                <div key={i} className={`tour-thumb${tourIdx === i ? ' active' : ''}`} onClick={() => setTourIdx(i)}>
                  <img src={img} alt={`View ${i+1}`} />
                </div>
              ))}
            </div>
            <div className="tour-info">
              <h3>{tourProp.title}</h3>
              <p>{tourProp.location} · {tourProp.price}</p>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT MODAL */}
      {contactOpen && (
        <div className="modal-overlay" onClick={() => setContactOpen(false)}>
          <div className="contact-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setContactOpen(false)}>✕</button>
            <div className="hero-eyebrow" style={{justifyContent:'flex-start',marginBottom:'0.75rem'}}>Get in Touch</div>
            <h2 className="contact-title">Book a Private Viewing</h2>
            <p className="contact-sub">Our specialists will reach out within 24 hours.</p>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input className="form-input" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" placeholder="you@example.com" type="email" />
            </div>
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input className="form-input" placeholder="+91 98200 00000" />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-textarea" placeholder="I'm interested in…" />
            </div>
            <button className="btn-primary" style={{width:'100%',marginTop:'0.5rem'}} onClick={() => setContactOpen(false)}>
              Submit Enquiry
            </button>
          </div>
        </div>
      )}
    </>
  );
}