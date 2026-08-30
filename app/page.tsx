"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;

const faqs = [
  ["Brauche ich Erfahrung mit Pflanzen?", "Nein. Virela misst Feuchtigkeit und Temperatur und sagt dir verständlich, was deine Pflanzen brauchen. Du entscheidest, wie viel du selbst machen möchtest."],
  ["Passt Virela auf jeden Balkon?", "Ein Virela-Modul ist nur 62 cm breit und 24 cm tief. Die Füße lassen sich ausgleichen, deshalb steht es auch auf leicht unebenen Balkonböden stabil."],
  ["Funktioniert die Bewässerung ohne App?", "Ja. Der integrierte Speicher bewässert automatisch. Die App liefert zusätzliche Einblicke, Erinnerungen und Pflanzentipps, ist aber für den täglichen Betrieb nicht nötig."],
  ["Wann ist Virela erhältlich?", "Das hier gezeigte Produkt ist ein fiktives Startup-Konzept. Für dieses Portfolio-Projekt findet kein echter Verkauf statt."],
];

function LeafMark() {
  return <svg viewBox="0 0 36 36" aria-hidden="true"><path d="M29.5 5.5C19.4 5.8 10.9 9.4 8.1 17.1c-1.9 5.3.4 10.9 5.5 13.4 1.2-8.1 5-13.3 11.9-17.4-5.1 4.7-8.1 10-9 16.2 6.2.3 11.7-3.7 13.2-9.6 1.1-4.4.5-9.2-.2-14.2Z" /></svg>;
}

