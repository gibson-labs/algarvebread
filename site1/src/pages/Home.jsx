import React, { useEffect, useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import "./bakery.css";

const asset = "https://media.base44.com/images/public/69c45d580787817b3a98b5cb/";
const hero = asset + "952d6e6cd_generated_8a74e6bf.png";
const images = ["806887c1c_generated_7ff52db1.png", "67e5762f8_generated_88c92460.png", "2354b08d6_generated_e2d2e2d8.png", "8a4fc3d5f_generated_3d8815ec.png", "614e7740a_generated_4f3e9094.png", "f588ffa5b_generated_6af0cabd.png"];
const copy = {
  en: {
    nav: ["The bread", "Our approach", "Market days"], location: "Lagos, Algarve · Portugal", skip: "Skip to content",
    eyebrow: "A small bakery by the sea", title: <>Good bread.<br /><em>Slow mornings.</em></>,
    intro: "Sourdough by Lachlan, baked in Lagos. A crackling crust, a soft centre, and something worth making time for.",
    browse: "Explore the bread", visit: "Find us on Saturday", saturday: "Every Saturday", time: "08:00–13:00", market: "Lagos Farmers Market",
    caption: "Flour. Water. Time.", caption2: "Sourdough, at its simplest.",
    rangeLabel: "01 / The bread", rangeTitle: <>A loaf for<br /><em>your table.</em></>, rangeIntro: "From the everyday country loaf to something a little different. Ask Lachlan what’s in this week’s bake.",
    breads: [
      ["Country sourdough", "The everyday loaf", "A crisp crust and a gently tangy crumb. For thick slices, morning toast, and the last of the olive oil."],
      ["Rosemary & olive oil", "Herby & savoury", "Rosemary and olive oil in a soft sourdough loaf. Made for the middle of the table."],
      ["Jalapeño & cheddar", "A little heat", "Sharp cheddar and jalapeño folded through sourdough. Good on its own, even better toasted."],
      ["Seeded multigrain", "Texture in every slice", "A hearty loaf with a mixture of seeds and a nutty crumb."],
      ["Cinnamon & raisin", "For slower breakfasts", "Cinnamon and raisins through sourdough. Slice, toast, and add butter."],
      ["Everything sourdough", "A savoury finish", "A sourdough loaf with an everything-style topping."],
    ], more: "See all six loaves", less: "Show the first three", enquire: "Ask about this loaf", subject: "A question about your ",
    approachLabel: "02 / Our approach", approachTitle: <>A little flour.<br />A lot of <em>patience.</em></>,
    approachIntro: "Sourdough is a process, not a flavour added at the end. The starter, the fermentation, and the bake each have their part to play.",
    steps: [["Start with a culture", "Flour and water feed a living sourdough starter. That’s where the loaf begins."], ["Give it time", "The dough develops as it rests. Fermentation brings flavour and character to the crumb."], ["Bake for the crust", "Heat transforms the shaped dough into a loaf with a crisp exterior and a soft centre."]],
    bakerLabel: "Made by Lachlan", bakerTitle: "Bread from Lagos, for the people around it.", bakerText: "Algarve Bread Co. is Lachlan’s small-batch sourdough bakery in Lagos. Come to the market, ask about the bread, and find a loaf for your table.",
    marketLabel: "03 / Market days", marketTitle: <>See you<br /><em>on Saturday.</em></>, marketIntro: "Come for a loaf. Stay for a chat. Find Algarve Bread Co. at the Lagos Farmers Market.", day: "When", where: "Where", marketPlace: "Lagos, Algarve, Portugal", marketNote: "Looking for a particular loaf? Get in touch before you visit to check the week’s selection.", contact: "Ask Lachlan", faq: "A few things to know",
    questions: [["Can I reserve a loaf?", "Email Lachlan with the loaf and date you have in mind. Availability and collection arrangements need to be confirmed directly."], ["Which breads will be at the market?", "The selection can vary. Ask about the next bake before making a special trip for a particular loaf."], ["Where can I find ingredient information?", "Get in touch with Lachlan for the ingredients and allergen information for a specific loaf."]],
    footerLine: "Sourdough. Lagos. Algarve.", top: "Back to top", email: "Get in touch", rights: "All rights reserved.", menu: "Menu", close: "Close menu",
  },
  pt: {
    nav: ["O pão", "Como fazemos", "No mercado"], location: "Lagos, Algarve · Portugal", skip: "Saltar para o conteúdo",
    eyebrow: "Uma pequena padaria à beira-mar", title: <>Bom pão.<br /><em>Manhãs sem pressa.</em></>,
    intro: "Pão de massa mãe feito pelo Lachlan, em Lagos. Uma crosta estaladiça, um miolo macio e um bom motivo para abrandar.",
    browse: "Conhecer os pães", visit: "Encontre-nos ao sábado", saturday: "Todos os sábados", time: "08:00–13:00", market: "Mercado de Produtores de Lagos",
    caption: "Farinha. Água. Tempo.", caption2: "Massa mãe, na sua essência.",
    rangeLabel: "01 / O pão", rangeTitle: <>Um pão para<br /><em>a sua mesa.</em></>, rangeIntro: "Do pão de todos os dias a sabores diferentes. Pergunte ao Lachlan o que vai sair do forno esta semana.",
    breads: [
      ["Pão de massa mãe", "O pão de todos os dias", "Uma crosta estaladiça e um miolo ligeiramente ácido. Para fatias generosas, torradas e um fio de azeite."],
      ["Alecrim e azeite", "Aromático e salgado", "Alecrim e azeite num pão de massa mãe macio. Para partilhar à mesa."],
      ["Jalapeño e cheddar", "Um toque picante", "Queijo cheddar e jalapeño envolvidos na massa. Bom simples, ainda melhor torrado."],
      ["Multicereais com sementes", "Textura em cada fatia", "Um pão consistente com uma mistura de sementes e um miolo de sabor intenso."],
      ["Canela e passas", "Para pequenos-almoços sem pressa", "Canela e passas na massa mãe. Corte, torre e junte manteiga."],
      ["Massa mãe com cobertura everything", "Um acabamento salgado", "Pão de massa mãe com uma cobertura de temperos ao estilo everything."],
    ], more: "Ver os seis pães", less: "Mostrar os primeiros três", enquire: "Perguntar sobre este pão", subject: "Uma pergunta sobre o pão ",
    approachLabel: "02 / Como fazemos", approachTitle: <>Um pouco de farinha.<br />Muita <em>paciência.</em></>,
    approachIntro: "A massa mãe é um processo, não um sabor acrescentado no fim. O fermento, a fermentação e a cozedura têm cada um o seu papel.",
    steps: [["Tudo começa no fermento", "Farinha e água alimentam uma cultura viva de massa mãe. É aqui que o pão começa."], ["Dar tempo ao tempo", "A massa desenvolve-se enquanto descansa. A fermentação dá sabor e carácter ao miolo."], ["Cozer até ganhar crosta", "O calor transforma a massa moldada num pão de crosta estaladiça e miolo macio."]],
    bakerLabel: "Feito pelo Lachlan", bakerTitle: "Pão de Lagos, para quem está por perto.", bakerText: "A Algarve Bread Co. é a pequena padaria de massa mãe do Lachlan, em Lagos. Passe pelo mercado, converse sobre pão e encontre um para a sua mesa.",
    marketLabel: "03 / No mercado", marketTitle: <>Até<br /><em>sábado.</em></>, marketIntro: "Venha buscar um pão. Fique para conversar. Encontre a Algarve Bread Co. no Mercado de Produtores de Lagos.", day: "Quando", where: "Onde", marketPlace: "Lagos, Algarve, Portugal", marketNote: "Procura um pão em particular? Entre em contacto antes da visita para confirmar a seleção da semana.", contact: "Falar com o Lachlan", faq: "Antes de nos visitar",
    questions: [["Posso reservar um pão?", "Envie um email ao Lachlan com o pão e a data pretendidos. A disponibilidade e a recolha precisam de ser confirmadas diretamente."], ["Que pães vão estar no mercado?", "A seleção pode variar. Pergunte pela próxima fornada antes de se deslocar à procura de um pão específico."], ["Onde posso consultar os ingredientes?", "Contacte o Lachlan para saber os ingredientes e a informação sobre alergénios de cada pão."]],
    footerLine: "Massa mãe. Lagos. Algarve.", top: "Voltar ao topo", email: "Entre em contacto", rights: "Todos os direitos reservados.", menu: "Menu", close: "Fechar menu",
  },
};

function BreadMark() {
  return <svg aria-hidden="true" viewBox="0 0 52 52" fill="none"><path d="M9 32c0-12 7-23 17-23s17 11 17 23c0 8-5 11-17 11S9 40 9 32Z" stroke="currentColor" strokeWidth="1.5"/><path d="m18 21 7 6m-3-12 9 8m-15 9 7 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
export default function Home() {
  const { lang, setLang } = useLang();
  const t = copy[lang];
  const [expanded, setExpanded] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => { document.documentElement.lang = lang; document.title = lang === "pt" ? "Algarve Bread Co. — Pão de massa mãe em Lagos" : "Algarve Bread Co. — Sourdough in Lagos"; }, [lang]);
  const email = (subject = "") => `mailto:lachlan@algarvebreadco.com${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
  return <div className="bakery" id="top">
    <a href="#main" className="bakery-skip">{t.skip}</a>
    <div className="bakery-masthead"><span>{t.location}</span><a href="#find-me">{t.saturday} · {t.time} <span aria-hidden="true">↗</span></a></div>
    <header className="bakery-header">
      <a className="bakery-brand" href="#top" aria-label="Algarve Bread Co. — home"><BreadMark/><span>Algarve<br/><small>BREAD CO.</small></span></a>
      <nav className="desktop-nav" aria-label={lang === "pt" ? "Navegação principal" : "Main navigation"}>{["breads", "process", "find-me"].map((id,i)=><a href={`#${id}`} key={id}>{t.nav[i]}</a>)}</nav>
      <div className="header-actions"><div className="language-switch" aria-label="Language"><button aria-pressed={lang === "en"} onClick={()=>setLang("en")}>EN</button><span>/</span><button aria-pressed={lang === "pt"} onClick={()=>setLang("pt")}>PT</button></div><button className="mobile-menu-button" aria-expanded={menu} aria-controls="mobile-nav" onClick={()=>setMenu(!menu)}>{menu ? t.close : t.menu}</button></div>
    </header>
    {menu && <nav id="mobile-nav" className="mobile-nav" aria-label={t.menu}>{["breads", "process", "find-me"].map((id,i)=><a key={id} href={`#${id}`} onClick={()=>setMenu(false)}>{t.nav[i]} <span aria-hidden="true">↗</span></a>)}</nav>}
    <main id="main" tabIndex={-1}>
      <section className="bakery-hero">
        <div className="hero-copy"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p className="hero-intro">{t.intro}</p><a href="#breads" className="bakery-button">{t.browse}<span aria-hidden="true">↗</span></a><a href="#find-me" className="hero-market">{t.visit}<span aria-hidden="true">→</span></a></div>
        <figure className="hero-photo"><img src={hero} alt={lang === "en" ? "A round sourdough loaf on a wooden board" : "Pão de massa mãe numa tábua de madeira"} fetchpriority="high"/><figcaption><span>{t.caption}</span><span>{t.caption2}</span></figcaption><span className="photo-label" aria-hidden="true">LAGOS<br/>ALGARVE</span></figure>
      </section>
      <div className="bakery-note"><span>ALGARVE BREAD CO.</span><p>{t.footerLine}</p><span aria-hidden="true">FEITO EM LAGOS</span></div>
      <section className="bread-section section-shell" id="breads">
        <div className="section-intro"><div><p className="eyebrow">{t.rangeLabel}</p><h2>{t.rangeTitle}</h2></div><p>{t.rangeIntro}</p></div>
        <div className="bread-grid" id="bread-range">{t.breads.slice(0,expanded ? 6 : 3).map(([name,kind,description],i)=><article className="bread-item" key={images[i]}><div className="bread-photo"><img loading="lazy" src={asset+images[i]} alt={name}/><span className="bread-number">0{i+1}</span></div><p className="eyebrow bread-kind">{kind}</p><h3>{name}</h3><p className="bread-description">{description}</p><a className="text-link" href={email(t.subject+name)}>{t.enquire}<span aria-hidden="true">↗</span></a></article>)}</div>
        <button className="range-toggle" aria-expanded={expanded} aria-controls="bread-range" onClick={()=>setExpanded(!expanded)}>{expanded ? t.less : t.more}<span aria-hidden="true">{expanded ? "−" : "+"}</span></button>
      </section>
      <section className="process-section" id="process"><div className="section-shell"><p className="eyebrow">{t.approachLabel}</p><div className="process-intro"><h2>{t.approachTitle}</h2><p>{t.approachIntro}</p></div><div className="process-steps">{t.steps.map(([title,text],i)=><article key={i}><span className="step-number">0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="baker-section section-shell" id="about"><span className="baker-monogram" aria-hidden="true">L.</span><div><p className="eyebrow">{t.bakerLabel}</p><h2>{t.bakerTitle}</h2><p>{t.bakerText}</p></div></section>
      <section className="market-section section-shell" id="find-me"><div className="market-copy"><p className="eyebrow">{t.marketLabel}</p><h2>{t.marketTitle}</h2><p>{t.marketIntro}</p><a className="bakery-button" href={email()}>{t.contact}<span aria-hidden="true">↗</span></a></div><div className="market-ticket"><div className="ticket-heading"><BreadMark/><span>ALGARVE BREAD CO.<br/><small>LAGOS · PORTUGAL</small></span></div><dl><div><dt>{t.day}</dt><dd>{t.saturday}<strong>{t.time}</strong></dd></div><div><dt>{t.where}</dt><dd>{t.market}<small>{t.marketPlace}</small></dd></div></dl><p>{t.marketNote}</p><a href={email()}>lachlan@algarvebreadco.com <span aria-hidden="true">↗</span></a></div></section>
      <section className="faq-section section-shell"><h2>{t.faq}</h2><div>{t.questions.map(([q,a])=><details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>
    </main>
    <footer className="bakery-footer"><div className="footer-top"><p>{t.footerLine}</p><a href="#top">{t.top} ↑</a></div><p className="footer-wordmark">Algarve Bread Co.</p><div className="footer-bottom"><span>© {new Date().getFullYear()} Algarve Bread Co.</span><span>Lagos, Portugal</span><a href={email()}>{t.email} ↗</a></div></footer>
  </div>;
}
