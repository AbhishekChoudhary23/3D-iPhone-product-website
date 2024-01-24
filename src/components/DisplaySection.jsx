import React from "react";

function DisplaySection({ triggerPreview }) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Brillient.</p>
      <span className="description">
        A display that's upto 2x brighter in the sun.
      </span>
      <button className="button" onClick={triggerPreview}>
        Try me!
      </button>
      <button onClick={handleScrollToTop} className="back-button">
        Top
      </button>
    </div>
  );
}

export default DisplaySection;
