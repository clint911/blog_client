import React from "react"
import "./NewsLetterComponent.css";

export default function NewsLetterComponent() {
  return (
    <div className="NewsLetterComponent">
      <span>Personally Newsletter</span>
      <p>A bi-weekly newsletter of design inspiration, resources and anything related to career development.</p>
      <form>
        <input type="text" name="subscribe_to_newsletter" value="email address" placeholder="Type your email here"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
