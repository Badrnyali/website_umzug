// export interface Post {
//   id: string;
//   title: string;
//   created: string;
//   markdown: string;
//   html: string;
// }
// export interface TimelinePost extends Omit<Post, "created"> {
//   created: DateTime;
// }
interface IHero {
  title: string;
  checkLists: string[];
  banner: string;
}

interface IInfo {
  title: string;
  description: string;
  image: string;
}
export interface IServices {
  hero: IHero;
  info: IInfo;
}
export const Home = {
  hero: {
    banner: "url('/assets/Banner.jpg')",
    title: "Mit TUKS - Wir machen Ihren Umzug stressfrei!",
    checkLists: ["Umzug leicht gemacht", "Private sowie Firmenumzüge"],
  },
  info: {
    title: "Professionell, schnell und zuverlässig!",
    description:
      "Unser Unternehmen ist ein zuverlässiger und professioneller Umzugsdienstleister in Erlangen. Wir bieten unseren Kunden eine breite Palette an Umzugsdienstleistungen, einschließlich Verpackung, Transport und Montage, um sicherzustellen, dass Ihr Umzug reibungslos und stressfrei verläuft. Mit unserem erfahrenen Team können wir Umzüge jeder Größe und Art durchführen, sowohl lokal als auch national.",
    image: "/assets/Nurnberg.jpg",
  },
};
export const Services = {
  privat: {
    hero: {
      banner: "url('/assets/Banner-3.png')",
      title:
        "Damit der Wohnungsumzug in Ihr neues Zuhause ein schönes Erlebnis wird",
      checkLists: [
        "Ein völlig stressfreier Umzug",
        "Geschultes und erfahrenes Personal",
      ],
    },
    info: {
      title: "Privater Umzug in guten Händen",
      description:
        "Unser Unternehmen ist auf private Umzüge spezialisiert und bietet Ihnen eine breite Palette an Dienstleistungen, um Ihren Umzug so stressfrei wie möglich zu gestalten. Wir kümmern uns um alles, von der Planung und Organisation bis hin zur Montage Ihrer Möbel und dem Transport Ihrer Habseligkeiten.",
      image: "/assets/Banner-2.jpg",
    },
  },
  firma: {
    hero: {
      banner: "url('/assets/Banner-3.png')",
      title: "Professionelle Büroumzüge  – schnell und sicher ans Ziel",
      checkLists: [
        "Individuelle Planung und Beratung",
        "Um nichts selber kümmern",
      ],
    },
    info: {
      title: " Wir bringen Ihr Unternehmen sicher ans Ziel!",
      description:
        "Unser Unternehmen ist Ihr professioneller Partner für Büroumzüge. Wir verstehen, dass ein Büroumzug eine komplexe Angelegenheit sein kann und bieten Ihnen deshalb einen umfassenden Service, um sicherzustellen, dass Ihr Umzug effizient und reibungslos verläuft. Unsere erfahrenen Umzugsteams sind speziell geschult, um alle Arten von Büroausstattungen, von Computern und Druckern bis hin zu schweren Schreibtischen und Aktenschränken, sicher zu transportieren.",
      image: "/assets/Banner.jpg",
    },
  },
  senioren: {
    hero: {
      banner: "url('/assets/Banner-4.png')",
      title: "Sorgenfreier Umzug im Alter mit TUKS!",
      checkLists: [
        "Ein- und Auspacken der Gegenstände und Möbel",
        "Entrümpelung und Sperrmüllentsorgung",
      ],
    },
    info: {
      title: "Ihr zuverlässiger Partner für Privaten Seniorenumzüge",
      description:
        " Unser Unternehmen ist auf die Unterstützung von Senioren bei Umzügen spezialisiert. Wir wissen, dass ein Umzug im Alter eine besondere Herausforderung darstellen kann und bieten deshalb einen umfassenden Service, um sicherzustellen, dass jeder Schritt des Umzugs sorgfältig geplant und ausgeführt wird. Unser erfahrenes Team arbeitet eng mit den Kunden und ihren Familien zusammen, um sicherzustellen, dass der Umzug reibungslos verläuft und der Umzugspartner jederzeit unterstützt wird. Wir kümmern uns um alles, von der Planung und Organisation bis hin zum Verpacken und Transportieren der Habseligkeiten. ",
      image: "/assets/Banner.jpg",
    },
  },
  muell: {
    hero: {
      banner: "url('/assets/Banner-5.png')",
      title: "Schnelle und zuverlässige Entsorgung mit TUKS",
      checkLists: ["Fachgerechte Entsorgung", "Raustragen der Gegenstände"],
    },
    info: {
      title: "Ihr Experte für sperrige Abfälle!",
      description:
        "Unser Unternehmen ist auf die Entsorgung von sperrigen Abfällen spezialisiert und bietet Ihnen schnelle und zuverlässige Dienstleistungen. Wir verstehen, dass die Entsorgung von sperrigen Abfällen eine Herausforderung darstellen kann, insbesondere wenn Sie keine geeigneten Transportmittel oder Abfallcontainer haben.  Ob es sich um alte Möbel, Elektrogeräte oder andere sperrige Abfälle handelt, wir sind Ihr zuverlässiger Partner für eine schnelle und effiziente Entsorgung.",
      image: "/assets/Banner.jpg",
    },
  },
  wohnungsaufloesung: {
    hero: {
      banner: "url('/assets/Banner.jpg')",
      title:
        "Professionelle Wohnungsräumung – schnelle und diskrete Haushaltsauflösung",
      checkLists: ["Planung und Beratung", "Stressfreie Abwicklung"],
    },
    info: {
      title: "Wir machen Platz für Neues!",
      description:
        " Wir sind Ihr professioneller Partner für die Auflösung von Wohnungen. Unser erfahrenes Team sorgt dafür, dass alle Gegenstände fachgerecht entsorgt oder wiederverwertet werden und die Wohnung besenrein übergeben wird. Wir übernehmen die Organisation und Koordination des gesamten Räumungsprozesses und stellen sicher, dass jeder Schritt sorgfältig geplant und ausgeführt wird.",
      image: "/assets/Banner.jpg",
    },
  },
  internationale: {
    hero: {
      banner: "url('/assets/fern.jpg')",
      title:
        "Langstreckenumzüge in Europa - Ihr zuverlässiger Partner für internationale Umzügeg",
      checkLists: ["Planung und Beratung", "Maßgeschneidertes Angebot"],
    },
    info: {
      title: "Wohnungsauflösung mit den Umzugsprofis aus Berlin",
      description:
        "Unser Unternehmen ist auf Langstreckenumzüge innerhalb Europas spezialisiert und bietet Ihnen einen umfassenden Service, um sicherzustellen, dass Ihr Umzug reibungslos und stressfrei verläuft. Wir sorgen auch dafür, dass Ihr Umzug innerhalb des vereinbarten Zeitrahmens und Budgets abgeschlossen wird, um sicherzustellen, dass Sie keine unerwarteten Kosten oder Verzögerungen haben. ",
      image: "/assets/international.jpg",
    },
  },
};
