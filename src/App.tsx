import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./pages/components/Header";
import Loading from "./pages/components/Loading";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  // const { data, error, isLoading } = useGetPokemonByNameQuery("pikachu");
  return (
    <>
      <Loading></Loading>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
