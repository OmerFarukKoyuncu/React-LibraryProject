import { lazy } from "react";

export const appRoute = [
  {
    key: "main",
    path: "/",
    component: lazy(() => import("../pages/Main")),
    authority: ["admin", "user"],
    subRoutes: [
      {
        key: "home",
        path: "/",
        component: lazy(() => import("../pages/Home")),
        authority: ["admin", "user"],
      },
      {
        key: "bookDetail",
        path: "book-detail/:bookId",
        component: lazy(() => import("../pages/BookDetail")),
        authority: ["admin", "user"],
      },
      {
        key: "bookCreate",
        path: "book-create",
        component: lazy(() => import("../pages/BookCreate")),
        authority: ["admin"],
      },
      {
        key: "book-update",
        path: "book-update/:bookId",
        component: lazy(() => import("../pages/BookUpdate")),
        authority: ["admin"],
      },
    ],
  },
];

export const loginRoute = [
  {
    key: "login",
    path: "/login",
    component: lazy(() => import("../pages/Login")),
  },
  {
    key: "access-denied",
    path: "/access-denied",
    component: lazy(() => import("../pages/AccessDenied")),
  },
];
