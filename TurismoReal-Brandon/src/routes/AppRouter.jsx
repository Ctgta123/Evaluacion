import { Route, Routes, Navigate } from "react-router-dom";
import { CatalogoPage } from "../TurismoApp/pages/CatalogoPage";
import { HomePage } from "../TurismoApp/pages/HomePage";
import { Footer } from "../ui/components/Footer";
import { Header } from "../ui/components/Header";
import { DeptoPage } from "../TurismoApp/pages/DeptoPage";
import { Login } from "../TurismoApp/pages/Login";
import { Registro } from "../TurismoApp/pages/Registro";
import { Dashboard } from "../TurismoApp/pages/Dashboard";


export const AppRouter = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="home" element={<HomePage to="/home" />} />
        <Route path="catalogo" element={<CatalogoPage />} />
        <Route path="DeptoPage" element={<DeptoPage />} />
        <Route path="Login" element={<Login/>} />
        <Route path="Registro" element={<Registro/>} />
        <Route path="dashboard" element={<Dashboard/>} />
      </Routes>
      <Footer />
    </>
  );
};
 