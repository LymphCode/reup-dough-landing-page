import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.facebook.com/reupdough"
        className="footer__social-link"
        target="_blank"
      >
        <i className="bx bxl-facebook"></i>
      </a>

      <a
        href="https://www.instagram.com/reupdough"
        className="footer__social-link"
        target="_blank"
      >
        <i className="bx bxl-instagram"></i>
      </a>

      {/* <a
        href="https://twitter.com/"
        className="footer__social-link"
        target="_blank"
      >
        <i className="bx bxl-twitter"></i>
      </a> */}
    </div>
  );
};

export default Social;
