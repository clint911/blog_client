import React from "react";
import DynamicHeader from "../components/DynamicHeader";
import ArticlesComponent from "../components/ArticlesComponent";
import "./DailyDigest.css";
export default function DailyDigest() {
  return (
    <div className="DailyDigest">
      <DynamicHeader header_1_text="Daily Digest"
        header_2_text="A description of the respective category goes right here. Be as expressive as possible, but in brief." />
      <div className="dailyDigestContainer">
        <ArticlesComponent />
        <ArticlesComponent />
        <ArticlesComponent />
        <ArticlesComponent />
        <ArticlesComponent />
        <ArticlesComponent />
      </div>
    </div>
  )
}
