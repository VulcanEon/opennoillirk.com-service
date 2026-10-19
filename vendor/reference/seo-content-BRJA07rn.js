var e = [
    {
      question: `Is Sky Climb a different game from OpenNoillirk?`,
      answer: `No. It's the same game on another stage: the same daily prompts, the same 30 seconds, the same board and the same points. Only the picture changes, from a crowd on a tabletop to a krill on balloons.`,
    },
    {
      question: `Does a Daily I play here count on the home page?`,
      answer: `Yes. Both pages play today's Daily and keep it in the same place in this browser. Finish it here and the home page shows your result; stop halfway and either page picks up where you left off.`,
    },
    {
      question: `How high can the krill go?`,
      answer: `A perfect Daily of 2,500 points reaches 14.0 km, up in the jet stream. A perfect 20-prompt Unlimited run reaches the mesosphere, and an endless run keeps rising past the aurora into low Earth orbit.`,
    },
    {
      question: `Do I need an account or an app?`,
      answer: `No. Sky Climb is free and runs in the browser on a phone or a computer, with no sign-up. Your progress, your best heights and your streak are saved in this browser.`,
    },
    {
      question: `Can I play on the tabletop instead?`,
      answer: `Yes. The home page has both stages, with a switch on its start screen, and it remembers the one you pick. This page always plays Sky Climb.`,
    },
  ],
  t = `https://opennoillirk.com`.replace(/\/+$/, ``),
  n = `/og.png`,
  r = {
    locale: `en`,
    type: `website`,
    siteName: `OpenNoillirk`,
    alternates: !1,
    image: n,
    imageAlt: `OpenNoillirk: a crowd of wooden figurines fills one large tile while a raspberry figurine stands on the top step of a small podium in front.`,
  },
  i = {
    "@context": `https://schema.org`,
    "@type": `WebApplication`,
    applicationCategory: `GameApplication`,
    operatingSystem: `Web browser`,
    browserRequirements: `Requires JavaScript`,
    inLanguage: `en`,
    isAccessibleForFree: !0,
    offers: { "@type": `Offer`, price: `0`, priceCurrency: `USD` },
  },
  a = {
    ...r,
    title: `Noillirk Game — Daily & Unlimited | OpenNoillirk`,
    description: `Play the Noillirk game free: Daily 10, Sky Climb, Tabletop and Unlimited. Guess the most common answer, climb higher and challenge friends on OpenNoillirk.`,
    keywords: [`noillirk`, `noillirk game`, `noillirk daily`, `noillirk unlimited`, `sky climb`, `tabletop game`],
    canonicalPath: `/`,
    ldJson: {
      ...i,
      name: `OpenNoillirk`,
      url: `${t}/`,
      description: `A free daily game where the most common answer wins: ten 30-second prompts a day, five bands from Off the Board to #1 Answer, a crowd of 100 to win over and challenge links for friends.`,
    },
  },
  o = {
    ...r,
    title: `OpenNoillirk Unlimited — Free, No Daily Limit`,
    description: `Play OpenNoillirk Unlimited: 10, 20 or endless prompts, free with no account. The more people would give your answer, the more of the crowd you pull.`,
    canonicalPath: `/unlimited`,
    ldJson: {
      ...i,
      name: `OpenNoillirk Unlimited`,
      url: `${t}/unlimited`,
      description: `OpenNoillirk Unlimited: runs of 10, 20 or endless prompts from the whole question bank, 30 seconds each, with no paywall and no account.`,
    },
  },
  { "@context": s, ...c } = i,
  l = {
    ...r,
    title: `Sky Climb — OpenNoillirk's Balloon Trivia Game`,
    description: `Sky Climb is OpenNoillirk's free balloon trivia game: give the answer most people would and your krill floats higher, from a forest pond up to orbit.`,
    canonicalPath: `/sky-climb`,
    image: `/og.png`,
    imageSize: { width: 1200, height: 630 },
    imageAlt: `Sky Climb, OpenNoillirk's balloon trivia game: the pixel-art krill on three balloons above a forest pond at the first question, and high over the Earth among the green curtains of the aurora.`,
    ldJson: {
      "@context": s,
      "@graph": [
        {
          ...c,
          name: `OpenNoillirk Sky Climb`,
          url: `${t}/sky-climb`,
          description: `The OpenNoillirk Daily on a pixel-art balloon stage: ten 30-second prompts, five bands from Off the Board to #1 Answer, and points that lift a krill through 18 zones from a forest pond to low Earth orbit.`,
        },
        {
          "@type": `FAQPage`,
          mainEntity: e.map((e) => ({
            "@type": `Question`,
            name: e.question,
            acceptedAnswer: { "@type": `Answer`, text: e.answer },
          })),
        },
      ],
    },
  },
  u = {
    ...r,
    title: `How to Play OpenNoillirk: Rules, the Board and Tips`,
    description: `How to play OpenNoillirk: type one answer to each prompt in 30 seconds, see where it lands on the board, pull the crowd your way and keep your streak going.`,
    canonicalPath: `/how-to-play`,
  },
  d = {
    ...r,
    title: `OpenNoillirk Scoring: the Board, Points and Titles`,
    description: `How OpenNoillirk scores: #1 on the board is worth 100 points, the rest of the top ten 25 to 75, any other right answer 10, and later questions count up to 4x.`,
    canonicalPath: `/scoring`,
  },
  f = { locale: `en`, siteName: `OpenNoillirk`, alternates: !1, image: n },
  p = {
    ...f,
    title: `Privacy | OpenNoillirk`,
    description: `How OpenNoillirk handles your game progress, challenge links, sharing and anonymous game statistics.`,
    canonicalPath: `/privacy`,
  },
  m = {
    ...f,
    title: `Terms of Play | OpenNoillirk`,
    description: `The rules and practical limits of playing OpenNoillirk, an independent guess-the-most-common-answer game.`,
    canonicalPath: `/terms`,
  };
export { l as a, e as c, d as i, u as n, m as o, p as r, o as s, a as t };
