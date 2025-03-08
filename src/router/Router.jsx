import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AuthControl from "../middlewares/authControl/AuthControl";
import AuthContext from "../contexts/AuthContext";
import { appRoute, loginRoute } from "./routes";
import AuthorityGuard from "../middlewares/authControl/AuthorityGuard";

// const Main = lazy(() => import("../pages/Main"));
// const Home = lazy(() => import("../pages/Home"));
// const BookDetail = lazy(() => import("../pages/BookDetail"));
// const BookUpdate = lazy(() => import("../pages/BookUpdate"));
// const BookCreate = lazy(() => import("../pages/BookCreate"));
// const Login = lazy(() => import("../pages/Login"));

const Router = () => {
  return (
    <>
      <Routes>
        {/* <Route
          path="/login"
          element={
            <Suspense>
              <Login />
            </Suspense>
          }
        /> */}
        {loginRoute.map((route, index) => (
          <Route
            key={route.key + index}
            path={route.path}
            element={
              <Suspense>
                <route.component />
              </Suspense>
            }
          />
        ))}
      </Routes>
      <AuthControl>
        <Routes>
          {/* <Route
            path="/"
            element={
              <Suspense>
                <Main />
              </Suspense>
            }
          >
            <Route
              path="/"
              element={
                <Suspense>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="book-detail/:bookId"
              element={
                <Suspense>
                  <BookDetail />
                </Suspense>
              }
            />
            <Route
              path="book-update/:bookId"
              element={
                <Suspense>
                  <BookUpdate />
                </Suspense>
              }
            />
            <Route
              path="book-create"
              element={
                <Suspense>
                  <BookCreate />
                </Suspense>
              }
            />
          </Route> */}
          {appRoute.map((route, index) => (
            <Route
              key={route.key + index}
              path={route.path}
              element={
                <AuthorityGuard authority={route.authority}>
                  <Suspense>
                    <route.component />
                  </Suspense>
                </AuthorityGuard>
              }
            >
              {route.subRoutes.length &&
                route.subRoutes.map((subRoute, index) => (
                  <Route
                    key={subRoute.key + index}
                    path={subRoute.path}
                    element={
                      <AuthorityGuard authority={subRoute.authority}>
                        <Suspense>
                          <subRoute.component />
                        </Suspense>
                      </AuthorityGuard>
                    }
                  />
                ))}
            </Route>
          ))}
        </Routes>
      </AuthControl>
    </>
  );
};

export default Router;
