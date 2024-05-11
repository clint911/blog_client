import React from "react";
import NavBar from "./components/NavBar";
import NewsLetterComponent from "./components/NewsLetterComponent";
import Footer from "./components/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import DesignTools from "./pages/DesignTools";
import Tutorials from "./pages/Tutorials";
import DailyDigest from "./pages/DailyDigest";
import Home from "./pages/Home";
import SingleArticle from "./pages/SingleArticle";
import AdminPage from "./pages/Admin";
export default function App() {
  {/**This page serves as the Homepage of our application */ }
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/Error" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/DailyDigest" element={<DailyDigest />} />
        <Route path="/DesignTools" element={<DesignTools />} />
        <Route path="/Tutorials" element={<Tutorials />} />
        <Route path="/SingleArticle" element={<SingleArticle />} />
        <Route path="/AdminPage" element={<AdminPage />} />
      </Routes>
      {/*Note the text will change depending on route, will fix that way later*/}
      {/*
      <DynamicHeader header_1_text="Minimal blog template for creative expressions" header_2_text="100% customisable and SEO-friendly blog template for personal and commercial purposes." />

      <TesterComponent />
      <div className="homePageComponent">
        <ArticlesComponent containerHeader="Daily Digest"
        />
        <ArticlesComponent containerHeader="DesignTools" />
        <ArticlesComponent containerHeader="Tutorials" />
      </div>
        */}
      <NewsLetterComponent />
      <Footer />
    </div>
  );
}
