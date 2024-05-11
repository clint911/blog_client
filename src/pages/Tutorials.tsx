import React from "react";
import DynamicHeader from "../components/DynamicHeader";
import ArticlesComponent from "../components/ArticlesComponent";
import "./Tutorials.css";
export default function Tutorials() {
  return (
    <div className="Tutorials">
      <DynamicHeader header_1_text="Tutorials"
        header_2_text="A description of the respective category goes right here. Be as expressive as possible, but in brief." />
      <div className="tutorialsContainer">
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
