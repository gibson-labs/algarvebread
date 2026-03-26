import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      about: "About",
      process: "Process",
      breads: "Breads",
      findMe: "Find Me",
      saturdays: "Saturdays 8–1 PM",
    },
    hero: {
      badge: "🌾 Small Batch · Handcrafted · Local",
      headline1: "Real Sourdough,",
      headline2: "Baked from Scratch.",
      sub: "Wild yeast. Long fermentation. A whole lot of love. The way bread was always meant to be made.",
      cta: "🗺️ Find Me at the Farmers Market",
      ctaSecondary: "See the Breads ↓",
    },
    about: {
      eyebrow: "Meet the Baker",
      headline1: "Hi, I'm Lachlan.",
      headline2: "I Bake Because I Care.",
      badge: '"Baking since 2015"',
      p1: 'I grew up watching my grandmother pull golden loaves from a wood-fired oven in her kitchen. That smell — the tang, the warmth — never left me. Ten years ago, I started my own starter and never looked back.',
      p2: 'Every loaf I bake is made with <strong>locally milled flour, filtered water, and a decade-old starter</strong> I\'ve been feeding every single day. No preservatives. No shortcuts. Just time, tradition, and a whole lot of patience.',
      p3: "I bake out of my home kitchen in Lagos, and I sell every Saturday at the market because I believe good bread deserves to be shared with the people who live nearby. Neighbours feeding neighbours — that's what it's all about.",
      stats: [
        { number: "10+", label: "Years Baking" },
        { number: "12", label: "Bread Varieties" },
        { number: "100%", label: "From Scratch" },
      ],
    },
    process: {
      eyebrow: "Why It's Different",
      headline: "The Process Behind the Loaf",
      sub: "Real sourdough takes time. There's no yeast packet, no dough conditioner, no speed rack. Just the old way — which also happens to be the best way.",
      quote: '"Good bread cannot be rushed. It simply cannot."',
      steps: [
        {
          number: "01", icon: "🌱", title: "The Starter", subtitle: "10+ Years Old",
          description: "Every loaf begins with my decade-old wild yeast starter — fed daily with fresh flour and water. It's alive, active, and the secret behind that unmistakable tangy depth of flavor.",
        },
        {
          number: "02", icon: "⏳", title: "The Long Ferment", subtitle: "24–48 Hours",
          description: "After mixing, the dough cold-ferments in the fridge for a full day or two. This slow rise isn't just for flavor — it breaks down gluten, makes it more digestible, and builds that open, airy crumb.",
        },
        {
          number: "03", icon: "🔥", title: "The Bake", subtitle: "Dutch Oven · 500°F",
          description: "Each loaf bakes covered in a cast iron Dutch oven — trapping steam for a crackling crust you can hear from across the room. Scored by hand, pulled at the perfect golden moment.",
        },
      ],
    },
    gallery: {
      eyebrow: "What's in the Basket",
      headline: "The Bread",
      sub: "Every variety is available Saturday morning — quantities are limited. First come, first served.",
      note: "Seasonal and special varieties rotate throughout the year. Follow along for updates.",
      available: "Available Saturdays at the Market",
      breads: [
        { name: "Classic Country Loaf", description: "Our signature. Mild tang, open crumb, shattering crust.", tag: "Bestseller" },
        { name: "Jalapeño Cheddar", description: "Sharp cheddar pockets and roasted jalapeño heat in every bite.", tag: "Fan Favorite" },
        { name: "Rosemary Olive Oil", description: "Fragrant rosemary pressed into the crust with a silky crumb.", tag: "Savory" },
        { name: "Seeded Multigrain", description: "Sesame, sunflower & flax on top with a dense, nutty interior.", tag: "Hearty" },
        { name: "Cinnamon Raisin", description: "Sweet swirls of cinnamon and plump raisins. Toast it. Trust us.", tag: "Sweet" },
        { name: "Everything Sourdough", description: "All the bagel flavors. All the sourdough magic. Unstoppable.", tag: "New" },
      ],
    },
    findMe: {
      eyebrow: "Come Say Hello",
      headline: "Where to Find Me",
      marketName: "Lagos Farmers Market",
      marketSub: "Every Saturday",
      marketTime: "⏰ 8:00 AM – 1:00 PM",
      marketDesc: "Look for the hand-painted wooden sign and the smell of warm bread. I'll be there every week, rain or shine, with a fresh basket.",
      pills: [
        { icon: "📍", text: "Lagos, Portugal" },
        { icon: "🌤️", text: "Rain or Shine" },
        { icon: "🥖", text: "Limited Quantities" },
        { icon: "💳", text: "Cash & Card" },
      ],
      listTitle: "Join the Bread List",
      listDesc: "Get fresh updates on this week's loaves, seasonal specials, and pre-order opportunities. No spam — just bread.",
      placeholder: "your@email.com",
      cta: "Count Me In 🌾",
      successTitle: "You're on the list!",
      successSub: "See you Saturday morning.",
      followTitle: "Follow Along",
      followDesc: "I post baking updates, process videos, and the weekly lineup every Friday evening. Don't miss a loaf.",
    },
    footer: {
      brand: "🥖 Algarve Bread Co.",
      location: "Handcrafted in Lagos, Algarve, Portugal",
      rights: "© 2026 Algarve Bread Co. All loaves reserved.",
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      process: "Processo",
      breads: "Pães",
      findMe: "Encontra-me",
      saturdays: "Sábados 8–13h",
    },
    hero: {
      badge: "🌾 Pequeno Lote · Artesanal · Local",
      headline1: "Sourdough de Verdade,",
      headline2: "Feito de Raiz.",
      sub: "Fermento selvagem. Fermentação longa. Com muito amor. Como o pão sempre deveria ser feito.",
      cta: "🗺️ Encontra-me na Feira",
      ctaSecondary: "Ver os Pães ↓",
    },
    about: {
      eyebrow: "Conhece o Padeiro",
      headline1: "Olá, sou o Lachlan.",
      headline2: "Faço Pão Porque Me Importo.",
      badge: '"A fazer pão desde 2015"',
      p1: 'Cresci a ver a minha avó tirar pães dourados do forno a lenha. Esse cheiro — a acidez, o calor — nunca me abandonou. Há dez anos, criei o meu próprio fermento e nunca mais olhei para trás.',
      p2: 'Cada pão que faço é preparado com <strong>farinha moída localmente, água filtrada e um fermento com mais de dez anos</strong> que alimento todos os dias. Sem conservantes. Sem atalhos. Apenas tempo, tradição e muita paciência.',
      p3: "Faço o pão na minha cozinha em Lagos e vendo todos os sábados na feira porque acredito que o bom pão merece ser partilhado com quem vive perto. Vizinhos a alimentar vizinhos — é isso que importa.",
      stats: [
        { number: "10+", label: "Anos a Cozer" },
        { number: "12", label: "Variedades" },
        { number: "100%", label: "Do Zero" },
      ],
    },
    process: {
      eyebrow: "Porque É Diferente",
      headline: "O Processo Por Detrás do Pão",
      sub: "O sourdough a sério leva tempo. Não há saquetas de fermento, nem aceleradores. Apenas o método antigo — que também é o melhor.",
      quote: '"O bom pão não pode ser apressado. Simplesmente não pode."',
      steps: [
        {
          number: "01", icon: "🌱", title: "O Fermento", subtitle: "Mais de 10 Anos",
          description: "Cada pão começa com o meu fermento selvagem com mais de uma década — alimentado diariamente com farinha e água frescos. Está vivo, activo, e é o segredo por detrás da profundidade de sabor inconfundível.",
        },
        {
          number: "02", icon: "⏳", title: "A Fermentação Longa", subtitle: "24 a 48 Horas",
          description: "Após misturar, a massa fermenta no frio durante um a dois dias. Esta subida lenta não é só pelo sabor — quebra o glúten, torna o pão mais digerível e cria esse miolo aberto e arejado.",
        },
        {
          number: "03", icon: "🔥", title: "A Cozedura", subtitle: "Forno Holandês · 260°C",
          description: "Cada pão coze dentro de uma panela de ferro fundido — retendo o vapor para uma côdea estaladiça que se ouve do outro lado da sala. Cortado à mão, retirado no momento dourado perfeito.",
        },
      ],
    },
    gallery: {
      eyebrow: "O Que Está no Cesto",
      headline: "Os Pães",
      sub: "Todas as variedades estão disponíveis na manhã de sábado — quantidades limitadas. Primeiro a chegar, primeiro a ser servido.",
      note: "Variedades sazonais e especiais rodam ao longo do ano. Segue para saber as novidades.",
      available: "Disponível aos Sábados na Feira",
      breads: [
        { name: "Pão Rústico Clássico", description: "A nossa assinatura. Acidez suave, miolo aberto, côdea estaladiça.", tag: "Mais Vendido" },
        { name: "Jalapeño e Queijo Cheddar", description: "Bolsas de cheddar afiado e calor de jalapeño assado em cada fatia.", tag: "Favorito" },
        { name: "Alecrim e Azeite", description: "Alecrim perfumado prensado na côdea com um miolo sedoso.", tag: "Salgado" },
        { name: "Multigrãos com Sementes", description: "Sésamo, girassol e linhaça por cima com um interior denso e rico.", tag: "Robusto" },
        { name: "Canela e Passas", description: "Espirais doces de canela e passas suculentas. Tosta-o. Confia em nós.", tag: "Doce" },
        { name: "Sourdough Completo", description: "Todos os sabores de bagel. Toda a magia do sourdough. Irresistível.", tag: "Novo" },
      ],
    },
    findMe: {
      eyebrow: "Vem Dizer Olá",
      headline: "Onde Me Encontrar",
      marketName: "Mercado de Lagos",
      marketSub: "Todos os Sábados",
      marketTime: "⏰ 8:00 – 13:00",
      marketDesc: "Procura o sinal de madeira pintado à mão e o cheiro a pão quente. Estou lá todas as semanas, chuva ou sol, com um cesto fresco.",
      pills: [
        { icon: "📍", text: "Lagos, Portugal" },
        { icon: "🌤️", text: "Chuva ou Sol" },
        { icon: "🥖", text: "Quantidades Limitadas" },
        { icon: "💳", text: "Dinheiro e Cartão" },
      ],
      listTitle: "Junta-te à Lista do Pão",
      listDesc: "Recebe novidades sobre os pães desta semana, especiais sazonais e pré-encomendas. Sem spam — só pão.",
      placeholder: "o.teu@email.com",
      cta: "Conta Comigo 🌾",
      successTitle: "Estás na lista!",
      successSub: "Até sábado de manhã.",
      followTitle: "Segue a Jornada",
      followDesc: "Posto actualizações de cozedura, vídeos do processo e o alinhamento semanal todas as sextas-feiras. Não percas um pão.",
    },
    footer: {
      brand: "🥖 Algarve Bread Co.",
      location: "Feito à mão em Lagos, Algarve, Portugal",
      rights: "© 2026 Algarve Bread Co. Todos os pães reservados.",
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}