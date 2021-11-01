import React from "react";

const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="/">Company</a>
                </li>
                <li>
                  <a href="/">Team</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>Company Name</h3>
              <p>This is Movies App 2021</p>
            </div>
            <div className="col item social">
              <a href="/" rel="noreferrer">
                <i className="icon ion-social-facebook"></i>
              </a>
              <a href="/">
                <i className="icon ion-social-twitter"></i>
              </a>
              <a href="/">
                <i className="icon ion-social-snapchat"></i>
              </a>
              <a href="/">
                <i className="icon ion-social-instagram"></i>
              </a>
            </div>
          </div>
          <p className="copyright">CompanyMovie © 2021</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
