import React from "react";
import DynamicHeader from "../components/DynamicHeader";
import ArticlesComponent from "../components/ArticlesComponent";
import "./DesignTools.css";
export default function DesignTools() {
  return (
    <div className="DesignTools">
      <DynamicHeader header_1_text="Design Tools"
        header_2_text="A description of the respective category goes right here. Be as expressive as possible, but in brief." />
      <div className="designToolsContainer">
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
