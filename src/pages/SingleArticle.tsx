import React from "react";
import DynamicHeader from "../components/DynamicHeader";
import ArticlesComponent from "../components/ArticlesComponent";
import ExtendedArticle from "../components/ExtendedArticle";
import "./SingleArticle.css";
export default function SingleArticle() {
  return (
    <div className="SingleArticle">
      <DynamicHeader header_1_text="10 hilarious NFT sales that broke the internet"
        header_2_text="AUGust 13, 2021 • Daily digest" />
      <ExtendedArticle />
      <div className="ArticlesComponent">
        <ArticlesComponent />
        <ArticlesComponent />
        <ArticlesComponent />
      </div>
    </div>
  )
}