function Icon({ type }: { type: "drop" | "sun" | "grid" | "phone" }) {
  const paths = {
    drop: <><path d="M12 2S5.5 9.2 5.5 14.6a6.5 6.5 0 0 0 13 0C18.5 9.2 12 2 12 2Z"/><path d="M9.3 16.5c.8 1.3 2 1.9 3.6 1.8"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M17.5 14v7M14 17.5h7"/></>,
    phone: <><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4"/></>,
  };
  return <svg className="feature-icon" viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Virela Startseite"><span className="brand-mark"><LeafMark /></span><span>virela</span></a>
        <button className="menu-button" type="button" aria-label="Navigation öffnen" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <nav className={menuOpen ? "nav-open" : ""} aria-label="Hauptnavigation">
          <a href="#produkt" onClick={() => setMenuOpen(false)}>Produkt</a>
          <a href="#so-funktionierts" onClick={() => setMenuOpen(false)}>So funktioniert’s</a>
          <a href="#mission" onClick={() => setMenuOpen(false)}>Mission</a>
          <a className="button button-small" href="#warten" onClick={() => setMenuOpen(false)}>Early Access</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="demo-notice">Portfolio-Demonstrationsprojekt · Kein reales Produkt</span>
          <span className="eyebrow"><i /> Smart wachsen. Einfach genießen.</span>
          <h1>Dein Garten beginnt auf <em>zwei Quadratmetern.</em></h1>
          <p>Virela verbindet intelligente Bewässerung mit zeitlosem Design – für frische Kräuter und Gemüse mitten in der Stadt.</p>
          <div className="hero-actions"><a className="button" href="#warten">Platz vormerken <span>↗</span></a><a className="text-link" href="#so-funktionierts">Entdecke Virela <span>↓</span></a></div>
          <div className="micro-proof"><div className="avatar-stack" aria-hidden="true"><b>A</b><b>M</b><b>J</b></div><p><strong>1.240+ Stadtgärtner:innen</strong><br />warten auf die erste Ernte.</p></div>
        </div>
        <div className="hero-visual">
          <Image src={assetPath("/images/virela-hero.webp")} width={1693} height={929} priority alt="Virela Smart Planter mit frischen Kräutern auf einem sonnigen Stadtbalkon" />
          <div className="status-card"><small>Feuchtigkeit</small><strong>Optimal</strong><span>68%</span></div>
          <p className="hero-caption">01 — Der smarte Stadtgarten</p>
        </div>
      </section>

      <section className="trust-strip" aria-label="Produktvorteile"><p>Entwickelt für das echte Stadtleben</p><div><span>○</span> Bis zu 60 % Wasser sparen</div><div><span>◌</span> Modular erweiterbar</div><div><span>✦</span> Ohne grünen Daumen</div></section>

      <section className="section intro-section" id="produkt">
        <div><span className="section-index">02 / PRODUKT</span><h2>Mehr Ernte.<br /><em>Weniger Aufwand.</em></h2></div>
        <p>Ein Pflanzsystem, das mitdenkt. Virela kennt das Mikroklima auf deinem Balkon und versorgt jede Pflanze genau dann, wenn sie es braucht.</p>
      </section>

      <section className="feature-grid section">
        <article className="feature-card feature-card-large">
          <div><Icon type="drop" /><span className="card-number">01</span></div>
          <h3>Bewässert, bevor<br />du daran denkst.</h3>
          <p>Sensoren messen direkt an der Wurzel. Der 12-Liter-Speicher versorgt deine Pflanzen bis zu drei Wochen lang.</p>
          <div className="meter"><span style={{width: "68%"}} /><b>68 %</b><small>optimale Feuchtigkeit</small></div>
        </article>
        <article className="feature-image-card"><Image src={assetPath("/images/virela-detail.webp")} width={1536} height={1024} alt="Feuchtigkeitssensor in der Erde neben frischem Basilikum" /><div><span>Präzise an der Wurzel</span><strong>± 2 % Messgenauigkeit</strong></div></article>
        <article className="feature-card"><div><Icon type="sun" /><span className="card-number">02</span></div><h3>Versteht dein Mikroklima.</h3><p>Sonne, Temperatur und Standort fließen automatisch in den Gießplan ein.</p></article>
        <article className="feature-card accent-card"><div><Icon type="grid" /><span className="card-number">03</span></div><h3>Wächst einfach mit.</h3><p>Starte mit einem Modul und erweitere deinen Stadtgarten, wann immer du möchtest.</p><div className="module-visual"><i /><i /><i /></div></article>
      </section>

      <section className="steps-section" id="so-funktionierts">
        <div className="section steps-heading"><span className="section-index light">03 / SO FUNKTIONIERT’S</span><h2>Drei Schritte bis<br />zur <em>ersten Ernte.</em></h2></div>
        <div className="steps section">
          <article><span>01</span><div className="step-icon">⌁</div><h3>Aufstellen</h3><p>Modul platzieren, Wasser einfüllen und deine Lieblingspflanzen einsetzen.</p></article>
          <article><span>02</span><div className="step-icon"><Icon type="phone" /></div><h3>Verbinden</h3><p>Virela erkennt Standort und Pflanzen und erstellt einen passenden Pflegeplan.</p></article>
          <article><span>03</span><div className="step-icon">✦</div><h3>Genießen</h3><p>Zurücklehnen, wachsen lassen und frische Kräuter direkt vom Balkon ernten.</p></article>
        </div>
      </section>

      <section className="story section" id="mission">
        <div className="story-image"><Image src={assetPath("/images/virela-lifestyle.webp")} width={1774} height={887} alt="Eine junge Frau pflegt Kräuter in ihrem Stadtgarten" /><span>Berlin, 18:42 Uhr</span></div>
        <div className="story-copy"><span className="section-index">04 / UNSERE MISSION</span><h2>Stadtluft trifft<br /><em>Ernteglück.</em></h2><p>Wir glauben, dass gutes Essen nicht weit reisen muss. Deshalb bringen wir essbare Natur dorthin, wo Menschen leben – auf Balkone, Terrassen und in kleine Höfe.</p><blockquote>„Der kürzeste Weg zu gutem Essen beginnt vor deiner Balkontür.“</blockquote><p className="signature">— Das Virela Team</p></div>
      </section>

      <section className="impact-section">
        <div className="section-index">05 / WAS ZÄHLT</div>
        <div className="impact-grid"><div><strong>60<sup>%</sup></strong><span>weniger Wasser</span></div><div><strong>3<sup>Wo.</sup></strong><span>autonome Pflege</span></div><div><strong>100<sup>%</sup></strong><span>recycelbare Schale</span></div></div>
        <p>Gestaltet für viele Saisons – reparierbar, modular und ressourcenschonend.</p>
      </section>

      <section className="media-section section">
        <div><span className="section-index">06 / MEDIENKIT</span><h2>Die Virela<br /><em>Bildwelt.</em></h2><p>Alle für dieses Projekt erstellten Motive kannst du direkt herunterladen.</p></div>
        <div className="download-grid">
          <a href={assetPath("/images/virela-hero.webp")} download><Image src={assetPath("/images/virela-hero.webp")} width={1693} height={929} alt="Hero-Motiv Vorschau" /><span>Hero-Motiv <b>WEBP ↓</b></span></a>
          <a href={assetPath("/images/virela-lifestyle.webp")} download><Image src={assetPath("/images/virela-lifestyle.webp")} width={1774} height={887} alt="Lifestyle-Motiv Vorschau" /><span>Lifestyle <b>WEBP ↓</b></span></a>
          <a href={assetPath("/images/virela-detail.webp")} download><Image src={assetPath("/images/virela-detail.webp")} width={1536} height={1024} alt="Produktdetail Vorschau" /><span>Produktdetail <b>WEBP ↓</b></span></a>
        </div>
      </section>

      <section className="faq-section section"><div><span className="section-index">07 / FRAGEN</span><h2>Noch etwas<br /><em>unklar?</em></h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <article className={openFaq === index ? "faq-open" : ""} key={question}><button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><b>{openFaq === index ? "−" : "+"}</b></button><div><p>{answer}</p></div></article>)}</div></section>

      <section className="signup-section" id="warten">
        <span className="section-index light">08 / EARLY ACCESS</span>
        <h2>Mach Platz für<br /><em>deine erste Ernte.</em></h2>
        <p>Erhalte Projektneuigkeiten und einen Blick hinter die Kulissen dieses fiktiven Startup-Konzepts.</p>
        {submitted ? <div className="success-message" role="status"><span>✓</span><strong>Danke – Demo erfolgreich!</strong><small>In diesem Portfolio-Projekt werden keine Daten versendet.</small></div> : <form onSubmit={handleSubmit}><label className="sr-only" htmlFor="email">E-Mail-Adresse</label><input id="email" type="email" placeholder="deine@email.de" required /><button type="submit">Vormerken <span>↗</span></button></form>}
        <small>Demo-Formular · Keine Speicherung oder Übertragung von Daten</small>
      </section>

      <footer><a className="brand footer-brand" href="#top"><span className="brand-mark"><LeafMark /></span><span>virela</span></a><p>Fiktives Startup-Konzept · Portfolioarbeit<br />Konzeption, Design & Entwicklung</p><div><a href="#produkt">Produkt</a><a href="#mission">Mission</a><a href="#warten">Kontakt</a></div><span>© 2026 Virela Concept</span></footer>
    </main>
  );
}
