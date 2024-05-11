import React from "react";
import "./ArticlesComponent.css";
import firstImage from "../assets/first_image.png";
import workingImage from "../assets/working_image.png";
import SingleArticle from "../pages/SingleArticle";
import { NavLink } from "react-router-dom";
export default function ArticlesComponent({ containerHeader  }) {
  //TODO: Refactor the article headers to be links once you are done with routing
  //TODO: Figure out how to pass children as optional props 
  return (
    <div className="ArticlesComponent">
      <h1>{containerHeader}</h1>
      <div className="singleArticle">
        <div className="headerContainers">
          <span>Aug 13 2021</span>
          <NavLink className="routing-nav" to="/SingleArticle">
            <h3>10 Hilarious Cartoons That Depict Real-Life Problems of Programmers</h3>
          </NavLink>
          <h5>Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.</h5>
        </div>
        <img src="firstImage" alt="The first Image for each article" />
      </div>

      <div className="singleArticle">
        <div className="headerContainers">
          <span>Aug 13 2021</span>
          <NavLink className="routing-nav" to="/SingleArticle">
            <h3>10 Hilarious Cartoons That Depict Real-Life Problems of Programmers</h3>
          </NavLink>
          <h5>Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.</h5>
        </div>
        <img src="workingImage" alt="This Image should work" />
      </div>

      <div className="singleArticle">
        <div className="headerContainers">
          <span>Aug 13 2021</span>
          <NavLink className="routing-nav" to="/SingleArticle">
            <h3>10 Hilarious Cartoons That Depict Real-Life Problems of Programmers</h3>
          </NavLink>
          <h5>Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.</h5>
        </div>
        <img src="firstImage" alt="The first Image for each article" />
      </div>

    </div >
  )
}
