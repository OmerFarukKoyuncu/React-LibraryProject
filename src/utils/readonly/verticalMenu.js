export const verticalMenu = [
  {
    id: "home",
    to: "/",
    text: "Anasayfa",
  },
  {
    id: "book",
    text: "Kitaplar",
    click: () => open(),
    sub: [
      {
        id: "bookCreate",
        to: "book-create",
        text: "Yeni Kitap",
      },
    ],
  },
];
