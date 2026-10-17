
import {
  lazy,
  Suspense,
} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Loader from "./Home/components/Loader.jsx";
const HomeLayout = lazy(() => import("./Home/HomeLayout.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));

const Register = lazy(
  () => import("./pages/Register.jsx")
);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={<HomeLayout />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
