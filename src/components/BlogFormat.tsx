import React, { useState } from "react";
export default function BlogFormat() {
  /*find a way to write a function that takes in the header from the input field and sets it to the conten header, the same for the subheading and actual artile content*/
  /* Note that this will have to be kind of like an editor where you write in the input field, and we have a preview button that enables you to see how an article will look like, this processing is better done within a single component, we have a function that takes in an event and sets it to a textbox value
      */

  function handleHeaderInput() {
    //takes in the content from the  first header textbox and assigns it to a h1 value
  }
  function handleSubHeaderInput() {
    //takes in content from the second textbox and assigns it to a h3 value
  }
  function handleBodyInput() {
    //takes in entire content from textbox and assigns it to article value
    //later will check for video links and images and will process them accordingly
    //much later will include an upload image button that will be stored kinda on a server or cached locally and then be presented to the user, I want this react app to be off the server as much as possible
  }

  return (
    <div className="BlogFormat">
      <h1>Here Your blog Title will go</h1>
      <h3>Put your subheading here</h3>
      <article>
        <p>Paste your entire article content here</p>
      </article>
      <input type="text" className="articleText">Paste article content from your editor to this textbox</input>
    </div>
  )
}
