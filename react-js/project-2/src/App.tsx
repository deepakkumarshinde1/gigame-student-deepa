import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useLayoutEffect, useState } from "react";

import ProtectedRouting from "./components/ProtectedRouting";

const Login = lazy(() => import("./components/Login"));
const ProductDetails = lazy(() => import("./components/ProductDetails"));
const Profile = lazy(() => import("./components/Profile"));
const Home = lazy(() => import("./components/Home"));

function App() {
  let [isAuth, setAuth] = useState<boolean>(true);
  useLayoutEffect(() => {
    // logic for auth check
  }, []);
  return (
    <>
      <button onClick={() => setAuth(!isAuth)}>
        {isAuth ? "Logout" : "Login"}
      </button>
      <Suspense fallback={<p>Loading....</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route
            path=""
            element={<ProtectedRouting isAuth={isAuth} type={true} />}
          >
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route
            path=""
            element={<ProtectedRouting isAuth={isAuth} type={false} />}
          >
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
